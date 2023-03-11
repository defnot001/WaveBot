import {
  ApplicationCommandOptionType,
  escapeMarkdown,
  time,
  type Collection,
  type EmbedField,
  type GuildMember,
  type Role,
  type Snowflake,
  type User,
} from 'discord.js';
import { Command } from 'djs-handlers';
import { KoalaEmbedBuilder } from '../classes/KoalaEmbedBuilder';
import { config } from '../config/config';
import { isGuildMember } from '../util/assertions';
import { capitalizeFirstLetter } from '../util/helpers';
import { handleInteractionError } from '../util/loggers';

export default new Command({
  name: 'info',
  description: `Get information.`,
  options: [
    {
      name: 'server',
      description: 'Get information about the Discord Server.',
      type: ApplicationCommandOptionType.Subcommand,
    },
    {
      name: 'user',
      description: 'Get information about a user.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'target',
          description: 'Select a user.',
          type: ApplicationCommandOptionType.User,
          required: true,
        },
      ],
    },
    {
      name: 'members',
      description: 'Lists the Members of the Minecraft Servers.',
      type: ApplicationCommandOptionType.Subcommand,
    },
    {
      name: 'admins',
      description: 'Lists the Admins of the Minecraft Servers.',
      type: ApplicationCommandOptionType.Subcommand,
    },
    {
      name: 'avatar',
      description: `Returns a user's avatar image.`,
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'target',
          description: 'Select a user.',
          type: ApplicationCommandOptionType.User,
          required: true,
        },
      ],
    },
  ],
  execute: async ({ interaction, args }) => {
    await interaction.deferReply();
    const subcommand: string = args.getSubcommand();

    // this check is most likely not necessary, but it helps to make sure the command doesn't break and satisfies TS.
    if (!interaction.guild) {
      return interaction.reply('This command can only be used in a guild.');
    }

    const guildIconURL = interaction.guild.iconURL();

    if (!guildIconURL) {
      return interaction.reply(
        `Cannot find the server icon of ${interaction.guild}!`,
      );
    }

    try {
      if (subcommand === 'server') {
        // generates an invite link, unless there there is already one that satisfies the specifications.
        const inviteLink = await interaction.guild.invites.create(
          config.channels.invite,
          {
            maxAge: 0,
            maxUses: 0,
            unique: false,
          },
        );

        const serverEmbed = new KoalaEmbedBuilder(interaction.user, {
          title: `Server Info ${interaction.guild.name}`,
          thumbnail: {
            url: guildIconURL,
          },
          fields: [
            {
              name: 'Membercount',
              value: `${interaction.guild.memberCount}`,
            },
            {
              name: 'Guild created',
              value: `${time(interaction.guild.createdAt, 'D')}\n(${time(
                interaction.guild.createdAt,
                'R',
              )})`,
            },
            {
              name: 'Permanent Invite Link',
              value: inviteLink.url,
            },
          ],
        });

        return interaction.editReply({ embeds: [serverEmbed] });
      } else if (subcommand === 'user') {
        const targetMember = args.getMember('target');
        const targetUser = args.getUser('target');

        if (!targetUser) return interaction.reply(`Cannot find that user!`);

        const userFields: EmbedField[] = [
          { name: 'Username', value: targetUser.tag, inline: false },
          { name: 'User ID', value: targetUser.id, inline: false },
          {
            name: 'Joined Discord on',
            value: `${time(targetUser.createdAt, 'D')}\n(${time(
              targetUser.createdAt,
              'R',
            )})`,
            inline: true,
          },
        ];

        const userEmbed = new KoalaEmbedBuilder(interaction.user, {
          title: 'User Info',
          thumbnail: {
            url: targetUser.displayAvatarURL(),
          },
          fields: userFields,
        });

        if (isGuildMember(targetMember)) {
          const memberFields: EmbedField[] = [];

          if (targetMember.joinedAt) {
            const joinedField: EmbedField = {
              name: 'Joined this server on',
              value: `${time(targetMember.joinedAt, 'D')}\n(${time(
                targetMember.joinedAt,
                'R',
              )})`,
              inline: true,
            };

            memberFields.push(joinedField);
          }

          const roles: Collection<Snowflake, Role> = targetMember.roles.cache
            .filter((role) => role.name !== '@everyone')
            .sort((roleA, roleB) => roleB.position - roleA.position);

          const roleField: EmbedField = {
            name: 'Roles',
            value: roles.toJSON().join(', ') || 'None',
            inline: false,
          };

          memberFields.push(roleField);

          userEmbed.setFields([...userFields, ...memberFields]);
        }

        return interaction.editReply({ embeds: [userEmbed] });
      } else if (subcommand === 'members' || subcommand === 'admins') {
        const allMembers: Collection<Snowflake, GuildMember> =
          await interaction.guild.members.fetch();

        const targetMembers: GuildMember[] = [];

        for (const memberTuple of allMembers) {
          const member: GuildMember = memberTuple[1];

          if (member.roles.cache.has(config.roles[subcommand])) {
            targetMembers.push(member);
          }
        }

        const sortedMemberNamesString: string = escapeMarkdown(
          targetMembers
            .map((m) => m.user.username)
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
            .join('\n'),
        );

        // using nullish coalescing to protect the function from strings that are less than 2 characters long
        const capitalizedSubcommand =
          capitalizeFirstLetter(subcommand) ?? subcommand;

        const roleEmbed = new KoalaEmbedBuilder(interaction.user, {
          title: `Info ${capitalizedSubcommand}`,
          thumbnail: {
            url: guildIconURL,
          },
          fields: [
            {
              name: `Count ${capitalizedSubcommand}`,
              value: `${targetMembers.length}`,
            },
            {
              name: `List ${capitalizedSubcommand}`,
              value: sortedMemberNamesString,
            },
          ],
        });

        return interaction.editReply({ embeds: [roleEmbed] });
      } else if (subcommand === 'avatar') {
        const target: User | null = args.getUser('target');

        if (!target) return interaction.editReply('Cannot find that user!');

        const avatarURL: string = target.displayAvatarURL({ size: 4096 });

        return interaction.editReply({ files: [avatarURL] });
      } else {
        return interaction.editReply(
          'Cannot process the subcommand you chose!',
        );
      }
    } catch (err) {
      return handleInteractionError({
        interaction,
        err,
        message: `Something went wrong while execute the info ${subcommand} command!`,
      });
    }
  },
});

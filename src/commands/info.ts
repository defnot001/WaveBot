import {
  ApplicationCommandOptionType,
  escapeMarkdown,
  GuildMember,
  time,
  type Collection,
  type EmbedField,
  type Role,
  type Snowflake,
} from 'discord.js';
import { Command } from 'djs-handlers';
import { KoalaEmbedBuilder } from '../classes/KoalaEmbedBuilder';
import { config } from '../config';
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
    const subcommand = args.getSubcommand() as
      | 'server'
      | 'user'
      | 'members'
      | 'admins'
      | 'avatar';
    const { guild } = interaction;

    if (!guild) {
      return interaction.reply('This command can only be used in a guild.');
    }

    const guildIconURL: string | null = guild.iconURL();

    if (!guildIconURL) {
      return interaction.reply(
        `Cannot find the server icon of ${interaction.guild}!`,
      );
    }

    try {
      if (subcommand === 'server') {
        // generates an invite link, unless there there is already one that satisfies the specifications.
        const inviteLink = await guild.invites.create(config.channels.invite, {
          maxAge: 0,
          maxUses: 0,
          unique: false,
        });

        const serverEmbed = new KoalaEmbedBuilder(interaction.user, {
          title: `Server Info ${guild.name}`,
          thumbnail: {
            url: guildIconURL,
          },
          fields: [
            {
              name: 'Membercount',
              value: `${guild.memberCount}`,
            },
            {
              name: 'Guild created',
              value: `${time(guild.createdAt, 'D')}\n(${time(
                guild.createdAt,
                'R',
              )})`,
            },
            {
              name: 'Permanent Invite Link',
              value: inviteLink.url,
            },
          ],
        });

        interaction.editReply({ embeds: [serverEmbed] });

        return;
      }

      if (subcommand === 'user') {
        const targetMember = args.getMember('target');
        const targetUser = args.getUser('target');

        if (!targetUser) {
          interaction.reply(`Cannot find that user!`);
          return;
        }

        const userFields: EmbedField[] = [
          { name: 'Username', value: targetUser.username, inline: false },
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

        if (targetMember instanceof GuildMember) {
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

        interaction.editReply({ embeds: [userEmbed] });

        return;
      }

      if (subcommand === 'members' || subcommand === 'admins') {
        const allMembers: Collection<Snowflake, GuildMember> =
          await guild.members.fetch();

        const targetMembers: GuildMember[] = [];

        for (const memberTuple of allMembers) {
          const member = memberTuple[1];

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

        interaction.editReply({ embeds: [roleEmbed] });

        return;
      }

      if (subcommand === 'avatar') {
        const target = args.getUser('target');

        if (!target) {
          interaction.editReply('Cannot find that user!');
          return;
        }

        const avatarURL: string = target.displayAvatarURL({ size: 4096 });

        interaction.editReply({ files: [avatarURL] });
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

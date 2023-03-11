import {
  ApplicationCommandOptionType,
  bold,
  inlineCode,
  time,
} from 'discord.js';
import { Command } from 'djs-handlers';
import { KoalaEmbedBuilder } from '../classes/KoalaEmbedBuilder';
import { config } from '../config/config';
import type { TServerChoice } from '../types/minecraft';
import { isTextChannel } from '../util/assertions';
import { confirmCancelRow, getButtonCollector } from '../util/components';
import { formatBytes, getServerChoices } from '../util/helpers';
import { handleInteractionError } from '../util/loggers';
import { getBackups, ptero } from '../util/pterodactyl';

export default new Command({
  name: 'backup',
  description: 'Control backups on a minecraft server.',
  options: [
    {
      name: 'list',
      description: 'Lists all backups from a minecraft server.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'server',
          description: 'The server you want to get the backups from.',
          type: ApplicationCommandOptionType.String,
          required: true,
          choices: [...getServerChoices()],
        },
      ],
    },
    {
      name: 'create',
      description: 'Creates a backup on a minecraft server.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'server',
          description: 'The server you want to create a backup on.',
          type: ApplicationCommandOptionType.String,
          required: true,
          choices: [...getServerChoices()],
        },
        {
          name: 'name',
          description: 'The name of the backup.',
          type: ApplicationCommandOptionType.String,
          required: false,
        },
        {
          name: 'locked',
          description: 'Whether or not the backup is locked.',
          type: ApplicationCommandOptionType.Boolean,
          required: false,
        },
      ],
    },
    {
      name: 'delete',
      description: 'Delete a backup.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'server',
          description: 'The server you want to delete the backups from.',
          type: ApplicationCommandOptionType.String,
          required: true,
          choices: [...getServerChoices()],
        },
        {
          name: 'backup',
          description: 'The name of the backup you want to delete.',
          type: ApplicationCommandOptionType.String,
          required: true,
          autocomplete: true,
        },
      ],
    },
    {
      name: 'details',
      description: 'Get details about a backup.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'server',
          description: 'The server you want to get the backups from.',
          type: ApplicationCommandOptionType.String,
          required: true,
          choices: [...getServerChoices()],
        },
        {
          name: 'backup',
          description: 'The name of the backup you want details from.',
          type: ApplicationCommandOptionType.String,
          required: true,
          autocomplete: true,
        },
      ],
    },
  ],
  execute: async ({ interaction, args }) => {
    await interaction.deferReply();

    const subcommand = args.getSubcommand();
    const serverChoice = args.getString('server') as TServerChoice | undefined;
    const guild = interaction.guild;

    if (!guild) {
      return interaction.editReply(
        'This command can only be used in a server.',
      );
    }

    if (!serverChoice) {
      return interaction.editReply('Please choose a server.');
    }

    if (!interaction.channel) {
      return interaction.editReply(
        'This command can only be used in a text channel.',
      );
    }

    if (!isTextChannel(interaction.channel)) {
      return interaction.editReply(
        'This command can only be used in a text channel.',
      );
    }

    const { serverId } = config.mcConfig[serverChoice];
    try {
      const { backups, meta } = await getBackups(serverChoice);

      if (subcommand === 'create') {
        const backupLimit = config.mcConfig[serverChoice].backupLimit;

        if (backupLimit === 0) {
          return interaction.editReply(
            `You can not create a backup for ${guild.name} ${bold(
              serverChoice,
            )} because this server does not allow backups.`,
          );
        }

        const backupName =
          args.getString('name') ??
          `Backup created by KoalaBot at ${new Date().toUTCString()}`;

        if (meta.pagination.total < backupLimit) {
          const backup = await ptero.backups.create(serverId, {
            backupName,
            locked: args.getBoolean('locked') ?? false,
          });

          return interaction.editReply(
            `Successfully created backup (${inlineCode(backup.name)}) for ${
              interaction.guild.name
            } ${bold(serverChoice)}!`,
          );
        } else {
          await interaction.editReply({
            content: `This command will delete the oldest backup for ${
              interaction.guild.name
            } ${bold(
              serverChoice,
            )} because the backup limit is reached for this server. Are you sure you want to continue? This can not be undone!`,
            components: [confirmCancelRow],
          });

          const collector = getButtonCollector(
            interaction,
            interaction.channel,
          );

          if (!collector) {
            return interaction.editReply(
              'Failed to create message component collector!',
            );
          }

          const oldestBackup = [...backups.values()].pop();

          if (!oldestBackup) {
            return interaction.editReply(
              'Something went wrong while trying to delete the oldest backup.',
            );
          }

          collector.on('collect', async (i) => {
            if (i.customId === 'confirm') {
              await ptero.backups.delete(serverId, oldestBackup.uuid);
              const backup = await ptero.backups.create(serverId, {
                backupName,
                locked: args.getBoolean('locked') ?? false,
              });

              interaction.editReply({
                content: `Successfully deleted oldest backup and created backup (${inlineCode(
                  backup.name,
                )}) for ${guild.name} ${bold(serverChoice)}!`,
                components: [],
              });
            } else {
              interaction.editReply({
                content: `Cancelled deleting the oldest backup for ${
                  guild.name
                } ${bold(serverChoice)}!`,
                components: [],
              });
            }
          });
        }
        return;
      } else if (subcommand === 'delete') {
        const backupName = args.getString('backup');

        if (!backupName) {
          return interaction.editReply('Please provide a backup name!');
        }

        const backupDetails = backups.get(backupName);

        if (!backupDetails) {
          return interaction.editReply(
            `Could not find a backup with the name ${inlineCode(
              backupName,
            )} for ${guild.name} ${bold(serverChoice)}!`,
          );
        }

        if (!backupDetails.completed_at) {
          return interaction.editReply(
            `Backup ${inlineCode(backupName)} for ${guild.name} ${bold(
              serverChoice,
            )} is not completed yet!`,
          );
        }

        if (backupDetails.is_locked) {
          return interaction.editReply(
            `Backup ${inlineCode(backupName)} for ${guild.name} ${bold(
              serverChoice,
            )} is locked!`,
          );
        }

        await interaction.editReply({
          content: `This command will delete a backup for ${
            interaction.guild.name
          } ${bold(
            serverChoice,
          )} Are you sure you want to continue? This can not be undone!`,
          components: [confirmCancelRow],
        });

        const collector = getButtonCollector(interaction, interaction.channel);

        if (!collector) {
          return interaction.editReply(
            'Failed to created a message collector!',
          );
        }

        collector.on('collect', async (i) => {
          if (i.customId === 'confirm') {
            await ptero.backups.delete(serverId, backupDetails.uuid);

            interaction.editReply({
              content: `Successfully deleted backup: ${inlineCode(
                backupDetails.name,
              )} from ${guild.name} ${bold(serverChoice)}!`,
              components: [],
            });
          } else {
            interaction.editReply({
              content: `Cancelled deleting the backup for ${guild.name} ${bold(
                serverChoice,
              )}!`,
              components: [],
            });
          }
        });
        return;
      } else if (subcommand === 'details') {
        const backupName = args.getString('backup');

        if (!backupName) {
          return interaction.editReply('Please provide a backup name!');
        }

        const backupDetails = backups.get(backupName);

        if (!backupDetails) {
          return interaction.editReply(
            `Could not find a backup with the name ${inlineCode(
              backupName,
            )} for ${guild.name} ${bold(serverChoice)}!`,
          );
        }

        const completedTime = backupDetails.completed_at
          ? time(backupDetails.completed_at, 'f')
          : 'Backup not completed.';

        const backupEmbed = new KoalaEmbedBuilder(interaction.user, {
          title: `Backup Details for ${guild.name} ${serverChoice}`,
          fields: [
            { name: 'Name', value: backupDetails.name },
            {
              name: 'UUID',
              value: `${inlineCode(backupDetails.uuid)}`,
            },
            {
              name: 'Size',
              value: formatBytes(backupDetails.bytes),
              inline: true,
            },
            {
              name: 'Successful',
              value: backupDetails.is_successful ? 'true' : 'false',
              inline: true,
            },
            {
              name: 'Locked',
              value: backupDetails.is_locked ? 'true' : 'false',
              inline: true,
            },
            {
              name: 'Created at',
              value: time(backupDetails.created_at, 'f'),
              inline: true,
            },
            {
              name: 'Completed at',
              value: completedTime,
              inline: true,
            },
          ],
        });

        // we have to check if the guild has an icon because there is no method that provides a default icon.
        if (guild.iconURL()) {
          backupEmbed.setThumbnail(guild.iconURL());
        }

        return interaction.editReply({ embeds: [backupEmbed] });
      } else if (subcommand === 'list') {
        const transformedList = Array.from(
          backups,
          ([name, backup]) => `${time(backup.created_at, 'f')}\n${bold(name)}`,
        ).slice(-20);

        const backupListEmbed = new KoalaEmbedBuilder(interaction.user, {
          title: `Backup List for ${guild.name} ${serverChoice}`,
          description: transformedList.join('\n\n'),
        });

        return interaction.editReply({ embeds: [backupListEmbed] });
      } else {
        return interaction.editReply(
          `Invalid subcommand ${inlineCode(subcommand)}!`,
        );
      }
    } catch (err) {
      return handleInteractionError({
        interaction,
        err,
        message: `Something went wrong while trying to execute the backup command for ${guild.name} ${serverChoice}!`,
      });
    }
  },
});

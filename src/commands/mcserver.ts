import { ApplicationCommandOptionType, bold } from 'discord.js';
import { Command } from 'djs-handlers';
import { KoalaEmbedBuilder } from '../classes/KoalaEmbedBuilder';
import { config } from '../config/config';
import type { MCServerSubcommand, TServerChoice } from '../types/minecraft';
import {
  confirmCancelRow,
  getButtonCollector,
  mcServerChoice,
} from '../util/components';
import getErrorMessage from '../util/errors';
import formatTime, {
  capitalizeFirstLetter,
  formatBytes,
  getAction,
  performAction,
} from '../util/helpers';
import { createInteractionErrorLog } from '../util/loggers';
import { ptero } from '../util/pterodactyl';

export default new Command({
  name: 'mcserver',
  description: 'Control a minecraft server.',
  options: [
    {
      name: 'start',
      description: 'Starts a minecraft server.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [mcServerChoice],
    },
    {
      name: 'stop',
      description: 'Stops a minecraft server.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [mcServerChoice],
    },
    {
      name: 'restart',
      description: 'Restarts a minecraft server.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [mcServerChoice],
    },
    {
      name: 'kill',
      description: 'Kills a minecraft server.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [mcServerChoice],
    },
    {
      name: 'stats',
      description: 'Returns the usage statistics of a server.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [mcServerChoice],
    },
  ],
  execute: async ({ interaction, args }) => {
    await interaction.deferReply();

    const choice = args.getString('server');
    const subcommand = args.getSubcommand() as MCServerSubcommand;
    const guild = interaction.guild;

    if (!choice) {
      return interaction.editReply('Please provide a server.');
    }

    if (!guild) {
      return interaction.editReply(
        'This command can only be used in a server.',
      );
    }

    if (!interaction.channel) {
      return interaction.editReply(
        'This command can only be used in a text channel!',
      );
    }

    const serverChoice = choice as TServerChoice;
    const { serverId } = config.mcConfig[serverChoice];

    try {
      const serverStats = await ptero.servers.getResourceUsage(serverId);

      if (subcommand === 'stats') {
        if (serverStats.current_state !== 'running') {
          return interaction.editReply(
            `${guild.name} is currently ${serverStats.current_state}!`,
          );
        }

        const statEmbed = new KoalaEmbedBuilder(interaction.user, {
          title: `Server Stats ${guild.name} ${serverChoice}`,
          color: config.embedColors.green,
          fields: [
            {
              name: 'State',
              value: capitalizeFirstLetter(serverStats.current_state),
            },
            {
              name: 'Uptime',
              value: formatTime(serverStats.resources.uptime),
            },
            {
              name: 'CPU',
              value: `${serverStats.resources.cpu_absolute.toFixed(2)}%`,
              inline: true,
            },
            {
              name: 'Memory',
              value: formatBytes(serverStats.resources.memory_bytes),
              inline: true,
            },
            {
              name: 'Disk',
              value: formatBytes(serverStats.resources.disk_bytes),
              inline: true,
            },
          ],
        });

        if (guild.iconURL()) {
          statEmbed.setThumbnail(guild.iconURL());
        }

        return interaction.editReply({ embeds: [statEmbed] });
      } else if (subcommand === 'start') {
        if (serverStats.current_state !== 'offline') {
          return interaction.editReply(
            `Cannot start ${guild.name} because it is currently ${serverStats.current_state}!`,
          );
        }

        try {
          await ptero.servers.start(serverId);
          return interaction.editReply(
            `Successfully started ${guild.name} ${bold(serverChoice)}!`,
          );
        } catch (err) {
          getErrorMessage(err);
          return createInteractionErrorLog({
            interaction: interaction,
            errorMessage: `Failed to start ${serverChoice}!`,
          });
        }
      } else {
        if (subcommand === 'stop' && serverStats.current_state !== 'running') {
          return interaction.editReply(
            `Cannot stop ${guild.name} ${bold(
              serverChoice,
            )} because it is currently ${serverStats.current_state}!`,
          );
        }

        if (
          subcommand === 'restart' &&
          serverStats.current_state !== 'running'
        ) {
          return interaction.editReply(
            `Cannot restart ${guild.name} ${bold(
              serverChoice,
            )} because it is currently ${serverStats.current_state}!`,
          );
        }

        if (subcommand === 'kill' && serverStats.current_state !== 'stopping') {
          return interaction.editReply(
            `Cannot kill ${guild.name} ${bold(
              serverChoice,
            )} because it is currently ${
              serverStats.current_state
            }! Servers can only be killed while they are stopping.`,
          );
        }

        interaction.editReply({
          content: `Are you sure you want to ${subcommand} ${guild.name} ${bold(
            serverChoice,
          )}?`,
          components: [confirmCancelRow],
        });

        const collector = getButtonCollector(interaction, interaction.channel);

        collector.on('collect', async (i) => {
          if (i.customId === 'confirm') {
            const result = await performAction(subcommand, serverId);

            if (result) {
              await i.update({
                content: `Successfully ${getAction(subcommand)} ${
                  guild.name
                } ${bold(serverChoice)}!`,
                components: [],
              });
            } else {
              await i.update({
                content: `Cancelled to ${subcommand} ${guild.name} ${bold(
                  serverChoice,
                )}!`,
                components: [],
              });
            }
          }
        });
      }
    } catch (err) {
      getErrorMessage(err);
      return createInteractionErrorLog({
        interaction: interaction,
        errorMessage: `Failed to get the stats for ${serverChoice}!`,
      });
    }
  },
});

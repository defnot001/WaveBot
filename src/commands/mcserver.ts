import { ApplicationCommandOptionType, bold } from 'discord.js';
import { Command } from 'djs-handlers';
import { KoalaEmbedBuilder } from '../classes/KoalaEmbedBuilder';
import { config, ServerChoice } from '../config';
import {
  confirmCancelRow,
  getButtonCollector,
  mcServerChoice,
} from '../util/components';
import { capitalizeFirstLetter, formatBytes } from '../util/helpers';
import { handleInteractionError } from '../util/loggers';
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

    const serverChoice = args.getString('server', true) as ServerChoice;
    const { serverId } = config.mcConfig[serverChoice];

    const subcommand = args.getSubcommand() as
      | 'start'
      | 'stop'
      | 'restart'
      | 'kill'
      | 'stats';
    const { guild } = interaction;

    if (!guild) {
      interaction.editReply('This command can only be used in a server.');
      return;
    }

    try {
      const serverStats = await ptero.servers.getResourceUsage(serverId);
      const serverState = serverStats.current_state;

      if (subcommand === 'stats') {
        if (serverState !== 'running') {
          interaction.editReply(
            `${guild.name} is currently ${serverStats.current_state}!`,
          );

          return;
        }

        const statEmbed = new KoalaEmbedBuilder(interaction.user, {
          title: `Server Stats ${guild.name} ${serverChoice}`,
          color: config.embedColors.green,
          fields: [
            {
              name: 'State',
              value: capitalizeFirstLetter(serverState),
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

        interaction.editReply({ embeds: [statEmbed] });

        return;
      }

      if (!isValidState(subcommand, serverState)) {
        interaction.editReply(
          `Cannot ${subcommand} ${guild.name} ${bold(
            serverChoice,
          )} because it is currently ${serverState}!`,
        );

        return;
      }

      if (subcommand === 'start') {
        await ptero.servers.start(serverId);
        interaction.editReply(
          `Successfully started ${guild.name} ${bold(serverChoice)}!`,
        );

        return;
      }

      interaction.editReply({
        content: `Are you sure you want to ${subcommand} ${guild.name} ${bold(
          serverChoice,
        )}?`,
        components: [confirmCancelRow],
      });

      const collector = getButtonCollector(interaction);

      if (!collector) {
        interaction.editReply('Failed to create message component collector!');
        return;
      }

      collector.on('collect', async (i) => {
        if (i.customId === 'confirm') {
          const success = await performAction(subcommand, serverId);

          if (success) {
            await i.update({
              content: `Successfully ${translateAction(subcommand)} ${
                guild.name
              } ${bold(serverChoice)}!`,
              components: [],
            });

            return;
          } else {
            await i.update({
              content: `Failed to ${subcommand} ${guild.name} ${bold(
                serverChoice,
              )}!`,
              components: [],
            });

            return;
          }
        }

        if (i.customId === 'cancel') {
          await i.update({
            content: `Cancelled ${subcommand} ${guild.name} ${bold(
              serverChoice,
            )}!`,
            components: [],
          });

          return;
        }
      });
    } catch (err) {
      return handleInteractionError({
        interaction,
        err,
        message: `Failed to ${subcommand} ${serverChoice}!`,
      });
    }
  },
});

function isValidState(
  action: 'start' | 'stop' | 'restart' | 'kill',
  serverState: 'starting' | 'running' | 'stopping' | 'offline',
) {
  const validCalls: Record<typeof action, typeof serverState> = {
    start: 'offline',
    stop: 'running',
    restart: 'running',
    kill: 'stopping',
  };

  return serverState === validCalls[action];
}

async function performAction(
  action: 'stop' | 'restart' | 'kill',
  serverId: string,
) {
  try {
    await ptero.servers[action](serverId);
    return true;
  } catch {
    return false;
  }
}

function translateAction(action: 'stop' | 'restart' | 'kill') {
  return action === 'stop' ? 'stopped' : `${action}ed`;
}

function formatTime(ms: number) {
  const roundTowardsZero = ms > 0 ? Math.floor : Math.ceil;
  const days = roundTowardsZero(ms / 86400000);
  const hours = roundTowardsZero(ms / 3600000) % 24;
  const minutes = roundTowardsZero(ms / 60000) % 60;
  const seconds = roundTowardsZero(ms / 1000) % 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

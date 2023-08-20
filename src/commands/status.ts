import { ApplicationCommandOptionType } from 'discord.js';
import { Command } from 'djs-handlers';
import { queryFull } from 'minecraft-server-util';
import { z } from 'zod';
import { KoalaEmbedBuilder } from '../classes/KoalaEmbedBuilder';
import { config, ServerChoice } from '../config';
import { getServerChoices } from '../util/helpers';
import { handleInteractionError } from '../util/loggers';
import { runRconCommand } from '../util/rcon';

export default new Command({
  name: 'status',
  description: 'Get the status of a Minecraft Server.',
  options: [
    {
      name: 'server',
      description: 'Choose a server.',
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: [...getServerChoices()],
    },
  ],
  execute: async ({ interaction, args }) => {
    await interaction.deferReply();

    const choice = args.getString('server', true) as ServerChoice;

    if (!choice) {
      return interaction.editReply('Please specify a server!');
    }

    if (!interaction.guild) {
      return interaction.reply('This command can only be used in a guild.');
    }

    const { host, port, rconPort, rconPasswd } = config.mcConfig[choice];

    try {
      const status = await queryFull(host, port);
      const performance = await queryMspt(host, rconPort, rconPasswd);
      const mobcap = await queryMobcap(host, rconPort, rconPasswd);

      if (!status || !performance || !mobcap) {
        return interaction.editReply(
          'Something went wrong trying to get information about that server!',
        );
      }

      const playerlist =
        status.players.list.join('\n') || 'There is currently nobody online.';

      const statusEmbed = new KoalaEmbedBuilder(interaction.user, {
        title: `${interaction.guild.name} ${choice.toUpperCase()}`,
        color: config.embedColors.green,
        fields: [
          { name: 'Status', value: 'Online' },
          { name: 'Version', value: `${status.version}` },
          {
            name: 'Performance',
            value: `**${performance.mspt}** MSPT | **${performance.tps}** TPS`,
          },
          {
            name: 'Hostile Mobcaps',
            value: `Overworld: ${mobcap['overworld']}\nThe Nether: ${mobcap['the_nether']}\nThe End: ${mobcap['the_end']}`,
          },
          {
            name: 'Playercount',
            value: `online: **${status.players.online}** | max: **${status.players.max}**`,
          },
          {
            name: 'Playerlist',
            value: playerlist,
          },
        ],
      });

      const { mspt } = performance;

      if (mspt >= 30 && mspt < 40) {
        statusEmbed.setColor(config.embedColors.yellow);
      } else if (mspt >= 40 && mspt < 50) {
        statusEmbed.setColor(config.embedColors.orange);
      } else if (mspt >= 50) {
        statusEmbed.setColor(config.embedColors.red);
      }

      const guildIcon = interaction.guild.iconURL();

      if (guildIcon) {
        statusEmbed.setThumbnail(guildIcon);
      }

      return interaction.editReply({ embeds: [statusEmbed] });
    } catch (err) {
      return handleInteractionError({
        interaction,
        err,
        message: `There was an error trying to get the status of ${interaction.guild.name} ${choice}`,
      });
    }
  },
});

async function queryMobcap(
  host: string,
  rconPort: number,
  rconPassword: string,
) {
  const mobcapSchema = z.object({
    overworld: z.string(),
    the_nether: z.string(),
    the_end: z.string(),
  });

  type Mobcap = z.infer<typeof mobcapSchema>;

  const dimensions = ['overworld', 'the_nether', 'the_end'];

  const mobcap: Record<string, string> = {};

  for (const dim of dimensions) {
    const query = `execute in minecraft:${dim} run script run get_mob_counts('monster')`;
    const res = await runRconCommand(host, rconPort, rconPassword, query);

    const data = res
      .replace(/^.{0,3}| \(.*\)|[[\]]/g, '')
      .replace(/, /g, ' | ');

    mobcap[dim as keyof Mobcap] = data;
  }

  return mobcapSchema.parse(mobcap);
}

async function queryMspt(host: string, rconPort: number, rconPassword: string) {
  const command = `script run reduce(system_info('server_last_tick_times'), _a+_, 0)/100`;
  const data = await runRconCommand(host, rconPort, rconPassword, command);

  const splitNumbers = data.split(' ')[2];

  if (!splitNumbers) {
    throw new Error('Failed to get parse the data from the server.');
  }

  const mspt = Math.round(parseFloat(splitNumbers) * 100) / 100;

  let tps: number;

  if (mspt <= 50) {
    tps = 20;
  } else {
    tps = 1000 / mspt;
  }

  return { mspt, tps };
}

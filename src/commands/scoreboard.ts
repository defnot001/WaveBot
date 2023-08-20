import { registerFont, createCanvas } from 'canvas';
import { ApplicationCommandOptionType, inlineCode } from 'discord.js';
import { Command } from 'djs-handlers';
import path from 'path';
import allScboreboards from '../assets/scoreboards_1.19.2';
import { config, projectPaths } from '../config';
import { handleInteractionError } from '../util/loggers';
import { runRconCommand } from '../util/rcon';

const scoreboardMap = allScboreboards;
export type Scoreboard = (typeof allScboreboards)[number]['stat'];

const choices = [
  { name: 'mined', value: 'm' },
  { name: 'used', value: 'u' },
  { name: 'crafted', value: 'c' },
  { name: 'broken (tools)', value: 'b' },
  { name: 'picked up', value: 'p' },
  { name: 'dropped', value: 'd' },
  { name: 'killed', value: 'k' },
  { name: 'killed by', value: 'kb' },
  { name: 'custom', value: 'z' },
  { name: 'extra', value: 'extra' },
] as const;

export type ScoreboardChoice = (typeof choices)[number]['value'];

export default new Command({
  name: 'scoreboard',
  description: 'Shows the scoreboard for a given objective.',
  options: [
    {
      name: 'leaderboard',
      description: 'Gets a leaderboard for a given objective.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'action',
          description: 'The action to show the scoreboard for.',
          type: ApplicationCommandOptionType.String,
          required: true,
          choices: [...choices],
        },
        {
          name: 'item',
          description: 'The item to show the scoreboard for.',
          type: ApplicationCommandOptionType.String,
          required: true,
          autocomplete: true,
        },
      ],
    },
    {
      name: 'players',
      description: 'Gets the scoreboard of a specific player.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'playername',
          description: 'The player you want the scores for.',
          type: ApplicationCommandOptionType.String,
          required: true,
          autocomplete: true,
        },
        {
          name: 'action',
          description: 'The action to show the scoreboard for.',
          type: ApplicationCommandOptionType.String,
          required: true,
          choices: [...choices],
        },
        {
          name: 'item',
          description: 'The item to show the scoreboard for.',
          type: ApplicationCommandOptionType.String,
          required: true,
          autocomplete: true,
        },
      ],
    },
  ],
  execute: async ({ interaction, args }) => {
    await interaction.deferReply();

    const subcommand = args.getSubcommand() as 'leaderboard' | 'players';
    const action = args.getString('action', true) as ScoreboardChoice;
    const item = args.getString('item', true);

    const scoreboardChoice = action !== 'extra' ? `${action}-${item}` : item;
    const scoreboardName = scoreboardMap.find(
      (x) => x.stat === scoreboardChoice,
    )?.translation;

    if (!scoreboardName) {
      return interaction.editReply('This scoreboard does not exist!');
    }

    try {
      if (subcommand === 'leaderboard') {
        let buffer: Buffer;

        if (scoreboardChoice === 'z-play_time') {
          const leaderboard = await getPlaytimeLeaderboard();
          buffer = scoreboardToImage('SMP Play Time (hours)', leaderboard);
        } else {
          const leaderboard = await queryScoreboard(
            scoreboardChoice as Scoreboard,
          );
          buffer = scoreboardToImage(scoreboardName, leaderboard);
        }

        interaction.editReply({ files: [{ attachment: buffer }] });

        return;
      }

      if (subcommand === 'players') {
        const ingameName = args.getString('playername', true);

        const score = await getPlayerScore(
          ingameName,
          scoreboardChoice as Scoreboard,
        );

        if (score === undefined) {
          interaction.editReply(
            `Cannot find score ${scoreboardName} for ${ingameName}!`,
          );
          return;
        }

        const val =
          scoreboardChoice !== 'z-play_time'
            ? score
            : Math.round(score / 20 / 3600);
        const displayAction =
          scoreboardChoice === 'z-play_time'
            ? 'SMP Play Time (hours)'
            : scoreboardName;

        return interaction.editReply(
          `Player _${ingameName}_ has ${inlineCode(
            val.toString(),
          )} for scoreboard: **${displayAction}**.`,
        );
      }
    } catch (err) {
      return handleInteractionError({
        interaction,
        err,
        message: `There was an error trying to query scoreboard`,
      });
    }
  },
});

const eventScoreboards = [
  'event_netherite_pick',
  'event_diamond_pick',
  'event_netherite_shovel',
  'event_diamond_shovel',
  'event_netherite_axe',
  'event_diamond_axe',
  'event_netherite_hoe',
  'event_diamond_hoe',
] as const;

type EventScoreboard = (typeof eventScoreboards)[number];

type QueryScoreboardResponse = {
  list: {
    ign: string;
    score: number;
  }[];
  total: number;
};

async function queryScoreboard(
  scoreboardName: Scoreboard | EventScoreboard,
): Promise<QueryScoreboardResponse> {
  const { host, rconPort, rconPasswd } = config.mcConfig.smp;
  const query = `script run scores={};for(system_info('server_whitelist'), scores:_=scoreboard('${scoreboardName}', _));encode_json(scores)`;
  const data = await runRconCommand(host, rconPort, rconPasswd, query);

  const response: Record<string, number | null> = JSON.parse(
    data.replace(/\(.+\)$/, '').replace(/^ =/, ''),
  );

  const list = Object.entries(response)
    .filter(([, score]) => score !== null)
    .map(([ign, score]) => ({
      ign,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      score: score!,
    }))
    .sort((a, b) => b.score - a.score);

  const total = list.reduce((acc, cur) => acc + cur.score, 0);

  return {
    list,
    total,
  };
}

// async function getEventMap() {
//   const combinedMap: Map<string, number> = new Map();

//   for (const sb of eventScoreboards) {
//     const scoreMap = await queryScoreboard(sb);

//     for (const [name, score] of scoreMap) {
//       combinedMap.set(name, (combinedMap.get(name) ?? 0) + score);
//     }
//   }

//   return combinedMap;
// }

async function getPlaytimeLeaderboard(): Promise<QueryScoreboardResponse> {
  const result = await queryScoreboard('z-play_time');
  result.total = Math.round(result.total / 20 / 3600);

  for (const [i, { score }] of result.list.entries()) {
    const entry = result.list[i];
    if (!entry) continue;

    entry.score = Math.round(score / 20 / 3600);
  }

  return result;
}

async function getPlayerScore(ign: string, scoreboard: Scoreboard) {
  const { host, rconPort, rconPasswd } = config.mcConfig['smp'];

  const res = await runRconCommand(
    host,
    rconPort,
    rconPasswd,
    `scoreboard players get ${ign} ${scoreboard}`,
  );

  if (res === `Can't get value of ${scoreboard} for ${ign}; none is set`) {
    return 0;
  }

  if (res.startsWith(`${ign} has`)) {
    try {
      return parseInt(res.split(' ')[2] as string, 10);
    } catch {
      return;
    }
  }

  return;
}

registerFont(path.join(projectPaths.sources, 'assets/minecraft.ttf'), {
  family: 'minecraft',
});

function scoreboardToImage(
  scoreboardName: string,
  scoreboardData: QueryScoreboardResponse,
) {
  enum ScoreboardConstants {
    gray = '#BFBFBF',
    red = '#FF5555',
    white = '#FFFFFF',
    width = 250,
    spacing = 20,
  }

  if (scoreboardData.list.length > 15) {
    scoreboardData.list.splice(16, scoreboardData.list.length - 16);
  }

  const canvas = createCanvas(250, 0);
  const ctx = canvas.getContext('2d');

  const height = scoreboardData.list.length * ScoreboardConstants.spacing + 55;
  canvas.height = height;

  ctx.fillStyle = '#2c2f33';
  ctx.fillRect(0, 0, ScoreboardConstants.width, height);

  ctx.font = '20px minecraft';

  const titleSize = ctx.measureText(scoreboardName);

  let scoreboardTitle = scoreboardName;

  if (titleSize.width > ScoreboardConstants.width - 10) {
    let title = scoreboardName;
    let width = titleSize.width;

    while (width > ScoreboardConstants.width - 30) {
      title = title.slice(0, -1);
      width = ctx.measureText(title).width;
    }
    scoreboardTitle = `${title}...`;
  }

  const titlePos = [
    Math.floor(
      (ScoreboardConstants.width - ctx.measureText(scoreboardTitle).width) / 2,
    ),
    20,
  ];
  const playerAndScorePos: [number, number] = [2, 50];

  if (!titlePos[0] || !titlePos[1]) {
    throw new Error('Failed to get title position.');
  }

  // Write title
  ctx.fillStyle = ScoreboardConstants.white;
  ctx.fillText(scoreboardTitle, titlePos[0], titlePos[1], 240);

  let counter = 0;
  scoreboardData.list.forEach((e) => {
    // Write the player name
    ctx.fillStyle = ScoreboardConstants.gray;
    ctx.fillText(
      e.ign,
      playerAndScorePos[0],
      playerAndScorePos[1] + counter * ScoreboardConstants.spacing,
    );

    // Write the score
    ctx.fillStyle = ScoreboardConstants.red;
    ctx.fillText(
      e.score.toString(),
      ScoreboardConstants.width - ctx.measureText(e.score.toString()).width,
      playerAndScorePos[1] + counter * ScoreboardConstants.spacing,
    );

    counter += 1;
  });

  // Write the total score (in red)
  ctx.fillText(
    scoreboardData.total.toString(),
    ScoreboardConstants.width -
      ctx.measureText(scoreboardData.total.toString()).width,
    playerAndScorePos[1] + counter * ScoreboardConstants.spacing,
  );

  // Write 'Total' text
  ctx.fillStyle = ScoreboardConstants.white;
  ctx.fillText(
    'Total',
    playerAndScorePos[0],
    playerAndScorePos[1] + counter * ScoreboardConstants.spacing,
  );

  return canvas.toBuffer('image/png');
}

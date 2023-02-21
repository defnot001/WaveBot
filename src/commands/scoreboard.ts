import { ApplicationCommandOptionType } from 'discord.js';
import { Command } from 'djs-handlers';
import dictionary119 from '../assets/dictionary_1.19';
import { scoreboardToImage } from '../util/canvas';
import getErrorMessage from '../util/errors';
import { createInteractionErrorLog } from '../util/loggers';
import { queryScoreboard } from '../util/rcon';

export const customScoreboards = ['digs', 'deaths', 'bedrock_removed'];

const objectives = [
  ...Object.keys(dictionary119).map((key) => key),
  ...customScoreboards,
];

const choices = [
  { name: 'mined', value: 'm-' },
  { name: 'used', value: 'u-' },
  { name: 'crafted', value: 'c-' },
  { name: 'broken (tools)', value: 'b-' },
  { name: 'picked up', value: 'p-' },
  { name: 'dropped', value: 'd-' },
  { name: 'killed', value: 'k-' },
  { name: 'killed by', value: 'kb-' },
  { name: 'custom', value: 'custom' },
];

export default new Command({
  name: 'scoreboard',
  description: 'Shows the scoreboard for a given objective.',
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
  execute: async ({ interaction, args }) => {
    await interaction.deferReply();

    const action = args.getString('action');
    const item = args.getString('item');

    if (!item || !action) {
      return interaction.editReply('Missing arguments for this command!');
    }

    if (!interaction.guild) {
      return interaction.reply('This command can only be used in a guild.');
    }

    const scoreboardName = action !== 'custom' ? action + item : item;

    if (!objectives.includes(scoreboardName)) {
      return interaction.editReply('This objective does not exist!');
    }

    try {
      const scores = await queryScoreboard(scoreboardName);

      if (!scores) {
        return interaction.editReply(
          'There are no entries on that scoreboard yet.',
        );
      }

      const leaderboard = scores.sort((a, b) => b[1] - a[1]).slice(0, 15);

      const choice = choices.find((x) => x.value === action);

      if (!choice) {
        return interaction.editReply('This action does not exist!');
      }

      const prettyfiedObjective =
        action !== 'custom'
          ? scoreboardName.replace(action, choice.name + ' ')
          : item;

      const buffer = scoreboardToImage(prettyfiedObjective, leaderboard);

      return interaction.editReply({ files: [{ attachment: buffer }] });
    } catch (err) {
      getErrorMessage(err);
      return createInteractionErrorLog({
        interaction: interaction,
        errorMessage: `Failed to get the scoreboard ${scoreboardName} from the server!`,
      });
    }
  },
});

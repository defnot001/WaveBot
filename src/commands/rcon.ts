import {
  ApplicationCommandOptionType,
  codeBlock,
  inlineCode,
} from 'discord.js';
import { Command } from 'djs-handlers';
import { config } from '../config/config';
import type { TServerChoice } from '../types/minecraft';
import getErrorMessage from '../util/errors';
import { getServerChoices } from '../util/helpers';
import { createInteractionErrorLog } from '../util/loggers';
import { runRconCommand } from '../util/rcon';

export default new Command({
  name: 'run',
  description: 'Runs a command on a Minecraft Server.',
  options: [
    {
      name: 'server',
      description: 'Choose a server.',
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: [...getServerChoices()],
    },
    {
      name: 'command',
      description: 'The command you want to run on the server.',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  execute: async ({ interaction, args }) => {
    await interaction.deferReply();

    const choice = args.getString('server');
    const command = args.getString('command');

    if (!choice || !command) {
      return interaction.editReply('Missing arguments for this command!');
    }

    if (!interaction.guild) {
      return interaction.editReply('This command can only be used in a guild.');
    }

    const { host, rconPort, rconPasswd } =
      config.mcConfig[choice as TServerChoice];

    try {
      const response =
        (await runRconCommand(host, rconPort, rconPasswd, command)) ||
        'Command run successfully but there is no response.';

      const maxMessageLength = 2000;

      if (response.length > maxMessageLength) {
        return interaction.editReply(
          'The response from the server to this command exceeds the message character limit. Consider using the panel for this specific command next time.',
        );
      }

      return interaction.editReply(codeBlock(response.toString()));
    } catch (err) {
      getErrorMessage(err);
      return createInteractionErrorLog({
        interaction: interaction,
        errorMessage: `Failed to execute the command: ${inlineCode(
          command,
        )} on ${choice}!`,
      });
    }
  },
});

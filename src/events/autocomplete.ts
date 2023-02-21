import { Event } from 'djs-handlers';
import { client } from '..';
import dictionary119 from '../assets/dictionary_1.19';
import { customScoreboards } from '../commands/scoreboard';
import { config } from '../config/config';
import type { TServerChoice } from '../types/minecraft';
import { getModNames, ptero } from '../util/pterodactyl';

export default new Event('interactionCreate', async (interaction) => {
  if (!interaction.isAutocomplete()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) {
    return console.error(
      `No command matching ${interaction.commandName} was found.`,
    );
  }

  const focused = interaction.options.getFocused(true);

  const mapChoices = (choices: string[]) => {
    return choices
      .filter((choice) => choice.startsWith(focused.value))
      .slice(0, 25)
      .map((choice) => ({ name: choice, value: choice }));
  };

  if (interaction.commandName === 'scoreboard') {
    const objectives = Object.keys(dictionary119).map((key) => key);
    const action = interaction.options.getString('action');

    if (!action) return interaction.respond([]);

    if (action === 'custom') {
      return interaction.respond(mapChoices(customScoreboards));
    } else {
      const targetObjectives = objectives
        .filter((obj) => obj.startsWith(action))
        .map((item) => item.replace(action, ''));

      return interaction.respond(mapChoices(targetObjectives));
    }
  }

  const subcommand = interaction.options.getSubcommand();
  const serverChoice = interaction.options.getString('server') as
    | TServerChoice
    | undefined;

  if (!subcommand || !serverChoice) {
    return interaction.respond([]);
  }

  if (interaction.commandName === 'mods') {
    const modNames = await getModNames(serverChoice);
    const modNamesChoice =
      subcommand === 'enable' ? modNames.disabled : modNames.enabled;

    return interaction.respond(mapChoices(modNamesChoice));
  }

  if (interaction.commandName === 'backup') {
    const backupListResponse = await ptero.backups.list(
      config.mcConfig[serverChoice].serverId,
    );

    const backupNames = backupListResponse.data
      .reverse()
      .map((backup) => backup.name);

    return interaction.respond(mapChoices(backupNames));
  }
});

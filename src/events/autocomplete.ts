import { Event } from 'djs-handlers';
import { client } from '..';
import type { ScoreboardChoice } from '../commands/scoreboard';
import allScboreboards from '../assets/scoreboards_1.19.2';
import { config, ServerChoice } from '../config';
import { handleEventError } from '../util/loggers';
import { getModNames, ptero } from '../util/pterodactyl';
import { getWhitelist } from '../util/rcon';
import type { AutocompleteFocusedOption } from 'discord.js';

export default new Event('interactionCreate', async (interaction) => {
  if (!interaction.isAutocomplete()) return;
  if (!interaction.guild) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) {
    return console.error(
      `No command matching ${interaction.commandName} was found.`,
    );
  }

  const guild = interaction.guild;

  if (!guild) return;

  const focused = interaction.options.getFocused(true);

  try {
    if (interaction.commandName === 'scoreboard') {
      const action = interaction.options.getString(
        'action',
      ) as ScoreboardChoice | null;

      if (focused.name === 'playername') {
        const { host, rconPort, rconPasswd } = config.mcConfig['smp'];
        const whitelistNames = await getWhitelist(host, rconPort, rconPasswd);

        interaction.respond(mapChoices(whitelistNames, focused));
      }

      if (focused.name === 'item') {
        if (action === 'extra') {
          const mapped = mapChoices(['digs', 'bedrock_removed'], focused);
          interaction.respond(mapped);
        } else if (action !== null) {
          const targetObjectives = allScboreboards
            .filter((obj) => obj.stat.startsWith(action))
            .map((item) => item.stat.replace(`${action}-`, ''));

          interaction.respond(mapChoices(targetObjectives, focused));
        }
      }
    }

    if (interaction.commandName === 'whitelist') {
      const totalWhitelist: string[] = [];

      for (const server in config.mcConfig) {
        if (server === 'snapshots') continue;

        const { host, rconPort, rconPasswd } =
          config.mcConfig[server as ServerChoice];

        const whitelistNames = await getWhitelist(host, rconPort, rconPasswd);

        totalWhitelist.push(...whitelistNames);
      }

      const whitelistNames = [...new Set(totalWhitelist)].sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase()),
      );

      interaction.respond(mapChoices(whitelistNames, focused));
    }

    if (interaction.commandName === 'mods') {
      const serverChoice = interaction.options.getString('server') as
        | ServerChoice
        | undefined;

      if (!serverChoice) return interaction.respond([]);

      const modNames = await getModNames(serverChoice);
      const modNamesChoice =
        interaction.options.getSubcommand() === 'enable'
          ? modNames.disabled
          : modNames.enabled;

      interaction.respond(mapChoices(modNamesChoice, focused));
    }

    if (interaction.commandName === 'backup') {
      const serverChoice = interaction.options.getString('server') as
        | ServerChoice
        | undefined;

      if (!serverChoice) return interaction.respond([]);
      const backupListResponse = await ptero.backups.list(
        config.mcConfig[serverChoice].serverId,
      );

      const backupNames = backupListResponse.data
        .reverse()
        .map((backup) => backup.name);

      interaction.respond(mapChoices(backupNames, focused));
    }
  } catch (err) {
    return handleEventError({
      err,
      client: interaction.client,
      guild: interaction.guild,
      message: `Something went wrong trying to autocomplete for command ${interaction.commandName}!`,
    });
  }
});

function mapChoices(choices: string[], focused: AutocompleteFocusedOption) {
  return choices
    .filter((choice) => choice.startsWith(focused.value))
    .slice(0, 25)
    .map((choice) => ({ name: choice, value: choice }));
}

import type {
  CommandInteractionOptionResolver,
  TextBasedChannel,
} from 'discord.js';
import type { IExtendedInteraction } from 'djs-handlers';
import { Event } from 'djs-handlers';
import { client } from '..';
import getErrorMessage from '../util/errors';

export default new Event('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  const getChannelName = (channel: TextBasedChannel | null): string | void => {
    if (channel && 'name' in channel) {
      return channel.name;
    }
  };

  const channelNameAddon: string =
    `in #${getChannelName(interaction.channel)}` || '';

  console.log(
    `${interaction.user.tag} ${channelNameAddon} triggered an interaction.`,
  );

  if (!command) {
    return interaction.reply({
      content: `This interaction does not exist!`,
      ephemeral: true,
    });
  }

  try {
    return command.execute({
      args: interaction.options as CommandInteractionOptionResolver,
      client,
      interaction: interaction as IExtendedInteraction,
    });
  } catch (err) {
    console.error(getErrorMessage(err));
    return interaction.reply({
      content: `There was an error trying to execute the interaction: ${interaction.commandName}!`,
      ephemeral: true,
    });
  }
});

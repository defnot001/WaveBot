import { Client, Guild, TextChannel } from 'discord.js';
import { EmbedBuilder } from 'discord.js';
import type { IExtendedInteraction } from 'djs-handlers';
import { ChannelConfig, config } from '../config';
import getErrorMessage from './errors';

type InteractionErrorOptions = {
  interaction: IExtendedInteraction;
  err: unknown;
  message: string;
};

type EventErrorOptions = {
  client: Client;
  guild: Guild;
  err: unknown;
  message: string;
};

export async function handleInteractionError(options: InteractionErrorOptions) {
  const { interaction, err, message } = options;

  const errorMessage = getErrorMessage(err);
  console.error(errorMessage);

  if (!interaction.guild) {
    throw new Error('This interaction was not created in a guild!');
  }

  const botLog = await getTextChannelFromID(interaction.guild, 'botLog');

  if (!interaction.client.user) {
    throw new Error('This client does not have a user!');
  }

  if (interaction.deferred) {
    interaction.editReply(message);
  } else if (interaction.isRepliable()) {
    interaction.reply(message);
  }

  const clientUser = interaction.client.user;

  const interactionErrorEmbed = new EmbedBuilder({
    author: {
      name: clientUser.username,
      iconURL: clientUser.displayAvatarURL(),
    },
    description: `${message}`,
    color: config.embedColors.red,
    footer: {
      text: `${clientUser.username} Error Log`,
    },
    timestamp: Date.now(),
  });

  botLog.send({ embeds: [interactionErrorEmbed] });
}

export async function handleEventError(options: EventErrorOptions) {
  const { client, guild, err, message } = options;
  const botLogChannel = await getTextChannelFromID(guild, 'botLog');

  if (!client.user) {
    throw new Error('This client does not have a user!');
  }

  const errorMessage = getErrorMessage(err);
  console.error(errorMessage);

  const eventErrorEmbed = new EmbedBuilder({
    author: {
      name: client.user.username,
      iconURL: client.user.displayAvatarURL(),
    },
    description: `${message}`,
    footer: {
      text: 'Error Logging',
    },
    timestamp: Date.now(),
  });

  botLogChannel.send({ embeds: [eventErrorEmbed] });
}

export async function getTextChannelFromID(
  guild: Guild,
  channel: keyof ChannelConfig,
): Promise<TextChannel> {
  const fetchedChannel = await guild.channels.fetch(config.channels[channel]);

  if (!fetchedChannel || !(fetchedChannel instanceof TextChannel)) {
    throw new Error('Failed to fetch text channel!');
  }

  return fetchedChannel;
}

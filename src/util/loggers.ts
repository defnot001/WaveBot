import type { Guild, TextChannel } from 'discord.js';
import { EmbedBuilder } from 'discord.js';
import { config } from '../config/config';
import type { TChannelName } from '../types/discord';
import type {
  IEventErrorOptions,
  IInteractionErrorOptions,
} from '../types/errors';
import { isTextChannel } from './assertions';

export async function createInteractionErrorLog(
  options: IInteractionErrorOptions,
) {
  const { interaction, errorMessage } = options;

  if (!interaction.guild) {
    throw new Error('This interaction was not created in a guild!');
  }

  const botLog = await getTextChannelFromID(interaction.guild, 'botLog');

  if (!interaction.client.user) {
    throw new Error('This client does not have a user!');
  }

  if (interaction.deferred) {
    interaction.editReply(errorMessage);
  } else if (interaction.isRepliable()) {
    interaction.reply(errorMessage);
  }

  const clientUser = interaction.client.user;

  const interactionErrorEmbed = new EmbedBuilder({
    author: {
      name: clientUser.username,
      iconURL: clientUser.displayAvatarURL(),
    },
    description: `${errorMessage}`,
    color: config.embedColors.red,
    footer: {
      text: `${clientUser.username} Error Log`,
    },
    timestamp: Date.now(),
  });

  botLog.send({ embeds: [interactionErrorEmbed] });
}

export async function createEventErrorLog(options: IEventErrorOptions) {
  const { client, guild, errorMessage } = options;
  const botLogChannel = await getTextChannelFromID(guild, 'botLog');

  if (!client.user) {
    throw new Error('This client does not have a user!');
  }

  const eventErrorEmbed = new EmbedBuilder({
    author: {
      name: client.user.username,
      iconURL: client.user.displayAvatarURL(),
    },
    description: `${errorMessage}`,
    footer: {
      text: 'KiwiBot Error Logging',
    },
    timestamp: Date.now(),
  });

  botLogChannel.send({ embeds: [eventErrorEmbed] });
}

export async function getTextChannelFromID(
  guild: Guild,
  channel: TChannelName,
): Promise<TextChannel> {
  const fetchedChannel = await guild.channels.fetch(config.channels[channel]);

  if (!fetchedChannel || !isTextChannel(fetchedChannel)) {
    throw new Error('Failed to fetch text channel!');
  }

  return fetchedChannel;
}

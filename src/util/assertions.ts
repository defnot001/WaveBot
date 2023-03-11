import { Channel, GuildMember, TextChannel } from 'discord.js';

export function isTextChannel(channel: Channel): channel is TextChannel {
  return channel instanceof TextChannel;
}

export function isGuildMember(member: unknown): member is GuildMember {
  return member instanceof GuildMember;
}

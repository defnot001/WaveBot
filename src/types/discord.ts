import type { GuildEmoji, GuildMember, User } from 'discord.js';
import type { TMCServerConfig } from './minecraft';

export interface IModerationEmbedOptions {
  target: User;
  executor: GuildMember;
  action: TModerationAction;
  reason?: string | null;
  expiration?: number | null;
}

export interface IModerationDescription {
  member: string;
  action: string;
  reason?: string;
  expiration?: string;
}

export type TConfig = {
  bot: {
    readonly token: string;
    readonly clientID: string;
    readonly guildID: string;
  };
  ptero: {
    readonly url: string;
    readonly apiKey: string;
  };
  channels: {
    readonly memberLog: string;
    readonly modLog: string;
    readonly botLog: string;
    readonly invite: string;
    readonly resources: string;
    readonly serverInfo: string;
    readonly todo: string;
  };
  roles: {
    readonly members: string;
    readonly admins: string;
  };
  embedColors: {
    readonly default: number;
    readonly none: number;
    readonly red: number;
    readonly orange: number;
    readonly yellow: number;
    readonly green: number;
  };
  emoji: {
    readonly kiwi: string;
    readonly owoKiwi: string;
    readonly froghypers: string;
    readonly frogYes: string;
    readonly frogNo: string;
  };
  mcConfig: {
    readonly smp: TMCServerConfig;
    readonly cmp: TMCServerConfig;
    readonly cmp2: TMCServerConfig;
    readonly copy: TMCServerConfig;
    readonly snapshots: TMCServerConfig;
  };
};

export type TChannelName = keyof TConfig['channels'];
export type TModerationAction = 'kick' | 'ban' | 'unban';
export type TEmojis = {
  [key in keyof TConfig['emoji']]: GuildEmoji;
};

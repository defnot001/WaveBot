import type { Client, Guild } from 'discord.js';
import type { IExtendedInteraction } from 'djs-handlers';

export interface IInteractionErrorOptions {
  interaction: IExtendedInteraction;
  err: unknown;
  message: string;
}

export interface IEventErrorOptions {
  client: Client;
  guild: Guild;
  err: unknown;
  message: string;
}

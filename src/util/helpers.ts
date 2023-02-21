import {
  ApplicationCommandOptionChoiceData,
  GuildMember,
  PartialGuildMember,
  time,
} from 'discord.js';
import { config } from '../config/config';
import type { TPowerActionNoStart } from '../types/minecraft';
import { ptero } from './pterodactyl';

export function getServerChoices(): ApplicationCommandOptionChoiceData<string>[] {
  const choices = [];

  for (const server of Object.keys(config.mcConfig)) {
    choices.push({ name: server, value: server });
  }

  return choices;
}

export function escapeMarkdown(text: string): string {
  const unescaped = text.replace(/\\(\*|_|`|~|\\)/g, '$1');
  return unescaped.replace(/(\*|_|`|~|\\)/g, '\\$1');
}

export function includesUndefined<T>(array: (T | undefined)[]) {
  return array.includes(undefined);
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) {
    return bytes + ' bytes';
  } else if (bytes < 1024 ** 2) {
    return (bytes / 1024).toFixed(1) + ' KB';
  } else if (bytes < 1024 ** 3) {
    return (bytes / 1024 ** 2).toFixed(1) + ' MB';
  } else if (bytes < 1024 ** 4) {
    return (bytes / 1024 ** 3).toFixed(1) + ' GB';
  } else {
    return (bytes / 1024 ** 4).toFixed(1) + ' TB';
  }
}

export default function formatTime(ms: number) {
  const roundTowardsZero = ms > 0 ? Math.floor : Math.ceil;
  const days = roundTowardsZero(ms / 86400000);
  const hours = roundTowardsZero(ms / 3600000) % 24;
  const minutes = roundTowardsZero(ms / 60000) % 60;
  const seconds = roundTowardsZero(ms / 1000) % 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getAction(action: TPowerActionNoStart) {
  switch (action) {
    case 'start':
      return 'started';
    case 'stop':
      return 'stopped';
    case 'restart':
      return 'restarted';
    default:
      throw new Error('Invalid action.');
  }
}

export async function performAction(
  action: TPowerActionNoStart,
  serverId: string,
): Promise<boolean> {
  if (action === 'stop') {
    await ptero.servers.stop(serverId);
    return true;
  } else if (action === 'restart') {
    await ptero.servers.restart(serverId);
    return true;
  } else if (action === 'kill') {
    await ptero.servers.kill(serverId);
    return true;
  } else {
    return false;
  }
}

export function colorFromDuration(duration: number): number {
  const MAX_TRUST_ACCOUNT_AGE = 1_000 * 60 * 60 * 24 * 7 * 4;
  const percent = Math.min(duration / (MAX_TRUST_ACCOUNT_AGE / 100), 100);
  let red;
  let green;
  let blue = 0;

  if (percent < 50) {
    red = 255;
    green = Math.round(5.1 * percent);
  } else {
    green = 255;
    red = Math.round(510 - 5.1 * percent);
  }

  const tintFactor = 0.3;

  red += (255 - red) * tintFactor;
  green += (255 - green) * tintFactor;
  blue += (255 - blue) * tintFactor;

  return Math.floor((red << 16) + (green << 8) + blue);
}

export function getJoinedAtComponent(
  member: GuildMember | PartialGuildMember,
): string {
  return member.joinedAt
    ? `\nJoined at: ${time(member.joinedAt, 'f')} (${time(
        member.joinedAt,
        'R',
      )})`
    : '\u200b';
}

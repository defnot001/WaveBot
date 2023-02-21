import dotenv from 'dotenv';
import path from 'path';
import { env } from 'process';
import type { TConfig } from '../types/discord';

const envPath = path.join(
  path.dirname(__dirname),
  `../.env.${env['NODE_ENV']}`,
);

console.log(`Loading ${env['NODE_ENV']} environment variables...`);

dotenv.config({
  path: envPath,
});

export const projectPaths = {
  sources: path.join(path.dirname(__dirname)),
  commands: path.join(path.dirname(__dirname), 'commands'),
  events: path.join(path.dirname(__dirname), 'events'),
};

const safeParseInt = (value: string | undefined) => {
  if (value === undefined) {
    return undefined;
  }
  return Number.parseInt(value);
};

export const preconfig = {
  bot: {
    token: env['DISCORD_BOT_TOKEN'],
    clientID: env['DISCORD_CLIENT_ID'],
    guildID: env['DISCORD_GUILD_ID'],
  },
  ptero: {
    url: env['PTERO_URL'],
    apiKey: env['PTERO_API_KEY'],
  },
  channels: {
    memberLog: env['CHANNEL_MEMBERLOG'],
    modLog: env['CHANNEL_MODLOG'],
    botLog: env['CHANNEL_BOTLOG'],
    invite: env['CHANNEL_INVITE'],
    resources: env['CHANNEL_RESOURCES'],
    serverInfo: env['CHANNEL_SERVERINFO'],
    todo: env['CHANNEL_TODO'],
  },
  roles: {
    members: env['ROLE_MEMBER'],
    admins: env['ROLE_ADMIN'],
  },
  embedColors: {
    default: 3_517_048,
    none: 3_092_790,
    red: 13_382_451,
    orange: 16_737_843,
    yellow: 16_769_536,
    green: 6_736_998,
  },
  emoji: {
    kiwi: env['EMOJI_KIWI'],
    owoKiwi: env['EMOJI_OWOKIWI'],
    froghypers: env['EMOJI_FROGHYPERS'],
    frogYes: env['EMOJI_YES'],
    frogNo: env['EMOJI_NO'],
  },
  mcConfig: {
    smp: {
      host: env['MINECRAFT_SERVER_IP'],
      port: safeParseInt(env['MINECRAFT_SMP_PORT']),
      serverId: env['MINECRAFT_SMP_SERVERID'],
      rconPort: safeParseInt(env['MINECRAFT_SMP_RCON_PORT']),
      rconPasswd: env['MINECRAFT_SMP_RCON_PASSWORD'],
      operator: false,
      backupLimit: 20,
    },
    cmp: {
      host: env['MINECRAFT_SERVER_IP'],
      port: safeParseInt(env['MINECRAFT_CMP_PORT']),
      serverId: env['MINECRAFT_CMP_SERVERID'],
      rconPort: safeParseInt(env['MINECRAFT_CMP_RCON_PORT']),
      rconPasswd: env['MINECRAFT_CMP_RCON_PASSWORD'],
      operator: true,
      backupLimit: 10,
    },
    cmp2: {
      host: env['MINECRAFT_SERVER_IP'],
      port: safeParseInt(env['MINECRAFT_CMP2_PORT']),
      serverId: env['MINECRAFT_CMP2_SERVERID'],
      rconPort: safeParseInt(env['MINECRAFT_CMP2_RCON_PORT']),
      rconPasswd: env['MINECRAFT_CMP2_RCON_PASSWORD'],
      operator: true,
      backupLimit: 0,
    },
    copy: {
      host: env['MINECRAFT_SERVER_IP'],
      port: safeParseInt(env['MINECRAFT_COPY_PORT']),
      serverId: env['MINECRAFT_COPY_SERVERID'],
      rconPort: safeParseInt(env['MINECRAFT_COPY_RCON_PORT']),
      rconPasswd: env['MINECRAFT_COPY_RCON_PASSWORD'],
      operator: true,
      backupLimit: 5,
    },
    snapshots: {
      host: env['MINECRAFT_SERVER_IP'],
      port: safeParseInt(env['MINECRAFT_SNAPSHOTS_PORT']),
      serverId: env['MINECRAFT_SNAPSHOTS_SERVERID'],
      rconPort: safeParseInt(env['MINECRAFT_SNAPSHOTS_RCON_PORT']),
      rconPasswd: env['MINECRAFT_SNAPSHOTS_RCON_PASSWORD'],
      operator: true,
      backupLimit: 0,
    },
  },
};

function hasAllProperties<T>(obj: T): T {
  for (const key in obj) {
    if (obj[key] === undefined || obj[key] === null || obj[key] === '') {
      throw new Error(`Object is missing property: ${key}`);
    }
    if (typeof obj[key] === 'object') {
      hasAllProperties(obj[key]);
    }
  }
  return obj;
}

export const config = hasAllProperties(preconfig) as TConfig;

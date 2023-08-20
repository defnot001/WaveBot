import dotenv from 'dotenv';
import path from 'path';
import { env } from 'process';
import { z } from 'zod';

const nodeEnv = env['NODE_ENV'] ?? 'development';

const envPath = path.join(path.dirname(__dirname), `./.env.${nodeEnv}`);

console.log(`Loading ${nodeEnv} environment variables...`);

dotenv.config({
  path: envPath,
});

// Zod Schemas
const mcServerConfigSchema = z.object({
  host: z.string(),
  port: z.coerce.number(),
  serverId: z.string(),
  rconPort: z.coerce.number(),
  rconPasswd: z.string(),
  operator: z.boolean(),
  backupLimit: z.number(),
});

const botConfigSchema = z.object({
  token: z.string(),
  clientID: z.string(),
  guildID: z.string(),
});

const pteroConfigSchema = z.object({
  url: z.string(),
  apiKey: z.string(),
});

const channelConfigSchema = z.object({
  memberLog: z.string(),
  modLog: z.string(),
  botLog: z.string(),
  invite: z.string(),
  resources: z.string(),
  serverInfo: z.string(),
  todo: z.string(),
});

const roleConfigSchema = z.object({
  members: z.string(),
  admins: z.string(),
});

const embedColorConfigSchema = z.object({
  default: z.number(),
  none: z.number(),
  red: z.number(),
  orange: z.number(),
  yellow: z.number(),
  green: z.number(),
});

const emojiConfigSchema = z.object({
  kiwi: z.string(),
  owoKiwi: z.string(),
  froghypers: z.string(),
  frogYes: z.string(),
  frogNo: z.string(),
});

const mcConfigSchema = z.object({
  smp: mcServerConfigSchema,
  cmp: mcServerConfigSchema,
  cmp2: mcServerConfigSchema,
  copy: mcServerConfigSchema,
  snapshots: mcServerConfigSchema,
});

const configSchema = z.object({
  bot: botConfigSchema,
  ptero: pteroConfigSchema,
  channels: channelConfigSchema,
  roles: roleConfigSchema,
  embedColors: embedColorConfigSchema,
  emoji: emojiConfigSchema,
  mcConfig: mcConfigSchema,
});

const importedConfig = {
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
      port: env['MINECRAFT_SMP_PORT'],
      serverId: env['MINECRAFT_SMP_SERVERID'],
      rconPort: env['MINECRAFT_SMP_RCON_PORT'],
      rconPasswd: env['MINECRAFT_SMP_RCON_PASSWORD'],
      operator: false,
      backupLimit: 20,
    },
    cmp: {
      host: env['MINECRAFT_SERVER_IP'],
      port: env['MINECRAFT_CMP_PORT'],
      serverId: env['MINECRAFT_CMP_SERVERID'],
      rconPort: env['MINECRAFT_CMP_RCON_PORT'],
      rconPasswd: env['MINECRAFT_CMP_RCON_PASSWORD'],
      operator: true,
      backupLimit: 10,
    },
    cmp2: {
      host: env['MINECRAFT_SERVER_IP'],
      port: env['MINECRAFT_CMP2_PORT'],
      serverId: env['MINECRAFT_CMP2_SERVERID'],
      rconPort: env['MINECRAFT_CMP2_RCON_PORT'],
      rconPasswd: env['MINECRAFT_CMP2_RCON_PASSWORD'],
      operator: true,
      backupLimit: 0,
    },
    copy: {
      host: env['MINECRAFT_SERVER_IP'],
      port: env['MINECRAFT_COPY_PORT'],
      serverId: env['MINECRAFT_COPY_SERVERID'],
      rconPort: env['MINECRAFT_COPY_RCON_PORT'],
      rconPasswd: env['MINECRAFT_COPY_RCON_PASSWORD'],
      operator: true,
      backupLimit: 5,
    },
    snapshots: {
      host: env['MINECRAFT_SERVER_IP'],
      port: env['MINECRAFT_SNAPSHOTS_PORT'],
      serverId: env['MINECRAFT_SNAPSHOTS_SERVERID'],
      rconPort: env['MINECRAFT_SNAPSHOTS_RCON_PORT'],
      rconPasswd: env['MINECRAFT_SNAPSHOTS_RCON_PASSWORD'],
      operator: true,
      backupLimit: 0,
    },
  },
} as const;

export const config = configSchema.parse(importedConfig);

export const projectPaths = {
  sources: path.join(path.dirname(__dirname), 'dist'),
  commands: path.join(path.dirname(__dirname), `dist/commands`),
  events: path.join(path.dirname(__dirname), `dist/events`),
};

export type ChannelConfig = Readonly<z.infer<typeof channelConfigSchema>>;
export type EmojiConfig = Readonly<z.infer<typeof emojiConfigSchema>>;
export type MCConfig = Readonly<z.infer<typeof mcConfigSchema>>;
export type ServerChoice = keyof MCConfig;

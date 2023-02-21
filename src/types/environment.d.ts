declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      DISCORD_BOT_TOKEN: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_GUILD_ID: string;
      CHANNEL_MEMBERLOG: string;
      CHANNEL_MODLOG: string;
      CHANNEL_BOTLOG: string;
      CHANNEL_INVITE: string;
      CHANNEL_RESOURCES: string;
      CHANNEL_SERVERINFO: string;
      CHANNEL_TODO: string;
      ROLE_MEMBER: string;
      ROLE_ADMIN: string;
      EMOJI_KIWI: string;
      EMOJI_OWOKIWI: string;
      EMOJI_FROGHYPERS: string;
      EMOJI_YES: string;
      EMOJI_NO: string;
      PTERO_URL: string;
      PTERO_API_KEY: string;
      MINECRAFT_SERVER_IP: string;
      MINECRAFT_SMP_SERVERID: string;
      MINECRAFT_SMP_PORT: string;
      MINECRAFT_SMP_RCON_PORT: string;
      MINECRAFT_SMP_RCON_PASSWORD: string;
      MINECRAFT_CMP_SERVERID: string;
      MINECRAFT_CMP_PORT: string;
      MINECRAFT_CMP_RCON_PORT: string;
      MINECRAFT_CMP_RCON_PASSWORD: string;
      MINECRAFT_CMP2_SERVERID: string;
      MINECRAFT_CMP2_PORT: string;
      MINECRAFT_CMP2_RCON_PORT: string;
      MINECRAFT_CMP2_RCON_PASSWORD: string;
      MINECRAFT_COPY_SERVERID: string;
      MINECRAFT_COPY_PORT: string;
      MINECRAFT_COPY_RCON_PORT: string;
      MINECRAFT_COPY_RCON_PASSWORD: string;
      MINECRAFT_SNAPSHOTS_SERVERID: string;
      MINECRAFT_SNAPSHOTS_PORT: string;
      MINECRAFT_SNAPSHOTS_RCON_PORT: string;
      MINECRAFT_SNAPSHOTS_RCON_PASSWORD: string;
    }
  }
}

export {};

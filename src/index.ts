import { GatewayIntentBits, Partials } from 'discord.js';
import { ExtendedClient } from 'djs-handlers';
import { config, projectPaths } from './config';

export const client = new ExtendedClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildEmojisAndStickers,
  ],
  partials: [Partials.GuildMember],
});

client.start({
  botToken: config.bot.token,
  guildID: config.bot.guildID,
  commandsPath: projectPaths.commands,
  eventsPath: projectPaths.events,
  type: 'commonJS',
  globalCommands: false,
  registerCommands: true,
});

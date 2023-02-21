import { ApplicationCommandOptionType, inlineCode } from 'discord.js';
import { Command } from 'djs-handlers';
import { KoalaEmbedBuilder } from '../classes/KoalaEmbedBuilder';
import { config } from '../config/config';
import type { TServerChoice } from '../types/minecraft';
import getErrorMessage from '../util/errors';
import { getServerChoices } from '../util/helpers';
import { createInteractionErrorLog } from '../util/loggers';
import { getWhitelist, runRconCommand } from '../util/rcon';

export default new Command({
  name: 'whitelist',
  description: 'Get information about the whitelist & add/remove users.',
  options: [
    {
      name: 'add',
      description: 'Adds a player to the whitelist on all minecraft servers.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'ign',
          description: `The player's in-game name.`,
          type: ApplicationCommandOptionType.String,
          required: true,
        },
      ],
    },
    {
      name: 'remove',
      description:
        'Removes a player from the whitelist on all minecraft servers.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'ign',
          description: `The player's in-game name.`,
          type: ApplicationCommandOptionType.String,
          required: true,
        },
      ],
    },
    {
      name: 'list',
      description: 'Returns the whitelist of the specified server in an embed.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: 'server',
          description: `Specify a server.`,
          type: ApplicationCommandOptionType.String,
          choices: [...getServerChoices()],
          required: true,
        },
      ],
    },
  ],
  execute: async ({ interaction, args }) => {
    await interaction.deferReply();

    const subcommand = args.getSubcommand();

    if (!subcommand) {
      return interaction.editReply('This subcommand does not exist!');
    }

    if (!interaction.guild) {
      return interaction.reply('This command can only be used in a guild.');
    }

    if (subcommand === 'list') {
      const choice = args.getString('server');
      const { host, rconPort, rconPasswd } =
        config.mcConfig[choice as TServerChoice];

      if (!choice) {
        return interaction.editReply('Please specify a server!');
      }

      try {
        const response = await getWhitelist(host, rconPort, rconPasswd);

        const whitelist = !response
          ? `There are no whitelisted players on ${choice}!`
          : response.join('\n');

        const whitelistEmbed = new KoalaEmbedBuilder(interaction.user, {
          title: `${choice.toUpperCase()} Whitelist`,
          description: whitelist,
        });

        const iconURL = interaction.guild.iconURL();

        if (iconURL) {
          whitelistEmbed.setThumbnail(iconURL);
        }

        return interaction.editReply({ embeds: [whitelistEmbed] });
      } catch (err) {
        getErrorMessage(err);
        return createInteractionErrorLog({
          interaction: interaction,
          errorMessage: `Failed to get the whitelist for ${choice}!`,
        });
      }
    } else if (subcommand === 'add' || subcommand === 'remove') {
      const ign = args.getString('ign');

      if (!ign) {
        return interaction.editReply('Please provide an in-game name!');
      }

      const servers = Object.keys(config.mcConfig);

      const whitelistCheck: [string, string][] = [];
      const opCheck: [string, string][] = [];

      try {
        for await (const server of servers) {
          const { host, rconPort, rconPasswd } =
            config.mcConfig[server as TServerChoice];

          const whitelistCommand = `whitelist ${subcommand} ${ign}`;

          const whitelist = await runRconCommand(
            host,
            rconPort,
            rconPasswd,
            whitelistCommand,
          );

          whitelistCheck.push([server, whitelist]);

          if (config.mcConfig[server as TServerChoice].operator) {
            const action = subcommand === 'add' ? 'op' : 'deop';
            const opCommand = `${action} ${ign}`;

            const op = await runRconCommand(
              host,
              rconPort,
              rconPasswd,
              opCommand,
            );

            opCheck.push([server, op]);
          }
        }
        const successMessage =
          subcommand === 'add'
            ? `Successfully added ${inlineCode(ign)} to the whitelist on ${
                whitelistCheck.length
              } servers.\nSuccessfully made ${inlineCode(ign)} an operator on ${
                opCheck.length
              } servers.`
            : `Successfully removed ${inlineCode(ign)} from the whitelist on ${
                whitelistCheck.length
              } servers.\nSuccessfully removed ${inlineCode(
                ign,
              )} as an operator on ${opCheck.length} servers.`;

        return interaction.editReply(successMessage);
      } catch (err) {
        const errorMessage =
          subcommand === 'add'
            ? `Failed to whitelist and/or op ${inlineCode(
                ign,
              )} on one or more servers!`
            : `Failed to unwhitelist and/or deop ${inlineCode(
                ign,
              )} on one or more servers!`;

        getErrorMessage(err);
        return createInteractionErrorLog({
          interaction: interaction,
          errorMessage: errorMessage,
        });
      }
    }
  },
});

import { ApplicationCommandOptionType } from 'discord.js';
import { Command } from 'djs-handlers';
import { KoalaEmbedBuilder } from '../classes/KoalaEmbedBuilder';
import { config } from '../config/config';
import type { TServerChoice } from '../types/minecraft';
import { mcServerChoice } from '../util/components';
import { handleInteractionError } from '../util/loggers';
import { getModFiles, getModNames, ptero } from '../util/pterodactyl';

const modnameOption = {
  name: 'modname',
  description: 'The name of the mod.',
  type: 3,
  required: true,
  autocomplete: true,
};

export default new Command({
  name: 'mods',
  description: 'Lists and enables/disables mods.',
  options: [
    {
      name: 'list',
      description: 'Lists all enabled and disabled mods.',
      type: ApplicationCommandOptionType.Subcommand,
      options: [mcServerChoice],
    },
    {
      name: 'enable',
      description: 'Enables one or multiple mod(s).',
      type: ApplicationCommandOptionType.Subcommand,
      options: [mcServerChoice, modnameOption],
    },
    {
      name: 'disable',
      description: 'Disables one or multiple mod(s).',
      type: ApplicationCommandOptionType.Subcommand,
      options: [mcServerChoice, modnameOption],
    },
  ],
  execute: async ({ interaction, args }) => {
    await interaction.deferReply();

    const subcommand = args.getSubcommand();
    const interactionGuild = interaction.guild;

    if (!interactionGuild) {
      return interaction.editReply('Cannot find guild!');
    }

    const serverChoice = args.getString('server') as TServerChoice;

    if (!serverChoice) {
      return interaction.editReply('Cannot find server!');
    }

    try {
      if (subcommand === 'list') {
        const modNames = await getModNames(serverChoice);

        if (modNames.enabled.length === 0 && modNames.disabled.length === 0) {
          return interaction.editReply(
            'Cannot find any mods in the mods folder!',
          );
        }

        const modListEmbed = new KoalaEmbedBuilder(interaction.user, {
          title: `Modlist for ${interactionGuild.name} ${serverChoice}`,
          fields: [
            {
              name: 'Enabled Mods',
              value: modNames.enabled.join('\n'),
            },
          ],
        });

        if (modNames.disabled.length > 0) {
          modListEmbed.addFields({
            name: 'Disabled Mods',
            value: modNames.disabled.join('\n'),
          });
        }

        return interaction.editReply({ embeds: [modListEmbed] });
      } else {
        const modname = args.getString('modname');

        if (!modname) {
          return interaction.editReply('Cannot find modname!');
        }

        const modFiles = await getModFiles(serverChoice);

        const targetMods = modFiles.filter(
          (mod) =>
            mod.name === `${modname}.jar` || mod.name === `${modname}.disabled`,
        );

        if (targetMods.length === 0 || !targetMods[0]) {
          return interaction.editReply(`Cannot find mod: ${modname}!`);
        }

        if (targetMods.length > 1) {
          return interaction.editReply(
            `Found multiple mods with the name: ${modname}!`,
          );
        }

        const targetMod = targetMods[0];

        if (subcommand === 'enable') {
          if (targetMod.name.endsWith('.jar')) {
            return interaction.editReply(
              `Mod: ${targetMod.name} is already enabled!`,
            );
          }

          await ptero.files.rename(config.mcConfig[serverChoice].serverId, {
            from: targetMod.name,
            to: targetMod.name.replace('.disabled', '.jar'),
            directory: '/mods',
          });

          return interaction.editReply(
            `Successfully enabled mod: ${targetMod.name.replace(
              '.disabled',
              '',
            )}!`,
          );
        } else {
          if (targetMod.name.endsWith('.disabled')) {
            return interaction.editReply(
              `Mod: ${targetMod.name} is already disabled!`,
            );
          }

          await ptero.files.rename(config.mcConfig[serverChoice].serverId, {
            from: targetMod.name,
            to: targetMod.name.replace('.jar', '.disabled'),
            directory: '/mods',
          });

          return interaction.editReply(
            `Successfully disabled mod: ${targetMod.name.replace('.jar', '')}!`,
          );
        }
      }
    } catch (err) {
      return handleInteractionError({
        interaction,
        err,
        message: 'Something went wrong trying to execute the mods command!',
      });
    }
  },
});

import axios from 'axios';
import { ApplicationCommandOptionType, AttachmentBuilder } from 'discord.js';
import { Command } from 'djs-handlers';
import { z } from 'zod';
import { handleInteractionError } from '../util/loggers';

const uuidResponseSchema = z.object({
  name: z.string(),
  id: z.string(),
});

export default new Command({
  name: 'mcskin',
  description: 'Get the minecraft skin of a player.',
  options: [
    {
      name: 'type',
      description: 'The type of skin image you want to get.',
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: [
        { name: 'avatar', value: '/avatars/' },
        { name: 'head', value: '/renders/head/' },
        { name: 'body', value: '/renders/body/' },
        { name: 'skin', value: '/skins/' },
      ],
    },
    {
      name: 'name',
      description: 'The minecraft name of the player you want the skin from.',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  execute: async ({ interaction, args }) => {
    await interaction.deferReply();

    const imageType = args.getString('type', true) as
      | '/avatars/'
      | '/renders/head/'
      | '/renders/body/'
      | '/skins/';
    const name = args.getString('name');

    if (!name) {
      return interaction.editReply('Please provide a username!');
    }

    try {
      const uuidResponse = await axios.get(
        `https://api.mojang.com/users/profiles/minecraft/${name}`,
      );

      if (uuidResponse.status !== 200) {
        return interaction.editReply('Could not find the skin of that user!');
      }

      const uuidResponseData = uuidResponseSchema.parse(uuidResponse.data);
      const url = `https://crafatar.com${imageType}${uuidResponseData.id}`;

      const { data, status } = await axios.get<Buffer>(url, {
        responseType: 'arraybuffer',
      });

      if (status !== 200) {
        return interaction.editReply('Could not find the skin of that user!');
      }

      const skinAttachment = new AttachmentBuilder(data, {
        name: `${name}.png`,
        description: 'Minecraft skin of a player.',
      });

      interaction.editReply({ files: [skinAttachment] });

      return;
    } catch (err) {
      handleInteractionError({
        interaction,
        err,
        message: `Failed to get the skin for ${name}!`,
      });

      return;
    }
  },
});

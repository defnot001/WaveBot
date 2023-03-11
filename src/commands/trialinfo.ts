import { ApplicationCommandOptionType, userMention } from 'discord.js';
import { Command } from 'djs-handlers';
import { getTrialWelcomeMessage } from '../assets/welcomeMessage';
import { KoalaEmbedBuilder } from '../classes/KoalaEmbedBuilder';
import { isGuildMember } from '../util/assertions';
import { getEmojis } from '../util/components';
import { handleInteractionError } from '../util/loggers';

export default new Command({
  name: 'trialinfo',
  description: 'Posts an embed with information for a new trial member.',
  options: [
    {
      name: 'target',
      description: 'Select a user.',
      type: ApplicationCommandOptionType.User,
      required: true,
    },
  ],
  execute: async ({ interaction, args }) => {
    const target = args.getMember('target');

    if (!isGuildMember(target)) {
      return interaction.reply({
        content: 'The target you chose is not a member of this guild!',
        ephemeral: true,
      });
    }

    const guild = interaction.guild;

    if (!guild) {
      return interaction.reply({
        content: 'This command can only be used in a guild!',
        ephemeral: true,
      });
    }

    try {
      const { kiwi } = getEmojis(interaction.client);

      const trialEmbed = new KoalaEmbedBuilder(interaction.user, {
        title: `${kiwi}  Welcome to ${guild.name} ${target.user.username}!  ${kiwi}`,
        thumbnail: {
          url: target.user.displayAvatarURL(),
        },
        fields: getTrialWelcomeMessage(interaction.client),
      });

      await interaction.reply({
        content: userMention(target.user.id),
        embeds: [],
      });

      return interaction.editReply({
        content: '\u200b',
        embeds: [trialEmbed],
      });
    } catch (err) {
      return handleInteractionError({
        interaction,
        err,
        message:
          'Something went wrong trying to execute the trialinfo command!',
      });
    }
  },
});

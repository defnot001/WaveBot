import { ApplicationCommandOptionType } from 'discord.js';
import { Command } from 'djs-handlers';
import { KoalaEmbedBuilder } from '../classes/KoalaEmbedBuilder';
import { getEmojis } from '../util/components';

export default new Command({
  name: 'poll',
  description: 'Create a poll.',
  options: [
    {
      name: 'question',
      description: 'The question to ask.',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: 'type',
      description: 'The type of poll to create.',
      type: ApplicationCommandOptionType.String,
      required: true,
      choices: [
        {
          name: 'Yes/No',
          value: 'yesno',
        },
        {
          name: 'Multiple Choice',
          value: 'multiplechoice',
        },
      ],
    },
    {
      name: 'answers',
      description:
        'The answers to the question. Separate each answer with a comma. Maxiumum of 10 answers.',
      type: ApplicationCommandOptionType.String,
    },
  ],
  execute: async ({ interaction, args }) => {
    let question = args.getString('question');
    const answerType = args.getString('type');
    const answers = args.getString('answers');

    if (!question || !answerType) {
      return interaction.reply('Please specify a question and an answer type!');
    }

    question = !question.endsWith('?') ? question + '?' : question;

    if (answerType === 'yesno') {
      try {
        const pollEmbed = new KoalaEmbedBuilder(interaction.user, {
          title: question,
        });

        const message = await interaction.reply({
          embeds: [pollEmbed],
          fetchReply: true,
        });

        const { frogYes, frogNo } = getEmojis(interaction.client);

        await message.react(frogYes);
        return message.react(frogNo);
      } catch (err) {
        return interaction.reply('Cannot find emojis!');
      }
    } else {
      if (!answers) {
        return interaction.reply('Please specify answers!');
      }

      const emojiArr = [
        '1️⃣',
        '2️⃣',
        '3️⃣',
        '4️⃣',
        '5️⃣',
        '6️⃣',
        '7️⃣',
        '8️⃣',
        '9️⃣',
        '🔟',
      ];

      const fields = answers.split(',').map((answer, index) => {
        return { name: `${emojiArr[index]} ${answer.trim()}`, value: '\u200b' };
      });

      if (fields.length > 10) {
        return interaction.reply('You can only have 10 answers max!');
      }

      const pollEmbed = new KoalaEmbedBuilder(interaction.user, {
        title: question,
        fields,
      });

      const message = await interaction.reply({
        embeds: [pollEmbed],
        fetchReply: true,
      });

      for (let i = 0; i < fields.length; i++) {
        const emoji = emojiArr[i];
        if (!emoji) break;
        await message.react(emoji);
      }

      return;
    }
  },
});

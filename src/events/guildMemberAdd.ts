import { inlineCode, time, userMention } from 'discord.js';
import { Event } from 'djs-handlers';
import { JoinLeaveEmbedBuilder } from '../classes/JoinLeaveEmbedBuilder';
import { colorFromDuration, getJoinedAtComponent } from '../util/helpers';
import { getTextChannelFromID, handleEventError } from '../util/loggers';
export default new Event('guildMemberAdd', async (member) => {
  try {
    console.log(`${member.user.tag} joined ${member.guild.name}.`);

    const memberLog = await getTextChannelFromID(member.guild, 'memberLog');
    const joinedAt = getJoinedAtComponent(member);

    const accountAge = new Date().valueOf() - member.user.createdAt.valueOf();
    const embedColor = colorFromDuration(accountAge) || 3_092_790;

    const joinEmbed = new JoinLeaveEmbedBuilder(member, 'joined', {
      description: `Username: ${userMention(
        member.user.id,
      )}\nUser ID: ${inlineCode(member.user.id)}${joinedAt}\nCreated at: ${time(
        member.user.createdAt,
        'f',
      )} (${time(member.user.createdAt, 'R')})`,
    });

    joinEmbed.setColor(embedColor);

    memberLog.send({ embeds: [joinEmbed] });
  } catch (err) {
    return handleEventError({
      err,
      client: member.client,
      guild: member.guild,
      message: `Failed to log the join of ${member.user.tag}.`,
    });
  }
});

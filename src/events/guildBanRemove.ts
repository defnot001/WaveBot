import { AuditLogEvent, inlineCode } from 'discord.js';
import { Event } from 'djs-handlers';
import { ModerationEmbedBuilder } from '../classes/ModerationEmbedBuilder';
import { createEventErrorLog, getTextChannelFromID } from '../util/loggers';

export default new Event('guildBanRemove', async (guildUnban) => {
  try {
    const unban = guildUnban.partial ? await guildUnban.fetch() : guildUnban;

    console.log(`${unban.user.tag} was unbanned from ${unban.guild}.`);

    const fetchedLogs = await unban.guild.fetchAuditLogs({
      limit: 1,
      type: AuditLogEvent.MemberBanRemove,
    });

    const unbanLog = fetchedLogs.entries.first();

    if (!unbanLog) {
      throw new Error('Cannot find UnbanLog.');
    }

    const { executor, target, action, reason } = unbanLog;

    if (!executor || !target || action !== AuditLogEvent.MemberBanRemove) {
      throw new Error('Cannot find executor or target from the Audit Log.');
    }

    const executingMember = await unban.guild.members.fetch(executor.id);
    const modLog = await getTextChannelFromID(unban.guild, 'modLog');

    if (target.id === unban.user.id) {
      const banEmbed = new ModerationEmbedBuilder({
        target: unban.user,
        executor: executingMember,
        action: 'unban',
        reason: reason,
      });

      modLog.send({ embeds: [banEmbed] });
    } else {
      throw new Error(
        'The IDs of the target in the AuditLog and the target from the Event did not match.',
      );
    }
  } catch (err) {
    console.error(err);
    createEventErrorLog({
      client: guildUnban.client,
      guild: guildUnban.guild,
      errorMessage: `${inlineCode(
        'GuildBanAdd',
      )} Event triggered but the embed could not be sent.`,
    });
  }
});

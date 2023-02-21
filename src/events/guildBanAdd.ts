import { AuditLogEvent, inlineCode } from 'discord.js';
import { Event } from 'djs-handlers';
import { ModerationEmbedBuilder } from '../classes/ModerationEmbedBuilder';
import { createEventErrorLog, getTextChannelFromID } from '../util/loggers';
export default new Event('guildBanAdd', async (guildBan) => {
  try {
    const ban = guildBan.partial ? await guildBan.fetch() : guildBan;

    console.log(`${ban.user.tag} was banned from ${ban.guild}.`);

    const fetchedLogs = await ban.guild.fetchAuditLogs({
      limit: 1,
      type: AuditLogEvent.MemberBanAdd,
    });

    const banLog = fetchedLogs.entries.first();

    if (!banLog) {
      throw new Error('Cannot find BanLog.');
    }

    const { executor, target, action, reason } = banLog;

    if (!executor || !target || action !== AuditLogEvent.MemberBanAdd) {
      throw new Error('Cannot find executor or target from the Audit Log.');
    }

    const executingMember = await ban.guild.members.fetch(executor.id);
    const modLog = await getTextChannelFromID(ban.guild, 'modLog');

    if (target.id === ban.user.id) {
      const banEmbed = new ModerationEmbedBuilder({
        target: ban.user,
        executor: executingMember,
        action: 'ban',
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
      client: guildBan.client,
      guild: guildBan.guild,
      errorMessage: `${inlineCode(
        'GuildBanAdd',
      )} Event triggered but the embed could not be sent.`,
    });
  }
});

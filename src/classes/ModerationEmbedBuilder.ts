import {
  EmbedBuilder,
  escapeMarkdown,
  GuildMember,
  inlineCode,
  User,
} from 'discord.js';
import { config } from '../config';

interface ModerationDescription {
  member: string;
  action: string;
  reason?: string;
  expiration?: string;
}

interface ModerationEmbedOptions {
  target: User;
  executor: GuildMember;
  action: 'kick' | 'ban' | 'unban';
  reason?: string | null;
  expiration?: number | null;
}

export class ModerationEmbedBuilder extends EmbedBuilder {
  constructor(options: ModerationEmbedOptions) {
    super();

    const { target, executor, action, reason, expiration } = options;

    const descriptionObject: ModerationDescription = {
      member: `**Member**: ${escapeMarkdown(target.username)} (${inlineCode(
        target.id,
      )})`,
      action: `**Action**: ${action}`,
    };

    if (reason) {
      descriptionObject.reason = `**Reason**: ${reason}`;
    }

    if (expiration) {
      descriptionObject.expiration = `**Expiration**: ${expiration}`;
    }

    const description = Object.values(descriptionObject).join('\n');

    let color: number;

    switch (action) {
      case 'kick':
        color = config.embedColors.orange;
        break;
      case 'ban':
        color = config.embedColors.red;
        break;
      case 'unban':
        color = config.embedColors.none;
        break;

      default:
        color = config.embedColors.none;
    }

    this.setColor(color);

    this.setAuthor({
      name: escapeMarkdown(executor.user.username),
      iconURL: executor.user.displayAvatarURL(),
    });

    this.setDescription(description);

    this.setFooter({
      text: 'Moderation Log',
    });

    this.setTimestamp(Date.now());
  }
}

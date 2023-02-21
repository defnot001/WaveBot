import { EmbedBuilder, inlineCode } from 'discord.js';
import { config } from '../config/config';
import type {
  IModerationDescription,
  IModerationEmbedOptions,
} from '../types/discord';

export class ModerationEmbedBuilder extends EmbedBuilder {
  constructor(options: IModerationEmbedOptions) {
    super();

    const { target, executor, action, reason, expiration } = options;

    const descriptionObject: IModerationDescription = {
      member: `**Member**: ${target.tag} (${inlineCode(target.id)})`,
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
      name: executor.user.tag,
      iconURL: executor.user.displayAvatarURL(),
    });

    this.setDescription(description);

    this.setFooter({
      text: 'Moderation Log',
    });

    this.setTimestamp(Date.now());
  }
}

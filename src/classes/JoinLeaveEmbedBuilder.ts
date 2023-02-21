import {
  EmbedBuilder,
  type APIEmbed,
  type EmbedData,
  type GuildMember,
  type PartialGuildMember,
} from 'discord.js';
import { config } from '../config/config';

export class JoinLeaveEmbedBuilder extends EmbedBuilder {
  constructor(
    member: GuildMember | PartialGuildMember,
    action: 'joined' | 'left',
    data?: EmbedData | APIEmbed,
  ) {
    super(data);

    this.setAuthor({
      name: member.user.tag,
      iconURL: member.user.displayAvatarURL(),
    });

    this.setColor(config.embedColors.none);

    this.setFooter({
      text: `User ${action}`,
    });

    this.setTimestamp(Date.now());
  }
}

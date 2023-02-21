import type { APIEmbedField, Client } from 'discord.js';
import { config } from '../config/config';
import { getEmojis } from '../util/components';

export const getTrialWelcomeMessage = (client: Client) => {
  const { owoKiwi, froghypers } = getEmojis(client);

  const messages: APIEmbedField[] = [
    {
      name: `${owoKiwi}  Server Tour`,
      value:
        'Please let us know, when you have time for the server tour. Make sure to take your time, it will most likely take around two hours. You will be whitelisted once the tour starts.',
    },
    {
      name: `${owoKiwi}  Mods & Resources`,
      value: `On WaveTech we share our waypoints with a mod that Earthcomputer wrote. You can find it in <#${config.channels.resources}>. Also make sure to put the mod for instamineable deepslate in your mods-folder.`,
    },
    {
      name: `${owoKiwi}  Server Info`,
      value: `You can find the IPs of our servers in <#${config.channels.serverInfo}>. There is also instructions on how to connect to KiwiTech using KCP. This is especially useful if you live outside of Europe and/or have unstable connection. Make sure to also read the SMP rules.`,
    },
    {
      name: `${owoKiwi}  Todo on KiwiTech`,
      value: `When you got your trial member role, we also gave you the Kiwi Inc. role. This role gets pinged from time to time to inform active SMP players about new projects or important things to do on our servers. You can check out our <#${config.channels.todo}> to see what needs to be done or bring your own ideas and discuss them with us.`,
    },
    {
      name: '\u200b',
      value: `*The most important thing on KiwiTech is to have fun! If you have any questions, you can always ask us anything in member channels or ingame. We are also active in VC!*  ${froghypers}`,
    },
  ];

  return messages;
};

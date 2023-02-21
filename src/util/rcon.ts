import { queryFull, RCON } from 'minecraft-server-util';
import { config } from '../config/config';
import type { TMobcap } from '../types/minecraft';
import { escapeMarkdown } from './helpers';

export const getServerStatus = async (host: string, port: number) => {
  return await queryFull(host, port, { enableSRV: true });
};

export const runRconCommand = async (
  host: string,
  rconPort: number,
  rconPassword: string,
  command: string,
) => {
  const rconClient: RCON = new RCON();

  await rconClient.connect(host, rconPort);
  await rconClient.login(rconPassword);

  const data = await rconClient.execute(command);

  await rconClient.close();
  return data;
};

export const queryMspt = async (
  host: string,
  rconPort: number,
  rconPassword: string,
) => {
  const command = `script run reduce(system_info('server_last_tick_times'), _a+_, 0)/100`;
  const data = await runRconCommand(host, rconPort, rconPassword, command);

  const splitNumbers = data.split(' ')[2];

  if (!splitNumbers) {
    throw new Error('Failed to get parse the data from the server.');
  }

  const mspt = Math.round(parseFloat(splitNumbers) * 100) / 100;

  let tps: number;

  if (mspt <= 50) {
    tps = 20;
  } else {
    tps = 1000 / mspt;
  }

  return { mspt, tps };
};

export const queryMobcap = async (
  host: string,
  rconPort: number,
  rconPassword: string,
) => {
  const dimensions = ['overworld', 'the_nether', 'the_end'];

  const mobcap: Record<string, string> = {};

  for (const dim of dimensions) {
    const query = `execute in minecraft:${dim} run script run get_mob_counts('monster')`;
    const res = await runRconCommand(host, rconPort, rconPassword, query);

    const data = res
      .replace(/^.{0,3}| \(.*\)|[[\]]/g, '')
      .replace(/, /g, ' | ');

    mobcap[dim as keyof TMobcap] = data;
  }

  const isMobcap = (obj: unknown): obj is TMobcap => {
    return (
      typeof obj === 'object' &&
      obj !== null &&
      'overworld' in obj &&
      'the_nether' in obj &&
      'the_end' in obj
    );
  };

  if (!isMobcap(mobcap)) {
    throw new Error('Failed to query mobcaps!');
  }
  return mobcap;
};

export const getWhitelist = async (
  host: string,
  rconPort: number,
  rconPasswd: string,
) => {
  const response = await runRconCommand(
    host,
    rconPort,
    rconPasswd,
    'whitelist list',
  );

  const noWhitelist = 'There are no whitelisted players';

  if (response === noWhitelist) {
    return [];
  }

  const splitResponse = response.split(': ')[1];

  if (!splitResponse) {
    throw new Error('Failed to parse the response correctly!');
  }

  return splitResponse
    .split(', ')
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .map((ign) => escapeMarkdown(ign));
};

export const queryScoreboard = async (scoreboardName: string) => {
  const { host, rconPort, rconPasswd } = config.mcConfig.smp;
  const query = `script run scores = []; for(system_info('server_whitelist'), put(scores, null, l('"' + _ + '"', scoreboard('${scoreboardName}', _)) )); print(scores)`;

  const data = await runRconCommand(host, rconPort, rconPasswd, query);
  const splitData = data.split(' =')[0];

  if (!splitData) {
    throw new Error('Failed to parse the data!');
  }

  const parsed = JSON.parse(splitData.replaceAll('null', '0')) as [
    string,
    number,
  ][];

  return parsed.filter(([, score]) => score !== 0);
};

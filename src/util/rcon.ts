import { queryFull, RCON } from 'minecraft-server-util';
import { config } from '../config/config';
import type { TMobcap, TScoreboards } from '../types/minecraft';

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
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
};

export const queryScoreboard = async (scoreboardName: TScoreboards) => {
  const { host, rconPort, rconPasswd } = config.mcConfig.smp;
  const query = `script run scores={};for(system_info('server_whitelist'), scores:_=scoreboard('${scoreboardName}', _));encode_json(scores)`;
  const data = await runRconCommand(host, rconPort, rconPasswd, query);

  const map = new Map<string, number>(
    Object.entries(JSON.parse(data.replace(/\(.+\)$/, '').replace(/^ =/, ''))),
  );

  map.forEach((val, name) => {
    if (val === null) {
      map.set(name, 0);
    }
  });

  return map;
};

export const customScoreboards = [
  'event_netherite_pick',
  'event_diamond_pick',
  'event_netherite_shovel',
  'event_diamond_shovel',
  'event_netherite_axe',
  'event_diamond_axe',
  'event_netherite_hoe',
  'event_diamond_hoe',
] as const;

export const getEventMap = async () => {
  let combinedMap: Map<string, number> = new Map();

  for (const name of customScoreboards) {
    const scoreMap = await queryScoreboard(name);

    for (const [name, score] of scoreMap) {
      combinedMap.set(name, (combinedMap.get(name) ?? 0) + score);
    }
  }

  return combinedMap;
};

export const getPlaytimeMap = async () => {
  const playtimeMap = await queryScoreboard('z-play_one_m+748');

  playtimeMap.forEach((ticks, name) =>
    playtimeMap.set(name, Math.floor(ticks / 20 / 3600) ?? 0),
  );

  return playtimeMap;
};

export const getPlayerScore = async (ign: string, scoreboard: TScoreboards) => {
  const { host, rconPort, rconPasswd } = config.mcConfig['smp'];

  const res = await runRconCommand(
    host,
    rconPort,
    rconPasswd,
    `scoreboard players get ${ign} ${scoreboard}`,
  );

  if (res === `Can't get value of ${scoreboard} for ${ign}; none is set`) {
    return 0;
  }

  if (res.startsWith(`${ign} has`)) {
    try {
      return parseInt(res.split(' ')[2] as string, 10);
    } catch (err) {
      return;
    }
  }

  return;
};

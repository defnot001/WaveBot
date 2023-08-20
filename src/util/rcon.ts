import { RCON } from 'minecraft-server-util';

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

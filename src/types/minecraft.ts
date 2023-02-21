import type { preconfig } from '../config/config';

export type TPowerAction = 'start' | 'stop' | 'restart' | 'kill';
export type TPowerActionNoStart = Omit<TPowerAction, 'start'>;
export type TServerChoice = keyof typeof preconfig.mcConfig;

export type MCServerSubcommand =
  | 'start'
  | 'stop'
  | 'restart'
  | 'kill'
  | 'stats';

export type TMCServerConfig = {
  readonly host: string;
  readonly port: number;
  readonly serverId: string;
  readonly rconPort: number;
  readonly rconPasswd: string;
  readonly operator: boolean;
  readonly backupLimit: number;
};

export type TMobcap = {
  overworld: string;
  the_nether: string;
  the_end: string;
};

export type TAvatarOptions =
  | '/avatars/'
  | '/renders/head/'
  | '/renders/body/'
  | '/skins/';

export type TMojangUUIDResponse = {
  name: string;
  id: string;
};

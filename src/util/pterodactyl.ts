import { PteroClient } from 'ptero-client';
import { config } from '../config/config';
import type { TServerChoice } from '../types/minecraft';

export const ptero = new PteroClient({
  baseURL: config.ptero.url,
  apiKey: config.ptero.apiKey,
});

export async function getModFiles(serverChoice: TServerChoice) {
  const modFiles = await (
    await ptero.files.list(config.mcConfig[serverChoice].serverId, '/mods')
  ).filter((mod) => {
    return mod.is_file;
  });

  return modFiles;
}

async function getMods(serverChoice: TServerChoice) {
  const modFiles = await getModFiles(serverChoice);

  return {
    enabled: modFiles.filter((mod) => {
      return mod.name.endsWith('.jar');
    }),
    disabled: modFiles.filter((mod) => {
      return mod.name.endsWith('.disabled');
    }),
  };
}

export async function getModNames(serverChoice: TServerChoice) {
  const mods = await getMods(serverChoice);

  return {
    enabled: mods.enabled.map((mod) => mod.name.replace('.jar', '')),
    disabled: mods.disabled.map((mod) => mod.name.replace('.disabled', '')),
  };
}

export async function getBackups(serverChoice: TServerChoice) {
  const backups = await ptero.backups.list(
    config.mcConfig[serverChoice].serverId,
  );

  const backupMap = new Map(
    backups.data.reverse().map((backup) => [backup.name, backup]),
  );

  return {
    backups: backupMap,
    meta: backups.meta,
  };
}

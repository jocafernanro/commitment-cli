import { DB_PATH, DB_TEAMS_PATH } from "../config.ts";
import { User } from "../models/user.ts";
import { Team } from "../models/teams.ts"
import { readJson } from "https://raw.githubusercontent.com/denoland/deno/v1.0.0-rc2/std/fs/read_json.ts";

export const fetchData = async (): Promise<any[]> => {
  const data = await readJson(DB_PATH) as any[];
  return data;
};

export const fetchTeamsData = async (): Promise<any[]> => {
  const data = await readJson(DB_TEAMS_PATH) as any[];
  return data;
};

export const persistData = async (data: User[]): Promise<void> => {
  const encoder = new TextEncoder();
  await Deno.writeFile(DB_PATH, encoder.encode(JSON.stringify(data)));
};

export const persistTeamsData = async (data: Team[]): Promise<void> => {
  const encoder = new TextEncoder();
  await Deno.writeFile(DB_TEAMS_PATH, encoder.encode(JSON.stringify(data)));
};

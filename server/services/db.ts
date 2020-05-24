import { DB_PATH } from "../config.ts";
import { User } from "../models/user.ts";
import { readJson } from 'https://raw.githubusercontent.com/denoland/deno/v1.0.0-rc2/std/fs/read_json.ts'

export const fetchData = async (): Promise<any[]> => {
  try {
    const data = await readJson(DB_PATH) as any[];
    return data;
  } catch (err) {
    console.log(err)
  }

  const data = await readJson(DB_PATH) as any[];
  return data;
};

export const persistData = async (data: User[]): Promise<void> => {
  const encoder = new TextEncoder();
  await Deno.writeFile(DB_PATH, encoder.encode(JSON.stringify(data)));
};

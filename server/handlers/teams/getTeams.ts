import { Response } from "https://deno.land/x/oak/mod.ts";
import { getTeams } from "../../services/teams.ts";

export default async ({ response }: { response: Response }) => {
  response.body = await getTeams();
};
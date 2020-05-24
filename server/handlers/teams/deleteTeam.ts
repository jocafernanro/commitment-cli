import { Response, RouteParams } from "https://deno.land/x/oak/mod.ts";
import { deleteTeam, getTeam } from "../../services/teams.ts";

export default async ({
  params,
  response
}: {
  params: RouteParams;
  response: Response;
}) => {
  const teamId = params.id;

  if (!teamId) {
    response.status = 400;
    response.body = { msg: "Invalid team id" };
    return;
  }

  const foundTeam = await getTeam(teamId);
  if (!foundTeam) {
    response.status = 404;
    response.body = { msg: `Team with ID ${teamId} not found` };
    return;
  }

  await deleteTeam(teamId);
  response.body = { msg: "Team deleted" };
};
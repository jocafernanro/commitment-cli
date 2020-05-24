import { Request, Response } from "https://deno.land/x/oak/mod.ts";
import { updateTeam } from "../../services/teams.ts";

export default async ({
  params,
  request,
  response
}: {
  params: any;
  request: Request;
  response: Response;
}) => {
  const teamId = params.id;

  if (!teamId) {
    response.status = 400;
    response.body = { msg: "Invalid team id" };
    return;
  }

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid team data" };
    return;
  }

  const {
    value: { name }
  } = await request.body();

  await updateTeam(teamId, { name });

  response.body = { msg: "Team updated" };
};
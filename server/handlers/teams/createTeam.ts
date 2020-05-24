import { Request, Response } from "https://deno.land/x/oak/mod.ts";
import { createTeam } from "../../services/teams.ts";

export default async ({
  request,
  response
}: {
  request: Request;
  response: Response;
}) => {
    
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid team data" };
    return;
  }

  const {
    value: { name }
  } = await request.body();
console.log(await request.body())
  if (!name) {
    response.status = 422;
    response.body = { msg: "Incorrect team data. Name is required" };
    return;
  }

  const teamId = await createTeam({ name });

  response.body = { msg: "Team created", teamId };
};
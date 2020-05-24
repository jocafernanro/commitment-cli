import { Request, Response } from "https://deno.land/x/oak/mod.ts";
import { createUser } from "../../services/users.ts";

export default async ({
  request,
  response
}: {
  request: Request;
  response: Response;
}) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid user data" };
    return;
  }

  const {
    value: { name }
  } = await request.body();

  if (!name) {
    response.status = 422;
    response.body = { msg: "Incorrect user data. Name is required" };
    return;
  }

  const userId = await createUser({ name });

  response.body = { msg: "User created", userId };
};
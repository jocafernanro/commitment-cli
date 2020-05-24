import { Router } from "https://deno.land/x/oak/mod.ts";

import getUsers from "./handlers/users/getUsers.ts";
import getUserDetails from "./handlers/users/getUserDetails.ts";
import createUser from "./handlers/users/createUser.ts";
import updateUser from "./handlers/users/updateUser.ts";
import deleteUser from "./handlers/users/deleteUser.ts";

const router = new Router();

router
  .get("/users", getUsers)
  .get("/users/:id", getUserDetails)
  .post("/users", createUser)
  .put("/users/:id", updateUser)
  .delete("/users/:id", deleteUser);

export default router;
import { Router } from "https://deno.land/x/oak/mod.ts";

import getUsers from "./handlers/users/getUsers.ts";
import getUserDetails from "./handlers/users/getUserDetails.ts";
import createUser from "./handlers/users/createUser.ts";
import updateUser from "./handlers/users/updateUser.ts";
import deleteUser from "./handlers/users/deleteUser.ts";
import getTeams from "./handlers/teams/getTeams.ts";
import getTeamDetails from "./handlers/teams/getTeamDetails.ts";
import createTeam from "./handlers/teams/createTeam.ts";
import updateTeam from "./handlers/teams/updateTeam.ts";
import deleteTeam from "./handlers/teams/deleteTeam.ts";

const router = new Router();

//users
router
  .get("/users", getUsers)
  .get("/users/:id", getUserDetails)
  .post("/users", createUser)
  .put("/users/:id", updateUser)
  .delete("/users/:id", deleteUser);

//teams
router
  .get("/teams", getTeams)
  .get("/teams/:id", getTeamDetails)
  .post("/teams", createTeam)
  .put("/teams/:id", updateTeam)
  .delete("/teams/:id", deleteTeam);

export default router;

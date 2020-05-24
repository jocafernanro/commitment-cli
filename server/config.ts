const env = Deno.env.toObject();

export const APP_HOST = env.APP_HOST || "127.0.0.1";
export const APP_PORT = env.APP_PORT || 4000;
export const DB_PATH = env.DB_PATH || "C:/Users/jocafernanro/repos/commitment-cli/server/db/users.json";
export const DB_TEAMS_PATH = env.DB_TEAMS_PATH || "C:/Users/jocafernanro/repos/commitment-cli/server/db/teams.json";
import { fetchTeamsData, persistTeamsData, persistData } from "./db.ts";
import { Team } from "../models/teams.ts";
import createId from "../services/createId.ts";

type TeamData = Pick<Team, "name">;

export const getTeams = async (): Promise<Team[]> => {
  const teams = await fetchTeamsData();

  // sort by name
  return teams.sort((a, b) => a.name.localeCompare(b.name));
};

export const getTeam = async (teamId: string): Promise<Team | undefined> => {
  const team = await fetchTeamsData();

  return team.find(({ id }) => id === teamId);
};

export const createTeam = async (teamData: TeamData): Promise<string> => {
  const teams = await fetchTeamsData();
console.log(teams)
  const newTeam: Team = {
    id: createId(),
    name: String(teamData.name),
    added: new Date()
  };

  await persistTeamsData([...teams, newTeam]);

  return newTeam.id;
};

export const updateTeam = async (
  teamId: string,
  teamData: TeamData
): Promise<void> => {
  const team = await getTeam(teamId);

  if (!team) {
    throw new Error("Team not found");
  }

  const updatedTeam = {
    ...team,
    name: teamData.name !== undefined ? String(teamData.name) : team.name,
  };

  const teams = await fetchTeamsData();
  const filteredTeams = teams.filter(team => team.id !== teamId);

  persistTeamsData([...filteredTeams, updatedTeam]);
};

export const deleteTeam = async (teamId: string): Promise<void> => {
  const teams = await getTeams();
  const filteredTeams = teams.filter(team => team.id !== teamId);

  persistTeamsData(filteredTeams);
};
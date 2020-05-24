import { Command } from "https://deno.land/x/cmd/mod.ts";
import Ask from "https://deno.land/x/ask/mod.ts";

const program = new Command("Commitment cli");
const ask = new Ask();

program
  .version("0.1.0")
  .option("create [item]", "It creates a new item (user, teams, etc)")

program
  .command("create [item]")
  .description("run setup commands for all envs")
  .option("-s, --setup_mode [mode]", "Which setup mode to use")
  .action(async (item: string) => {
    const answers = await ask.prompt([
      {
        name: "name",
        type: "input",
        message: "Name of the team:",
      },
    ]);
    console.log(answers);
    const response = await fetch('http://localhost:4000/teams', {
        method: 'POST', // or 'PUT'
        body: `{"name":"${answers['name']}"}`, // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      console.log(response)
  });

program.parse(Deno.args, undefined);

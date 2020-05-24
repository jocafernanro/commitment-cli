import { parse } from "https://deno.land/std/flags/mod.ts";
import * as inquirer from 'https://unpkg.com/inquirer@7.1.0/lib/inquirer.js'


const { args } = Deno;

const parsedArgs = parse(args);

cli(parsedArgs)

function displayHelpMsg(): string {
  return `
    -> commitment-cli v1.0
    run the cli command with the following options:
    create: create new item
    `;
}

function hasArgument(rawArgs:string[], arg: string){
    return !!rawArgs.find((rawArg: string) => rawArg === arg) || false
}

function parseArgumentsIntoOptions(rawArgs: string[]) {

    return {
        create: hasArgument(rawArgs, 'create'),
        team: hasArgument(rawArgs, 'team'),
        user: hasArgument(rawArgs, 'user')
    }
}

function cli(rawArgs: any) {
    console.log(rawArgs)
    const options = parseArgumentsIntoOptions(rawArgs['_'])
    console.log(options)
    Object.assign(options, )
}



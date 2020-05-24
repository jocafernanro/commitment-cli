#!/usr/bin/env -S deno run --unstable

import { parse } from "https://deno.land/std/flags/mod.ts";
import * as inquirer from 'https://unpkg.com/inquirer@7.1.0/lib/inquirer.js'
import { Input, Confirm, Toggle, Number, Select, Checkbox } from 'https://deno.land/x/cliffy/prompt.ts';

const name = await Input.prompt( `What's your name?` );

const confirm = await Confirm.prompt( {
    message: 'Would you like to buy a pizza?'
} );

const toggle = await Toggle.prompt( {
    message: 'Would you like to buy a pizza?'
} );

const input = await Input.prompt( {
    message: `What's your name?`
} );

const number = await Number.prompt( {
    message: 'How old are you?'
} );

const select = await Select.prompt( {
    message: 'Select your pizza?',
    options: [ 'margherita', 'caprese', Select.separator( 'Special' ), 'diavola' ]
} );

const checkbox = await Checkbox.prompt( {
    message: `Du you like any extra's?`,
    options: [ 'mozzarella', 'olive', Checkbox.separator( 'Special' ), 'buffalo mozzarella' ]
} );
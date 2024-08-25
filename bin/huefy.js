#!/usr/bin/env node
'use strict'

import huefy from '../dist/cjs/index.js'
import { fileURLToPath } from 'url'
import { Command } from 'commander/esm.mjs'
import { createRequire } from 'module';
import path from 'path';

// Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);
const packageJson = require(path.join(__dirname, '../package.json'));

const program = new Command()
program
    .usage('<color1> <color2> <percentage> [options]')
    .version(packageJson.version)
    .option('-f, --format [format]', 'Output format [cmyk, rgb, rgba, hex, hsl, hsv, cmyk]')
    .parse(process.argv)

// console.log(program)
const options = {
    output: program.getOptionValue('format') || 'hex',
}

if (program.args.length || options.message) {
    try {
        console.log(huefy.default(program.args[0], program.args[1], parseFloat(program.args[2]), {as:options.output})) //eslint-disable-line no-console
    } catch (e) {
        console.error(e) //eslint-disable-line no-console
        process.exit(1) //eslint-disable-line no-process-exit
    }
}
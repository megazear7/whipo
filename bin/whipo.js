#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import WhipoInit from './whipo-init.js';

yargs(hideBin(process.argv))
  .command('gen [init]', 'Initialize a new project', yargs => {
    return yargs
      .positional('init', {
        describe: 'The name of the project',
        default: 'whipo-example'
      })
  }, argv => {
      new WhipoInit(argv).run();
  })
  .option('service-worker', {
    alias: 'sw',
    type: 'boolean',
    description: 'Include a service worker'
  })
  .parse()

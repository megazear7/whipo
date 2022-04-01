#!/usr/bin/env node

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const WhipoInit = require('./whipo-init.js');

yargs(hideBin(process.argv))
  .command('init [name]', 'Initialize a new project', yargs => {
    return yargs
      .positional('name', {
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
  .option('api-keys', {
    alias: 'ak',
    type: 'boolean',
    description: 'Include a git ignored env file for api keys'
  })
  .parse()

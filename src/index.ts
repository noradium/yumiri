#!/usr/bin/env node

import * as commander from 'commander';
import getAction from './action';

let argService: string;

commander
  .version('1.0.0')
  .arguments('<service>')
  .action((service) => {
    argService = service;
  })
  .parse(process.argv);

if (typeof argService === 'undefined') {
  console.error('invalid service');
  process.exit(1);
}

const action = getAction(argService);

if (!action) {
  console.error('invalid service');
  process.exit(1);
}

action({})
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });

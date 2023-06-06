#!/usr/bin/env node
/* eslint-disable no-console */
import { program } from 'commander';

program
  .name('Split my eat')
  .arguments('<sex> <age> <height> <weight>')
  .description('Calculates the required amount of food and the daily calorie intake')
  .version('1.0.0')
  .action((sex, age, height, weight) => {
    console.log(sex, age, height, weight);
  })
  .parse();

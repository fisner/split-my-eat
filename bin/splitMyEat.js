#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
import getRation from '../index.js';

const getLogo = (text) => chalk.green(
  figlet.textSync(text, {
    font: 'Soft',
    horizontalLayout: 'default',
    verticalLayout: 'default',
  }),
);

const getUserInfo = () => {
  const questions = [
    {
      name: 'gender',
      type: 'list',
      message: 'What is your gender?',
      choices: ['male', 'female'],
    },
    {
      name: 'age',
      type: 'number',
      message: 'What is your age?',
    },
    {
      name: 'height',
      type: 'number',
      message: 'What is your height?',
    },
    {
      name: 'weight',
      type: 'number',
      message: 'What is your weight?',
    },
  ];

  return inquirer.prompt(questions);
};

const outputQuestion = () => {
  const questions = [
    {
      name: 'answer',
      type: 'list',
      message: 'What information do you want?',
      choices: ['calories', 'meal plan', 'calories and meal plan', 'exit'],
      loop: false,
    },
  ];

  return inquirer.prompt(questions);
};

const showMessage = (message) => {
  console.log(chalk.green.bold(message));
};

const output = async (userData) => {
  const { answer } = await outputQuestion();
  switch (answer) {
    case 'calories':
      showMessage(userData.formattedCalories);
      output(userData);
      break;
    case 'meal plan':
      showMessage(userData.formattedRation);
      output(userData);
      break;
    case 'calories and meal plan':
      showMessage(`${userData.formattedCalories}\n\n${userData.formattedRation}`);
      output(userData);
      break;
    case 'exit':
    default:
      break;
  }
};

const run = async () => {
  const logo = getLogo('Split my eat');
  console.log(`${logo}\n`);

  const userInfo = await getUserInfo();
  const {
    gender,
    age,
    height,
    weight,
  } = userInfo;
  const userData = getRation(gender, age, height, weight);
  output(userData);
};

run();

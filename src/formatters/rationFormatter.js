import Table from 'cli-table';
import chalk from 'chalk';

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const getFormattedFood = (food) => {
  const foodName = Object.keys(food)[0];
  const foodWeight = food[foodName];

  return `${capitalize(foodName)}: ${foodWeight}g`;
};

const rationFormatter = (rationData) => {
  const table = new Table();

  const tableHeaders = ['Day', 'Protein food', 'Fat food', 'Carbs food']
    .map((text) => `${chalk.green.bold(text)}`);
  table.push(tableHeaders);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const indent = '  ';
  for (let i = 0; i < days.length; i += 1) {
    const day = `${days[i]}${indent}`;

    const { proteinFood, fatFood, carbsFood } = rationData[i];
    const formattedProteinFood = `${getFormattedFood(proteinFood)}${indent}`;
    const formattedFatFood = `${getFormattedFood(fatFood)}${indent}`;
    const formattedCarbsFood = `${getFormattedFood(carbsFood)}${indent}`;

    table.push([day, formattedProteinFood, formattedFatFood, formattedCarbsFood]);
  }

  return table;
};

export default rationFormatter;

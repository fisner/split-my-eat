import Table from 'cli-table';
import chalk from 'chalk';

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const getFoodList = (food) => Object.keys(food).reduce((acc, item) => {
  const foodName = capitalize(item);
  const foodWeight = food[item];
  return [...acc, `${foodName}: ${foodWeight}g`];
}, []);

const rationFormatter = (rationData, foodData) => {
  const table = new Table();

  const tableHeaders = ['Day', 'Protein food', 'Fat food', 'Carbs food']
    .map((text) => `${chalk.blue(text)}`);
  table.push(tableHeaders);

  const proteinList = getFoodList(rationData.proteinFood, 'protein', foodData);
  const fatList = getFoodList(rationData.fatFood, 'fat', foodData);
  const carbsList = getFoodList(rationData.carbsFood, 'carbs', foodData);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const indent = '  ';
  for (let i = 0; i < days.length; i += 1) {
    const day = `${days[i]}${indent}`;
    const proteinFood = `${proteinList[0]}${indent}`;
    const fatFood = `${fatList[0]}${indent}`;
    const carbsFood = `${carbsList[0]}${indent}`;
    table.push([day, proteinFood, fatFood, carbsFood]);
  }

  return table;
};

export default rationFormatter;

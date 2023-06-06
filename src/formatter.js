import getFoodData from './utilities/read-data.js';

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const getFoodList = (food, foodType, foodData) => Object.keys(food).reduce((acc, item) => {
  const foodName = capitalize(foodData[foodType][item].name);
  const foodWeight = food[item];
  return [...acc, `${foodName}: ${foodWeight}г`];
}, []);

const createTableRow = (data, cellLength, tableBorder) => data.reduce((acc, item) => {
  if (item === undefined) {
    const cell = `${' '.repeat(cellLength)}${tableBorder}`;
    return `${acc}${cell}`;
  }
  const cellIndent = ' '.repeat(cellLength - item.length);
  const cell = `${item}${cellIndent}${tableBorder}`;
  return `${acc}${cell}`;
}, tableBorder);

const createTable = (data, foodData) => {
  const indent = 2;
  const tableBorder = '|';

  const proteinList = getFoodList(data.proteinFood, 'protein', foodData);
  const fatList = getFoodList(data.fatFood, 'fat', foodData);
  const carbsList = getFoodList(data.carbsFood, 'carbs', foodData);

  const cellLength = Math.max(...[...proteinList, ...fatList, ...carbsList]
    .map((item) => item.length)) + indent;

  const tableHeaders = createTableRow(['Белки', 'Жиры', 'Углеводы'], cellLength, tableBorder);
  const columnCount = 3;
  const missingBorder = 2;
  const tableBreakline = `${tableBorder}${'-'.repeat(cellLength * columnCount + missingBorder)}${tableBorder}`;

  const tableRowsCount = Math.max(...[proteinList, fatList, carbsList].map((item) => item.length));
  const tableRows = [];
  for (let i = 0; i < tableRowsCount; i += 1) {
    const rowData = [proteinList[i], fatList[i], carbsList[i]];
    const newRow = createTableRow(rowData, cellLength, tableBorder);
    tableRows.push(newRow);
  }

  return `${tableHeaders}\n${tableBreakline}\n${tableRows.join('\n')}`;
};

const formatter = (data) => {
  const foodData = getFoodData();
  const calories = `Калории: ${data.calories}`;
  const macro = `Белки: ${data.protein}, жиры: ${data.fat}, углеводы: ${data.carbs}`;
  const macroRatio = `Соотношение белки/жиры/углеводы: ${data.macroRatio}`;
  const tableLabel = 'Необходимое количество еды каждого вида в день:';
  const table = createTable(data, foodData);

  return `${calories}\n${macro}\n${macroRatio}\n\n${tableLabel}\n${table}`;
};

export default formatter;

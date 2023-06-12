import getFoodData from '../utilities/getFoodData.js';

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const getFoodList = (food) => Object.keys(food).reduce((acc, item) => {
  const foodName = capitalize(item);
  const foodWeight = food[item];
  return [...acc, `${foodName}: ${foodWeight}g`];
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

  const tableHeaders = createTableRow(['Protein', 'Fat', 'Carbs'], cellLength, tableBorder);
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

const rationFormatter = (rationData) => {
  const foodData = getFoodData();
  const tableLabel = 'One week balanced meal plan:';
  const table = createTable(rationData, foodData);

  return `${tableLabel}\n${table}`;
};

export default rationFormatter;

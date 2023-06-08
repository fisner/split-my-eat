import getFoodData from './utilities/getFoodData.js';

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

const formattSex = (sex) => {
  const male = ['male', 'm', 'м', 'муж', 'мужской', 'мужчина', 'mr', 'boy', 'man'];
  const female = ['female', 'f', 'ж', 'жен', 'женский', 'женщина', 'ms', 'mrs', 'miss', 'girl', 'woman'];
  if (male.includes(sex)) {
    return 'мужской';
  }
  if (female.includes(sex)) {
    return 'женский';
  }
  return '(-_-)';
};

const formatter = (sex, age, height, weight, caloriesData, rationData) => {
  const foodData = getFoodData();
  const userData = `Пол: ${formattSex(sex)}, возраст: ${age}, рост: ${height}, вес: ${weight}`;
  const calories = `Калории: ${caloriesData.calories}`;
  const macro = `Белки: ${caloriesData.protein}, жиры: ${caloriesData.fat}, углеводы: ${caloriesData.carbs}`;
  const macroRatio = `Соотношение белки/жиры/углеводы: ${caloriesData.macroRatio}`;
  const tableLabel = 'Необходимое количество еды каждого вида в день:';
  const table = createTable(rationData, foodData);

  return `${userData}\n\n${calories}\n${macro}\n${macroRatio}\n\n${tableLabel}\n${table}`;
};

export default formatter;

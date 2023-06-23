import fsp from 'fs/promises';
import getFoodDataPath from './getFoodDataPath.js';

const arrayToObj = (array) => {
  const iter = (count, acc) => {
    if (count === array.length) {
      return acc;
    }

    const [type, foodType, name, protein, fat, carbs] = array[count];
    const foodList = {
      [type]: {
        ...acc[type] ?? 0,
        [foodType]: {
          name, protein, fat, carbs,
        },
      },
    };

    return iter(count + 1, { ...acc, ...foodList });
  };

  return iter(0, {});
};

const updateFoodData = async () => {
  const spreadsheetId = '1tWgNDgtSSRgw4Gn4ADC1aAD2dMyqvio3oFwMJbyLBmU';
  const apiKey = 'AIzaSyB7qLUEJ9i7EikKrQXV1GJkzRoPG7Dx_W4';
  const sheetName = 'Food';

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
  await fetch(url)
    .then((response) => response.json())
    .then((json) => arrayToObj(json.values))
    .then((data) => fsp.writeFile(getFoodDataPath(), JSON.stringify(data, null, 2)))
    .catch(() => false);
};

export default updateFoodData;

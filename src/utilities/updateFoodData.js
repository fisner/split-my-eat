import fsp from 'fs/promises';
import getFoodDataPath from './getFoodDataPath.js';

const arrayToObj = (array) => {
  const result = {};
  let activeObjIndex;
  array.forEach((food, index) => {
    if (!food.length) return;
    if (food.length === 1) {
      result[food[0]] = {};
      activeObjIndex = index;
    } else {
      const key = array[activeObjIndex][0];
      food.shift();
      const [keyName, name, protein, fat, carbs, calories] = food;
      result[key][keyName] = {
        name,
        protein: parseFloat(protein, 10),
        fat: parseFloat(fat, 10),
        carbs: parseFloat(carbs, 10),
        calories: parseFloat(calories, 10),
      };
    }
  });
  return result;
};

const updateFoodData = async () => {
  const spreadsheetId = '1ELzGa3ouIlFCreI_bANJL6glRJGWudZaj2c4pdU53JU';
  const apiKey = 'AIzaSyDA5qEiKH3nIQbODV4UcNmYgL6Un-UVW08';
  const sheetName = 'Food';

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
  await fetch(url)
    .then((response) => response.json())
    .then((json) => arrayToObj(json.values))
    .then((data) => fsp.writeFile(getFoodDataPath(), JSON.stringify(data, null, 4)))
    .catch(() => false);
};

export default updateFoodData;

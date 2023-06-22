import fs from 'fs';

function getFood() {
  function arrayToObj(array) {
    const res = {};
    let activeObjIndex;
    array.forEach((food, index) => {
      if (!food.length) return;
      if (food.length === 1) {
        res[food[0]] = {};
        activeObjIndex = index;
      } else {
        const key = array[activeObjIndex][0];
        food.shift();
        const [keyName, name, protein, fat, carbs, calories] = food;
        res[key][keyName] = {
          name,
          protein: parseFloat(protein, 10),
          fat: parseFloat(fat, 10),
          carbs: parseFloat(carbs, 10),
          calories: parseFloat(calories, 10),
        };
      }
    });

    return res;
  }

  function getData() {
    const spreadsheetId = '1ELzGa3ouIlFCreI_bANJL6glRJGWudZaj2c4pdU53JU';
    const apiKey = 'AIzaSyDA5qEiKH3nIQbODV4UcNmYgL6Un-UVW08';
    const sheetName = 'Food';

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const foods = arrayToObj(data.values);
          resolve(foods);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  let foodData;
  getData()
    .then((foods) => {
      foodData = JSON.stringify(foods);
      const filePath = 'data/food.json';
      fs.writeFile(filePath, foodData, (err) => {
        if (err) {
          console.error('Ошибка при записи файла:', err);
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

export default getFood;

import getFoodData from './src/utilities/read-data.js';

const calculateFood = (obj) => {
  const { calories, protein, fat, carbs, macroRatio } = obj;
  const foodData = getFoodData(); // Получение данных о продуктах
  const getFoodCount = (type, count, foodList) => {
    const result = {};
    const totalGrams = (count * 100) / foodData[type][foodList];
    for (const food in foodData[type]) {
      result[food] = Math.round((count * 100) / foodList[food].protein).toFixed(); // Вычисление граммовки для каждого продукта
    }
    return result;
  };
  const proteinFood = getFoodCount('protein', protein, foodData.protein);
  const fatFood = getFoodCount('fat', fat, foodData.fat);
  const carbsFood = getFoodCount('carbs', carbs, foodData.carbs);
  const result = {
    calories,
    protein,
    fat,
    carbs,
    macroRatio,
    proteinFood,
    fatFood,
    carbsFood,
  };
  return result;
};

const obj = {
  calories: 2100,
  protein: 85,
  fat: 20,
  carbs: 150,
  macroRatio: '40-30-30',
};

const testCalculateData = calculateFood(obj);
console.log(testCalculateData);

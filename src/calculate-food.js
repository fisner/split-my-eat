import getFoodData from './utilities/read-data.js';
import calculateCalories from './calculateCalories.js';

const calculateFood = (calculateCalories) => {
  const { calories, protein, fat, carbs, macroRatio } = obj;
  const foodData = getFoodData();
  const getFoodCount = (type, count, foodList) => {
    const result = {};
    const totalGrams = (count * 100) / foodData[type][foodList];
    for (const food in foodData[type]) {
      result[food] = Math.round((count * 100) / foodList[food][type].toFixed();
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

const CalculateData = calculateFood(calculateCalories);
console.log(CalculateData);

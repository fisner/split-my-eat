/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

import getFoodData from './utilities/read-data.js';

const foodData = getFoodData();

const getFoodCount = (type, count, foodList) => {
  const result = {};
  for (const food in foodData[type]) {
    result[food] = Math.round((count * 100) / foodList[food][type]);
  }
  return result;
};

const calculateFood = (obj) => {
  const {
    calories, protein, fat, carbs, macroRatio,
  } = obj;
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
export default calculateFood;

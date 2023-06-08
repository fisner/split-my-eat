/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import getFoodData from './utilities/getFoodData.js';

const foodData = getFoodData();

const getFoodCount = (type, count, foodList) => {
  const result = {};
  for (const food in foodData[type]) {
    result[food] = Math.round((count * 100) / foodList[food][type]);
  }
  return result;
};

const calculateRation = (calories) => {
  const { protein, fat, carbs } = calories;
  const proteinFood = getFoodCount('protein', protein, foodData.protein);
  const fatFood = getFoodCount('fat', fat, foodData.fat);
  const carbsFood = getFoodCount('carbs', carbs, foodData.carbs);
  const result = {
    proteinFood,
    fatFood,
    carbsFood,
  };
  return result;
};
export default calculateRation;

import getFoodData from './utilities/getFoodData.js';

const getFoodCount = (type, count, foodList) => {
  const result = Object.keys(getFoodData()[type]).reduce((acc, food) => {
    acc[food] = Math.round((count * 100) / foodList[food][type]);
    return acc;
  }, {});
  return result;
};

const calculateRation = (calories) => {
  const { protein, fat, carbs } = calories;
  const proteinFood = getFoodCount('protein', protein, getFoodData().protein);
  const fatFood = getFoodCount('fat', fat, getFoodData().fat);
  const carbsFood = getFoodCount('carbs', carbs, getFoodData().carbs);
  const result = {
    proteinFood,
    fatFood,
    carbsFood,
  };
  return result;
};

export default calculateRation;

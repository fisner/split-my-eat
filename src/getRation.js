import getFoodData from './utilities/getFoodData.js';
import calculateCalories from './calculateCalories.js';
import calculateRation from './calculateRation.js';
import caloriesFormatter from './formatters/caloriesFormatter.js';
import rationFormatter from './formatters/rationFormatter.js';

const getRation = (gender, age, height, weight, physicalActivity) => {
  const caloriesData = calculateCalories(gender, age, height, weight, physicalActivity);
  const foodData = getFoodData();
  const rationData = calculateRation(caloriesData, foodData);
  const formattedCalories = caloriesFormatter(caloriesData);
  const formattedRation = rationFormatter(rationData);

  return { formattedCalories, formattedRation };
};

export default getRation;

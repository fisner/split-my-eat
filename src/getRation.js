import getFoodData from './utilities/getFoodData.js';
import calculateCalories from './calculateCalories.js';
import calculateRation from './calculateRation.js';
import caloriesFormatter from './formatters/caloriesFormatter.js';
import rationFormatter from './formatters/rationFormatter.js';

const getRation = (gender, age, height, weight) => {
  const caloriesData = calculateCalories(gender, age, height, weight);
  const foodData = getFoodData();
  const rationData = calculateRation(caloriesData);
  const formattedCalories = caloriesFormatter(caloriesData);
  const formattedRation = rationFormatter(rationData, foodData);
  return { formattedCalories, formattedRation };
};

export default getRation;

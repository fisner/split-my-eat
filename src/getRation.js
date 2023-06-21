import getFoodData from './utilities/getFoodData.js';
import calculateCalories from './calculateCalories.js';
import calculateRation from './calculateRation.js';
import caloriesFormatter from './formatters/caloriesFormatter.js';
import rationFormatter from './formatters/rationFormatter.js';

const getRation = (gender, age, height, weight, physicalActivity, formula) => {
  const caloriesData = calculateCalories(gender, age, height, weight, physicalActivity, formula);
  const rationData = calculateRation(caloriesData, getFoodData());
  const formattedCalories = caloriesFormatter(caloriesData);
  const formattedRation = rationFormatter(rationData);

  return { formattedCalories, formattedRation };
};

export default getRation;

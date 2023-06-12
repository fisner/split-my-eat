import calculateCalories from './calculateCalories.js';
import calculateRation from './calculateRation.js';
import caloriesFormatter from './formatters/caloriesFormatter.js';
import rationFormatter from './formatters/rationFormatter.js';

const getRation = (gender, age, height, weight) => {
  const caloriesData = calculateCalories(gender, age, height, weight);
  const rationData = calculateRation(caloriesData);
  const formattedCalories = caloriesFormatter(gender, age, height, weight, caloriesData);
  const formattedRation = rationFormatter(rationData);
  return { formattedCalories, formattedRation };
};

export default getRation;

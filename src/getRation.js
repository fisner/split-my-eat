import calculateCalories from './calculateCalories.js';
import calculateRation from './calculateRation.js';
import formatter from './formatter.js';

const getRation = (gender, age, height, weight) => {
  const caloriesData = calculateCalories(gender, age, height, weight);
  const rationData = calculateRation(caloriesData);
  const formattedData = formatter(gender, age, height, weight, caloriesData, rationData);
  return formattedData;
};

export default getRation;

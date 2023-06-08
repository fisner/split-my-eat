import calculateCalories from './calculateCalories.js';
import calculateRation from './calculateRation.js';
import formatter from './formatter.js';

const getRation = (sex, age, height, weight) => {
  const caloriesData = calculateCalories(sex, age, height, weight);
  const rationData = calculateRation(caloriesData);
  const formattedData = formatter(sex, age, height, weight, caloriesData, rationData);
  return formattedData;
};

export default getRation;

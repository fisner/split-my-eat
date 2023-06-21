import checkGender from './checkGender.js';
import calculateMacroRatio from './calculateMacroRatio.js';

const activityMultiplier = {
  'no activity': 1.2,
  '1-3 light activities per week': 1.375,
  '3-5 moderate activities per week': 1.55,
  '5-6 moderate activities per week': 1.725,
  '7 vigorous activities per week': 1.9,
};

function calculateMifflin(gender, age, height, weight, physicalActivity) {
  const maleBrmConstant = 10;
  const femaleBrmConstant = 161;
  const heightConstant = 6.25;
  const ageConstant = 5;
  const proteinConstant = 1.2;
  const fatConstant = 0.25;
  const carbsConstant = 4;

  const isMale = checkGender(gender);

  const bmr = isMale

    ? (maleBrmConstant * weight) + (heightConstant * height)
     - (ageConstant * age) + 5 * (activityMultiplier[physicalActivity])
    : (femaleBrmConstant * weight) + (heightConstant * height)
     - (ageConstant * age) - 161 * (activityMultiplier[physicalActivity]);

  const calories = Math.round(bmr * activityMultiplier);
  const protein = Math.round(weight * proteinConstant);
  const fat = Math.round((calories * fatConstant) / 9);
  const carbs = Math.round((calories - (protein * 4) - (fat * 9)) / carbsConstant);

  const macroRatio = calculateMacroRatio(protein, fat, carbs);

  return {
    calories,
    protein,
    fat,
    carbs,
    macroRatio,
  };
}
export default calculateMifflin;

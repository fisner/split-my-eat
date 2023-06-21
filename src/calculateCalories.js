import checkGender from './checkGender.js';
import calculateMacroRatio from './calculateMacroRatio.js';

const activityMultiplier = {
  'no activity': 1.2,
  '1-3 light activities per week': 1.375,
  '3-5 moderate activities per week': 1.55,
  '5-6 moderate activities per week': 1.725,
  '7 vigorous activities per week': 1.9,
};

const calculateCalories = (gender, age, height, weight, physicalActivity) => {
  const maleBasalmetabolicrateConstant1 = 88.36;
  const maleBasalmetabolicrateConstant2 = 13.4;
  const maleBasalmetabolicrateConstant3 = 4.8;
  const maleBasalmetabolicrateConstant4 = 5.7;
  const femaleBasalmetabolicrateConstant1 = 447.6;
  const femaleBasalmetabolicrateConstant2 = 9.2;
  const femaleBasalmetabolicrateConstant3 = 3.1;
  const femaleBasalmetabolicrateConstant4 = 4.3;

  const proteinMultiplier = 1.5;
  const fatMultiplier = 0.2;

  const isMale = checkGender(gender);

  const bmr = isMale
    ? maleBasalmetabolicrateConstant1 + (maleBasalmetabolicrateConstant2 * weight)
         + (maleBasalmetabolicrateConstant3 * height) - (maleBasalmetabolicrateConstant4 * age)
    : femaleBasalmetabolicrateConstant1 + (femaleBasalmetabolicrateConstant2 * weight)
         + (femaleBasalmetabolicrateConstant3 * height) - (femaleBasalmetabolicrateConstant4 * age);

  const calories = Math.round(bmr * activityMultiplier[physicalActivity]);
  const protein = Math.round(weight * proteinMultiplier);
  const fat = Math.round((calories * fatMultiplier) / 9);
  const carbs = Math.round((calories - (protein * 4) - (fat * 9)) / 4);

  const macroRatio = calculateMacroRatio(protein, fat, carbs);

  return {
    calories,
    protein,
    fat,
    carbs,
    macroRatio,
  };
};

export default calculateCalories;

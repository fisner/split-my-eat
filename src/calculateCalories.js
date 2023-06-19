const checkGender = (gender) => {
  const MALE_VARIANTS = ['male', 'm', 'man', 'boy'];
  return MALE_VARIANTS.includes(gender.toLowerCase());
};

function calculateMacroRatio(protein, fat, carbs) {
  const proteinCalories = protein * 4;
  const fatCalories = fat * 9;
  const carbsCalories = carbs * 4;
  const totalCalories = proteinCalories + fatCalories + carbsCalories;
  const proteinPercentage = (proteinCalories / totalCalories) * 100;
  const fatPercentage = (fatCalories / totalCalories) * 100;
  const carbsPercentage = (carbsCalories / totalCalories) * 100;
  return `${proteinPercentage.toFixed(1)}% / ${fatPercentage.toFixed(1)}% / ${carbsPercentage.toFixed(1)}%`;
}

const calculateCalories = (gender, age, height, weight, physicalActivity) => {
  const MALE_BMR_CONSTANT_1 = 88.36;
  const MALE_BMR_CONSTANT_2 = 13.4;
  const MALE_BMR_CONSTANT_3 = 4.8;
  const MALE_BMR_CONSTANT_4 = 5.7;
  const FEMALE_BMR_CONSTANT_1 = 447.6;
  const FEMALE_BMR_CONSTANT_2 = 9.2;
  const FEMALE_BMR_CONSTANT_3 = 3.1;
  const FEMALE_BMR_CONSTANT_4 = 4.3;

  let ACTIVITY_MULTIPLIER;

  switch (physicalActivity) {
    case 'no activity':
      ACTIVITY_MULTIPLIER = 1.2;
      break;
    case '1-3 light activities per week':
      ACTIVITY_MULTIPLIER = 1.375;
      break;
    case '3-5 moderate activities per week':
      ACTIVITY_MULTIPLIER = 1.55;
      break;
    case '5-6 moderate activities per week':
      ACTIVITY_MULTIPLIER = 1.725;
      break;
    case '7 vigorous activities per week':
      ACTIVITY_MULTIPLIER = 1.9;
      break;
    default:
      ACTIVITY_MULTIPLIER = 1.2;
  }

  const PROTEIN_MULTIPLIER = 2.2;
  const FAT_MULTIPLIER = 0.2;

  const isMale = checkGender(gender);

  const bmr = isMale
    ? MALE_BMR_CONSTANT_1 + (MALE_BMR_CONSTANT_2 * weight)
     + (MALE_BMR_CONSTANT_3 * height) - (MALE_BMR_CONSTANT_4 * age)
    : FEMALE_BMR_CONSTANT_1 + (FEMALE_BMR_CONSTANT_2 * weight)
     + (FEMALE_BMR_CONSTANT_3 * height) - (FEMALE_BMR_CONSTANT_4 * age);

  const calories = Math.round(bmr * ACTIVITY_MULTIPLIER);
  const protein = Math.round(weight * PROTEIN_MULTIPLIER);
  const fat = Math.round((calories * FAT_MULTIPLIER) / 9);
  const carbs = Math.round((calories - (protein * 4) - (fat * 9)) / 4);

  const macroRatio = calculateMacroRatio(protein, fat, carbs);
  const totalMacroRatio = calculateMacroRatio(protein, fat, carbs + protein * 4 + fat * 9);

  return {
    calories,
    protein,
    fat,
    carbs,
    macroRatio,
    totalMacroRatio,
  };
};

export default calculateCalories;

const getMacrosAmount = (calories, macroRatio, caloriesInMacro) => (
  Math.round((calories * macroRatio) / 100 / caloriesInMacro)
);

const calculateMacros = (calories, { proteinRatio, fatRatio, carbsRatio }) => {
  const caloriesInProtein = 4;
  const caloriesInFat = 9;
  const caloriesInCarbs = 4;

  return {
    protein: getMacrosAmount(calories, proteinRatio, caloriesInProtein),
    fat: getMacrosAmount(calories, fatRatio, caloriesInFat),
    carbs: getMacrosAmount(calories, carbsRatio, caloriesInCarbs),
    macroRatio: `${proteinRatio}% ${fatRatio}% ${carbsRatio}%`,
  };
};

const calculateCalories = (gender, age, height, weight, physicalActivity, formula = 'Mifflin-St Jeor') => {
  const activityData = {
    'no activity': {
      activityMultiplier: 1.2,
      macroRatio: {
        proteinRatio: 20,
        fatRatio: 30,
        carbsRatio: 50,
      },
    },
    '1-3 light activities per week': {
      activityMultiplier: 1.375,
      macroRatio: {
        proteinRatio: 20,
        fatRatio: 30,
        carbsRatio: 50,
      },
    },
    '3-5 moderate activities per week': {
      activityMultiplier: 1.55,
      macroRatio: {
        proteinRatio: 20,
        fatRatio: 30,
        carbsRatio: 50,
      },
    },
    '5-6 moderate activities per week': {
      activityMultiplier: 1.725,
      macroRatio: {
        proteinRatio: 20,
        fatRatio: 30,
        carbsRatio: 50,
      },
    },
    '7 vigorous activities per week': {
      activityMultiplier: 1.9,
      macroRatio: {
        proteinRatio: 20,
        fatRatio: 30,
        carbsRatio: 50,
      },
    },
  };

  const formulas = {
    'Mifflin-St Jeor': {
      weightCoefficient: 10,
      heightCoefficient: 6.25,
      ageCoefficient: 5,
      genderCoefficient: {
        male: 5,
        female: -161,
      },
    },
  };

  const calories = Math.round((
    (formulas[formula].weightCoefficient * weight)
  + (formulas[formula].heightCoefficient * height)
  - (formulas[formula].ageCoefficient * age)
  + formulas[formula].genderCoefficient[gender])
  * activityData[physicalActivity].activityMultiplier);

  const {
    protein, fat, carbs, macroRatio,
  } = calculateMacros(calories, activityData[physicalActivity].macroRatio);

  return {
    calories,
    protein,
    fat,
    carbs,
    macroRatio,
  };
};

export default calculateCalories;

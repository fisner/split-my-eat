const getFoodAmount = (protein, fat, carbs, foodsAmount, foodData) => {
  const macros = ['protein', 'fat', 'carbs'];
  const gramsPerFood = 100;

  const iter = (macrosRemaind, acc, count) => {
    if (count > macros.length - 1) {
      return [...macrosRemaind, acc];
    }

    const foodName = Object.keys(foodData)[count];
    const foodWeight = macrosRemaind[count] / 2 / foodData[foodName][macros[count]];

    const newMacrosRemaind = macrosRemaind.map((macro, index) => {
      const foodMacro = foodData[foodName][macros[index]] * foodWeight;
      return macro - foodMacro;
    });

    const currentFoodType = `${macros[count]}Food`;
    const foodAmount = (acc?.[currentFoodType]?.[foodName] ?? 0) + foodWeight * gramsPerFood;
    const newAcc = { ...acc, [currentFoodType]: { [foodName]: foodAmount } };

    return iter(newMacrosRemaind, newAcc, count + 1);
  };

  return iter([protein, fat, carbs], foodsAmount, 0);
};

const getRandomKey = (length) => Math.floor(Math.random() * length);

const checkRemaind = (macro, calculationError = 0.000005) => (
  macro < calculationError && macro > -calculationError
);

const getFoodForDay = (calories, foodData) => {
  const randomFood = ['protein', 'fat', 'carbs'].reduce((acc, macro) => {
    const foodList = Object.keys(foodData[macro]);
    const food = foodList[getRandomKey(foodList.length)];
    return { ...acc, [food]: foodData[macro][food] };
  }, {});

  const iter = (protein, fat, carbs, foodAmount = {}) => {
    if (checkRemaind(protein) && checkRemaind(fat) && checkRemaind(carbs)) {
      return foodAmount;
    }

    return iter(...getFoodAmount(protein, fat, carbs, foodAmount, randomFood));
  };

  const { protein, fat, carbs } = calories;

  return iter(protein, fat, carbs);
};

const roundFoodAmount = (food) => ({ [Object.keys(food)]: Math.round(Object.values(food)) });

const calculateRation = (calories, foodData) => {
  const iter = (days, day, acc = {}) => {
    if (day > days) {
      return acc;
    }

    const { proteinFood, fatFood, carbsFood } = getFoodForDay(calories, foodData);
    const dayData = {
      [day]: {
        proteinFood: roundFoodAmount(proteinFood),
        fatFood: roundFoodAmount(fatFood),
        carbsFood: roundFoodAmount(carbsFood),
      },
    };

    return iter(days, day + 1, { ...acc, ...dayData });
  };

  return iter(6, 0);
};

export default calculateRation;

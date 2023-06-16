const getRandomKey = (length) => Math.floor(Math.random() * length);

const getFoodForDay = (calories, macro, foodData) => {
  const foodList = Object.keys(foodData[macro]);
  const food = foodList[getRandomKey(foodList.length)];
  const gramsPerFood = 100;

  const totalMacro = calories[macro];
  const foodMacro = foodData[macro][food][macro];
  const foodAmount = Math.round((totalMacro / foodMacro) * gramsPerFood);

  return { [food]: foodAmount };
};

const calculateRation = (calories, foodData) => {
  const iter = (days, count, acc = {}) => {
    if (count > days) {
      return acc;
    }

    const [proteinFood, fatFood, carbsFood] = ['protein', 'fat', 'carbs']
      .map((macro) => getFoodForDay(calories, macro, foodData));
    const dayData = {
      [count - 1]: {
        proteinFood,
        fatFood,
        carbsFood,
      },
    };

    return iter(days, count + 1, { ...acc, ...dayData });
  };

  return iter(7, 1, {});
};

export default calculateRation;

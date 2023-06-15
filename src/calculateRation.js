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

const calculateRation = (calories, foodData, days = 7, count = 1, acc = {}) => {
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

  return calculateRation(calories, foodData, days, count + 1, { ...acc, ...dayData });
};

export default calculateRation;

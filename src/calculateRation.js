const getRandomKey = (length) => Math.floor(Math.random() * length);

const foodCount = (totalMacro, foodMacro, gramsPerFood) => Math.round(
  (totalMacro / foodMacro) * gramsPerFood,
);

const getFoodForDay = (calories, macro, foodData) => {
  const foodList = Object.keys(foodData[macro]);
  const food = foodList[getRandomKey(foodList.length)];
  const gramsPerFood = 100;
  const foodAmount = foodCount(calories[macro], foodData[macro][food][macro], gramsPerFood);

  return { [food]: foodAmount };
};

const calculateRation = (calories, foodData, count = 0, acc = {}) => {
  if (count > 6) {
    return acc;
  }

  const [proteinFood, fatFood, carbsFood] = ['protein', 'fat', 'carbs']
    .map((macro) => getFoodForDay(calories, macro, foodData));
  const dayData = {
    [count]: {
      proteinFood,
      fatFood,
      carbsFood,
    },
  };

  return calculateRation(calories, foodData, count + 1, { ...acc, ...dayData });
};

export default calculateRation;

const caloriesFormatter = (gender, age, height, weight, caloriesData) => {
  const userData = `Gender: ${gender}, age: ${age}, height: ${height}, weight: ${weight}`;
  const calories = `Calories: ${caloriesData.calories}`;
  const macro = `Protein: ${caloriesData.protein}, fat: ${caloriesData.fat}, carbs: ${caloriesData.carbs}`;
  const macroRatio = `Macronutrient Ratio: ${caloriesData.macroRatio}`;

  return `${userData}\n\n${calories}\n${macro}\n${macroRatio}`;
};

export default caloriesFormatter;

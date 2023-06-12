const caloriesFormatter = (caloriesData) => {
  const calories = `Calories: ${caloriesData.calories}`;
  const macro = `Protein: ${caloriesData.protein}, fat: ${caloriesData.fat}, carbs: ${caloriesData.carbs}`;
  const macroRatio = `Macronutrient Ratio: ${caloriesData.macroRatio}`;

  return `${calories}\n${macro}\n${macroRatio}`;
};

export default caloriesFormatter;

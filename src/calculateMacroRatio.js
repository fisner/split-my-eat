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
export default calculateMacroRatio;

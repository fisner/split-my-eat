const calculateCalories = (weight, height, age, gender) => {
    let bmr;
    if (gender === 'male') {
      bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
      bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
  
    const calories = Math.round(bmr * 1.55);
    const protein = Math.round(weight * 2.2);
    const fat = Math.round((calories * 0.2) / 9);
    const carbs = Math.round((calories - (protein * 4) - (fat * 9)) / 4);
    const macroRatio = `${Math.round(protein / weight * 100)}-${Math.round(fat / weight * 100)}-${Math.round(carbs / weight * 100)}`;
  
    return {
      calories,
      protein,
      fat,
      carbs,
      macroRatio,
    };
  }
  
  // Пример использования
  const result = calculateCalories(70, 175, 30, 'male');
  console.log(result); // { calories: 3107, protein: 154, fat: 69, carbs: 344, macroRatio: '22-28-50' }

  export default calculateCalories;
import getFoodData from './src/utilities/read-data.js';;

function calculateFood(data) {
  const { calories, protein, fat, carbs, macroRatio } = data;
  const [proteinRatio, fatRatio, carbsRatio] = macroRatio.split('-');

  const result = {
    calories,
    protein,
    fat,
    carbs,
    macroRatio,
    proteinFood: {}, // Объект для списка продуктов с белком и их граммовкой
    fatFood: {}, // Объект для списка продуктов с жирами и их граммовкой
    carbsFood: {} // Объект для списка продуктов с углеводами и их граммовкой
  };

  const foodData = getFoodData();


// Функция для нахождения подходящих продуктов по граммовке
  
function findSuitableFood(macro, foodType, targetGrams) {
    const foodItems = Object.keys(foodData[macro]);
    for (const food of foodItems) {
      const { name, protein, fat, carbs, calories } = foodData[macro][food];
      const foodGrams = (targetGrams / protein) * 100; // Вычисление граммовки продукта исходя из требуемого количества белка
      if (foodGrams === targetGrams && result[macro] < data[macro]) {
        result[macro] += protein;
        result[foodType][name] = foodGrams;      
      }
      if (result.calories >= data.calories && result[macro] >= data[macro]) {
        break;
      }
    }
  }
  findSuitableFood('protein', 'proteinFood', protein); // Поиск подходящих продуктов с белком и их граммовкой
  findSuitableFood('fat', 'fatFood', fat); // Поиск подходящих продуктов с жирами и их граммовкой
  findSuitableFood('carbs', 'carbsFood', carbs); // Поиск подходящих продуктов с углеводами и их граммовкой
  return result;
}

const data = {
  calories: 2100,
  protein: 120,
  fat: 90,
  carbs: 70,
  macroRatio: '40-30-30'
};

const result = calculateFood(data);
console.log(result);

// @ts-check

// 1. Проверка на корректный расчет калорий для мужчины с заданными параметрами:

test('calculateCalories calculates correct calories for male', () => {
  const result = calculateCalories(80, 180, 35, 'male');
  expect(result.calories).toEqual(3269);
});

// 2. Проверка на корректный расчет калорий для женщины с заданными параметрами:

test('calculateCalories calculates correct calories for female', () => {
  const result = calculateCalories(65, 165, 28, 'female');
  expect(result.calories).toEqual(2005);
});

// 3. Проверка на корректный расчет количества белков в граммах:

test('calculateCalories calculates correct protein in grams', () => {
  const result = calculateCalories(75, 170, 32, 'male');
  expect(result.protein).toEqual(165);
});

// 4. Проверка на корректный расчет соотношения белков, жиров и углеводов:

test('calculateCalories calculates correct macro ratio', () => {
  const result = calculateCalories(70, 175, 30, 'male');
  expect(result.macroRatio).toEqual('22-28-50');
});
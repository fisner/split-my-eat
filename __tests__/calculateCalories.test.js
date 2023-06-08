import calculateCalories from '../src/calculateCalories.js';

test('calculateCalories calculates correct calories for male', () => {
  const result = calculateCalories('male', 35, 180, 80);
  expect(result.calories).toEqual(2190);
});

test('calculateCalories calculates correct calories for female', () => {
  const result = calculateCalories('female', 28, 165, 65);
  expect(result.calories).toEqual(1724);
});

test('calculateCalories calculates correct protein in grams', () => {
  const result = calculateCalories('male', 32, 170, 75);
  expect(result.protein).toEqual(165);
});

test('calculateCalories calculates correct macro ratio', () => {
  const result = calculateCalories('male', 30, 175, 70);
  expect(result.macroRatio).toEqual('220-64-361');
});

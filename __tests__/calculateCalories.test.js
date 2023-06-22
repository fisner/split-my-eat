import calculateCalories from '../src/calculateCalories.js';

test('calculateCalories returns correct values for male', () => {
  const result = calculateCalories('male', 25, 175, 75, 'no activity', 'Mifflin-St Jeor');
  expect(result.calories).toBe(2069);
  expect(result.protein).toBe(78);
  expect(result.fat).toBe(69);
  expect(result.carbs).toBe(284);
  expect(result.macroRatio).toBe('15% 30% 55%');
});

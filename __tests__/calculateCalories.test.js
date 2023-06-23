import calculateCalories from '../src/calculateCalories.js';

test('calculateCalories returns correct values for male', () => {
  const result = calculateCalories('male', 25, 175, 75, 'no activity', 'Mifflin-St Jeor');
  const testVal = {
    calories: 2069,
    protein: 78,
    fat: 69,
    carbs: 284,
    macroRatio: '15% 30% 55%',
  };
  expect(result).toEqual(testVal);
});

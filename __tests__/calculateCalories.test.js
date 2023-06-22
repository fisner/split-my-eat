import calculateCalories from '../src/calculateCalories.js';

test('calculateCalories returns correct values for male', () => {
  const result = calculateCalories('male', 25, 175, 75, 'no activity', 'Mifflin-St Jeor');
  const testVal = {
    calories: 2069,
    protein: 103,
    fat: 69,
    carbs: 259,
    macroRatio: '20% 30% 50%',
  };
  expect(result).toEqual(testVal);
});

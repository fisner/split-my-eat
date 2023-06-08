import calculateRation from '../src/calculateRation.js';

const mas = calculateRation({ protein: 100, fat: 50, carbs: 30 });

test('checking the correctness of the output of the PFC', () => {
  expect(mas).toEqual({
    proteinFood: { chiken: 382, beef: 448 },
    fatFood: { peanut: 111, sunflowerSeed: 116 },
    carbsFood: { pasta: 50, rice: 48 },
  });
});

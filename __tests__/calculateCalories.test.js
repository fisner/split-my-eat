import calculateCalories from '../src/calculateCalories.js';

test('calculateCalories returns correct values for male', () => {
  const result = calculateCalories('male', 30, 180, 80);
  expect(result.calories).toBe(2224);
  expect(result.protein).toBe(176);
  expect(result.fat).toBe(49);
  expect(result.carbs).toBe(270);
  expect(result.macroRatio).toBe('31.6% / 19.8% / 48.5%');
  expect(result.totalMacroRatio).toBe('10.3% / 6.5% / 83.2%');
});

test('calculateCalories returns correct values for female', () => {
  const result = calculateCalories('female', 25, 165, 60);
  expect(result.calories).toBe(1684);
  expect(result.protein).toBe(132);
  expect(result.fat).toBe(37);
  expect(result.carbs).toBe(206);
  expect(result.macroRatio).toBe('31.3% / 19.8% / 48.9%');
  expect(result.totalMacroRatio).toBe('10.3% / 6.5% / 83.2%');
});

test('calculateCalories returns correct values for male with different parameters', () => {
  const result = calculateCalories('m', 40, 190, 85);
  expect(result.calories).toBe(2294);
  expect(result.protein).toBe(187);
  expect(result.fat).toBe(51);
  expect(result.carbs).toBe(272);
  expect(result.macroRatio).toBe('32.6% / 20.0% / 47.4%');
  expect(result.totalMacroRatio).toBe('10.5% / 6.4% / 83.1%');
});

test('calculateCalories returns correct values for female with different parameters', () => {
  const result = calculateCalories('woman', 28, 170, 65);
  expect(result.calories).toBe(1743);
  expect(result.protein).toBe(143);
  expect(result.fat).toBe(39);
  expect(result.carbs).toBe(205);
  expect(result.macroRatio).toBe('32.8% / 20.1% / 47.0%');
  expect(result.totalMacroRatio).toBe('10.5% / 6.5% / 83.0%');
});

import fs from 'fs';
import path from 'path';
import caloriesFormatter from '../src/formatters/caloriesFormatter.js';

const testCaloriesDataPath = path.resolve('./__fixtures__/caloriesData.json');
const testCaloriesData = JSON.parse(fs.readFileSync(testCaloriesDataPath, 'utf8'), 2);
const expectedDataPath = path.resolve('./__fixtures__/caloriesFormatterResult.txt');
const expectedData = fs.readFileSync(expectedDataPath, 'utf8');

test('output format', () => {
  expect(caloriesFormatter('male', 33, 178, 82, testCaloriesData)).toEqual(expectedData);
});

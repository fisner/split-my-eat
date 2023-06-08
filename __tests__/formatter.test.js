import fs from 'fs';
import path from 'path';
import formatter from '../src/formatter.js';

const testCaloriesDataPath = path.resolve('./__fixtures__/formatter-test-caloriesData.json');
const testCaloriesData = JSON.parse(fs.readFileSync(testCaloriesDataPath, 'utf8'), 2);
const testRationDataPath = path.resolve('./__fixtures__/formatter-test-rationData.json');
const testRationData = JSON.parse(fs.readFileSync(testRationDataPath, 'utf8'), 2);
const expectedDataPath = path.resolve('./__fixtures__/formatter-expected-result.txt');
const expectedData = fs.readFileSync(expectedDataPath, 'utf8');

test('output format', () => {
  expect(formatter('male', 33, 178, 82, testCaloriesData, testRationData)).toEqual(expectedData);
});

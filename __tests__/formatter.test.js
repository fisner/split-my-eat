import fs from 'fs';
import path from 'path';
import formatter from '../src/formatter.js';

const testDataPath = path.resolve('./__fixtures__/formatter-test-data.json');
const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf8'), 2);
const expectedDataPath = path.resolve('./__fixtures__/formatter-expected-result.txt');
const expectedData = fs.readFileSync(expectedDataPath, 'utf8');

test('output format', () => {
  expect(formatter(testData)).toEqual(expectedData);
});

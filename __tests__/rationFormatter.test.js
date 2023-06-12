import fs from 'fs';
import path from 'path';
import rationFormatter from '../src/formatters/rationFormatter.js';

const testRationDataPath = path.resolve('./__fixtures__/rationData.json');
const testRationData = JSON.parse(fs.readFileSync(testRationDataPath, 'utf8'), 2);
const expectedDataPath = path.resolve('./__fixtures__/rationFormatterResult.txt');
const expectedData = fs.readFileSync(expectedDataPath, 'utf8');

test('output format', () => {
  expect(rationFormatter(testRationData)).toEqual(expectedData);
});

import fs from 'fs';
import path from 'path';

const getFoodData = () => {
  const dataPath = path.resolve('./data/food.json');
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'), 2);
};

export default getFoodData;

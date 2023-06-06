import fs from 'fs';

const getFoodData = () => {
  const dataPath = `${process.cwd()}/data/food.json`;
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'), 2);
};

export default getFoodData;

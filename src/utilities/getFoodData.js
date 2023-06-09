import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const getFoodData = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dataPath = path.join(__dirname, '../..', 'data/food.json');
  return JSON.parse(fs.readFileSync(dataPath, 'utf-8'), 2);
};

export default getFoodData;

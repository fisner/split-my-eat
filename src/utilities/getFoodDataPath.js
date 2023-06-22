import path from 'path';
import { fileURLToPath } from 'url';

const getFoodDataPath = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, '../..', 'data/food.json');
};

export default getFoodDataPath;

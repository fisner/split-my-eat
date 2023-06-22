import fs from 'fs';
import getFoodDataPath from './getFoodDataPath.js';

const getFoodData = () => JSON.parse(fs.readFileSync(getFoodDataPath(), 'utf-8'), 2);

export default getFoodData;

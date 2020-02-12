const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const weatherObjTransform = require('./objectsTransform/responseObjectGen');

const dataBasePath = path.join(__dirname, '..', 'FiveDayDB');
const readFile = promisify(fs.readFile);

const oneDayWeatherObj = async day => {
    const currentPath = path.resolve(dataBasePath, `${day}.json`);
    const dayWeatherJson = await readFile(currentPath);
    const dayWeatherArray = JSON.parse(dayWeatherJson);
    const objForClient = weatherObjTransform(dayWeatherArray, 'hours');
    return objForClient;
};

module.exports = oneDayWeatherObj;

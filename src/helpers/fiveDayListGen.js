const timeWeatherFilter = require('./objectsTransform/currentTimeWeatherFilter');
const weatherObjTransform = require('./objectsTransform/responseObjectGen');

const objWeatherGenerate = arr => {
    const currentTimeObjs = timeWeatherFilter(arr);
    const objForClient = weatherObjTransform(currentTimeObjs);
    return objForClient;
};

module.exports = objWeatherGenerate;

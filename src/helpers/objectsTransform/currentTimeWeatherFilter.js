const moment = require('moment');

const getWeatherForCurrentPm = array => {
    const currentWeatherTime = moment(array[0].dt_txt).format('LT');
    return array.filter(
        elem => moment(elem.dt_txt).format('LT') === currentWeatherTime,
    );
};

module.exports = getWeatherForCurrentPm;

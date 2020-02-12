const moment = require('moment');

const parsArrForResponse = (array, dataType = 'Day') => {
    const parsArray = array.map(elem => {
        let time = moment(elem.dt_txt).format('dddd');

        if (dataType !== 'Day') {
            time = moment(elem.dt_txt).format('LT');
        }

        let phenomena = 'No precipitation';
        let precValue;
        if (elem.rain) {
            phenomena = 'rain: ';
            precValue = `${elem.rain['3h']} mm`;
        } else if (elem.snow) {
            phenomena = 'snow: ';
            precValue = `${elem.snow['3h']} mm`;
        }
        const tempKelvin = elem.main.temp;
        const tempCelsium = Math.round(tempKelvin - 273.15);
        return {
            time,
            alt: elem.weather[0].description,
            icon: elem.weather[0].icon,
            tempCelsium,
            humidity: elem.main.humidity,
            cloudiness: elem.clouds.all,
            wind: elem.wind.speed,
            pressure: elem.main.pressure,
            phenomena,
            precValue,
        };
    });

    return parsArray;
};

module.exports = parsArrForResponse;

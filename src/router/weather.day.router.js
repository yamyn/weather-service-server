const express = require('express');
const router = express.Router();
const oneDayWeatherObj = require('../helpers/oneDayListGen');

const getDayWeather = async (req, res) => {
    const { day } = req.query;
    let code = 200;

    const resultData = await oneDayWeatherObj(day);

    res.status(code).json(resultData);
};

router.get('/', getDayWeather);

module.exports = router;

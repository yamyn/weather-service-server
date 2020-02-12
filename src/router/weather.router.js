const express = require('express');
const router = express.Router();
const getWeather = require('../services/openWeather');
const idFinder = require('../helpers/cityIdConverter/idFind');
const dayDataGenerate = require('../helpers/objectsTransform/dayDataGenerate');
const fiveDaysListGen = require('../helpers/fiveDayListGen');
const dayRouter = require('./weather.day.router');

const getWeaterByQueryString = async (req, res) => {
    const { city } = req.query;

    let code = 200;
    const id = await idFinder(city);
    const data = await getWeather(id);
    const weatherArr = data.list;
    dayDataGenerate(weatherArr);
    const resultData = fiveDaysListGen(weatherArr);

    if (data.code) {
        code = data.code;
    }

    res.status(code).json(resultData);
};

router.use('/day', dayRouter);
router.get('/', getWeaterByQueryString);

module.exports = router;

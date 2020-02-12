require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const router = require('./router/router');
const errorsHandler = require('./middlewares/errors');
const notFound = require('./middlewares/notFound');

const port = process.env.PORT || 4000;
const isDev = process.env.NODE_ENV === 'development';

// для логування запитів
if (isDev) app.use(logger('dev'));

// обробник на шлях / і давати у відповідь якись текст
app.get('/', (req, res) => {
    res.send('Weather Web-Service');
});

// добавляжмо обробник для інши роутів по /api
app.use('/api', router);

// обробник на не існуючі роути у нашій програмі або сервіси
app.use('*', notFound);

app.use(errorsHandler);

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

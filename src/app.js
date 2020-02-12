require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router/router');
const errorsHandler = require('./middlewares/errors');
const notFound = require('./middlewares/notFound');

const port = process.env.PORT || 4000;

app.use(cors('*'));

app.get('/', (req, res) => {
    res.send('Weather Web-Service');
});

app.use('/api', router);

app.use('*', notFound);

app.use(errorsHandler);

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

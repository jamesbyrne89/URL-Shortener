const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./controllers/routes');
const config = require('./utils/config');

const app = express();

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.set('port', config.PORT || 3000);

module.exports = app;

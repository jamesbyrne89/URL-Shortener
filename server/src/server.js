const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { yellow } = require('chalk');
const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(yellow(`Server running at port ${server.address().port}`));
});

module.exports = app;

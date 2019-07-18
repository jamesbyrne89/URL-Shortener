const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { yellow } = require('chalk');

const { validateURL, shortenURL } = require('./controllers/controllers');

const { MongoClient } = require('mongodb');

const databaseUrl = process.env.DATABASE;

const app = express();

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB

async function initialiseDatabase() {
  try {
    const client = await MongoClient.connect(databaseUrl, {
      useNewUrlParser: true
    });
    app.locals.db = client.db('url-shortener');

    console.log(yellow('Connected to MongoDB'));
  } catch (err) {
    console.error('Failed to connect to the database');
  }
}

app.post('/api/shorten', validateURL);
app.post('/api/shorten', async (req, res, next) => {
  await initialiseDatabase();
  shortenURL(req, res, next, app.locals.db);
});
app.post('/api/shorten', (req, res) => {
  const { shortened } = req;
  res.status(200).json(shortened);
});

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(yellow(`Server running at port ${server.address().port}`));
});

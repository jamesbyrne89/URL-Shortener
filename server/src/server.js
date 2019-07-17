const dotenv = require('dotenv').config({ debug: true });
console.log(dotenv);
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const dns = require('dns');

const { MongoClient } = require('mongodb');

const databaseUrl = process.env.DATABASE;

const app = express();

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use(bodyParser.json());

app.post('/api/shorten', (req, res) => {
  let { url } = req.body;
  try {
    url = new URL(url);
  } catch (err) {
    console.error(chalk.red(err));
    return res.status(400).send({ error: 'Invalid URL' });
  }

  dns.lookup(url.hostname, err => {
    if (err) {
      return res.status(404).send({ error: 'Address not found' });
    }
    return res.status(200).send({ URL: url });
  });
});

// MongoDB
// console.log(process.env);
MongoClient.connect(databaseUrl, { useNewUrlParser: true })
  .then(client => {
    app.locals.db = client.db('url-shortener');
  })
  .catch(() => console.error('Failed to connect to the database'));

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(`Server running at port ${server.address().port}`);
});

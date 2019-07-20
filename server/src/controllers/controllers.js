const dotenv = require('dotenv').config();
const { red, yellow } = require('chalk');
const dns = require('dns');
const nanoid = require('nanoid');
const { MongoClient } = require('mongodb');

const databaseUrl = process.env.DATABASE;

async function initialiseDatabase(req) {
  try {
    const client = await MongoClient.connect(databaseUrl, {
      useNewUrlParser: true
    });
    req.app.locals.db = client.db('url-shortener');
    console.log(yellow('Connected to MongoDB'));
  } catch (err) {
    console.error(red('Failed to connect to the database'), err);
  }
}

function validateURL(req, res, next) {
  let { url } = req.body;
  try {
    url = new URL(url);
  } catch (err) {
    console.error(red(err));
    return res.status(400).send({ error: 'Invalid URL' });
  }

  dns.lookup(url.hostname, err => {
    if (err) {
      return res.status(404).send({ error: 'Address not found' });
    }
    next();
  });
}

async function shortenURL(req, res, next) {
  await initialiseDatabase(req);
  const { db } = req.app.locals;
  const { url } = req.body;
  const shortenedURLs = db.collection('shortenedURLs');
  const result = await shortenedURLs.findOneAndUpdate(
    { original_url: url },
    {
      $setOnInsert: {
        original_url: url,
        short_id: nanoid(7)
      }
    },
    {
      returnOriginal: false,
      upsert: true
    }
  );
  req.shortened = result.value;
  next();
}

function checkIfShortIdExists() {
  return async (req, res) => {
    await initialiseDatabase(req);
    const { db } = req.app.locals;
    const { short_id } = req.params;
    try {
      console.log('db2');
      const match = await db.collection('shortenedURLs').findOne({ short_id });
      if (match) {
        return res.redirect(match.original_url);
      }
    } catch (err) {
      return res.status(500).send('Error connecting to database');
    }
    return res.status(404).send('URL not found');
  };
}

module.exports = {
  validateURL,
  shortenURL,
  checkIfShortIdExists,
  initialiseDatabase
};

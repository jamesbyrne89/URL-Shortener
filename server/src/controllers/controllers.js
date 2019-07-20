const { red } = require('chalk');
const dns = require('dns');
const nanoid = require('nanoid');
const initDb = require('../db');

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
  await initDb(req);
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
    await initDb(req);
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
  checkIfShortIdExists
};

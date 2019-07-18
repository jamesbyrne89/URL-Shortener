const { red } = require('chalk');
const dns = require('dns');
const nanoid = require('nanoid');

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

async function shortenURL(req, res, next, db) {
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

module.exports = { validateURL, shortenURL };

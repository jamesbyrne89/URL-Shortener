const { red } = require('chalk');
const dns = require('dns');

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

function shortenURL(db) {
  return (req, res, next) => {
    const { url } = req;
    console.log(db);
    const shortenedURLs = db.collection('shortenedURLs');
    console.log(shortenedURLs);
    req.shortened = shortenedURLs.findOneAndUpdate(
      { original_url: url },
      {
        $setOnINsert: {
          original_url: url,
          short_id: nanoid(7)
        }
      },
      {
        returnOriginal: false,
        upsert: true
      }
    );
    console.log(req);
    next();
  };
}

module.exports = { validateURL, shortenURL };

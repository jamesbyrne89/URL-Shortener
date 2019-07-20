const router = require('express').Router();
const {
  validateURL,
  shortenURL,
  checkIfShortIdExists
} = require('./controllers/controllers');
const app = require('./server');

router.post('/api/shorten', validateURL);
router.post('/api/shorten', async (req, res, next) => {
  shortenURL(req, res, next);
});
router.post('/api/shorten', (req, res) => {
  const { shortened } = req;
  res.status(200).json(shortened);
});

router.get('*/:short_id', async (req, res) => {
  await checkIfShortIdExists()(req, res);
});

module.exports = router;

const router = require('express').Router();
const {
  validateURL,
  shortenURL,
  checkIfShortIdExists
} = require('./controllers/controllers');

router.post('/api/shorten', validateURL);
router.post('/api/shorten', async (req, res, next) => {
  await initialiseDatabase();
  shortenURL(req, res, next, app.locals.db);
});
router.post('/api/shorten', (req, res) => {
  const { shortened } = req;
  res.status(200).json(shortened);
});

router.get('*/:short_id', async (req, res) => {
  await initialiseDatabase();
  await checkIfShortIdExists(app.locals.db)(req, res);
});

module.exports = router;

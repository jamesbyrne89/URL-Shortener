const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const chalk = require('chalk');

const app = express();

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use(bodyParser.json());

app.post('/api/shorten', (req, res) => {
  let url;
  try {
    url = new URL(req.body.url);
  } catch (err) {
    console.log(chalk.red(err));
    return res.status(400).send({ error: 'Invalid URL' });
  }
  return res.status(200).send({ URL: url });
});

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(`Server running at port ${server.address().port}`);
});

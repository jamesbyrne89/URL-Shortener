const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  const htmlPath = path.join(__dirname, '../../client/public', 'index.html');
  console.log(__dirname);
  res.sendFile(htmlPath);
});

app.post('/', (req, res) => {
  console.log(req);
  res.status(200);
});

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(`Server running at port ${server.address().port}`);
});

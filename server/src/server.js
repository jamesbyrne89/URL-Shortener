const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   const htmlPath = path.join(__dirname, '../../client/dist', 'index.html');
//   console.log(path.join(__dirname, '../../client/public', 'index.html'));
//   res.sendFile(htmlPath);
// });

app.post('/api', (req, res) => {
  console.log(req.body);
  res.status(200);
  res.end();
});

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(`Server running at port ${server.address().port}`);
});

// Require and instantiate Express
var express = require('express');
var app = express();

// Require path module to concatenate paths
var path = require('path');

// Tell Express to serve files from public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  // Route to serve the homepage (index.html)
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
  console.log(__dirname);
});


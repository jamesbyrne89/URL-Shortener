const app = require('./app');
const { yellow } = require('chalk');

const server = app.listen(app.get('port'), () => {
  console.log(yellow(`Server running at port ${server.address().port}`));
});

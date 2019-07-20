const app = require('./server');
const { MongoClient } = require('mongodb');

const databaseUrl = process.env.DATABASE;

module.exports = async function initialiseDatabase() {
  if (app.locals.db) {
    return;
  }
  try {
    const client = await MongoClient.connect(databaseUrl, {
      useNewUrlParser: true
    });
    app.locals.db = client.db('url-shortener');

    console.log(yellow('Connected to MongoDB'));
  } catch (err) {
    console.error('Failed to connect to the database');
  }
};

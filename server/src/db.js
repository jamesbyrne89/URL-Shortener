const dotenv = require('dotenv').config();
const { red, yellow } = require('chalk');
const { MongoClient } = require('mongodb');

const databaseUrl = process.env.DATABASE;

async function init(req) {
  try {
    const client = await MongoClient.connect(databaseUrl, {
      useNewUrlParser: true
    });
    req.app.locals.db = client.db('url-shortener');
    console.log(yellow('Connected to MongoDB'));
  } catch (err) {
    console.error(red('Failed to connect to the database'), err);
  }
}

module.exports = init;

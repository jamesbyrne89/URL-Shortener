require('dotenv').config();

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE;

module.exports = {
  PORT,
  DATABASE_URL
};

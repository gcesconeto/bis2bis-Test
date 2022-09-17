require('dotenv').config();
const { MongoClient } = require('mongodb');

const DB_URL = `mongodb://${process.env.DB_HOST || 'mongodb'}:27017/Cookmaster`

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connection = null;

module.exports = async () => {
  try {
    if (connection) return connection;
    connection = (await MongoClient.connect(DB_URL, OPTIONS)).db(process.env.DB_NAME);
    return connection;
  } catch (error) {
    console.error(error.message);
    return process.exit(1);
  }
};

const { MongoClient } = require('mongodb');

const DB_URL = `mongodb://${process.env.DB_HOST || 'mongodb'}:27017/Cookmaster`;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connection = null;

module.exports = async () => {
  if (connection) return connection;
  try {
    connection = (await MongoClient.connect(DB_URL, OPTIONS)).db(process.env.DB_NAME);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
  return connection;
};

require('dotenv').config();
const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connection = null;

module.exports = async () => {
  try {
    if (connection) return connection;
    connection = (await MongoClient.connect(process.env.DB_URL, OPTIONS))
      .db(process.env.DB_NAME)
      .collection(process.env.DB_COLLECTION);
    return connection;
  } catch (error) {
    console.error(error.message);
    return process.exit(1);
  }
};

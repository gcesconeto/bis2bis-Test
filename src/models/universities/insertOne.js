const connection = require('../dbConnection');

module.exports = async (item) => {
  const collection = await connection();
  const result = await collection.insertOne(item);
  return result;
};

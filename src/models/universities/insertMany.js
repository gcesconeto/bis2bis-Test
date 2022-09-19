const connection = require('../dbConnection');

module.exports = async (items) => {
  const collection = await connection();
  const result = await collection.insertMany(items);
  return result;
};

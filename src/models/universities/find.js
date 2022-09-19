const connection = require('../dbConnection');

module.exports = async (filter = {}) => {
  const collection = await connection();
  const result = await collection.find(filter);
  return result;
};

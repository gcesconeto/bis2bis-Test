const connection = require('../DBConnection');

module.exports = async (item) => {
  const db = await connection();
  const result = await db.collection('Universities').insertOne(item);
  return result;
};

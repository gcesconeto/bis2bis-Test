const connection = require('../DBConnection');

module.exports = async (item) => {
  const db = await connection();
  const result = await db.insertOne(item);
  return result;
};

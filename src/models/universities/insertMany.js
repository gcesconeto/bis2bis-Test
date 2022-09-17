const connection = require('../DBConnection');

module.exports = async (items) => {
  const db = await connection();
  const result = await db.collection('Universities').insertMany(items);
  return result;
};

const connection = require('../DBConnection');

module.exports = async (filter = {}) => {
  const db = await connection();
  const result = await db.collection('Universities').find(filter);
  return result;
};

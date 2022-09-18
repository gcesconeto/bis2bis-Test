const connection = require('../DBConnection');

module.exports = async (filter = {}) => {
  const db = await connection();
  const result = await db.deleteMany(filter);
  return result;
};

const connection = require('../DBConnection');

module.exports = async (filter = {}) => {
  const db = await connection();
  const result = await db.collection('Universities').deleteMany(filter);
  return result;
};

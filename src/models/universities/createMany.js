const connection = require('../DBConnection');

module.exports = async (universities) => {
  const db = await connection();
  const result = await db.collection('Universities').insertMany(universities);
  return result;
};

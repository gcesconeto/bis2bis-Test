const connection = require('../DBConnection');

module.exports = async () => {
  const db = await connection();
  const result = await db.collection('Universities').deleteMany({});
  return result;
};

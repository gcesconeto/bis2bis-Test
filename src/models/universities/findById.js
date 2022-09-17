const { ObjectId } = require('mongodb');
const connection = require('../DBConnection');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) throw new Error('Invalid mongoDB Id');
  const db = await connection();
  const result = await db.collection('Universities').findOne({ _id: ObjectId(id) });
  return result;
};

const { ObjectId } = require('mongodb');
const connection = require('../DBConnection');

module.exports = async (id, updatedItem) => {
  if (!ObjectId.isValid(id)) throw new Error('Invalid mongoDB Id');
  const db = await connection();
  const result = await db.collection('Universities').updateOne(
    { _id: ObjectId(id) },
    { $set: updatedItem },
  );
  return result;
};

const { ObjectId } = require('mongodb');
const connection = require('../DBConnection');
const { unprocessableEntity } = require('../../errors/errors');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) throw unprocessableEntity;
  const db = await connection();
  const result = await db.collection('Universities').findOne({ _id: ObjectId(id) });
  return result;
};

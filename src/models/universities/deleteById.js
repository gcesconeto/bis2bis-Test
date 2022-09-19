const { ObjectId } = require('mongodb');
const connection = require('../dbConnection');
const { unprocessableEntity } = require('../../errors/errors');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) throw unprocessableEntity;
  const collection = await connection();
  const result = await collection.deleteOne({ _id: ObjectId(id) });
  return result;
};

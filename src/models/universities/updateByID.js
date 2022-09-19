const { ObjectId } = require('mongodb');
const connection = require('../dbConnection');
const { unprocessableEntity } = require('../../errors/errors');

module.exports = async (id, fields) => {
  if (!ObjectId.isValid(id)) throw unprocessableEntity;
  const collection = await connection();
  const result = await collection.updateOne(
    { _id: ObjectId(id) },
    fields,
  );
  return result;
};

const { ObjectId } = require('mongodb');
const connection = require('../DBConnection');
const { unprocessableEntity } = require('../../errors/errors');

module.exports = async (id, fields) => {
  if (!ObjectId.isValid(id)) throw unprocessableEntity;
  const db = await connection();
  const result = await db.updateOne(
    { _id: ObjectId(id) },
    fields,
  );
  return result;
};

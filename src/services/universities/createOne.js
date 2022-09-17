const { insertOne } = require('../../models/universities');
const { dbError } = require('../../errors/errors');

module.exports = async (newUniversity) => {
  const result = await insertOne(newUniversity);
  if (!result.acknowledged) throw dbError;
  return newUniversity;
};

const { updateById } = require('../../models/universities');
const { dbError } = require('../../errors/errors');

module.exports = async (idToUpdate, updatedUniversity) => {
  const result = await updateById(idToUpdate, updatedUniversity);
  if (!result.acknowledged) throw dbError;
  return result;
};

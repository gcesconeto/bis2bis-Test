const { deleteById } = require('../../models/universities');
const { dbError, notFound } = require('../../errors/errors');

module.exports = async (idToDelete) => {
  const result = await deleteById(idToDelete);
  if (!result.acknowledged) throw dbError;
  if (result.deletedCount === 0) throw notFound;
  return result;
};

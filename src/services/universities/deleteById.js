const { deleteById } = require('../../models/universities');
const { dbError } = require('../../errors/errors');

module.exports = async (idToDelete) => {
  const result = await deleteById(idToDelete);
  if (!result.acknowledged) throw dbError;
  return result;
};

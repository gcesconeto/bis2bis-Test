const { deleteById } = require('../../models/universities');

module.exports = async (idToDelete) => {
  const result = await deleteById(idToDelete);
  if (!result.acknowledged) throw new Error('Error deleting university from database');
  return result;
};

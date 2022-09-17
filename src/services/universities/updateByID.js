const { updateById } = require('../../models/universities');

module.exports = async (idToUpdate, updatedUniversity) => {
  const result = await updateById(idToUpdate, updatedUniversity);
  return result;
};

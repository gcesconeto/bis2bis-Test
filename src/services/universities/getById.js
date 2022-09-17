const { findById } = require('../../models/universities');

module.exports = async (idToFind) => {
  const result = await findById(idToFind);
  return result;
};

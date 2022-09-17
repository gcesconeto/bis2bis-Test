const { findById } = require('../../models/universities');
const { notFound } = require('../../errors/errors');

module.exports = async (idToFind) => {
  const result = await findById(idToFind);
  if (!result) throw notFound;
  return result;
};

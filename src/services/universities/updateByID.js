const { updateById } = require('../../models/universities');
const { dbError, notFound } = require('../../errors/errors');

module.exports = async (idToUpdate, updatedFields) => {
  const fields = { $push: {}, $set: {} };

  const { web_pages: pages, domains, name } = updatedFields;

  if (pages) fields.$push.web_pages = { $each: pages };
  if (domains) fields.$push.domains = { $each: domains };
  if (name) fields.$set.name = name;

  const result = await updateById(idToUpdate, fields);
  if (!result.acknowledged) throw dbError;
  if (result.matchedCount === 0) throw notFound;
  return result;
};

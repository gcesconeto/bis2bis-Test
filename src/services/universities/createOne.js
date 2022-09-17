const { insertOne, find } = require('../../models/universities');
const { dbError, conflict } = require('../../errors/errors');

module.exports = async (newUniversity) => {
  const { country, 'state-province': state, name } = newUniversity;
  const filter = { country, 'state-province': state, name };
  const existing = await (await find(filter)).toArray();
  if (existing.length > 0) {
    conflict.extraInfo = { conflictingEntities: existing };
    throw conflict;
  }
  const result = await insertOne(newUniversity);
  if (!result.acknowledged) throw dbError;
  return newUniversity;
};

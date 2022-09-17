const { insertOne } = require('../../models/universities');

module.exports = async (newUniversity) => {
  const result = await insertOne(newUniversity);
  if (!result.acknowledged) throw new Error('Error inserting university in database');
  return newUniversity;
};

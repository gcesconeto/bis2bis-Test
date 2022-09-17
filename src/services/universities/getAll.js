const { find } = require('../../models/universities');

module.exports = async (country) => {
  let filter = {};
  if (country) filter = { country };
  const result = await find(filter);
  return result;
};

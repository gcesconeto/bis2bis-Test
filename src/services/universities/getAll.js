const { find } = require('../../models/universities');
const { notFound } = require('../../errors/errors');

const PAGE_SIZE = 20;
const FIELDS = { name: 1, country: 1, 'state-province': 1 };

module.exports = async (country, page = 1) => {
  let filter = {};
  if (country) {
    const capitalized = country.charAt(0).toUpperCase() + country.slice(1);
    filter = { country: capitalized };
  }
  const result = await find(filter);
  const pageContent = await result.skip((page - 1) * PAGE_SIZE)
    .limit(PAGE_SIZE)
    .project(FIELDS)
    .toArray();
  if (pageContent.length < 1) throw notFound;
  return pageContent;
};

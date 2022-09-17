const axios = require('axios');

const { insertMany } = require('../models/universities');

const baseURL = 'http://universities.hipolabs.com/search?country=';

const COUNTRIES = [
  'argentina',
  'brasil',
  'chile',
  'colombia',
  'paraguai',
  'peru',
  'suriname',
  'uruguay',
];

const consolidateUniversities = (results) => {
  console.log('Consolidating data...');
  const consolidated = [];
  results.forEach(({ data }) => consolidated.push(...data));
  return consolidated;
};

const getUniversities = async () => {
  console.log('Fetching universities data from API...');
  const promises = [];
  COUNTRIES.forEach((country) => promises.push(axios.get(baseURL + country)));
  return Promise.all(promises);
};

const populateDB = async () => {
  const results = await getUniversities();
  const universities = consolidateUniversities(results);
  const result = await insertMany(universities);
  if (result.acknowledged) {
    console.log(`${result.insertedCount} Universities were inserted, exiting script...`);
    process.exit(0);
  } else {
    console.error('Error while inserting universities, exiting script...');
    process.exit(1);
  }
};

populateDB();

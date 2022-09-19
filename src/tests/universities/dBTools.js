const { insertMany, deleteMany } = require('../../models/universities');
const { universityList } = require('./testData');
const connection = require('../../models/dbConnection');
const { MongoClient } = require('mongodb')

const mockPopulateDb = async () => {
  const result = await insertMany(universityList);
  if (result.acknowledged) {
    console.log(`${result.insertedCount} Universities were inserted, exiting script...`);
  } else {
    console.error('Error inserting universities in database, exiting script...');
  }
};

const mockWipeCollection = async () => {
  const result = await deleteMany({});
  if (result.acknowledged) {
    console.log(`${result.deletedCount} Universities were deleted, exiting script...`);
  } else {
    console.error('Error deleting universities from database, exiting script...');
  }
};

const closeDbConnection = async () => {
  // const connection = await connection()
  // await connection.close();
}

module.exports =  {
  mockWipeCollection,
  mockPopulateDb,
  closeDbConnection,
};

const deleteAll = require('../models/universities/deleteAll');

const resetCollection = async () => {
  const result = await deleteAll();
  if (result.acknowledged) {
    console.log(`${result.deletedCount} Universities were deleted, exiting script...`);
    process.exit(0);
  } else {
    console.error('Error while deleting universities, exiting script...');
    process.exit(1);
  }
};

resetCollection();

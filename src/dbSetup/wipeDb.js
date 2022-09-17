const { deleteMany } = require('../models/universities');

const resetCollection = async () => {
  const result = await deleteMany({});
  if (result.acknowledged) {
    console.log(`${result.deletedCount} Universities were deleted, exiting script...`);
    process.exit(0);
  } else {
    console.error('Error deleting universities from database, exiting script...');
    process.exit(1);
  }
};

resetCollection();

const readline = require('readline');
const { deleteMany } = require('../models/universities');

const wipeCollection = async () => {
  const result = await deleteMany({});
  if (result.acknowledged) {
    console.log(`${result.deletedCount} Universities were deleted, exiting script...`);
    process.exit(0);
  } else {
    console.error('Error deleting universities from database, exiting script...');
    process.exit(1);
  }
};

// Deletion confirmation when in production environment

const { stdin: input, stdout: output, env: { NODE_ENV, DB_COLLECTION } } = process;

const rl = readline.createInterface({ input, output });

if (NODE_ENV === 'production') {
  rl.question(`Type collection name to confirm (${DB_COLLECTION}): `, (answer) => {
    if (answer === DB_COLLECTION) wipeCollection();
    else {
      console.log('Wrong name, exiting script...');
      process.exit(0);
    }
    rl.close();
  });
} else wipeCollection();

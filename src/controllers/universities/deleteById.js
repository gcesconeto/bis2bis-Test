const { NO_CONTENT } = require('http-status-codes').StatusCodes;

const { deleteById } = require('../../services/universities');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteById(id);
    return res.status(NO_CONTENT).end();
  } catch (err) {
    return next(err);
  }
};

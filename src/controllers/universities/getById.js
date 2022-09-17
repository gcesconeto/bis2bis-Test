const { OK } = require('http-status-codes').StatusCodes;

const { getById } = require('../../services/universities');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getById(id);
    return res.status(OK).json(result);
  } catch (error) {
    return next(error);
  }
};

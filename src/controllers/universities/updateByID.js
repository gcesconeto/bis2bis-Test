const { OK } = require('http-status-codes').StatusCodes;

const { updateById } = require('../../services/universities');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateById(id, req.body);
    return res.status(OK).json(result);
  } catch (err) {
    return next(err);
  }
};

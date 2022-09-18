const { OK } = require('http-status-codes').StatusCodes;

const { updateById } = require('../../services/universities');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    await updateById(id, req.body);
    return res.status(OK).end();
  } catch (err) {
    return next(err);
  }
};

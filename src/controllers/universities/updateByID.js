const { updateById } = require('../../services/universities');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateById(id, req.body);
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};

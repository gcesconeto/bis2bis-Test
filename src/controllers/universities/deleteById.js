const { deleteById } = require('../../services/universities');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteById(id);
    return res.status(204).end();
  } catch (err) {
    return next(err);
  }
};

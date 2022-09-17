const { getAll } = require('../../services/universities');

module.exports = async (req, res, next) => {
  try {
    const { country = null } = req.query;
    const result = await getAll(country);
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};

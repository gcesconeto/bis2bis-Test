module.exports = async (req, res, next) => {
  try {
    // const { country = null } = req.query;
    return res.status(200).send('universities list');
  } catch (err) {
    return next(err);
  }
};

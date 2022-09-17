module.exports = async (req, res, next) => {
  try {
    return res.status(200).send('universities list');
  } catch (err) {
    return next(err);
  }
};

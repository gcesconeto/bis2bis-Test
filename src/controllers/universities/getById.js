module.exports = async (req, res, next) => {
  try {
    // const { id } = req.params;
    return res.status(200).send('university');
  } catch (err) {
    return next(err);
  }
};

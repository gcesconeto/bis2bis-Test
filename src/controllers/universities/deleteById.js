module.exports = async (req, res, next) => {
  try {
    // const { id } = req.params;
    return res.status(204).send('deleted');
  } catch (err) {
    return next(err);
  }
};

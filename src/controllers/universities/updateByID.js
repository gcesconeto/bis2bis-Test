module.exports = async (req, res, next) => {
  try {
    // const { id } = req.params;
    // const {} = req.body;
    return res.status(200).send('updated');
  } catch (err) {
    return next(err);
  }
};

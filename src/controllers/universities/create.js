module.exports = async (req, res, next) => {
  try {
    // const {} = req.body;
    return res.status(201).send('created');
  } catch (err) {
    return next(err);
  }
};

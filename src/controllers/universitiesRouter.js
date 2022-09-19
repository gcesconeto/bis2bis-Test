const { Router } = require('express');

const { bodyValidator, queryValidator } = require('../middlewares');

const schemas = require('../schemas/universities');

const {
  createOne,
  deleteById,
  getAll,
  getById,
  updateById,
} = require('./universities');

const router = Router({ mergeParams: true });

router.get('/', queryValidator(schemas.getAll), getAll);
router.get('/:id', getById);

router.post('/', bodyValidator(schemas.createOne), createOne);

router.put('/:id', bodyValidator(schemas.updateById), updateById);

router.delete('/:id', deleteById);

module.exports = router;

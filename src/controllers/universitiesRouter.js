const { Router } = require('express');

const {
  createOne,
  deleteById,
  getAll,
  getById,
  updateById,
} = require('./universities');

const router = Router({ mergeParams: true });

router.get('/', getAll);
router.get('/:id', getById);

router.post('/', createOne);

router.put('/:id', updateById);

router.delete('/:id', deleteById);

module.exports = router;

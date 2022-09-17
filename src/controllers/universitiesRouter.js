const { Router } = require('express');

const {
  create,
  deleteById,
  getAll,
  getById,
  updateById,
} = require('./universities');

const router = Router({ mergeParams: true });

router.get('/', getAll);
router.get('/:id', getById);

router.post('/', create);

router.put('/:id', updateById);

router.delete('/:id', deleteById);

module.exports = router;

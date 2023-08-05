const router = require('express').Router();
const { Tag, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({ include: Product });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, { include: Product });
    if (!tag) {
      res.status(404).json({ message: 'No tag found with that id!' });
    } else {
      res.status(200).json(tag);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [updatedRows] = await Tag.update(
      { tag_name: req.body.tag_name },
      { where: { id: req.params.id } }
    );
    if (updatedRows === 0) {
      res.status(404).json({ message: 'No tag found with that id!' });
    } else {
      res.status(200).json({ message: 'Tag updated successfully!' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedCount = await Tag.destroy({
      where: { id: req.params.id },
    });
    if (deletedCount === 0) {
      res.status(404).json({ message: 'No tag found with that id!' });
    } else {
      res.status(200).json({ message: 'Tag deleted successfully!' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
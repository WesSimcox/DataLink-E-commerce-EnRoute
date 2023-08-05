const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });
    if (!product) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);

    if (req.body.tagIds && req.body.tagIds.length > 0) {
      const productTags = req.body.tagIds.map((tag_id) => ({
        product_id: product.id,
        tag_id,
      }));
      await ProductTag.bulkCreate(productTags);
    }

    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const [updatedRows] = await Product.update(req.body, {
      where: { id: req.params.id },
    });

    if (updatedRows === 0) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }

    if (req.body.tagIds && req.body.tagIds.length > 0) {
      const existingProductTags = await ProductTag.findAll({
        where: { product_id: req.params.id },
      });
      const existingTagIds = existingProductTags.map(({ tag_id }) => tag_id);

      const newProductTags = req.body.tagIds.filter(
        (tag_id) => !existingTagIds.includes(tag_id)
      );

      const productTagsToRemove = existingProductTags.filter(
        ({ tag_id }) => !req.body.tagIds.includes(tag_id)
      );

      await ProductTag.destroy({
        where: { id: productTagsToRemove.map(({ id }) => id) },
      });

      const productTagsToAdd = newProductTags.map((tag_id) => ({
        product_id: req.params.id,
        tag_id,
      }));

      await ProductTag.bulkCreate(productTagsToAdd);
    }

    res.status(200).json({ message: 'Product updated successfully!' });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedCount = await Product.destroy({
      where: { id: req.params.id },
    });

    if (deletedCount === 0) {
      res.status(404).json({ message: 'No product found with that id!' });
      return;
    }

    res.status(200).json({ message: 'Product deleted successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
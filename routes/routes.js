const express = require('express');
const router = express.Router();
const { Category, Product, Tag, ProductTag } = require('../models');

// Get all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving categories' });
  }
});

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.error('Error retrieving products:', err);
    res.status(500).json({ error: 'Error retrieving products' });
  }
});

// Get all tags
router.get('/tags', async (req, res) => {
  try {
    const tags = await Tag.findAll();
    res.json(tags);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving tags' });
  }
});

// Get products from one category
router.get('/products/:category_id', async (req, res) => {
  try {
    const categoryId = req.params.category_id;
    const products = await Product.findAll({
      where: { category_id: categoryId },
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving products' });
  }
});

// Get one product by ID
router.get('/products/:product_id', async (req, res) => {
  try {
    const productId = req.params.product_id;
    const product = await Product.findByPk(productId);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving product' });
  }
});

// Get one tag by ID
router.get('/tags/:tag_id', async (req, res) => {
  try {
    const tagId = req.params.tag_id;
    const tag = await Tag.findByPk(tagId);
    
    if (!tag) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    res.json(tag);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving tag' });
  }
});

// Create a new category
router.post('/categories', async (req, res) => {
  try {
    const { category_name } = req.body;
    const category = await Category.create({ category_name });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: 'Error creating category' });
  }
});

// Update an existing category
router.put('/categories/:category_id', async (req, res) => {
  try {
    const categoryId = req.params.category_id;
    const { category_name } = req.body;
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    await category.update({ category_name });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: 'Error updating category' });
  }
});

// Delete an existing category
router.delete('/categories/:category_id', async (req, res) => {
  try {
    const categoryId = req.params.category_id;
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    await category.destroy();
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting category' });
  }
});

// Create a new product
router.post('/products', async (req, res) => {
  try {
    const { product_name, price, stock, category_id } = req.body;
    const product = await Product.create({ product_name, price, stock, category_id });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Error creating product' });
  }
});

// Update an existing product
router.put('/products/:product_id', async (req, res) => {
  try {
    const productId = req.params.product_id;
    const { product_name, price, stock, category_id } = req.body;
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await product.update({ product_name, price, stock, category_id });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Error updating product' });
  }
});

// Delete an existing product
router.delete('/products/:product_id', async (req, res) => {
  try {
    const productId = req.params.product_id;
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting product' });
  }
});

// Create a new tag
router.post('/tags', async (req, res) => {
  try {
    const { tag_name } = req.body;
    const tag = await Tag.create({ tag_name });
    res.json(tag);
  } catch (err) {
    res.status(500).json({ error: 'Error creating tag' });
  }
});

// Update an existing tag
router.put('/tags/:tag_id', async (req, res) => {
  try {
    const tagId = req.params.tag_id;
    const { tag_name } = req.body;
    const tag = await Tag.findByPk(tagId);
    if (!tag) {
      return res.status(404).json({ error: 'Tag not found' });
    }
    await tag.update({ tag_name });
    res.json(tag);
  } catch (err) {
    res.status(500).json({ error: 'Error updating tag' });
  }
});

// Delete an existing tag
router.delete('/tags/:tag_id', async (req, res) => {
  try {
    const tagId = req.params.tag_id;
    const tag = await Tag.findByPk(tagId);
    if (!tag) {
      return res.status(404).json({ error: 'Tag not found' });
    }
    await tag.destroy();
    res.json({ message: 'Tag deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting tag' });
  }
});

module.exports = router;
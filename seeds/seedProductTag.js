const { ProductTag } = require('../models');

const productTagData = [
  { product_id: 1, tag_id: 1},
  { product_id: 1, tag_id: 2},
  { product_id: 2, tag_id: 3},
  { product_id: 2, tag_id: 4},
  { product_id: 2, tag_id: 5},
  { product_id: 3, tag_id: 6},
  { product_id: 4, tag_id: 7},
  { product_id: 4, tag_id: 8},
  { product_id: 5, tag_id: 9},
];

const seedProductTags = async () => {
  try {
    await ProductTag.bulkCreate(productTagData);
    console.log('Product Tags seeded successfully.');
  } catch (error) {
    console.error('Error seeding product tags:', error);
  }
};

module.exports = seedProductTags;
const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Short Sleeve Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Pants',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = async () => {
  try {
    await Category.bulkCreate(categoryData);
    console.log('Categories seeded successfully.');
  } catch (err) {
    console.error('Error seeding categories:', err);
  }
};

module.exports = seedCategories;
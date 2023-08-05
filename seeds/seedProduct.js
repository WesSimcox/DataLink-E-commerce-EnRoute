const { Product } = require('../models');

const productData = [
  {
    product_name: 'Stripped Shirt',
    price: 29.99,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'Running Shoes',
    price: 89.99,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Baseball Hat',
    price: 24.99,
    stock: 15,
    category_id: 4,
  },
  {
    product_name: 'Sweat Pants',
    price: 19.99,
    stock: 100,
    category_id: 3,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 25,
    category_id: 2,
  },
];

const seedProducts = async () => {
  try {
    await Product.bulkCreate(productData);
    console.log('Products seeded successfully.');
  } catch (err) {
    console.error('Error seeding products:', err);
  }
};

module.exports = seedProducts;

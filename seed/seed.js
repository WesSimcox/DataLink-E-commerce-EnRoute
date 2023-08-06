const sequelize = require('../config/connection');
const { Category, Product, Tag, ProductTag } = require('../models');

// Seed data for categories
const categoryData = [
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Clothing',
  },
  {
    category_name: 'Furniture',
  },
];

// Seed data for products
const productData = [
  {
    product_name: 'Laptop',
    price: 1000.00,
    stock: 10,
    category_id: 1, // Electronics
  },
  {
    product_name: 'T-Shirt',
    price: 20.00,
    stock: 50,
    category_id: 2, // Clothing
  },
  {
    product_name: 'Sofa',
    price: 500.00,
    stock: 5,
    category_id: 3, // Furniture
  },
];

// Seed data for tags
const tagData = [
  {
    tag_name: 'New',
  },
  {
    tag_name: 'Sale',
  },
];

// Seed data for product tags
const productTagData = [
  {
    product_id: 1, // Laptop
    tag_id: 1, // New
  },
  {
    product_id: 2, // T-Shirt
    tag_id: 2, // Sale
  },
  {
    product_id: 3, // Sofa
    tag_id: 1, // New
  },
];

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Connect to the database
    await sequelize.sync({ force: true });

    // Seed categories
    await Category.bulkCreate(categoryData);

    // Seed products
    await Product.bulkCreate(productData);

    // Seed tags
    await Tag.bulkCreate(tagData);

    // Seed product tags
    await ProductTag.bulkCreate(productTagData);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding the database:', err);
    process.exit(1);
  }
};

// Call the function to seed the database
seedDatabase();
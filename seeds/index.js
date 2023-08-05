const seedCategories = require('./seedCategory');
const seedProducts = require('./seedProduct');
const seedTags = require('./seedTag');
const seedProductTags = require('./seedProductTag');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\nDatabase Synced\n');
  await seedCategories();
  console.log('\nseeded Categories\n');

  await seedProducts();
  console.log('\nseeded Products\n');

  await seedTags();
  console.log('\nseeded Tags\n');

  await seedProductTags();
  console.log('\nseeded Product Tags\n');

  process.exit(0);
};

seedAll();
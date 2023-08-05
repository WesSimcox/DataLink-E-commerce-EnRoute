const { Tag } = require('../models');

const tagData = [
  { tag_name: 'long sleeve shirt' },
  { tag_name: 'short sleeve shirt' },
  { tag_name: 'blue' },
  { tag_name: 'red' },
  { tag_name: 'green' },
  { tag_name: 'white' },
  { tag_name: 'grey' },
  { tag_name: 'black' },
  { tag_name: 'tan' },
];

const seedTags = async () => {
  try {
    await Tag.bulkCreate(tagData);
    console.log('Tags seeded successfully.');
  } catch (error) {
    console.error('Error seeding tags:', error);
  }
};

module.exports = seedTags;
const db = require('./connection');
const { Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Grocery' },
    { name: 'Frozen' },
    { name: 'Meat' },
    { name: 'Deli' },
    { name: 'Bakery' },
    { name: 'Produce' },
    { name: 'Household Supplies' }
  ]);

  console.log('categories seeded');

  process.exit();
});

const db = require('./connection');
const { User, Product, Category } = require('../models');

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

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'placeholder.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Canned Coffee',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'placeholder.jpg',
      category: categories[0]._id,
      price: 7.99,
      quantity: 500
    },
    {
      name: 'Toilet Paper',
      category: categories[6]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'placeholder.jpg',
      price: 4.99,
      quantity: 20
    },
    {
      name: 'Handmade Soap',
      category: categories[6]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'placeholder.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[6]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'placeholder.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Oranges',
      category: categories[5]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'placeholder.jpg',
      price: 5.99,
      quantity: 100
    },
    {
      name: 'Bananas',
      category: categories[5]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'placeholder.jpg',
      price: 0.99,
      quantity: 100
    },
    {
      name: 'Cookies',
      category: categories[4]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'placeholder.jpg',
      price: 3.99,
      quantity: 100
    },
    {
      name: 'Donuts',
      category: categories[4]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'placeholder.jpg',
      price: 3.99,
      quantity: 100
    },
    {
      name: 'Sliced Cheddar',
      category: categories[3]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'placeholder.jpg',
      price: 8.99,
      quantity: 100
    },
    {
      name: 'Sliced Hame',
      category: categories[3]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'placeholder.jpg',
      price: 10.99,
      quantity: 100
    },
    {
      name: 'Chicken Wings',
      category: categories[2]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'placeholder.jpg',
      price: 10.99,
      quantity: 100
    },
    {
      name: 'Prime Rib',
      category: categories[2]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'placeholder.jpg',
      price: 22.99,
      quantity: 100
    },
    {
      name: 'DiGiorno Pizza',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'placeholder.jpg',
      price: 5.99,
      quantity: 100
    },
    {
      name: 'Ice Cream',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'placeholder.jpg',
      price: 2.99,
      quantity: 100
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create(
    {
      firstName: 'Diana',
      lastName: 'Salas',
      email: 'testing@test.com',
      password: 'Testing123!',
      zipCode: '33773',
      latitude: '27.87986',
      longitude: '-82.75092',
      orders: [
        {
          products: [products[0]._id, products[1]._id, products[4]._id]
        }
      ]
    },
    {
      firstName: 'Ani',
      lastName: 'Vader',
      email: 'Vader1@test.com',
      password: 'Testing123!',
      zipCode: '33772',
      latitude: '27.84179',
      longitude: '-82.79544',
      orders: [
        {
          products: [products[2]._id, products[4]._id, products[6]._id]
        }
      ]
    },
    {
      firstName: 'Xan',
      lastName: 'Ollivander',
      email: 'XO@test.com',
      password: 'Testing123!',
      zipCode: '33771',
      latitude: '27.90803',
      longitude: '-82.75529',
      orders: [
        {
          products: [products[5]._id, products[7]._id, products[9]._id]
        }
      ]
    },
    {
      firstName: 'Han',
      lastName: 'Solo',
      email: 'Solo@test.com',
      password: 'Testing123!',
      zipCode: '33774',
      latitude: '27.88301',
      longitude: '-82.82732',
      orders: [
        {
          products: [products[0]._id, products[2]._id, products[10]._id]
        }
      ]
    },
    {
      firstName: 'Padme',
      lastName: 'Skywalker',
      email: 'Princess@test.com',
      password: 'Testing123!',
      zipCode: '33775',
      latitude: '27.91560',
      longitude: '-82.80650',
      orders: [
        {
          products: [products[4]._id, products[5]._id, products[8]._id]
        }
      ]
    }
  );

  console.log('users seeded');

  process.exit();
});

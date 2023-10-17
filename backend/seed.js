const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
    {
        name: 'Laptop',
        price: 1000,
        description: 'High performance laptop',
        stock: 10
    },
    {
        name: 'Smartphone',
        price: 500,
        description: 'Latest Android smartphone',
        stock: 20
    },
    {
        name: 'Headphones',
        price: 50,
        description: 'Noise-cancelling headphones',
        stock: 30
    }
];

async function seedDB() {
    try {
        await Product.deleteMany({}); // Clear existing products
        await Product.insertMany(products); // Insert test products
        console.log('Test products seeded!');
    } catch (err) {
        console.error('Error seeding database:', err);
    }
}

module.exports = seedDB;

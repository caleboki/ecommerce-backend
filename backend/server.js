const express = require('express');
const mongoose = require('mongoose');

const seedDB = require('./seed');
const app = express();
const PORT = 5000;

const productRoutes = require('./routes/products');

seedDB();
app.use(express.json());  // Middleware to parse JSON requests
app.use('/api', productRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://db:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    res.send('E-commerce API is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

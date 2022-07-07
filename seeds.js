const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Mongo onnection open!");
    })
    .catch(err => {
        console.log("Oh no! Mongo connection failed!", err)
    })

const p = new Product({
    name: "Ruby Grapefruit",
    price: 1.99,
    category: 'fruit',
});

p.save()
    .then(p => {
        console.log(p);
    })
    .catch(err => {
        console.log(err);
    });

const seedProducts = [{
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'Vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'Fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'Fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable',
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy',
    },
    {
        name: 'Cottage Cheese',
        price: 2.00,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
require('./connection');

// using the model 
const product = require('./models/product');
const user = require('./models/user');

// creating a new document base on the model
const product = new product({
    name: 'shoes',
    description: 'sizes between 36 and 45',
    price: 29.99
});

console.log('created product: ', product)

const user = new user({
    username: 'alvarito69',
    password: '69969669',
    name: 'Álvaro'
});

console.log('created user: ', user)

// saving the created document
product.save((err, document) => {
    if (err) console.log(err);
    console.log('saved: ', document);
});

user.save((err, document) => {
    if (err) console.log(err);
    console.log('saved: ', document);
});
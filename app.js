const express =require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const categories = require('./routes/categories')
const foods = require('./routes/foods')
const orders = require('./routes/orders')
const users = require('./routes/users')


app.use(express.json())

app.use(express.static('image'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

mongoose.connect("mongodb://127.0.0.1/", {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connect successfully');
}).catch(e => {
    console.log('Error: ', e);
    process.exit();
});

app.use('/categories', categories);
app.use('/foods', foods);
app.use('/orders', orders);
// app.use('/users', users);

const port = 5000;
app.listen(port, () => console.log(`App is running on port ${port}`));


module.export = app; 


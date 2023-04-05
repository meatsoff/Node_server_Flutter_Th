const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    username: String,
    address: String,
    createOnDate: String,
    total: String,
    orderDetails: [],
    status: String,
}, {versionKey: false, collection: 'order'});

module.exports = mongoose.model('Order', OrderSchema)
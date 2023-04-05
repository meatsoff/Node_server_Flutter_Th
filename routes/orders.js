const Orders = require('../models/order.model.js');

const express = require('express');
const router = express.Router();

const dateTime = require('node-datetime');
const dt = dateTime.create();
const formatted = dt.format('d-m-Y H:M:S');

router.post('/checkout', (req, res) => {
    const orders = new Orders({
        username: req.body.username,
        createOnDate: formatted,
        status: "0",
        total: "0",
    })
    orders.save()
    .then(data => res.send(`${data} is created`))
    .catch(e => res.status(500).send({message: e.message}))
})

router.post('/placeorder', (req, res) => {
    Orders.findByIdAndUpdate(
        {_id: req.body.id},
        {status:"1", 
        total: req.body.total, 
        $push:{orderDetails: req.body.orderDetails}},
        {new: true}
    )
    .then(data => res.send(data))
    .catch(e => res.status(500).send({message: e.message}))
})

router.get('/', (req, res) => {
    
    Orders.find()
    .then(data => {
        res.send({'order':data});
    })
    .catch(e => {
        res.status(500).send({message: e.message})
    })
})


module.exports = router;


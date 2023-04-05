const Foods = require('../models/food.model');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    Foods.find()
    .then(data => {
        res.send({'foods':data});
    })
    .catch(e => {
        res.status(500).send({message: e.message})
    })
})
router.get('/:id', (req, res) => {
    Foods.findById(req.params.id)
    .then(data => {
        res.send({'foods':data});
    })
    .catch(e => {
        res.status(500).send({message: e.message})
    })
})



router.post('/', (req, res) => {
    // const foods = new Foods({
    //     title: req.body.title,
    //     description: req.body.description,
    //     image: req.body.image,
    //     price: req.body.price
    // })
    // foods.save()
    Foods.create(req.body)
    .then(data => {
         res.send(data);
    })
    .catch(e => {
        res.status(500).send({message: e.message})
    })
})

module.exports = router;

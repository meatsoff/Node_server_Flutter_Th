const Categories = require('../models/category.model.js');

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    // const {id} = req.params
    // const cateModel = Categories(req.body)
    // cateModel.save()
    Categories.create(req.body)
    .then(data => res.send(`${data} is created`))
    .catch(e => res.status(500).send({message: e.message}))
})

router.get('/', (req, res) => {
    //res.send('Hi this is a get method api')
    
    Categories.find()
    .then(data => {
        res.send({'categories':data});
    })
    .catch(e => {
        res.status(500).send({message: e.message})
    })
})

router.get('/:id', (req, res) => {
    Categories.findById(req.params.id)
    .then(data => {
         res.send(data);
    })
    .catch(e => {
        res.status(500).send({message: e.message})
    })
})

module.exports = router;

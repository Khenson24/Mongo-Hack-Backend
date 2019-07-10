const express = require('express');
const router = express.Router();

const Item = require('../../models/item');

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items)) 
});

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        email: req.body.email,
        hackathon: req.body.hackathon,
        hackathon_date: req.body.hackathon_date,
        location: req.body.location,
        prizes: req.body.prizes,
        t_link: req.body.t_link
    })
    newItem.save().then(item => res.json(item));
});

// router.delete('/:id', (req, res) => {
//     Item.findById(req.params.id)
//     .then(item => item.remove().then(() => res.json({success: true})))
// });


module.exports = router;
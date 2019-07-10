const express = require('express');
const router = express.Router();

const Hack = require('../../models/Hack');



router.get('/', (req, res) => {
    Hack.find()
        .sort({ date: -1 })
        .then(Hacks => res.json(Hacks)) 
});

router.post('/', (req, res) => {
    const newHack = new Hack({
        name: req.body.name,
        email: req.body.email,
        hackathon: req.body.hackathon,
        hackathon_date: req.body.hackathon_date,
        location: req.body.location,
        prizes: req.body.prizes,
        t_link: req.body.t_link
    })
    newHack.save().then(Hack => res.json(Hack));
});

// router.delete('/:id', (req, res) => {
//     Item.findById(req.params.id)
//     .then(item => item.remove().then(() => res.json({success: true})))
// });


module.exports = router;
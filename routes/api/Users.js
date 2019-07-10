const express = require('express');
const router = express.Router();


const User = require('../../models/User');



router.get('/', (req, res) => {
    User.find()
        .sort({ date: -1 })
        .then(Users => res.json(Users))
});

router.post('/', (req, res) => {
    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    })

    newUser
        .save()
        .then(User => res.json(User))
});

// router.delete('/:id', (req, res) => {
//     Item.findById(req.params.id)
//     .then(item => item.remove().then(() => res.json({success: true})))
// });


module.exports = router;
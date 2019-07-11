const express = require('express');
const router = express.Router();


const User = require('../../models/User');



router.get('/', (req, res) => {
    User.find()
        .sort({ date: -1 })
        .then(Users => res.json(Users))
});

router.post('/', (req, res) => {
    let errors = [];
    const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2
    })

    if( !req.body.email || !req.body.password ) {
        res.redirect('/signup.html')
        .catch(err => console.log(err))
    }

    if ( req.body.password != req.body.password2 ){
        
    }

    if (req.body.password.length < 6) {
        
    }

    else {
       newUser
        .save()
        //.then(User => res.json(User))
        .then(res.redirect('/')) 
        .catch(err => console.log(err)) 
    }

    
});

// router.delete('/:id', (req, res) => {
//     Item.findById(req.params.id)
//     .then(item => item.remove().then(() => res.json({success: true})))
// });


module.exports = router;
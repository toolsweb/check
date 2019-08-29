var express = require('express');
var router = express.Router();
 var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var User = require('./../models/User');

router.post('/login', function (req, res) {
    console.log(req.body)

    User.findOne({login : req.body.login}, (err, user) => {
        console.log(user)
        if (user)
            res.json({error: 'Login already use'})
    }).then(res => {

    })
});

module.exports = router;
var mongoose = require('mongoose');
var UserSchema = require('../../modules/user').User;
var express = require('express');
var router = express.Router();

router.get('/', function( req, res ) {
    res.send("YELLO FROM API ROUTES!");
});

module.exports = router;
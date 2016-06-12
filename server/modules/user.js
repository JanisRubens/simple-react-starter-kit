var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cmsdata');

var User = mongoose.model('User', {
    name: String
});

module.exports.User = User;
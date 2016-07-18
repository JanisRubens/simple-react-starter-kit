
module.exports = function( config, mongoose ) {
  // connect to the database
  mongoose.connect(config.db, function(err) {
    if (err) { throw err; }
  });

// loading models
require('./user');
};
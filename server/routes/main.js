// Require all routes that app will use;
var apiRoutes = require('./api/routes');

module.exports = function routes(app) {
    app.use('/api', apiRoutes);
};
var partials = require('../controllers/partials')
module.exports = function(app) {
 	app.get('/partials/:filename', partials.enviarParcial)
}
module.exports = function(app) {
	
	var partials = app.controllers.partials;
 	app.get('/partials/:filename', partials.enviarParcial)
};
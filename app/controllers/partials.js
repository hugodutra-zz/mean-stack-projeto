module.exports = function(app) {
	var controller = {};

	controller.enviarParcial = function(req, res) {
	  console.log('Eviando view parcial: ' + req.params.filename);
	  res.render('partials/' + req.params.filename);
	};

	return controller;
};

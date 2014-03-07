module.exports = function(app) {
	
	var home = app.controllers.home;
	
	app.get('/', function(req, res, next) {
		if(req.isAuthenticated()) {
			return next();
		} else {
			res.render("auth");	
		}
		
	});

	app.get('/', home.index);

}
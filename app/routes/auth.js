"use strict";

var passport = require('passport');

module.exports = function(app) {
	app.get('/auth/github', passport.authenticate('github'));
	app.get('/auth/github/callback', passport.authenticate('github', {
		successRedirect: '/',
		failureRedirect:'/error'
	}));
	app.get('/logout', function(req, res) {
	  req.logOut(); // exposto pelo passport
	  res.redirect('/');
	});
};



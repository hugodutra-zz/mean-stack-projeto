"use strict";

module.exports = function(app) {
	var controller = {};
	controller.index = function(req, res) {
		res.render('index', {usuario: req.user.username});
	};
	return controller;
};
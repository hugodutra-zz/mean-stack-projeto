"use strict";

module.exports = function(app) {

	var schema = new db.Schema({
	  nome: String,
	  email: String
	});
	
	return db.model('contato', schema);
};

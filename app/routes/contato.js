"use strict";

module.exports = function(app) {
	var contato = app.controllers.contato;
	
	app.get('/contatos', contato.listaContatos);
	app.get('/contatos/:id', contato.obtemContato);
	app.delete('/contatos/:id', contato.removeContato);
	app.post('/contatos', contato.salvaContato);
};
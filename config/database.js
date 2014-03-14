var mongoose = require('mongoose');
var uri = 'mongodb://localhost/contatooh';

module.exports = function() {
	mongoose.connect(uri);

	mongoose.connection.on('connected', function () {
	  console.log('Mongoose! Conexão aberta em ' + uri);
	});

	mongoose.connection.on('error',function (err) {
	  console.log('Mongoose! Erro de conexão: ' + err);
	});

	mongoose.connection.on('disconnected', function () {
	  console.log('Mongoose! Desconectado');
	});

	process.on('SIGINT', function() {
	  mongoose.connection.close(function () {
	    console.log('Mongoose! Conexão fechada pelo término da aplicação');
	    process.exit(0);
	  });
	});

	return mongoose;
};
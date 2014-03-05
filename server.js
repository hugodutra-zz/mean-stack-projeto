
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// http://blog.modulus.io/nodejs-and-express-basic-authentication
// criando sessão do usuário (cuidado, tem que vir antes. Se vier depois dá problema)
app.use(express.cookieParser());
app.use(express.session({secret: "This is a secret"}));

// Authenticação simples
app.use(express.basicAuth('teste','teste'));
/*
// Autenticação mais flexível
app.use(express.basicAuth(function(user, pass, callback) {
 var result = (user === 'testUser' && pass === 'testPass');
 callback(null, result);
}));
*/

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require('./config/database')('mongodb://localhost/contatooh')

require('./app/routes/contato')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

function requireAuthentication() {
	console.log('chamou');
}

function loadUser() {
	console.log('chamou');
}


/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var auth = require('./config/auth');
var load = require('express-load');

var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

// sem isso, o usuário logado não fica na sessão. 
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'keyboard cat' }));
app.use(express.static(path.join(__dirname, 'public')));

auth(app); // ativa autenticação

global.db = require('./config/database')('mongodb://localhost/contatooh');

load('models',  {cwd: 'app'})
	.then('controllers')
	.then('partials')
	.then('routes')
	.into(app);

// must be the last route
app.get('*', function(req, res) {
	res.render('404', 404);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


/**
 * Module dependencies.
 */

var load = require('express-load');
var express = require('express');
var http = require('http');
var path = require('path');

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
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

global.db = require('./config/database')('mongodb://localhost/contatooh');

load('models',  {cwd: 'app'})
	.then('controllers')
	.then('partials')
	.then('routes')
	.into(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

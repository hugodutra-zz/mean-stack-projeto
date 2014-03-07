
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
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

// deve vir antes do routes
app.use(passport.initialize());
app.use(passport.session());

app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));

var GITHUB_CLIENT_ID = ''
var GITHUB_CLIENT_SECRET = ''


passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/github/callback'
}, function(accessToken, refreshToken, profile, done) {
  process.nextTick(function() {
    return done(null, profile);
  });
}));
 
app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', {
  successRedirect: '/',
  failureRedirect:'/error'
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});
 
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/error', function(req, res, next) {
  res.send("Error logging in.");
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/logout', function(req, res) {
  req.logOut(); // exposto pelo passport, mas nao funciona
  res.redirect('/');
});

global.db = require('./config/database')('mongodb://localhost/contatooh');

load('models',  {cwd: 'app'})
	.then('controllers')
	.then('partials')
	.then('routes')
	.into(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

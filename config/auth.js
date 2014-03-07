var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

var GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
var GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET
var GITHUB_CALLBACK_URL = 'http://localhost:3000/auth/github/callback'

module.exports = function(app) {

	// sempre antes da configuração do
	app.use(passport.initialize());
	app.use(passport.session());

	app.use(app.router);

	passport.use(new GitHubStrategy({
		clientID: GITHUB_CLIENT_ID,
		clientSecret: GITHUB_CLIENT_SECRET,
		callbackURL: GITHUB_CALLBACK_URL
	}, function(accessToken, refreshToken, profile, done) {
		process.nextTick(function() {
			return done(null, profile);
		});
	}));

	passport.serializeUser(function(user, done) {
	  done(null, user);
	});
	 
	passport.deserializeUser(function(obj, done) {
	  done(null, obj);
	});
};
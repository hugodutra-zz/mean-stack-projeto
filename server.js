global.db = require('./config/database')();
var http = require('http');
var passport = require('./config/passport')();
var app = require('./config/express')(passport);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

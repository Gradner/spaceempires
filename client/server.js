/**
 * Module dependencies.
 */

var express = require('express')
  , path = require('path')

var app = express();
var http = require('http').createServer(app);

var io = require('socket.io');
var serv_io = io.listen(http);

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static('public'));

http.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

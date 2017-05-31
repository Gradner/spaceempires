
/**
 * Module dependencies.
 */

var express = require('express')
  , path = require('path')
var Universe = require('./unibin/universe').Universe;

var app = express();
var http = require('http').createServer(app);

var io = require('socket.io');
var serv_io = io.listen(http);

// all environments
app.set('port', process.env.PORT || 9001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

http.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  gameUniverse = new Universe({
    x : 800,
    y : 600,
    maxPlanets : 10,
    stars : 18000,
  });

  setInterval(function(){gameUniverse.update()}, 1000);

});

app.get('/', function(req, res){
  res.send(gameUniverse);
});

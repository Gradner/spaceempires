
/**
 * Module dependencies.
 */

var express = require('express')
  , path = require('path')
var Universe = require('./unibin/universe').Universe;

var app = express();
var http = require('http').createServer(app);

var io = require('socket.io').listen(9000);
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
    newOpts : {
      maxPlanets : 10,
      systems : 18000
    }
  });

  setInterval(function(){
    gameUniverse.update();
    io.emit('uniUpdate', gameUniverse);
  }, 5000);

});

app.get('/', function(req, res){
  res.send(gameUniverse);
});

io.on('connection', function (socket) {
  var age = gameUniverse.age;
  console.log('gameserver connected:', socket.client.id);
  socket.emit('initialize', gameUniverse);

});

io.on('disconnect', function(){
  console.log('gameserver disconnected:', socket.client.id);
})

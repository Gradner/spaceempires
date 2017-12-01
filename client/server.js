/**
 * Module dependencies.
 */

var express = require('express')
  , path = require('path')

var app = express();
var http = require('http').createServer(app);

var io = require('socket.io').listen(3000);
var ioc = require('socket.io-client');
var serv_io = io.listen(http);

// all environments
app.set('port', process.env.PORT || 80);

app.use(express.static('public'));

http.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var universe;

var socket = ioc.connect("http://localhost:9000", {
  reconnection: true,
  autoConnect: true
});

socket.on('connect', ()=> {
  console.log('connected to universe server');

  socket.on('initialize', function(data){
    universe = data;
  });

  socket.on('uniUpdate', function(data){
    universe = data;
    console.log('universe updated: new age is ' + universe.age);
  });

  socket.on('disconnect', ()=>{
    console.log('disconnected from server');
    socket.removeListener('uniUpdate');
    socket.removeListener('disconnect');
  })

});

io.on('connection', function(socket){
  socket.emit('pushUni', universe);
})

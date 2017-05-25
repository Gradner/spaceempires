
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
app.set('port', process.env.PORT || 9001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

http.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  gameUniverse = new Universe(1920, 1080, 167903, 10);
  console.log(gameUniverse.stars);
  console.log(gameUniverse.starCount + " Stars in the Universe");
  console.log(gameUniverse.planetCount + " Planets in the Universe");
});

function Universe(x, y, stars, maxPlanets){
  this.x = x;
  this.y = y;
  this.maxPlanets = maxPlanets;
  this.stars = [];
  this.starCount = 0;
  this.planetCount = 0;
  for(i = 0; i < stars; i++){
    star = new Star(this.x, this.y, i, this.maxPlanets)
    this.stars.push(star);
    this.starCount += 1;
    this.planetCount += star.planets.length;
  }
}

function Star(x, y, id, maxPlanets){
  this.x = Math.round(Math.random() * x);
  this.y = Math.round(Math.random() * y);
  this.type = Math.round((Math.random() * 4) + 1);
  this.id = id;
  this.planets = [];
  var planetNumber = Math.round(Math.random() * maxPlanets);
  for(p = 0; p < planetNumber; p++){
    planet = new Planet(p);
    this.planets.push(planet);
  }
}

function Planet(uid, id){
  this.sysid = id;
  this.id = uid;
  this.type = Math.round((Math.random() * 6) + 1);
}

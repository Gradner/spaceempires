var nameGen = require('./namegen');

class Universe {
  constructor(options){
    this.init(options);
  }

  init(options){
    this.x = options.x;
    this.y = options.y;
    this.maxPlanets = options.maxPlanets;
    this.stars = [];
    this.age = 0;
    this.starCount = 0;
    this.planetCount = 0;
    for(var i = 0; i < options.stars; i++){
      var star = new Star({
        x : this.x,
        y : this.y,
        id : i,
        maxPlanets : this.maxPlanets,
      })
      this.stars.push(star);
      this.starCount += 1;
      this.planetCount += star.planets.length;
    }
  }

  update(){
    var startTime = Date.now();
    this.age += 1;
    this.stars.forEach((star) => {
      star.update();
    });
    var endTime = Date.now();
    console.log(endTime - startTime);
  }
}

class Star {
  constructor(options){
    this.init(options);
  }

  init(options){
    this.name = nameGen.createName(4);
    this.x = Math.round(Math.random() * options.x);
    this.y = Math.round(Math.random() * options.y);
    this.type = Math.round((Math.random() * 4) + 1);
    this.id = options.id;
    this.planets = [];
    var planetNumber = Math.round(Math.random() * options.maxPlanets);
    for(var p = 0; p < planetNumber; p++){
      var planet = new Planet({
        sysid : p,
        starname : this.name,
      });
      this.planets.push(planet);
    }
  }

  update(){
    this.planets.forEach((planet) => {
      planet.update();
    });
  }
}

class Planet {
  constructor(options){
    this.init(options);
  }

  init(options){
    this.sysid = options.sysid;
    this.name = options.starname + " " + nameGen.romanNumeral(this.sysid + 1);
    this.type = Math.round((Math.random() * 6) + 1);
  }

  update(){

  }
}

module.exports.Universe = Universe;

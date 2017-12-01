var Planet = require("./planet");
var nameGen = require('./namegen');

module.exports = class Star {
  constructor(options){
    this.init(options);
    return this;
  }

  init(options){
    this.name = options.name;
    this.x = (Math.random() * options.x).toFixed(3);
    this.y = (Math.random() * options.y).toFixed(3);
    this.type = Math.round((Math.random() * 4) + 1);
    this.id = options.id;
    this.planets = [];
    var planetNumber = Math.round(Math.random() * options.maxPlanets);
    for(var p = 0; p < planetNumber; p++){
      var planet = new Planet({
        name: options.name + " " + nameGen.romanNumeral(p + 1),
        id : p
      });
      this.planets.push(planet);
    }
  }

  update(){
    this.planets.forEach(function(planet){
      planet.update();
    });
  }
}

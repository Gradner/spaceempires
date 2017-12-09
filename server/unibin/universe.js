var nameGen = require('./tools/namegen');
var System = require('./system')
var Planet = require('./planet')

class Universe {
  constructor(options){
    this.init(options);
  }

  init(options){
    this.xMax = options.x;
    this.yMax = options.y;
    this.systems = options.systems || this.createSystems(options.newOpts);
    this.planets = options.planets || this.createPlanets(options.newOpts, this.systems);
    this.age = options.age || 0;
  }

  createSystems(options){
    var systems = [];
    for(var i = 0; i < options.systems; i++){
      var system = new System({
        name: nameGen.createName(4),
        xMax : this.xMax,
        yMax : this.yMax,
        id : i,
        maxPlanets : options.maxPlanets,
      })
      systems.push(system);
    }
    return systems;
  }

  createPlanets(options, systems){
    var planets = [];
    var planetid = 0;
    for(var i = 0; i < systems.length; i++){
      var planetNumber = Math.round(Math.random() * options.maxPlanets);
      for(var p = 0; p < planetNumber; p++){
        var planet = new Planet({
          name: systems[i].name + " " + nameGen.romanNumeral(p + 1),
          id: planetid,
          sysid : i,
          type: Math.round((Math.random() * 6) + 1)
        });
        planetid += 1;
        planets.push(planet);
      }
    }
    return planets;
  }

  update(){
    var startTime = Date.now();
    this.age += 1;
    this.systems.forEach((system) => {
      system.update();
    });
    this.planets.forEach(function(planet){
      planet.update();
    });
    var endTime = Date.now();
    console.log(endTime - startTime);
  }
}

module.exports.Universe = Universe;

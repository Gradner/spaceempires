var nameGen = require('./namegen');
var Star = require('./star')

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
        name: nameGen.createName(4),
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

module.exports.Universe = Universe;

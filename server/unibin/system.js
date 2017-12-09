var Planet = require("./planet");
var nameGen = require('./tools/namegen');

module.exports = class System {
  constructor(options){
    this.init(options);
    return this;
  }

  init(options){
    this.name = options.name;
    this.x = options.x || (Math.random() * options.xMax).toFixed(3);
    this.y = options.y || (Math.random() * options.yMax).toFixed(3);
    this.starType = Math.round((Math.random() * 4) + 1);
    this.id = options.id;
  }



  update(){

  }
}

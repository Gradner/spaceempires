var nameGen = require('./tools/namegen');

module.exports = class Species {
  constructor(options){
    this.init(options);
    return this;
  }

  init(options){
    //core statistics
    this.strength = options.strength;
    this.constitution = options.constitution;
    this.dexterity = options.dexterity;
    this.intelligence = options.intelligence;
    this.charisma = options.charisma;
    this.wisdom = options.wisdom;
    this.perception = options.perception;
    this.luck = options.luck;

    //traits
    this.honour = options.honour;
    this.military = options.military;
    this.industry = options.industry;
    this.social = options.social;
    this.expansion = options.expansion;

    //additional info
    this.totalPop = options.totalPop;
    this.bio = options.bio;
    this.homePlanet = options.homePlanet;
    this.name = options.name;

  }

  update(){

  }

}

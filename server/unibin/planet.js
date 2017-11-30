module.exports = class Planet {
  constructor(options){
    this.init(options);
    return this;
  }

  init(options){
    this.name = options.name;
    this.sysid = options.id;
    this.id = options.uid;
    this.type = Math.round((Math.random() * 6) + 1);
  }

  update(){
    
  }
}

module.exports = class Planet {
  constructor(options){
    this.init(options);
    return this;
  }

  init(options){
    this.name = options.name;
    this.sysid = options.sysid;
    this.id = options.id;
    this.type = options.type;
    this.ownership = options.ownership || false;
  }

  update(){

  }
}

class Planet {
  constructor(options){
    this.init(options);
    return this;
  }

  init(options){
    this.sysid = options.id;
    this.id = options.uid;
    this.type = Math.round((Math.random() * 6) + 1);
  }
}

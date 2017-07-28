define([
  './Field',
  './config.json'
],function (Field, Config) {
  return function Player(name){
    this.name = name;
    this.field = new Field(Config.field.size);
    this.age = 25;
  };
});
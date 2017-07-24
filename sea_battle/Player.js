define([
  './Field'
],function (Field) {
  return function Player(name, generator){
    if(!generator){
      generator = function(field){return field}
    }

    this.name = name;
    this.field = generator(new Field(10));
  };
});
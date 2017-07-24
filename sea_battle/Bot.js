define([
  './Field',
  '../node_modules/lodash/lodash.js',
], function (Field, _) {
  function fillField(field, count, sizeOfField){
    for(var i=0; i<count; i++){
      var x = _.random(sizeOfField);
      var y = _.random(sizeOfField);

      field.result[y][x].isFilled = true;
    }

    return field;
  }

  return function Bot(){
    this.name = 'bot';
    this.field = fillField(new Field(10), 10, 9);
  };
});
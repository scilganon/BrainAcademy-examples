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

    this._history = [];

    this.getXY = function(){
      do{
        var x = _.random(9);
        var y = _.random(9);

        var history_row = `${x},${y}`;

        var isFound = this._history.find(function(row){
          return row === history_row;
        });
      }while(isFound);

      this._history.push(history_row);

      return {
        x: x,
        y: y
      };
    }
  };
});
define([
  './Field',
  '../node_modules/lodash/lodash.js',
  'json!./config.json'
], function (Field, _, Config) {
  function fillField(field, count){
    var sizeOfField = field.result.length;

    for(var i=0; i<count; i++){
      var x = _.random(sizeOfField);
      var y = _.random(sizeOfField);

      field.result[y][x].isFilled = true;
    }

    return field;
  }

  return function Bot(){
    this.name = 'bot';
    this.field = fillField(
      new Field(Config.field.size),
      Config.init.ships.length
    );

    this._history = [];

    this.getXY = function(){
      do{
        var x = _.random(Config.field.size -1);
        var y = _.random(Config.field.size -1);

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
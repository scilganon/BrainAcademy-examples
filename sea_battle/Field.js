define([
  './Cell'
], function (Cell) {
  return function Field(size){
    this.result = [];

    for(var i=0; i< size; i++){
      this.result.push([]);

      for(var j=0; j< size; j++){
        this.result[i][j] = new Cell(j, i);
      }
    }
  }
});
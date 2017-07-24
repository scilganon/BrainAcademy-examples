define([
  './Cell'
], function (Cell) {
  function getShipCells(el, count, orientation){
    if(!count){
      return [];
    }

    var cells = [el];

    switch(orientation){
      case 'v':
        var current = el;

        for(var i=0; i<count-1; i++){
          var row = current.parentElement.nextSibling;

          if(!row){
            cells = [];
            break;
          }

          current = row.cells[el.cellIndex];

          cells.push(current);
        }

        break;
      case 'h':
        var current = el;

        for(var i=0; i<count-1; i++){
          current = current.nextSibling;

          if(!current){
            cells = [];
            break;
          }

          if(current){
            cells.push(current);
          }
        }

        break;
      default:
        console.warn('orientation was not checked');
        return [];
    }

    return cells;
  }

  function markNearReserved(markedList, field){
    markedList.forEach(function(cell){
      for(var i=-1; i<2; i++){
        for(var j=-1; j<2; j++){
          var foundRow = field.result[cell.y + i];
          if(foundRow){
            var foundCell = foundRow[cell.x + j];

            if(foundCell && !foundCell.isFilled){
              foundCell.isReserved = true;
            }
          }
        }
      }
    });
  }

  return function Field(size){
    this.result = [];

    for(var i=0; i< size; i++){
      this.result.push([]);

      for(var j=0; j< size; j++){
        this.result[i][j] = new Cell(j, i);
      }
    }

    this.addShip = function(el, orientation, size){
      var cells = getShipCells(el, size, orientation);
      var that = this;

      cells.forEach(function(el){
        var x = el.cellIndex;
        var y = el.parentElement.rowIndex;


        var cell = that.result[y][x];
        cell.isFilled = !cell.isFilled;
      });

      var list = cells.map(function(el){
        var x = el.cellIndex;
        var y = el.parentElement.rowIndex;

        return that.result[y][x];
      });

      markNearReserved(list, this);
    }

    this.shot =  function shot(elCell){
      var x = elCell.cellIndex;
      var y = elCell.parentElement.rowIndex;


      var cell = this.result[y][x];
      cell.isShot = true;

      return cell.isHit();
    }
  }
});
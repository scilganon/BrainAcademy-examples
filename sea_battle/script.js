define([
  './Player',
  './Bot'
], function(Player, Bot){

  function renderTable(field, id){
    var result  = field.result.map(function(row){
      var list = row.map(function(cell){
        return `<td class="${cell.getCls()}"></td>`;
      });

      return `<tr>${list.join('')}</tr>`
    }).join('');

    return `<table id="${id}">${result}</table>`;
  }

  var state = window.state = {
    players: {
      real: new Player('max'),
      bot: new Bot()
    },

    isStarted: false,
    _order: 1,
    switchOrder(){
      this._order = +!this._order;
    },

    list_ships: [4,3,3,2,2,2,1,1,1,1],

    ship: {
      count: 1,
      orientation: 'v',
      cells: [],
      reset(){
        this.count = state.list_ships[0];
        this.orientation = 'v';
        this.cells = [];
      }
    },

    getLooser: function getLooser(){
      // var listOfPlayers = [this.players.real, this.players.bot];
      var listOfPlayers = Object.values(state.players);

      var looser;

      for(var i=0; i<listOfPlayers.length; i++){
        var rows = listOfPlayers[i].field.result;

        var shoted = 0;
        var filled = 0;

        rows.forEach(function(row){
          row.forEach(function(cell){
            if(cell.isFilled){
              filled++;

              if(cell.isShot){
                shoted++;
              }
            }
          });
        });

        if(shoted === filled){
          looser = listOfPlayers[i];
        }
      }

      return looser;
    }
  };

  function shot(elCell, field){
    var x = elCell.cellIndex;
    var y = elCell.parentElement.rowIndex;


    var cell = field.result[y][x];
    cell.isShot = true;

    return cell.isHit();
  }

  function checkIfRenderNotAvailable(list){
    return list.find(function(el){
      return el.classList.contains('black');
    });
  }

  function renderHover(list){
    if(checkIfRenderNotAvailable(list)){
      return false
    }

    list.forEach(function(el){
      el.classList.add('hover');
    });
  }


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

  function renderForm(list){
    var inputs = list.map(function(count){
      return `
      <label>
        <input type="radio" value="${count}" name="size" ${count === state.ship.count ? 'checked' : ''}>
        ${count}
      </label>
    `;
    });

    var orientation = ['v', 'h'].map(function(o){
      return `
     <label>
        <input type="radio" value="${o}" name="orientation" ${o === state.ship.orientation ? 'checked' : ''}>
        ${o}
      </label>
    `;
    });

    return `
    <form action="#">
        <div>${inputs.join('')}</div>
        <div>${orientation.join('')}</div>
    </form>
  `;
  }

  function render(){
    var container = document.getElementById('container');
    container.innerHTML = renderTable(state.players.real.field, 'user');

    if(!state.isStarted){
      container.innerHTML += '<button type="button">Play</button>';
    }

    container.innerHTML += renderTable(state.players.bot.field, 'bot');

    if(!state.isStarted){
      container.innerHTML += renderForm(state.list_ships);

      document
        .querySelector('form')
        .addEventListener('change', function(event){
          var form = document.querySelector('form');

          state.ship.orientation = form.elements.orientation.value;
          state.ship.count = +form.elements.size.value;

          console.log(state.ship);
        });

      document
        .getElementById('user')
        .addEventListener('mouseover', function(event){
          if(event.target.tagName !== 'TD'){
            return;
          }

          var cells = getShipCells(
            event.target,
            state.ship.count,
            state.ship.orientation
          );

          var list = cells.map(function(el){
            var x = el.cellIndex;
            var y = el.parentElement.rowIndex;

            return state.players.real.field.result[y][x];
          });

          var isAnyReserved = list.find(function(cell){
            return cell.isReserved;
          });

          if(isAnyReserved){
            return;
          }

          state.ship.cells = cells;

          renderHover(cells);
        });


      document
        .getElementById('user')
        .addEventListener('mouseout', function(event){
          if(event.target.tagName !== 'TD'){
            return;
          }

          var hovered = document.querySelectorAll('table td.hover');

          for(var i=0; i<hovered.length; i++){
            hovered[i].classList.remove('hover')
          }
        });

      document
        .getElementById('user')
        .addEventListener('click', function(event){
          if(state.isStarted){
            console.warn('game is already started');
            return;
          }

          if(event.target.tagName !== 'TD'){
            console.warn('misclick');
            return;
          }

          if(checkIfRenderNotAvailable(state.ship.cells)){
            return console.warn('some cells already used');
          }

          if(state.ship.cells.length === 0){
            return console.log('check right config for ship');
          }

          if(event.target.classList.contains('blue')) {
            return console.log('its should be empty cell between the ships');
          }

          state.players.real.field.addShip(
            event.target,
            state.ship.orientation,
            state.ship.count
          );

          var foundShip = state.list_ships.indexOf(state.ship.count);
          if(foundShip !== -1){
            state.list_ships.splice(foundShip, 1);
          }

          state.ship.reset();

          if(!state.list_ships.length){
            state.isStarted = true;
          }

          render();
        });

      document
        .querySelector('#container button')
        .addEventListener('click', function(event){
          state.isStarted = true;
          event.target.remove();
          render();
        });

    }

    if(state.isStarted){
      var looser = state.getLooser();
      if(looser){
        state.isStarted = false;
        render();

        return console.info(looser.name + ' loosed a game.');
      }

      document
        .getElementById('user')
        .addEventListener('click', function(event){
          if(state._order === 0){
            return console.warn('bot\'s turn');
          }

          if(event.target.tagName !== 'TD'){
            console.warn('misclick');
            return;
          }

          var x = event.target.cellIndex;
          var y = event.target.parentElement.rowIndex;

          if(!state.players.real.field.shot(x, y)){
            state.switchOrder();
          }

          render();
        });

      document
        .getElementById('bot')
        .addEventListener('click', function(event){
          if(state._order === 1){
            return console.warn('user\'s turn');
          }

          if(event.target.tagName !== 'TD'){
            console.warn('misclick');
            return;
          }

          var x = event.target.cellIndex;
          var y = event.target.parentElement.rowIndex;

          if(!state.players.bot.field.shot(x, y)){
            state.switchOrder();
          }

          render();
        });
    }
  }

  render();

});
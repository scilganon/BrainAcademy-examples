function createField(size){
  var result = [];

  for(var i=0; i< size; i++){
    result.push([]);

    for(var j=0; j< size; j++){
      result[i][j] = {
        isShot: false,
        isFilled: false,
        getCls: function(){
          if (!this.isFilled){
            return !this.isShot
              ? 'white'
              : 'grey';
          }

          return this.isShot
            ? 'red'
            : 'black';
        }
      };
    }
  }

  return result;
}


function renderTable(field, id){
  var result  = field.map(function(row){
    var list = row.map(function(cell){
      return `<td class="${cell.getCls()}"></td>`;
    });

    return `<tr>${list.join('')}</tr>`
  }).join('');

  return `<table id="${id}">${result}</table>`;
}

function fillField(field, count, size){
  for(var i=0; i<count; i++){
    var x = _.random(size);
    var y = _.random(size);

    field[y][x].isFilled = true;
  }

  return field;
}

var user = {
  name: 'max',
  field: createField(10)
};

var bot = {
  name: 'bot',
  field: fillField(createField(10), 3, 9)
};

function getLooser(list){
  var looser;

  for(var i=0; i<list.length; i++){
    var rows = list[i].field;

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
      looser = list[i];
    }
  }

  return looser;
}

var state = {
  isStarted: false,
  _order: 1,
  switchOrder(){
    this._order = +!this._order;
  }
};

function shot(elCell, field){
  var x = elCell.cellIndex;
  var y = elCell.parentElement.rowIndex;


  var cell = field[y][x];
  cell.isShot = true;
}

function render(){
  var container = document.getElementById('container');
  container.innerHTML = renderTable(user.field, 'user');

  if(!state.isStarted){
    container.innerHTML += '<button type="button">Play</button>';
  }

  container.innerHTML += renderTable(bot.field, 'bot');

  if(!state.isStarted){
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

        var x = event.target.cellIndex;
        var y = event.target.parentElement.rowIndex;


        var cell = user.field[y][x];
        cell.isFilled = !cell.isFilled;

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
    var looser = getLooser([bot, user]);
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

        shot(event.target, user.field);

        render();

        state.switchOrder();
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

        shot(event.target, bot.field);

        render();

        state.switchOrder();
      });
  }
}

render();
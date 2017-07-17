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
            return 'white';
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
  field: createField(10)
};

var bot = {
  field: fillField(createField(10), 7, 9)
};

var state = {
  isStarted: false,
  order: 1
};

function render(){
  var container = document.getElementById('container');
  container.innerHTML = renderTable(user.field, 'user');
  container.innerHTML += '<button type="button">Play</button>';
  container.innerHTML += renderTable(bot.field, 'bot');

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
    });

  document
    .getElementById('bot')
    .addEventListener('click', function(){
      if(!state.isStarted){
        console.warn('too early, 1st fill own field');
        return;
      }


    })
}

render();
function createField(size){
  var result = [];

  for(var i=0; i< size; i++){
    result.push([]);

    for(var j=0; j< size; j++){
      result[i][j] = false;
    }
  }

  return result;
}


function renderTable(field, id){
  var result  = field.map(function(row){
    var list = row.map(function(state){
      return `<td class="${state ? 'black' : 'white'}"></td>`;
    });

    return `<tr>${list.join('')}</tr>`
  }).join('');

  return `<table id="${id}">${result}</table>`;
}

function fillField(field, count, size){
  for(var i=0; i<count; i++){
    var x = _.random(size);
    var y = _.random(size);

    field[y][x] = true;
  }

  return field;
}

var user = {
  field: createField(10)
};

var bot = {
  field: fillField(createField(10), 7, 9)
};


function render(){
  var container = document.getElementById('container');
  container.innerHTML = renderTable(user.field, 'user');
  container.innerHTML += renderTable(bot.field, 'bot');

  document
    .getElementById('user')
    .addEventListener('click', function(event){
      if(event.target.tagName !== 'TD'){
        console.warn('misclick');
        return;
      }

      var x = event.target.cellIndex;
      var y = event.target.parentElement.rowIndex;


      user.field[y][x] = !user.field[y][x];
      render();
    });
}

render();
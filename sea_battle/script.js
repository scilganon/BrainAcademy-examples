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


function renderTable(field){
  var result  = field.map(function(row){
    var list = row.map(function(state){
      return `<td class="${state ? 'black' : 'white'}"></td>`;
    });

    return `<tr>${list.join('')}</tr>`
  }).join('');

  return `<table>${result}</table>`;
}

var user = {
  field: createField(10)
};

renderTable(user.field);
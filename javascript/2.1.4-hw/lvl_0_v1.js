var names = [
    'Anna',
    'Serg',
    'Elena',
    'Anton',
    'Anton1'
];

function gen(obj, name){
    obj[name] = Math.random();

    return obj;
}

var journal = names.reduce(gen, {});

function goodFellow( obj) {

    var ball = 0;
    var name = '';

    for ( var item in obj){
        if ( ball < +obj[item]){
            ball = +obj[item];
            name = item;
        }
    }

    console.log(name + ' '+ ball);

    return ball;
}

console.log( 'max ball ' + goodFellow(journal) );

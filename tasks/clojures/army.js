function makeArmy() {

    var shooters = [];

    for (var i = 0; i < 10; i++) {
        var shooter = (function(a){
            return function() { // функция-стрелок
                console.log( a ); // выводит свой номер
            };
        })(i)
        shooters.push(shooter);
    }

    return shooters;
}

/** @var {Function[]} army **/
var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[2]();
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...
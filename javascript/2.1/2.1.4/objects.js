/*function Animal(name) {
    this.name = name;
    this.canWalk = true;
}

var animal = new Animal("скотинка");
//------*/

function Human(name){
    this.name = name;
}

var max = new Human('max');
/*{
 name: "max"
 }*/

var bob = Human('bob');
// undefinded

function CustomDate(timeString, dateString){
    this.time= timeString;
    this.date = dateString;

    this.showTime = function(){
        return timeString;
    };
}

var date = new CustomDate("10.12.1989 12:01");




function sum(x,y){
    return x + y;
}

//console.log(sum(1,1));

function sum_1(array){
    return array.reduce(function(prev, next){
        return prev + next;
    });
}

var arg = [1,2,3,4,5];
var sum = sum_1(arg);
//console.log(sum);


function sum_universal(){
    var sum = 0;
    for(var i= 0; i< arguments.length; i++){
        sum += arguments[i];
    }

    return sum;

    //return Array.prototype.reduce.call(arguments, function(prev, next){
    //    return prev + next;
    //});
}

//console.log(sum_universal(1,2,3,4,5,6,7,8,9));
//console.log(sum_universal(1,2,39));

function coordinates(){
    return  {
        lat: null,
        lang: null,

        setLang: function(value){
            if(typeof value !== 'number'){
                return console.error('argument should be number ');
            }

            this.lang = `${value}deg`;
        },

        setLat: function(value){
            if(typeof value !== 'number'){
                return console.error('argument should be number ');
            }

            this.lat = `${value}deg`;
        },

        getCoordinates: function(){
            if(!this.lat || !this.lang) {
                return console.error('not enough data :(');
            }

            return [
                this.lang,
                this.lat
            ].join()
        }
    };
}

function createUser(inputName, coordinates) {
    var user = {
        name: inputName,
        getName: function () {
            return user.name;
        },
        location: coordinates
    };

    return user;
}

var coord = coordinates();

coord.setLang(10);
coord.setLat(10);

console.log(coord.lang);
console.log(coord.lat);

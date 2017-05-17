var list = [
    'kia',
    "subaru",
    "zaz",
    "---"
];

//simple loop
for(var i=0; i<list.length; i=i+1){
    console.log(list[i]);
}

// iteration over methods
var uppercaseList = list.map(function(item){
    return item.toUpperCase();
});

console.log(uppercaseList);

list.forEach(function(item){
    console.log(item);
});

var numbers = [2,150,-60,12];
function findMin(prev, current){
    return (prev<current) ? prev : current;
}
var tmp2 = numbers.reduce(findMin);

numbers.map(function(item){
    return Math.sqrt(item);
});

numbers.map(Math.sqrt);

//----

var moreThenZero = 0;
numbers.forEach(function(item){
    if(item > 0) {
        moreThenZero++;
    }
});

console.log(moreThenZero);

var person = {
    name: "max",
    age: 15
};

for(var prop in person){
    console.log(person[prop]);
}

//---

var a = {
    test: 1
};

var b = a;

var list = [a,b];
console.log(list);

list[0].test = 2;
console.log(list)
a.test = 3;
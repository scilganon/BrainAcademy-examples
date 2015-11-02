// arithmetic
console.log(2+2, 4/0, 3*0, 0-0);
//string
console.log("Hello"+','+"world" + '!');
//logical
console.log(true || false, true || false);
//primary
console.log((2+2)*2);
//left-hand-side
console.log(new Date());


//varaibles
var a = 5,
	b = 3;
	c = b + a,
	str = tmp = "Hello, world!";


//conditions
var result = true;
if(result){
	console.log("positve branch of condition");
} else {
	console.log("negative branch of condition");
}

var country = "Ukraine",
	capital = null;
switch(country){
	case "Ukraine": capital = "Kiev"; break;
	case "RF": capital = "Moscow"; break;
	case "GB": capital = "London"; break;
	default: capital = "unknown";
}
console.log(capital + " is capital of " + country);
// console.log("%s is capital of %s", capital, country);


//loops
var carlist = ["BMW", "Volvo", "Saab", "Mersedes", "Ferrari"];
	profile = {
		name: 'Bohdan Perepluyboloto',
		age: 27
	}

console.log("list of cars:");
for(let i=0; i<cars.length; i++){
	console.log(carList[i]);
}
console.log("profile:");
for(let prop in profile){
	console.log("  "+prop+": "+profile[prop]);
}

while: {
	var counter_while = 0,
		max_while = 10;
	while(counter_while < max_while){
		console.log("Current value is %s", counter_while);
		counter_while++;
	}
	console.log("Finished: %s", counter_while);
}
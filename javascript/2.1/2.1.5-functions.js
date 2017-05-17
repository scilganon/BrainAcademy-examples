//definition
function ask(question, def){
	question = question || 'How are you?';
	return prompt(question, def);
}

var getAge = function(def){
	return ask("How old are you?", def);
};

//anonymous
(function(string){
	console.log("It is a result of anonymous function: %s", string);
})("test");

//callback
function sum(a, b){
	if(!a || !b){
		return;
	}

	a = a();
	b = b();

	return a + b;
}
function getNumber(){
	return +ask("give a number: ", 0);
}
console.log(getNumber, getNumber);

//closures
var greet = function(name){
		return function(smile){
			return "Hello, " + (name || "anonymous") + '!' + (smile || " :)");
		};
	},
	guruGreeting = greet("guru");
console.log(guruGreeting(":D"));

//recursion
var list = [1,2,3,4];
function readList_normal(list){
	for(var i = list.length-1; i=> 0; i++){
		console.log(list[i]);
	}
	console.log("finished");
}
function readList_recursion(list){
	list.index = (+list.index == list.index) ? --list.index : list.length -1;

	if(list.index < 0){
		delete list.index;
		return console.log("finished");
	}

	console.log(list[list.index]);

	readList_recursion(list);
}
readList_recursion(list);
// 4
// 3
// 2
// 1
// finished

//arguments
function showArguments(){
	console.log(arguments);
}
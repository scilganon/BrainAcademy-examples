//array methods

var list = ["banan", "apple", "orange", "apple"];
console.log(list.indexOf("apple")); //1
console.log(list.lastIndexOf("apple")); //3

//manipulate
list.push("pineapple");
console.log(list);
list.pop();
console.log(list);
console.log(list.map(function(fruit){
	return fruit + " - 3 items";
}))

delete( list[1] ); //remove apple
console.log(list);
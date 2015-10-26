"use strict";

var name = "Max",
	surname = "Bulygin",
	age = 24,
	isMarried = false;

// One line comment
/**
	It's a new line comment,
	try ot repeate it!
**/

//case sensitive
var a = 1;
var A = 2;

console.log(a);
console.log(A);

//code block

{//block calc
	console.log("calc: ", 1+2+3);
}

{//block greeting
	console.log("Hello, dear friend!");
}

//primitive data-types, value-types
var a1, // undefined
	a2 = null, // null
	a3 = false, // boolean
	a4 = 3.5, // number
	a5 = "bu-ga-ga"; // string

console.log(a1, a2, a3, a4, a5);

//object based types, reference types
var list = [
		'banana', 
		'potato', 
		'tomate'
	],
	ref_list = list,
	duplicated_list = [
		'banana', 
		'potato', 
		'tomate'
	];

console.log('1st step: ', list, ref_list, duplicated_list);
console.log('equal list & ref_list: ', list === ref_list); // true
console.log('equal list & duplicated_list: ', list === duplicated_list); // false

// additional data-types
var resultInfinity = 3/0;
console.log(resultInfinity === Infinity);
console.log(Number.isFinite(resultInfinity)); //better

var resultNaN = Number("string");
console.log(resultNaN === NaN);
console.log(Number.isNaN());

console.log("exponent value: ", Math.pow(2, 99)); // availble e-char in console

// string quotes
var doubleQuotes = "capital",
	singleQuotes = 'capital';
console.log(doubleQuotes === singleQuotes);

//type conversions
/**
	Ordering (if type has no availble operation handler):
	- boolean
	- number
	- string
**/

//operators
console.log(!true); //unary
console.log(1 + 1); // binary
console.log(1 < 2 ? 'truth' : 'error will never shown');
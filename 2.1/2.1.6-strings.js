//strings
var singleQuoteString = 'string',
	doubleQuotedString = "string",
	templateString = `some text with ${singleQuoteString}`,
	stringFromObject = String([1,2,3]),
	stringObject = new String("string object"),
	multiLineString = "first line \
		second line \
		last line";

//compareing
console.log(new String('a') === new String('a'));
console.log('a' === 'a');

//compareing with convertation
console.log('1' == 1, '2' > 1 ); //without compare types

//concat strings
console.log("Hello" + ',' + "world" + '!');


//regexp
var str = "Mom is washing frame",
	mommyRegExp = /\bm[oa]{1}m\b/gi;

console.log(mommyRegExp.test("Mom wash frame")); //true, try to find any words like mom/mam
console.log("maad mad maaad".match(/m[a]{1,2}d/g)); //find substring with max 2 "a"-chars


var test = {

};
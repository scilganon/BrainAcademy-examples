//exceptions
//try
//{
//	var obj = {
//		handleClick: {
//			rest: 3
//		}
//	};
//
//	console.log(obj.handleClick.rest);
//}
//catch(e){
//	console.error('trouble with getting property of nothing');
//}

var input = "ASDASD";

//try {
//	if(!input.match(new RegExp('[a-z]'))){
//		throw new Error('has no small chars');
//	}
//
//	if(!input.match(new RegExp('[0-9]'))){
//		throw new Error('has no numbers');
//	}
//} catch(e){
//	try{
//		throw new Error('');
//	}catch(e){}
//	console.error('wrong input', e.message);
//}


////diff types of exceptions
//try {
//	//throw {};
//	 throw new Error();
//	 throw new SyntaxError();
//	 throw new TypeError();
//} catch(e){
//	switch(true){
//		case e instanceof Error:
//			console.log("simple error type");
//			break;
//		case e instanceof SyntaxError:
//			console.log("simple error type");
//			break;
//		default:
//			console.warn("unknown type of error");
//	}
//}
//
//// will show console-msg
//try {
//	throw new Error();
//} catch(e) {
//	throw {};
//} finally {
//	console.log('final result')
//};
//// will NOT show console-msg
//try {
//	throw new Error();
//} catch(e) {
//	throw {};
//}
//
//console.log('final result');


//function handleClick(){
//
//	if(left || right){
//		throw new Error(1);
//	}
//
//	speed++;
//}
//
//function test_1(){
//	handleClick();
//	console.log(2)
//}
//
//function test_m(){
//	try{
//		test_1();
//	} catch(e){
//		console.error(e.message);
//	}
//
//	console.log(4);
//}
//
//function main(){
//	test_m();
//	console.log(5);
//}
//
//main();


try{
	throw new Error('error');
}catch(e){
	throw new Error('asdasdas')
	console.log(e.message);
} finally {
	console.log('after all')
}



//exceptions
try{
	var obj = {};

	console.log(obj.test.rest);
}catch(e){
	e.message = 'trouble with getting property of nothing';
	console.error(e);
}

//diff types of exceptions
try {
	throw {};
	// throw new Error();
	// throw new SyntaxError();
	// throw new TypeError();
} catch(e){
	switch(true){
		case e instanceof Error:
			console.log("simple error type");
			break;
		case e instanceof SyntaxError:
			console.log("simple error type");
			break;
		default:
			console.warn("unknown type of error");
	}
}

// will show console-msg
try {
	throw new Error();
} catch(e) {
	throw {};
} finally {
	console.log('final result')
};
// will NOT show console-msg
try {
	throw new Error();
} catch(e) {
	throw {};
}

console.log('final result');

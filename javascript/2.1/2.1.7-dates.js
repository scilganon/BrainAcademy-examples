//dates
var dateObject = new Date(),
	msFromBegining = +new Date(),
	dateFromTimestamp = new Date(),
	dateFromSting = new Date('Tue Nov 03 2015 20:25:13 GMT+0000 (GMT)'),
	dateWithValues = new Date(2015, 10, 10, 23, 0, 0);


//concat dates
console.log(new Date() + new Date()); //will have just formatted string, convert to String

//methods
console.log(dateFromSting.getDay());
console.log(dateFromSting.getMonth());
console.log(dateFromSting.getFullYear());

console.log(dateFromSting);
dateFromSting.setDate(10);
console.log(dateFromSting);
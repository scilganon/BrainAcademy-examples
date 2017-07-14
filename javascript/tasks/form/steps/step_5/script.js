var button = document.querySelector('button');

button.addEventListener('click' , function() {
	var newTr = document.createElement('tr');
	newTr.innerHTML = "<td><input type='text'></td><td><input type='text'></td><td><input type='number'></td>";

	table.appendChild(newTr);
});


/////////////////////////////////////


var selectVar = document.getElementsByTagName('select')[0];
var hiddenBlock = document.getElementsByClassName('hidden')[0];

selectVar.onchange = function(event) {
	var target = event.target;

	if (target.options[target.selectedIndex].value == "own") {
		hiddenBlock.style.display = "block";
	} else {
	 	hiddenBlock.style.display = "none";
	}
}
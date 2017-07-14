var text1 = document.querySelector(".text1");
	var text2 = document.querySelector(".text2");
	var text3 = document.querySelector(".text3");

	var other1 = document.getElementById('other1');
	var other2 = document.getElementById('other2');
	var other3 = document.getElementById('other3');


	function showTextArea() {

		if (other1.checked === true) {
			text1.style.display = "block";}
			else {text1.style.display = "none";
			text1.value = ''};

		if (other2.checked === true) {
			text2.style.display = "block";}
			else {text2.style.display = "none";
			text2.value = ''};

		if (other3.checked === true) {
			text3.style.display = "block";}
			else {text3.style.display = "none"; 
			text3.value = ''};
		};
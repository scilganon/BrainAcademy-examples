  	var datebirth = document.getElementById('birthDate');


	datebirth.onchange = function(event){
	console.log(event)
    var age = document.getElementById('age');
	var datebirth1 = event.target.valueAsDate;
	var nowdate= new Date();
    var years = nowdate.getFullYear() - datebirth1.getFullYear();
	
	datebirth1.setFullYear(nowdate.getFullYear());

    if (nowdate < datebirth1)
{
    years--;
}
  age.value = ("Вам " + years + " лет.");;
}
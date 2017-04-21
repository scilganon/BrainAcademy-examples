var password = 1622;
var number = document.querySelectorAll('.num');
var inputNexNum = document.getElementById('pas');
var reverse = document.querySelector('.number');


for ( var i = 0; i < number.length; i++){
    var buttn = number[i];

    buttn.addEventListener('click', addNum);
}

function addNum(){
    if(reverse.style.flexFlow ==''||reverse.style.flexFlow =='row wrap'){
        reverse.style.flexFlow ='row-reverse wrap';
    } else {
        reverse.style.flexFlow ='row wrap';
    }

    inputNexNum.value += +this.innerHTML;
}
document.getElementById('c').addEventListener('click', backspase );

function backspase(){
    var i= inputNexNum.value;
    if(i.length !=1&&inputNexNum.value!=''){
        inputNexNum.value = +  i.slice(0, i.length-1);
    }else{
        inputNexNum.value ='';
    }


};

document.getElementById('enter1').addEventListener('click', check);
document.querySelector('.key2').style.display = 'none';

function check(){
    var keyOpen =document.querySelector('.key2');
    var keyClose = document.querySelector('.key1');
    if (+inputNexNum.value == password ){
        console.log(inputNexNum.value);
        keyClose.style.display = 'none';
        keyOpen.style.display = '';
    }else{
        keyClose.style.display = '';
        keyOpen.style.display = 'none';
    }
}


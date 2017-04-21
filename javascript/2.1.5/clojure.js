var  returnFunc = function(){
    return function(){
        console.log(1);
    };
}

var a = returnFunc();
returnFunc();

//------------------------

returnFunc = function(){
    function test(){
        console.log(1);
    }

    return test();
}

var b = returnFunc();

//---
var a = 10;

function returnSum(){
    var a = 1;

    return function(c1,c2){
        return c1 + c2  + a;
    };
}

var sum = returnSum();
sum(3,4);



function returnMinus(){
    var a = 2;

    return function(){
        return function(){
            return 10 -a;
        }
    }
}

var f1 = returnMinus(),
    f2 = f1(),
    result = f2();

//----


function sum(a){
    return function(b){
        return a+b;
    };
}

sum(3)(4);

var func = sum(1);
func(3);

//----

function custom(){
    console.log(1);
    total++;
}

var total = 0;

document.getElementById('button').addEventListener('click', function(){
    custom();
})

document.getElementById('btn_result').addEventListener('click', function(){
    console.log(total);
});

//----


function sum_dyn(a,b,c,d){
    return a+b+c;
}

sum_dyn(12,3,4, 5);




function sum_dyn_array(list){
    return list.reduce(function(a,b){
        return a+b;
    });
}

function sum_dyn_array(){
    var list = arguments[0];

    return list.reduce(function(a,b){
        return a+b;
    });
}

sum_dyn_array([12,3,4, 5], []);

function sum_dyn(){
    var a = arguments[0];
    var b = arguments[1];
    var c = arguments[2];
    var d = arguments[3];

    return a+b+c;
}

sum_dyn(12,3,4, 5);

function pow(base, d){
    if(d == 1){
        return base;
    }

    return pow(base, d-1) * base;
}
function sum(x){
    return function(y){
        return function(z){
            console.log(x+y+z);
        }
    }
}

sum_step1 = sum(1); //function -> function
sum_step2 = sum_step1(2); //function
sum_step3 = sum_step2(3); //6
//---

sum(1)(2)(3)

//---



var func = prompt("program code");
    func_norm = new Function(func);
func_norm();


//----




function sum_recursion(x){
    if(x){
        return x + sum_recursion(x-1);
    }

    return x;
}

// => 3

// 3 + (2 + (1 + (0)))

//------

function sum_1(y,x){
    return x+y;
}

/**
 * @param {number[]} ara
 * @returns {number}
 */
function sum_array(ara){
    for(var i= 0, sum = 0; i<ara.length; i++){
        sum += ara[i];
    }

    console.log(sum);
}

function sum_args(x,y,z){
    arguments[0]; //x
    arguments[1] //y
}

sum_args(1,2,3);
sum_args(1, {}, []);


function sum(){
    /**
     *
     */
}


var talker = {
    hello: function(){},
    bye: function(){}
    //...
};





function sum_1(a,b, op){
   if(op == '+')
       return a +b;

    return a - b;
}

function sum_1_v2(a,b, op){
   return op == '+'
       ? (a+b)
       : (a-b) > 0
            ? a*b
        : (a-2)/b*4;
}
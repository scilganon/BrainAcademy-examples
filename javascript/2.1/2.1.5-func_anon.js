function fibonachi(prev, current){
    if(prev > 100){
        return;
    }

    console.log(prev, current);

   return fibonachi(prev + current, prev);
}

function loop(i){
    if(i > 10){
        return i;
    }

    return loop(++i);
}

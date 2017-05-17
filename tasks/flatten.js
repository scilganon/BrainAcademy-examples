function alignArray(mass){
    var array =[];

    return function align(mass){

        for (var i =0; i<mass.length; i++){
            //if(mass[i] instanceof Array){
            if(Array.isArray(mass[i])){
                align(mass[i]);
            }else{
                array.push(mass[i]);
            }
        }
        return array;
    }(mass);
}

var mas = [222,[[99,35],53],23,1,[55,[44,55,555]],4];
var rezault =alignArray(mas);
console.log(rezault);

var mas3 =[[222, 99, 35, 53, 23, 1, 55, 44, 55, 555, 4],[222, 99, 35, 53, 23, 1, 55, 44, 55, 555, 4]];
console.log(alignArray(mas3));


function compareArray(a1,a2){
    if(a1.length !== a2.length){
        return false;
    }

    for(var i=0; i<a1.length; i++){
        if(a1[i] !== a2[i]){
            return false;
        }
    }

    return true;
}

var source = [1,2,3,[4,[5]]];
console.assert(compareArray(alignArray(source), [1,2,3,4,5]), "it works wrong");
var a = [1,2,3];
var b=  [3,2,1];

var c = [];

a.forEach(function(item){
    c.push(item);
});

for(var i=0; i<b.length; i++){
    c.push(b[i]);
}

c = a.concat(b);
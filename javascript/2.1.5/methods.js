function test(){
    return 1;
}

var obj = {
    name: "max",

    test: function(){
        return 2;
    },
    toString: function(){
        return obj.test();
    }
};

obj.test();
console.log(obj.toString());


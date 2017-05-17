var func_list = {
    sum: function(){},
    minus: function(){}
};

function test(){
    try{
        throw new Error();
    }catch(e){
        var list = [
            'sum',
            'minus',
            'div'
        ];

        for(var i=0; i<list.length; i++){
            var func_name = list[i];

            func_list[func_name]();
        }
    } finally {
        console.log(i);
    }

}

test();
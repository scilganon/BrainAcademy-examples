define([],function(){
    return function user(name, itsMe){
        return {
            name: name,
            addMsg: function(msg){
                var align = itsMe ? 'right' : 'left';

                chat(this.name, msg, align);
            }
        }
    }
});


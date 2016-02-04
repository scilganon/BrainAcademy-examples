function chat(name, msg, align){
    var tmp = `<p style='text-align: ${align}'> >${name}: ${msg}</p>`;
    document.write(tmp)
}

function user(name, itsMe){
    return {
        name: name,
        addMsg: function(msg){
            var align = itsMe ? 'right' : 'left';

            chat(this.name, msg, align);
        }
    }
}
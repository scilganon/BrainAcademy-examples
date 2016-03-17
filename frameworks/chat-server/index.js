var http = require('http');

function getMsg(url){
    try{
        "use strict";

        //?msg="asdfasdfasf"
        return decodeURI(url.split('?')[1].split('=')[1]);
    } catch(error){
        return '';
    }
}

var store = [];

http
    .createServer(function(req, res) {
        "use strict";

        var msg = getMsg(req.url || "");
        if(msg){
            store.push(msg);
        }

        res.end(store.join('\r\n'));
    })
    .listen(8080);

console.log('Server running on port 8080');
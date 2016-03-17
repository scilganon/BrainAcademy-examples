var http = require('http');

function getMsg(url){
    "use strict";

    //?msg="asdfasdfasf"
    return decodeURI(url.split('?')[1].split('=')[1]);
}

http
    .createServer(function(req, res) {
        "use strict";

        console.log(getMsg(req.url));

        res.end();
    })
    .listen(8080);

console.log('Server running on port 8080');
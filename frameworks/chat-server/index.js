var http = require('http');
var fs = require('fs');
var pathModule = require('path');

function getMsg(url){
    try{
        "use strict";

        //?msg="asdfasdfasf"
        return decodeURI(url.split('?')[1].split('=')[1]);
    } catch(error){
        return '';
    }
}

// ./data/history.json
// /home/Proects/BrainAcademy-examples/frameworks/chat-server/data/history.json


function saveToFile(path, store) {
    "use strict";

    var resource = fs.openSync(pathModule.resolve(path), 'w'),
        data = JSON.stringify(store);

    fs.writeSync(resource, data);
    fs.closeSync(resource);
}

var pathToDiskStorage = './data/history.json';
/**
 * @var {[]} store
 */
var store = require(pathToDiskStorage);

http
    .createServer(function(req, res) {
        "use strict";

        var msg = getMsg(req.url || "");
        if(msg){
            store.push(msg);
        }

        res.end(store.join('\r\n'));

        saveToFile(pathToDiskStorage, store);
    })
    .listen(8080);

console.log('Server running on port 8080');
var http = require('http');
var module = require('./module');
var module2 = require('./module2');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(module.myString);
    response.write(module2.myString);
    module.myFunction();
    module2.myFunction();
    response.end();
}

http.createServer(onRequest).listen(8000);

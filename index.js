const fs = require('fs'); //engineers named this way this node file system

fs.readFile('demoFile.text', 'utf8', function (err, data) {
    if(err) throw err;
    console.log(data)
})



var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);






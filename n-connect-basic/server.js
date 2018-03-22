var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {
		"Content-Type": "text/html"
	});
	res.end("<H1>Hello Node!</H1>");
}).listen(8080);

console.log("Server is up!!!");



var http = require('http');


http.createServer(function(req, res){
	res.end("Ola")
}).listen(8080);
console.log("Servidor de boa")
var http = require("http");


http.createServer(function(req, res){
	res.end("Ta de boa")
}).listen(8080);


console.log("Serve de boa")
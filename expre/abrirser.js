const express = require("express");
const app = express();

app.get("/", function(req, res){
	res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function(req, res){
	res.send("sobre")
})


app.get("/ola/:nome/:sobrenome", function(req, res){
	res.send("Ola, "+ req.params.nome + " " + req.params['sobrenome'])
})

app.listen(8080, function(){
	console.log("Roda de boa")
});


var express = require("express");
const app = express();

app.get("/", function(req, res){
	res.send("Seja bem vindo, mane")
})

app.get("/sobre", function(req, res){
	res.send("Pagina sobre")
})


app.get("/blog", function(req, res){
	res.send("Meu blog")
})



app.get("/ola/:nome", function(req, res){
	res.send("Ola, " + req.params.nome)
})

app.listen(8080, function(){
	console.log("Servidor rodando")
});

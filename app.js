var express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('cursonode', 'root', '', {
	host: "localhost",
	dialect: "mysql"
})




//config template
	app.engine('handlebars', handlebars({defaultLayout: "main"}))
	app.set('view engine' 'handlebars')

// app.get("/", function(req, res){
// 	res.sendFile(__dirname + "/html/index.html")
// })

// app.get("/sobre", function(req, res){
// 	res.send("Pagina sobre")
// })


// app.get("/blog", function(req, res){
// 	res.send("Meu blog")
// })



// app.get("/ola/:nome", function(req, res){
// 	res.send("Ola, " + req.params.nome)
// })

app.listen(8080, function(){
	console.log("Servidor rodando")
});

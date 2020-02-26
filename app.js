var express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParse = require('body-parser');


	//Configurando o body parser
	app.use(bodyParse.urlencoded({extended: false}))
	app.use(bodyParse.json())




	// app.get('/cad', function(req, res){
	// 	res.send("Rota de cadastro funcionando com sucesso")
	// })

	app.get('/cad', function(req, res){
		res.render("formulario")
	})


	app.post('/pegando', function(req, res){
		req.body.titulo;
		res.send("Titulo: " + req.body.titulo+ " Texto: " + req.body.Conteudo)
	})
//config template
	app.engine('handlebars', handlebars({defaultLayout: "main"}))
	app.set('view engine', 'handlebars')

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

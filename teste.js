const Sequelize = require('sequelize')
const sequelize = new Sequelize('cursonode', 'root', '', {
	host: "localhost",
	dialect: "mysql"
})



sequelize.authenticate().then(function(){
	console.log("Conctado com sucesso")
}).catch(function(erro){
	console.log("Falha ao se conectar: " + erro)
})

const Postagem = sequelize.define('postagens', {
	titulo:	{
		type: Sequelize.STRING
	},
	conteudo: {
		type: Sequelize.TEXT
	}
})

// Postagem.sync({
// 	force: true
// })



Postagem.create({
	titulo: "Qaulquer coisa",
	conteudo: "Vai qualquer coisa também"
})
const Sequelize = require('sequelize'); 
const  sequelize = new Sequelize('cursonode', 'root', '', {
	host: "localhost",
	dialect: 'mysql'
}) 



// const postagens = sequelize.define('postagens', {
// 	titulo: {
// 		type: Sequelize.STRING
// 	},
// 	conteudo: {
// 		type: Sequelize.TEXT
// 	}


// })
const postagens = sequelize.define('postagens', {
	titulo: {
		type: Sequelize.STRING
	},
	conteudo: {
		type: Sequelize.TEXT
	}


})

postagens.create({
	titulo: "Um titulo de boa",
	conteudo: "Vamos ver se vai"
})

// postagens.sync({force: true})


// sequelize.authenticate().then(function(){
// 	console.log("Conectado com sucesso");
// }).catch(function(error){
// 	console.log("Deu erro " + error)
// })
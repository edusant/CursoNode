const bd = require('./bd')

const post = bd.sequelize.define('postagens', {
  titulo: {
    type: bd.Sequelize.STRING
  },
  conteudo: {
    type: bd.Sequelize.TEXT
  }

})

// post.sync({force: true})

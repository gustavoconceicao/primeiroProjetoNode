const db = require("./conexao")

const noticia = db.sequelize.define("noticias", {
    tituloNoticia:{
        type: db.Sequelize.DataTypes.STRING,
        allowNull: false
    },
    couteudoNoticia:{
        type: db.Sequelize.DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = noticia

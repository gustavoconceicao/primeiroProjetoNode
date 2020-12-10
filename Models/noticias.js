const db = require("./conexao")
//Criando model da noticia


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

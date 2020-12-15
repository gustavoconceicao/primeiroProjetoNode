const db = require("./conexao")
const bcrypt = require("bcrypt");

const usuario = db.sequelize.define("usuarios", {
    email:{
        type: db.Sequelize.DataTypes.STRING               
    },
    nome:{
        type: db.Sequelize.DataTypes.STRING   
    },
    senha:{
        type: db.Sequelize.DataTypes.STRING        
    },
    admin:{
        type: db.Sequelize.DataTypes.BOOLEAN        
    }
})

/*usuario.sync({force: true})

usuario.create({
    email: "gustavo_admin@teste.com",
    nome: "gustavo_admin",
    senha: bcrypt.hashSync("1234567", 10),
    admin: 1

})
*/

module.exports = usuario

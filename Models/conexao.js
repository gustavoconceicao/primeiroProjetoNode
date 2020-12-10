 const Sequelize = require('sequelize')
 
 //Conexão com o BD
 const sequelize = new Sequelize('teste', 'admin', 'root', {
     host: "192.168.0.22",
     port: "3307",
     dialect: "mysql"
 })

 //Testando Conexão
 try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


 module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
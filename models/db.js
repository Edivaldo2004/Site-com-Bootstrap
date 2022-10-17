const Sequelize = require('sequelize');
const sequelize = new Sequelize('db_loja', 'root', '',{
host: '127.0.0.1',
dialect: 'mysql',
define: {
    charset: "utf8",
    collate: 'utf8_general_ci',
    timestamps: true
},
logging: false
})

sequelize.authenticate().then(function(){
    console.log("Conectado ao banco");
}).catch(function(err){
    console.log(`Falha no banco ${err}`)
})

module.exports = {Sequelize, sequelize}
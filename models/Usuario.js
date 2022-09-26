const db = require('./db');

const Usuario = db.sequelize.define('usuario', {
    id:{
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: db.Sequelize.STRING,
        alowNull: false
    },
    email: {
        type: db.Sequelize.STRING,
        alowNull: false
    },
    senha: {
        type: db.Sequelize.STRING,
        alowNull: false
    }
})
Usuario.sync();

module.exports = Usuario;
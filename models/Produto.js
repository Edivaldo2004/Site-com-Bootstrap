const db = require('./db');

const Produto = db.sequelize.define('produto', {
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
    marca: {
        type: db.Sequelize.STRING,
        alowNull: false
    },
    preco: {
        type: db.Sequelize.DOUBLE,
        alowNull: false
    }
})
Produto.sync();

module.exports = Produto;
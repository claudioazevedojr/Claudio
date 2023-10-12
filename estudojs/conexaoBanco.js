const prompt = require ("prompt-sync")();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('claudio','root', '123456', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function(){
    console.log("Banco de Dados conectado!");
}).catch(function(){
    console.log("Falha ao conectar Banco de Dados!")
});
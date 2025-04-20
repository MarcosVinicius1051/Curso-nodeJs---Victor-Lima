import { Sequelize, TimeoutError } from "sequelize";

let sequelize = new Sequelize("bancoteste" /*nome do banco */, "root", /*usuario o qual usa para conctar ao mysql, não muda muito */ "dongtae2" /*senha */,{
    host: "localhost", // local onde esta o banco de dados
    dialect: "mysql" // a liguagem do banco de dados 
});

sequelize.authenticate().then(()=>{
    console.log("conectado")
}).catch((erro)=>{
    console.log(`ERROR NO SISTEMA: ${erro}`)
})


/* CRIANDO UM MODEL COM O SEQUELIZE */
const Postagem = sequelize.define("postagem",{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

 /*Postagem.create({
     titulo: "PQ O MUNDO ESTA FICANDO MAIS FRIO? ",
     conteudo: "adfsnçfdgjkçndsgdfqçgandfknçkjgçdkguaaçjdçfjriojengvifnaannkçlaujafjadsçkljçfjai"
 }) */
// Postagem.sync({force: true}) /* aqui sincronizamos a tabela "Postagem " com o mysql */


const Usuario = sequelize.define("usuarios",{
    nome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
});

// Usuario.sync({force:true})

/* Usuario.create({
    nome: "marcos",
    idade: 19
}) */
// é dessa forma que vc cria e insere os dados das tabelas. 
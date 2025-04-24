import { Sequelize } from "sequelize";

//conexão com o banco de dados
const sequelize = new Sequelize("postapp", "root", "dongtae2", {
    host: "localhost",
    dialect: "mysql",
    });

export default {Sequelize: Sequelize, sequelize: sequelize}

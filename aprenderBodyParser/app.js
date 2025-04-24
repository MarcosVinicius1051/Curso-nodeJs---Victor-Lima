import express from "express";
import { Sequelize } from "sequelize";
import path from "path";
import { fileURLToPath } from "url"; 
import { dirname } from "path";
import bodyParser from "body-parser";

const Port = 8081;
const app = express();
const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename);
console.log(path.join(__dirname,".","views","home.html" ))
//Config

        app.use(express.static(__dirname)); 
        //Body parser configuration
            app.use(bodyParser.urlencoded({extended:false}))
            app.use(bodyParser.json())
        //conexão com o banco de dados
            const sequelize = new Sequelize("teste3", "root", "dongta2", {
            host: "localhost",
            dialect: "mysql",
            });
        //Rotas
            app.get("/home", (req, res) => {
                res.sendFile(path.join(__dirname,".","views","home.html" ));

            });
            app.post("/test", (req, res) => {
                res.send(`Titulo: ${req.body.titulo} conteudo: ${req.body.conteudo}`);
               
            });


app.listen(Port, () => {
    console.log("servido ligado");
    });
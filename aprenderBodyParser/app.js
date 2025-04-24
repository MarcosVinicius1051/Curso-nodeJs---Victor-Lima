import express from "express";
import path from "path";
import { fileURLToPath } from "url"; 
import { dirname } from "path";
import bodyParser from "body-parser";
import Post from "./modules/post.js"

const post = Post; 
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
        //Rotas
            app.get("/newPost", (req, res) => {
                res.sendFile(path.join(__dirname,".","views","home.html" ));

            });
            app.post("/test", (req, res) => {
               post.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
               }).then(()=>{
                res.redirect("/postagens")
               }).catch((erro)=>{
                req.send("error, postagen não criada: " + erro)
               })
               
            });

            app.get("/postagens",(req,res)=>{
                res.sendFile(path.join(__dirname,".","views","postagens.html" ));
            })


app.listen(Port, () => {
    console.log("servido ligado");
    });
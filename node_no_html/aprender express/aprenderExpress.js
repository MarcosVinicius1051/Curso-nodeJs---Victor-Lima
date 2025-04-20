import express from "express";
import path from "path";

let app = express();
let __dirname = path.resolve(); /* Este sistema garante que o express pegue os arquivos corretos da nossa pasta.  */

app.get("/", (req, res) => {
  res.send("bem vindo ao começo");
});
app.get("/sobre", (req, res) => {
  res.send("esse é um projeto simples de aprendizado");
});
app.get("/conta", (req, res) => {
  res.send("nome: Marcos vinicius");
});
app.get("/param/:nome", (req, res) => {
    res.send(`bem vindo ${req.params.nome}`)
    /* aqui estamo utilizado parametro, os quais são criado usando ":nomeParametro", eles funcionam colocando no link de pesquisa do site, além disso eles podem ser "resquisitado" com o comando   "req.params.nomeParametro" */
});
app.get("/html",(req,res)=>{
res.sendFile(__dirname + "/paginasHtml/exemplo1.html") /*tomar cuidado, já que esse comando "sendFile" pode acarretar em não pegar o local em que o arquivo está. É necessario resolver esse problema */
})
app.listen(4041, () => {
  console.log("servidor está aberto");
});

// o comanod app.listen() deve sempre estar no final do código.
// node aprenderExpress.js

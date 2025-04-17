import express from "express";

let app = express();

app.get("/", (req, res) => {
  res.send("bem vindo ao começo");
});
app.get("/sobre", (req, res) => {
  res.send("esse é um projeto simples de aprendizado");
});
app.get("/conta", (req, res) => {
  res.send("nome: Marcos vinicius");
});
app.get("/:nome", (req, res) => {
    res.send(`bem vindo ${req.params.nome}`)
    /* aqui estamo utilizado parametro, os quais são criado usando ":nomeParametro", eles funcionam colocando no link de pesquisa do site, além disso eles podem ser "resquisitado" com o comando   "req.params.nomeParametro" */
});
app.listen(4041, () => {
  console.log("servidor está aberto");
});

// o comanod app.listen() deve sempre estar no final do código.
// node aprenderExpress.js

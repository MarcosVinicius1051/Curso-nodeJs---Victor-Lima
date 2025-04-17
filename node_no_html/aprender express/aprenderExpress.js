import express from "express"

let app = express();

app.get("/",(req,res)=>{
res.send("bem vindo ao começo")
})
app.get("/sobre",(req,res)=>{
res.send("esse é um projeto simples de aprendizado")
})
app.get("/conta",(req,res)=>{
res.send("nome: Marcos vinicius")
})

app.listen(4041,()=>{
    console.log("servidor está aberto")
});

// o comanod app.listen() deve sempre estar no final do código. 

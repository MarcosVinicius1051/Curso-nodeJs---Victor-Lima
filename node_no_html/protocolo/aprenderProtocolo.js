import http from "http";

http.createServer(
    function(req,res){
        res.end("ola mundo")
    }
).listen(4040);

console.log("servidor iniciado");
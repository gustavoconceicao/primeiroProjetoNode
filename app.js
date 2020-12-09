 const express = require("express");
 const app = express();

 app.get("/", function(req, res){
     res.send("Pagina iniciaaaaal")
 })

 app.get("/nome/:nome/:idade", function(req,res){
     res.send(req.params)
 })

 
 app.listen(8081, function(){
     console.log("servidor rodando")
 });
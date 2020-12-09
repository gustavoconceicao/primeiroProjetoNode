const express = require("express");
const app = express();
const db = require("./Models/conexao")
const noticia = require("./Models/noticias")

 app.get("/", function(req, res){
     res.sendFile(__dirname + "/views/index.html")
 })

 app.get("/cadastro/:tituloNoticia/:couteudoNoticia", function(req,res){
     noticia.create({
        tituloNoticia: "teste 2",
        couteudoNoticia: "bbbbbbbbbbbbbbbbbbbbb"
     }).then (function(){
         res.send("Noticia Cadastrada");
     })  
 })

 app.listen(8081, function(){
     console.log("servidor rodando")
 });
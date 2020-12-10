const express = require("express");
const app = express();
const db = require("./Models/conexao")
const noticia = require("./Models/noticias")
const handlebars = require('express-handlebars')
const bodyparser = require("body-parser");
const { response } = require("express");

//configuração do handlebars
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

//configuração para CSS
app.use(express.static("public"))


//body-parser para pegar couteudo enviado via methodo post
app.use(bodyparser.urlencoded({extend: false}))
app.use(bodyparser.json())

//PAGINA INICIAL MOSTRANDO NOTICIAS
app.get("/", function(req, res){
    noticia.findAll().then(function(noticias){        
        res.render("home", {noticias: noticias})
    });
 })

 //CRIAR NOTICIAS VIA FORMULARIO


 app.get("/form", function(req, res){
     res.render("addNoticias")
 })

 app.post("/cadastroPost", function(req, res){
    noticia.create({
        tituloNoticia: req.body.tituloNoticia,
        couteudoNoticia: req.body.couteudoNoticia
     }).then (function(){
         res.redirect("/")
     }).catch(function(error){
        res.send(error)
     }) 
 })

// CRIAR NOTICIAS VIA API
 app.get("/cadastroGET/:tituloNoticia/:couteudoNoticia", function(req,res){
    noticia.create({
       tituloNoticia: req.params.tituloNoticia,
       couteudoNoticia: req.params.couteudoNoticia
    }).then (function(){
        res.send("Noticia Cadastrada");
    }).catch(function(error){
       res.send(error)
    }) 
})

//MOSTRAR NOTICIAS NO JSON
app.get("/json", function(req, res){
   noticia.findAll().then(function(noticias){        
       res.json(noticias)
   });
})

 app.listen(8081, function(){
     console.log("servidor rodando")
 });
const express = require("express");
const app = express();
const db = require("./Models/conexao")
const noticia = require("./Models/noticias")
const usuario = require("./Models/user")
const handlebars = require('express-handlebars')
const bodyparser = require("body-parser");
const { response } = require("express");
const admin = require("./Controllers/admin")
const session = require("express-session")
const flash = require("connect-flash")


//configuração do handlebars
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

//configuração para CSS
app.use(express.static("public"))

//body-parser para pegar couteudo enviado via methodo post
app.use(bodyparser.urlencoded({extend: false}))
app.use(bodyparser.json())

app.use(session({
    secret: 'NodeNoticiasApi',
    resave: false,
    saveUninitialized: true    
  }))

  app.use(flash())


app.use((req, res, next) =>{
    res.locals.sucesso_msg = req.flash("sucesso_msg"),
    res.locals.erro_msg = req.flash("erro_msg")
    next()
})

app.use("/admin", admin)

//PAGINA INICIAL MOSTRANDO NOTICIAS
app.get("/", function(req, res){
    noticia.findAll().then(function(noticias){        
        res.render("home", {noticias: noticias})
    });
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


app.get("/login", (req,res) => {
    res.send("Login")
})

 app.listen(8081, function(){
     console.log("servidor rodando")
 });
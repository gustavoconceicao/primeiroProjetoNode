const router = require("express").Router()
const db = require("../Models/conexao")
const noticia = require("../Models/noticias")


router.get("/form", function(req, res){
    res.render("addNoticias")
})

router.post("/cadastroPost", function(req, res){
   noticia.create({
       tituloNoticia: req.body.tituloNoticia,
       couteudoNoticia: req.body.couteudoNoticia
    }).then (function(){        
        req.flash("sucesso_msg", "Noticia criada com sucesso");
        res.redirect("/");
    }).catch(function(error){
        req.flash("erro_msg", "Não foi possivel criar a noticia");
        res.redirect("/")
    }) 
})

router.get("/removerPost", function(req, res){
    noticia.findAll().then(function(noticias){        
        res.render("revNoticias", {noticias: noticias})
    });
 })

 router.get("/removerPost/:idNoticia", function(req, res){
     noticia.destroy({
         where: {'id': req.params.idNoticia}
     }).then(function(){ 
         res.redirect("/admin/removerPost")
     }).catch(function(erro){
         res.send("Noticia não encontrada")
     })
 })

module.exports = router
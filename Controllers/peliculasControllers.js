let db = require("../database/models")

let PeliculasController = {
    crear: (req,res) => {
        db.Genero.findAll()

        .then((generos) => {
            return res.render("listadoDePeliculas", {generos:generos})
        })
    }
}

module.exports= PeliculasController
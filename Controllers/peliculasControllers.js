let db = require("../database/models")

let PeliculasController = {
    mostrar: (req,res) => {
        db.Genero.findAll()

        .then((generos) => {
            return res.render("crearPelicula", {generos:generos})
        })
    },
    crear: (req,res) => {
        db.Pelicula.create({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.realese_date,
            length: req.body.duracion,
            rating: req.body.rating,
            genre_id: req.body.genero,
        }) 
        res.redirect("/peliculas/todas") 
        },
    todasLasPelis:  (req,res) => {
        db.Pelicula.findAll()

        .then((peliculas) => {
            return res.render("peliculas", {peliculas:peliculas})
        })
    },
    mostrarDetalle: (req,res) => {
        db.Pelicula.findByPk(req.params.id, { 
            include: [{association: "genero"}, {association:"actores"}]
        })
            .then((peliculas) => {
            res.render("detallePelicula", {peliculas:peliculas} )
            })
        }
    }

module.exports= PeliculasController
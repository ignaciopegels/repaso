var express = require('express');
var router = express.Router();
var PeliculasController = require("../Controllers/peliculasControllers")

router.get("/crear", PeliculasController.mostrar)

//Crear Peliculas
router.post("/crear",PeliculasController.crear)

//Mostar Peliculas
router.get("/todas", PeliculasController.todasLasPelis)

//Mostar Detalle
router.get("/:id" , PeliculasController.mostrarDetalle)

module.exports = router;
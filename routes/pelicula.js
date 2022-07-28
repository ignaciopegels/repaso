var express = require('express');
var router = express.Router();
var PeliculasController = require("../Controllers/peliculasControllers")

router.get("/crear", PeliculasController.crear)

module.exports = router;
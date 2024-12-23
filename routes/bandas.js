const express = require('express');
const router = express.Router();
const bandasController = require('../controllers/bandasController');

// Ruta principal que muestra el listado de bandas
router.get('/', bandasController.listadoBandas);

// Ruta que muestra una banda por id
router.get('/:id', bandasController.detalleBanda);

// Ruta que muestra bandas por género
router.get('/genero/:genero', bandasController.porGenero);

module.exports = router;
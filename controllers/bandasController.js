const db = require('../db');

const bandasController = {
  listadoBandas: (req, res) => {
    res.render('listadoBandas', { bandas: db.lista });
  },

  detalleBanda: (req, res) => {
    const banda = db.lista.find(b => b.id == req.params.id);
    res.render('detalleBanda', { banda });
  },

  porGenero: (req, res) => {
    const bandas = db.lista.filter(b => b.genero.toLowerCase() == req.params.genero.toLowerCase());
    res.render('porGenero', { bandas });
  },
  
};

module.exports = bandasController;
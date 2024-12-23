const db = require('../db');

const bandasController = {
  listadoBandas: (req, res) => {
    res.render('listadoBandas', { bandas: db.lista });
  },
  detalleBanda: (req, res) => {
    const banda = db.lista.find(b => b.id == req.params.id);
    if (banda) {
      res.render('detalleBanda', { banda });
    } else {
      res.send('Banda no encontrada');
    }
  },
  porGenero: (req, res) => {
    const bandas = db.lista.filter(b => b.genero.toLowerCase() == req.params.genero.toLowerCase());
    if (bandas.length > 0) {
      res.render('porGenero', { bandas });
    } else {
      res.send('No hay bandas de ese género');
    }
  }
};

module.exports = bandasController;
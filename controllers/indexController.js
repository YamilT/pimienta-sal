const menu = require('../data/menu.json');

module.exports={
    index: (req,res) => res.render('index',{
        platos: menu
    }),
    detalle: (req, res) => res.render('detalleMenu',{
        plato: menu.find(plato => plato.name === req.params.name)
    })
}
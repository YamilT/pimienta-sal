var express = require('express');
var router = express.Router();

const {index, detalle} = require('../controllers/indexController');

/* '/' */
router.get('/', index);
router.get('/detalle/:name?', detalle);

module.exports = router;

var express = require('express');
var router = express.Router();
const db = require('../database/models');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const response = await db.Usuario.findAll();
  const usuarios = response.map(usuario => usuario.dataValues);
  res.render('index', { title: 'Express', usuarios: usuarios });
});

module.exports = router;

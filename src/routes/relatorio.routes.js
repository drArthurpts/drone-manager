const express = require('express');
const router = express.Router();
const RelatorioController = require('../controllers/RelatorioController');

router.get('/', RelatorioController.gerar);

module.exports = router;

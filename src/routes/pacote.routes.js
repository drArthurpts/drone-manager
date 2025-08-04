const express = require('express');
const router = express.Router();
const PacoteController = require('../controllers/PacoteController');

router.post('/', PacoteController.criar);
router.get('/', PacoteController.listar);

module.exports = router;

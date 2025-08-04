const express = require('express');
const router = express.Router();
const SimuladorController = require('../controllers/SimuladorController');

router.get('/', SimuladorController.simular);

module.exports = router;

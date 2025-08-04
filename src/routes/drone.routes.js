const express = require('express');
const router = express.Router();
const DroneController = require('../controllers/DroneController');

router.post('/', DroneController.criar);
router.get('/', DroneController.listar);

module.exports = router;

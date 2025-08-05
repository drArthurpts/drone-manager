const express = require('express');
const router = express.Router();
const DroneController = require('../controllers/DroneController');

router.post('/', DroneController.criar);
router.get('/', DroneController.listar);
router.put('/:id', DroneController.atualizar);
router.delete('/:id', DroneController.deletar);

module.exports = router;

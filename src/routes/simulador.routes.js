/**
 * @swagger
 * tags:
 *   name: Simulação
 *   description: Lógica de alocação e simulação de entregas
 */

/**
 * @swagger
 * /simular:
 *   get:
 *     summary: Simula a alocação de pacotes nos drones
 *     tags: [Simulação]
 *     responses:
 *       200:
 *         description: Resultado da simulação
 */

const express = require('express');
const router = express.Router();
const SimuladorController = require('../controllers/SimuladorController');

router.get('/', SimuladorController.simular);

module.exports = router;

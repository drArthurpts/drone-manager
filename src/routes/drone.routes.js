/**
 * @swagger
 * tags:
 *   name: Drones
 *   description: Gerenciamento de drones
 */

/**
 * @swagger
 * /drones:
 *   post:
 *     summary: Cadastra um novo drone
 *     tags: [Drones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - capacidadeKg
 *               - alcanceKm
 *               - localizacao
 *             properties:
 *               capacidadeKg:
 *                 type: number
 *                 example: 5
 *               alcanceKm:
 *                 type: number
 *                 example: 20
 *               localizacao:
 *                 type: object
 *                 properties:
 *                   x:
 *                     type: number
 *                     example: 0
 *                   y:
 *                     type: number
 *                     example: 0
 *               bateria:
 *                 type: number
 *                 example: 100
 *     responses:
 *       201:
 *         description: Drone cadastrado com sucesso
 *
 *   get:
 *     summary: Lista todos os drones cadastrados
 *     tags: [Drones]
 *     responses:
 *       200:
 *         description: Lista de drones
 */


const express = require('express');
const router = express.Router();
const DroneController = require('../controllers/DroneController');

router.post('/', DroneController.criar);
router.get('/', DroneController.listar);

module.exports = router;

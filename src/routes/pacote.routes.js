/**
 * @swagger
 * tags:
 *   name: Pacotes
 *   description: Gerenciamento de pacotes
 */

/**
 * @swagger
 * /pacotes:
 *   post:
 *     summary: Cadastra um novo pacote
 *     tags: [Pacotes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - x
 *               - y
 *               - peso
 *             properties:
 *               x:
 *                 type: number
 *                 example: 3
 *               y:
 *                 type: number
 *                 example: 4
 *               peso:
 *                 type: number
 *                 example: 2.5
 *               prioridade:
 *                 type: string
 *                 enum: [baixa, media, alta]
 *                 example: alta
 *     responses:
 *       201:
 *         description: Pacote adicionado com sucesso
 *
 *   get:
 *     summary: Lista todos os pacotes cadastrados
 *     tags: [Pacotes]
 *     responses:
 *       200:
 *         description: Lista de pacotes
 */

const express = require('express');
const router = express.Router();
const PacoteController = require('../controllers/PacoteController');

router.post('/', PacoteController.criar);
router.get('/', PacoteController.listar);

module.exports = router;

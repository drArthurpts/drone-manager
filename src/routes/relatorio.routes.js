const express = require('express');
const router = express.Router();
const RelatorioController = require('../controllers/RelatorioController');

/**
 * @swagger
 * tags:
 *   name: Relatório
 *   description: Estatísticas da operação de entregas
 */

/**
 * @swagger
 * /relatorio:
 *   get:
 *     summary: Gera um relatório de estatísticas
 *     tags: [Relatório]
 *     responses:
 *       200:
 *         description: Retorna estatísticas da operação
 */
router.get('/', RelatorioController.gerar);

module.exports = router;

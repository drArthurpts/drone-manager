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
 *   get:
 *     summary: Lista todos os drones cadastrados
 *     tags: [Drones]
 *     responses:
 *       200:
 *         description: Lista de drones
 */

/**
 * @swagger
 * /drones/{id}:
 *   put:
 *     summary: Atualiza um drone existente
 *     tags: [Drones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do drone
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               capacidadeKg:
 *                 type: number
 *               alcanceKm:
 *                 type: number
 *               localizacao:
 *                 type: object
 *                 properties:
 *                   x:
 *                     type: number
 *                   y:
 *                     type: number
 *               bateria:
 *                 type: number
 *     responses:
 *       200:
 *         description: Drone atualizado com sucesso
 *       404:
 *         description: Drone não encontrado
 *
 *   delete:
 *     summary: Remove um drone existente
 *     tags: [Drones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do drone
 *     responses:
 *       200:
 *         description: Drone deletado com sucesso
 *       404:
 *         description: Drone não encontrado
 */
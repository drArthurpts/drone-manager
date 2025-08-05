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

/**
 * @swagger
 * /pacotes/{id}:
 *   put:
 *     summary: Atualiza um pacote existente
 *     tags: [Pacotes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pacote
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               x:
 *                 type: number
 *                 example: 1
 *               y:
 *                 type: number
 *                 example: 2
 *               peso:
 *                 type: number
 *                 example: 1.2
 *               prioridade:
 *                 type: string
 *                 enum: [baixa, media, alta]
 *                 example: media
 *     responses:
 *       200:
 *         description: Pacote atualizado com sucesso
 *       404:
 *         description: Pacote não encontrado
 *
 *   delete:
 *     summary: Remove um pacote existente
 *     tags: [Pacotes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do pacote
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pacote removido com sucesso
 *       404:
 *         description: Pacote não encontrado
 */

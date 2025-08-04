const Pacote = require('../models/Pacote');

const PacoteController = {
    async criar(req, res) {
        try {
            const { x, y, peso, prioridade } = req.body;

            if (typeof x !== 'number' || typeof y !== 'number') {
                return res.status(400).json({ erro: 'Coordenadas X e Y devem ser números.' });
            }

            if (peso <= 0 || typeof peso !== 'number') {
                return res.status(400).json({ erro: 'Peso do pacote deve ser um número maior que 0.' });
            }

            const prioridadesValidas = ['baixa', 'media', 'alta'];
            if (prioridade && !prioridadesValidas.includes(prioridade)) {
                return res.status(400).json({ erro: 'Prioridade inválida. Use baixa, media ou alta.' });
            }

            const pacote = await Pacote.create({ x, y, peso, prioridade });
            return res.status(201).json({
                mensagem: '📦 Pacote adicionado com sucesso!',
                pacote
            });
        } catch (error) {
            console.error('Erro ao criar pacote:', error);
            return res.status(400).json({ erro: 'Erro ao criar pacote' });
        }
    },

    async listar(req, res) {
        try {
            const pacotes = await Pacote.find();
            return res.json({
                mensagem: '📋 Lista de pacotes:',
                pacotes
            });
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao buscar pacotes' });
        }
    }
};

module.exports = PacoteController;

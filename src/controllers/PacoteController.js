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
    },
    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { x, y, peso, prioridade } = req.body;

            const pacote = await Pacote.findById(id);
            if (!pacote) return res.status(404).json({ erro: 'Pacote não encontrado.' });

            if (typeof x === 'number') pacote.x = x;
            if (typeof y === 'number') pacote.y = y;
            if (typeof peso === 'number' && peso > 0) pacote.peso = peso;
            if (prioridade) {
                const prioridadesValidas = ['baixa', 'media', 'alta'];
                if (!prioridadesValidas.includes(prioridade)) {
                    return res.status(400).json({ erro: 'Prioridade inválida.' });
                }
                pacote.prioridade = prioridade;
            }

            await pacote.save();

            return res.json({ mensagem: '📦 Pacote atualizado com sucesso.', pacote });
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao atualizar pacote.' });
        }
    },
    async deletar(req, res) {
        try {
            const { id } = req.params;
            const pacote = await Pacote.findByIdAndDelete(id);

            if (!pacote) return res.status(404).json({ erro: 'Pacote não encontrado.' });

            return res.json({ mensagem: '🗑️ Pacote removido com sucesso.' });
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao deletar pacote.' });
        }
    }

};

module.exports = PacoteController;

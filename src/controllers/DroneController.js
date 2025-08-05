const Drone = require('../models/Drone');

const DroneController = {
    async criar(req, res) {
        try {
            const { capacidadeKg, alcanceKm, localizacao, bateria } = req.body;

            if (typeof capacidadeKg !== 'number' || capacidadeKg <= 0) {
                return res.status(400).json({ erro: 'Capacidade do drone deve ser um número maior que 0.' });
            }

            if (typeof alcanceKm !== 'number' || alcanceKm <= 0) {
                return res.status(400).json({ erro: 'Alcance do drone deve ser um número maior que 0.' });
            }

            if (
                !localizacao ||
                typeof localizacao.x !== 'number' ||
                typeof localizacao.y !== 'number'
            ) {
                return res.status(400).json({ erro: 'Localização deve conter coordenadas numéricas X e Y.' });
            }

            if (bateria !== undefined && (bateria < 0 || bateria > 100)) {
                return res.status(400).json({ erro: 'Bateria deve estar entre 0 e 100.' });
            }

            const drone = await Drone.create({ capacidadeKg, alcanceKm, localizacao, bateria });
            return res.status(201).json({
                mensagem: '🚁 Drone cadastrado com sucesso!',
                drone
            });
        } catch (error) {
            console.error('Erro ao cadastrar drone:', error);
            return res.status(400).json({ erro: 'Erro ao cadastrar drone' });
        }
    },

    async listar(req, res) {
        try {
            const drones = await Drone.find();
            return res.json({
                mensagem: '📋 Lista de drones:',
                drones
            });
        } catch (error) {
            return res.status(500).json({ erro: 'Erro ao buscar drones' });
        }
    },
    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { capacidadeKg, alcanceKm, localizacao, bateria } = req.body;

            const drone = await Drone.findByIdAndUpdate(
                id,
                { capacidadeKg, alcanceKm, localizacao, bateria },
                { new: true, runValidators: true }
            );

            if (!drone) {
                return res.status(404).json({ erro: 'Drone não encontrado.' });
            }

            return res.json({
                mensagem: '✏️ Drone atualizado com sucesso!',
                drone
            });
        } catch (error) {
            console.error('Erro ao atualizar drone:', error);
            return res.status(400).json({ erro: 'Erro ao atualizar drone' });
        }
    },
    async deletar(req, res) {
        try {
            const { id } = req.params;
            const drone = await Drone.findByIdAndDelete(id);

            if (!drone) {
                return res.status(404).json({ erro: 'Drone não encontrado.' });
            }

            return res.json({ mensagem: '🗑️ Drone deletado com sucesso!' });
        } catch (error) {
            console.error('Erro ao deletar drone:', error);
            return res.status(400).json({ erro: 'Erro ao deletar drone' });
        }
    }
};

module.exports = DroneController;

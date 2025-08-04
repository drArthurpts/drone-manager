const Drone = require('../models/Drone');

const DroneController = {
  async criar(req, res) {
    try {
      const drone = await Drone.create(req.body);
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
  }
};

module.exports = DroneController;

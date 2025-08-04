const { simularEntregas } = require('../services/simuladorService');

const SimuladorController = {
  async simular(req, res) {
    try {
      const resultado = await simularEntregas();
      return res.json({
        mensagem: '✅ Simulação realizada com sucesso!',
        resultado
      });
    } catch (error) {
      console.error('Erro na simulação:', error);
      return res.status(500).json({ erro: 'Erro ao simular entregas' });
    }
  }
};

module.exports = SimuladorController;

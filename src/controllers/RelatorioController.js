const Pacote = require('../models/Pacote');
const Drone = require('../models/Drone');
const { simularEntregas } = require('../services/simuladorService');
const { gerarGraficoAscii } = require('../utils/asciiChart');

function calcularDistancia(pontoA, pontoB) {
  const dx = pontoA.x - pontoB.x;
  const dy = pontoA.y - pontoB.y;
  return Math.sqrt(dx * dx + dy * dy);
}

const RelatorioController = {
  async gerar(req, res) {
    try {
      const totalPacotes = await Pacote.countDocuments();
      const totalDrones = await Drone.countDocuments();

      const plano = await simularEntregas();
      const ascii = gerarGraficoAscii(plano);

      const totalEntregues = plano.reduce((total, d) => total + d.pacotesEntregar.length, 0);

      let droneMaisEficiente = null;
      let maiorQtd = 0;
      let somaDistancias = 0;
      let totalEntregas = 0;
      let dronesSemEntrega = 0;

      for (const d of plano) {
        if (d.pacotesEntregar.length === 0) {
          dronesSemEntrega++;
          continue;
        }

        if (d.pacotesEntregar.length > maiorQtd) {
          droneMaisEficiente = d.droneId;
          maiorQtd = d.pacotesEntregar.length;
        }

        for (const pacote of d.pacotesEntregar) {
          const drone = await Drone.findById(d.droneId);
          const distancia = calcularDistancia(drone.localizacao, pacote.destino);
          somaDistancias += distancia;
          totalEntregas++;
        }
      }

      const tempoMedioEstimado = totalEntregas > 0 ? (somaDistancias / totalEntregas).toFixed(2) : 0;

      return res.json({
        totalPacotes,
        totalDrones,
        totalPacotesEntregues: totalEntregues,
        droneMaisEficiente,
        tempoMedioEstimado: `${tempoMedioEstimado} km`,
        dronesSemEntrega,
        graficoAscii: ascii.trim().split('\n')

      });
    } catch (error) {

      console.error('Erro ao gerar relatório:', error.stack);
      return res.status(500).json({ erro: 'Erro ao gerar relatório' });
    }
  }
};

module.exports = RelatorioController;

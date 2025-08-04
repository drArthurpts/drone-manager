const { simularEntregas } = require('../services/simuladorService');

const SimuladorController = {
    async simular(req, res) {
        try {
            const resultado = await simularEntregas();

            const drones = resultado.map((d, index) => ({
                id: d.droneId,
                bateriaRestante: `${d.bateriaRestante.toFixed(2)}%`,
                pacotesEntregues: d.pacotesEntregar.map((p, i) =>
                    `📦 Pacote ${i + 1} | Prioridade: ${p.prioridade} | Destino: (${p.destino.x}, ${p.destino.y}) | Peso: ${p.peso} kg`
                )
            }));

            return res.json({
                mensagem: '✅ Simulação realizada com sucesso!',
                drones
            });
        } catch (error) {
            console.error('Erro na simulação:', error);
            return res.status(500).json({ erro: 'Erro ao simular entregas' });
        }
    }
};

module.exports = SimuladorController;

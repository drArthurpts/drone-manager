const Drone = require('../models/Drone');
const Pacote = require('../models/Pacote');

function calcularDistancia(pontoA, pontoB) {
    const dx = pontoA.x - pontoB.x;
    const dy = pontoA.y - pontoB.y;
    return Math.sqrt(dx * dx + dy * dy);
}

const prioridades = { alta: 3, media: 2, baixa: 1 };

async function simularEntregas() {
    const drones = await Drone.find();
    const pacotes = await Pacote.find();

    // Ordenar pacotes por prioridade (maior primeiro)
    pacotes.sort((a, b) => prioridades[b.prioridade] - prioridades[a.prioridade]);

    // Inicializar plano de voo
    const plano = drones.map(drone => ({
        droneId: drone._id,
        capacidadeDisponivel: drone.capacidadeKg,
        alcanceMax: drone.alcanceKm,
        bateriaAtual: drone.bateria,
        localizacao: drone.localizacao,
        pacotes: []
    }));

    // Alocar pacotes
    for (const pacote of pacotes) {
        for (const planoDrone of plano) {
            const distancia = calcularDistancia(planoDrone.localizacao, pacote);
            const consumo = distancia * 2; // ida e volta

            const podeEntregar =
                planoDrone.capacidadeDisponivel >= pacote.peso &&
                planoDrone.alcanceMax >= distancia * 2 &&
                planoDrone.bateriaAtual >= consumo;

            if (podeEntregar) {
                planoDrone.pacotes.push(pacote);
                planoDrone.capacidadeDisponivel -= pacote.peso;
                planoDrone.bateriaAtual -= consumo;
                break;
            }
        }
    }


    return plano.map(d => {
        if (d.pacotes.length === 0) {
            return {
                droneId: d.droneId,
                mensagem: '⚠️ Nenhum pacote alocado para este drone.',
                bateriaRestante: d.bateriaAtual,
                pacotesEntregar: []
            };
        }

        return {
            droneId: d.droneId,
            bateriaRestante: d.bateriaAtual,
            pacotesEntregar: d.pacotes.map(p => ({
                id: p._id,
                destino: { x: p.x, y: p.y },
                peso: p.peso,
                prioridade: p.prioridade
            }))
        };
    });

}

module.exports = { simularEntregas };

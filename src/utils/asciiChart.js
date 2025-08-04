function gerarGraficoAscii(plano) {
    let output = '\n📊 Pacotes Entregues por Drone\n';

    plano.forEach((d, i) => {
        const quantidade = d.pacotesEntregar.length;
        const barra = '■'.repeat(quantidade);
        output += `Drone ${i + 1} [${String(d.droneId).slice(-5)}]: ${barra} (${quantidade})\n`;

    });

    return output;
}

module.exports = { gerarGraficoAscii };

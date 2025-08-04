function calcularDistancia(pontoA, pontoB) {
    const dx = pontoA.x - pontoB.x;
    const dy = pontoA.y - pontoB.y;
    return Math.sqrt(dx * dx + dy * dy);
}

module.exports = { calcularDistancia };

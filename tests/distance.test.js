
const { calcularDistancia } = require('../src/utils/distance');

describe('Função calcularDistancia', () => {
  it('Deve calcular corretamente a distância entre dois pontos', () => {
    const pontoA = { x: 0, y: 0 };
    const pontoB = { x: 3, y: 4 };
    const distancia = calcularDistancia(pontoA, pontoB);
    expect(distancia).toBe(5);
  });
});

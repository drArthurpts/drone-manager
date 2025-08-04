require('dotenv').config();
const mongoose = require('mongoose');
const Pacote = require('../src/models/Pacote');
const Drone = require('../src/models/Drone');
const { simularEntregas } = require('../src/services/simuladorService');

describe('Serviço de Simulação', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI);
        await Drone.deleteMany({});
        await Pacote.deleteMany({});

        await Drone.create({
            localizacao: { x: 0, y: 0 },
            capacidadeKg: 5,
            alcanceKm: 15
        });

        await Pacote.create({
            x: 3,
            y: 4,
            peso: 2,
            prioridade: 'alta'
        });

    });

    it('Deve alocar pacotes corretamente em drones disponíveis', async () => {
        const plano = await simularEntregas();
        expect(plano.length).toBeGreaterThan(0);
        expect(plano[0].pacotesEntregar.length).toBeGreaterThan(0);
    });

    afterAll(async () => {
        await Drone.deleteMany({});
        await Pacote.deleteMany({});
        await mongoose.disconnect();
    });
});

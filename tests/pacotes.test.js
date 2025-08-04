require('dotenv').config();
const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Pacote = require('../src/models/Pacote');

describe('API de Pacotes', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI);
        await Pacote.deleteMany({});
    });

    it('Deve cadastrar um novo pacote com sucesso', async () => {
        const novoPacote = {
            x: 2,
            y: 5,
            peso: 1,
            prioridade: 'alta'
        };


        const res = await request(app).post('/pacotes').send(novoPacote);

        expect(res.statusCode).toBe(201);
        expect(res.body.mensagem).toContain('📦 Pacote adicionado com sucesso!');
    });

    it('Deve retornar todos os pacotes cadastrados', async () => {
        const res = await request(app).get('/pacotes');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body.pacotes)).toBe(true);
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });
});

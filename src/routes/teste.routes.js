const express = require('express');
const Drone = require('../models/Drone');
const Pacote = require('../models/Pacote');

const router = express.Router();

router.delete('/reset', async (req, res) => {
    try {
        await Drone.deleteMany({});
        await Pacote.deleteMany({});
        return res.status(200).json({ mensagem: '🧹 Drones e Pacotes apagados com sucesso!' });
    } catch (err) {
        return res.status(500).json({ erro: 'Erro ao limpar dados' });
    }
});

module.exports = router;

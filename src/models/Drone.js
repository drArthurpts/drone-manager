const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
    capacidadeKg: {
        type: Number,
        required: true
    },
    alcanceKm: {
        type: Number,
        required: true
    },
    localizacao: {
        x: { type: Number, required: true },
        y: { type: Number, required: true }
    },
    bateria: {
        type: Number,
        default: 100 // % opcional, útil para simulação
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Drone', droneSchema);

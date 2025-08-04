const mongoose = require('mongoose');

const pacoteSchema = new mongoose.Schema({
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  },
  peso: {
    type: Number,
    required: true
  },
  prioridade: {
    type: String,
    enum: ['baixa', 'media', 'alta'],
    default: 'baixa'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Pacote', pacoteSchema);

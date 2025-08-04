const Pacote = require('../models/Pacote');

const PacoteController = {
  async criar(req, res) {
  try {
    const pacote = await Pacote.create(req.body);
    return res.status(201).json({
      mensagem: '📦 Pacote adicionado com sucesso!',
      pacote
    });
  } catch (error) {
    console.error('Erro ao criar pacote:', error);
    return res.status(400).json({ erro: 'Erro ao criar pacote' });
  }
},

  async listar(req, res) {
  try {
    const pacotes = await Pacote.find();
    return res.json({
      mensagem: '📋 Lista de pacotes:',
      pacotes
    });
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao buscar pacotes' });
  }
}

};

module.exports = PacoteController;

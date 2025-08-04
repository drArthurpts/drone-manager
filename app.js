require('dotenv').config();
require('./src/config/db'); // Essa linha conecta ao MongoDB

const express = require('express');
const pacoteRoutes = require('./src/routes/pacote.routes');
const app = express();

app.use(express.json());
app.use('/pacotes', pacoteRoutes);

app.get('/', (req, res) => {
  res.send('API Simulador de Encomendas em Drone está rodando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API disponível em: http://localhost:${PORT}`);
});

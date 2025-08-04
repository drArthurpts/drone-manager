require('dotenv').config();
require('./src/config/db'); // Conexão com MongoDB

const express = require('express');
const pacoteRoutes = require('./src/routes/pacote.routes');
const droneRoutes = require('./src/routes/drone.routes');
const simuladorRoutes = require('./src/routes/simulador.routes');
const relatorioRoutes = require('./src/routes/relatorio.routes');
const swaggerUi = require('swagger-ui-express');
const testeRoutes = require('./src/routes/teste.routes');
const swaggerSpec = require('./src/docs/swaggerConfig');

const app = express();

app.use(express.json());

app.use('/pacotes', pacoteRoutes);
app.use('/drones', droneRoutes);
app.use('/simular', simuladorRoutes);
app.use('/teste', testeRoutes);
app.use('/relatorio', relatorioRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
    res.send('API Simulador de Encomendas em Drone está rodando');
});

module.exports = app; 

const swaggerJsDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Simulador de Encomendas em Drone',
    version: '1.0.0',
    description: 'API para gerenciamento de drones, pacotes e simulação de entregas urbanas.',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor Local',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/docs/*.js'], 
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;

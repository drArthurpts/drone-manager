const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simulador de Encomendas em Drone',
      version: '1.0.0',
      description: 'API que gerencia drones, pacotes e simulação de entregas',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.js'], 
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;

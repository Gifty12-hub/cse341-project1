// swagger.js
const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'API for managing user contacts'
    },
    host: 'localhost:3000',   // ← swap this for your Render URL before deploying
    schemes: ['http']         // ← swap to ['https'] for Render
};

const outputFile = './swagger-output.json';   // auto-generated, do not edit by hand
const endpointsFiles = ['./routes/index.js']; // points to your router

swaggerAutogen(outputFile, endpointsFiles, doc);
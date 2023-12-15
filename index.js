'use strict';

var path = require('path');
var http = require('http');
const Prometheus = require('prom-client')

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();



const metricsInterval = Prometheus.collectDefaultMetrics()

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});


const express = require('express');
const swStats = require('swagger-stats');
const apiSpec = require('./swagger.json');

const app2 = express();

// Configuración de Swagger Stats
app2.use(swStats.getMiddleware({ swaggerSpec: apiSpec }));


// Iniciar el servidor
const PORT = 4444;
app2.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

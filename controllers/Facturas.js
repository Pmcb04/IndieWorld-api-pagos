'use strict';

var utils = require('../utils/writer.js');
var Facturas = require('../service/FacturasService');

module.exports.generarFactura = function generarFactura (req, res, next, body) {
  Facturas.generarFactura(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function(error) {
      if (error.status === 404) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });

};

module.exports.obtenerFacturasUsuario = function obtenerFacturasUsuario (req, res, next, id_usuario) {
  Facturas.obtenerFacturasUsuario(id_usuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function(error) {
      if (error.status === 500){
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMetrics = function getMetrics (req, res, next) {
  Facturas.getMetrics()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
'use strict';


/**
 * Generar factura
 * Genera una factura basada en el tipo de suscripción del usuario.
 *
 * body Facturas_generar_body 
 * returns Factura
 **/
exports.generarFactura = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id_factura" : 0,
  "fecha_facturacion" : "fecha_facturacion",
  "monto" : 1.4658129805029452,
  "id_usuario" : 6,
  "tipo_suscripcion" : "tipo_suscripcion",
  "detalles" : "detalles"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Obtener facturas de usuario
 * Obtiene todas las facturas generadas por un usuario.
 *
 * id_usuario Long ID del usuario para obtener sus facturas
 * returns List
 **/
exports.obtenerFacturasUsuario = function(id_usuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id_factura" : 0,
  "fecha_facturacion" : "fecha_facturacion",
  "monto" : 1.4658129805029452,
  "id_usuario" : 6,
  "tipo_suscripcion" : "tipo_suscripcion",
  "detalles" : "detalles"
}, {
  "id_factura" : 0,
  "fecha_facturacion" : "fecha_facturacion",
  "monto" : 1.4658129805029452,
  "id_usuario" : 6,
  "tipo_suscripcion" : "tipo_suscripcion",
  "detalles" : "detalles"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


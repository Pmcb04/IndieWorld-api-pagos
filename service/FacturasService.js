'use strict';
var subscriptionTypes = ["Básica", "Estándar", "Premium"]; // Ejemplo de tipos de suscripción


/**
 * Generar factura
 * Genera una factura basada en el tipo de suscripción del usuario.
 *
 * body Facturas_generar_body 
 * returns Factura
 **/
exports.generarFactura = function(body) {
  return new Promise(function(resolve, reject) {
    if (subscriptionTypes.includes(body.tipo_suscripcion)){
      var examples = {};
      examples['application/json'] = {
        "id_factura": Math.floor(Math.random() * 1000), // ID aleatorio entre 0 y 999
        "fecha_facturacion": getRandomDate(), // Fecha aleatoria
        "monto": getMonto(body.tipo_suscripcion), // Monto aleatorio entre 0 y 999
        "id_usuario": body.id_usuario, // ID de usuario logeado
        "tipo_suscripcion": body.tipo_suscripcion, // Tipo de suscripción del usuario
        "detalles": getRandomDetails() // Detalles aleatorios
      };

      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        reject(new Error("Error al generar la factura"))
      }

    }else{
      reject(new Error("El tipo de suscripción proporcionado no es válido."));
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
    var examples = [];
    for (var i = 0; i < 5; i++) { // Devuelve una lista de 2 facturas aleatorias
      var subcription = getRandomSubscriptionType()
      var id_factura = Math.floor(Math.random() * 1000)
      var example = {
        "id_factura": id_factura + i, // ID aleatorio entre 0 y 999
        "fecha_facturacion": getRandomDate(), // Fecha aleatoria 
        "monto": getMonto(subcription), // Monto de la factura
        "id_usuario": id_usuario, // ID del usuario proporcionado por url
        "tipo_suscripcion": subcription, // Tipo de suscripción aleatorio
        "detalles": getRandomDetails() // Detalles aleatorios
      };
      examples.push(example);
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples)
    } else {
      reject(new Error("Error al mostrar la lista de las facturas"))
    }
  });
}

// Función para generar el monto dependiendo de la subcripción
function getMonto(subscription){
  var valor;

  switch (subscription) {
    case subscriptionTypes[0]:
      valor = 2;
      break;
    case subscriptionTypes[1]:
      valor = 7;
      break;
    case subscriptionTypes[2]:
      valor = 10;
      break;
    default:
      valor = -1; // Devuelve -1 si el tipo de suscripción no se encuentra en la lista
      break;
  }

  return valor;
}

// Función para generar una fecha aleatoria
function getRandomDate() {
  var startDate = new Date(2023, 0, 1); // Inicio del año 2023
  var endDate = new Date(); // Fecha actual
  var randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  return randomDate.toISOString(); // Devuelve la fecha en formato ISO
}

// Función para obtener un tipo de suscripción aleatorio 
function getRandomSubscriptionType() {
  var randomIndex = Math.floor(Math.random() * subscriptionTypes.length);
  return subscriptionTypes[randomIndex];
}

// Función para obtener detalles aleatorios
function getRandomDetails() {
  var details = ["El pago a sido retrasado 1 día", "Se le aplicado un descuento del 50%", "Se le a aplicado un descuento del 10%", ""]; // Ejemplo de detalles
  var randomIndex = Math.floor(Math.random() * details.length);
  return details[randomIndex];
}


// Escenario 1: permisos de usuario dentro del panel de Wheels to go
const usuarioAutenticado = true;
const rolUsuario = "agente"; // "admin", "agente", "cliente"
const seccionActual = "configuracion";

if (usuarioAutenticado) {
  console.log(`Bienvenido a Wheels to go. Rol: ${rolUsuario}`);

  if (rolUsuario === "admin") {
    console.log("Acceso completo al panel de gestión.");

    if (seccionActual === "configuracion") {
      console.log("Cargando configuración general de la agencia...");
    }
  } else if (rolUsuario === "agente") {
    console.log("Acceso de agente a reservas y clientes.");

    if (seccionActual === "configuracion") {
      console.log("⛔ Los agentes no pueden modificar la configuración del sistema.");
    } else {
      console.log(`Cargando sección: ${seccionActual}`);
    }
  } else if (rolUsuario === "cliente") {
    console.log("Acceso al panel de reservas del cliente.");

    if (seccionActual === "configuracion") {
      console.log("⛔ Los clientes no tienen acceso a configuración de la agencia.");
    } else {
      console.log(`Mostrando información de la reserva: sección ${seccionActual}`);
    }
  } else {
    console.log("Rol desconocido. Contacte al administrador de Wheels to go.");
  }

} else {
  console.log("Sesión no iniciada. Redirigiendo al inicio de sesión de Wheels to go...");
}


// Escenario 2: validación de datos de registro de cliente
const nombreClienteRegistro = "Ana";
const emailClienteRegistro = "ana@correo.com";
const passwordRegistro = "abc";
const MIN_PASSWORD = 8;

if (nombreClienteRegistro.trim().length === 0) {
  console.log("❌ El nombre del cliente es obligatorio.");
} else {
  console.log(`✅ Nombre válido: ${nombreClienteRegistro}`);

  if (!emailClienteRegistro.includes("@") || !emailClienteRegistro.includes(".")) {
    console.log("❌ El correo del cliente no tiene un formato válido.");
  } else {
    console.log(`✅ Email válido: ${emailClienteRegistro}`);

    if (passwordRegistro.length < MIN_PASSWORD) {
      console.log(`❌ La contraseña debe tener al menos ${MIN_PASSWORD} caracteres.`);
      console.log(`   Caracteres actuales: ${passwordRegistro.length}`);
    } else {
      console.log("✅ Datos válidos. Cliente registrado en Wheels to go.");
    }
  }
}


// Escenario 3: cálculo de precio final de alquiler según tipo de vehículo y membresía
const tipoVehiculo = "suv"; 
const clienteEsMiembro = true;
const precioBaseAlquiler = 200;

let precioFinalAlquiler = precioBaseAlquiler;
let detallePrecio = "";

if (tipoVehiculo === "suv") {
  const recargoSeguro = precioBaseAlquiler * 0.15;
  precioFinalAlquiler = precioBaseAlquiler + recargoSeguro;
  detallePrecio = "Incluye seguro ampliado (15%)";

  if (clienteEsMiembro) {
    const descuentoMiembro = precioFinalAlquiler * 0.05;
    precioFinalAlquiler -= descuentoMiembro;
    detallePrecio += " + 5% de descuento para miembros";
  }

} else if (tipoVehiculo === "sedan") {
  if (clienteEsMiembro) {
    precioFinalAlquiler = precioBaseAlquiler * 0.85; 
    detallePrecio = "15% de descuento para miembros en sedán";
  } else {
    precioFinalAlquiler = precioBaseAlquiler * 0.95; 
    detallePrecio = "5% de descuento promocional en sedán";
  }

} else if (tipoVehiculo === "compacto") {
  precioFinalAlquiler = precioBaseAlquiler; 
  detallePrecio = "Tarifa económica sin recargos adicionales";
}

console.log(`Tipo de vehículo: ${tipoVehiculo}`);
console.log(`Precio base: $${precioBaseAlquiler.toFixed(2)}`);
console.log(`Detalle: ${detallePrecio}`);
console.log(`Precio final de alquiler: $${precioFinalAlquiler.toFixed(2)}`);


// Escenario 4: descuentos anidados según total y membresía
/*
  Pide el total de alquiler y si el cliente es miembro:
      Si el total es mayor a 50:
          Si es miembro: "Descuento especial Wheels to go"
          Si no:         "Descuento estándar"
      Si no: "No aplica descuento"
*/
const prompt25 = require("prompt-sync")();
const totalTexto = prompt25("Ingrese el total del alquiler (USD): ");
const totalAlquiler = parseFloat(totalTexto) || 0;

if (totalAlquiler > 50) {
  const miembroTexto = prompt25("¿Es cliente miembro? (1 = sí; otro = no): ");
  const clienteMiembro = parseFloat(miembroTexto);

  if (clienteMiembro === 1) {
    console.log("Descuento especial Wheels to go aplicado.");
  } else {
    console.log("Descuento estándar aplicado.");
  }
} else {
  console.log("No aplica descuento por monto mínimo.");
}
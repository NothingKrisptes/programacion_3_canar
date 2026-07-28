const estadoPedido = "enviado";

switch (estadoPedido) {
  case "pendiente":
    console.log("📋 Pedido registrado. En espera de confirmación de pago.");
    break;
  case "confirmado":
    console.log("✅ Pago confirmado. Preparando para despacho.");
    break;
  case "enviado":
    console.log("🚚 Pedido en camino. Tiempo estimado: 2-3 días hábiles.");
    break;
  case "entregado":
    console.log("📦 Pedido entregado. ¡Gracias por tu compra!");
    break;
  case "cancelado":
    console.log("❌ Pedido cancelado. Reembolso procesado en 5-7 días.");
    break;
  default:
    console.log(`Estado desconocido: "${estadoPedido}". Contactar soporte.`);
}
// 🚚 Pedido en camino. Tiempo estimado: 2-3 días hábiles.

const diaSemana = 3; // 1=Lunes ... 7=Domingo

switch (diaSemana) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Día laboral — horario de atención: 08:00 a 17:00");
    break;
  case 6:
    console.log("Sábado — horario especial: 09:00 a 13:00");
    break;
  case 7:
    console.log("Domingo — oficinas cerradas");
    break;
  default:
    console.log("Número de día no válido (usar 1-7)");
}
// Día laboral — horario de atención: 08:00 a 17:00

// Ejemplo: categorías de producto y su impuesto
const tipoProducto = "medicamento";
let tasaImpuesto;
let descripcionImpuesto;

switch (tipoProducto) {
  case "alimento_basico":
  case "medicamento":
    tasaImpuesto        = 0;
    descripcionImpuesto = "Exento de impuesto";
    break;
  case "ropa":
  case "calzado":
    tasaImpuesto        = 0.05;
    descripcionImpuesto = "IVA reducido 5%";
    break;
  case "electronica":
  case "lujo":
    tasaImpuesto        = 0.15;
    descripcionImpuesto = "IVA estándar 15%";
    break;
  default:
    tasaImpuesto        = 0.15;
    descripcionImpuesto = "IVA estándar (categoría no especificada)";
}

const precioProducto = 80;
const impuesto       = precioProducto * tasaImpuesto;
console.log(`Producto: ${tipoProducto}`);
console.log(`${descripcionImpuesto}: $${impuesto.toFixed(2)}`);
console.log(`Precio final: $${(precioProducto + impuesto).toFixed(2)}`);
// Producto: medicamento
// Exento de impuesto: $0.00
// Precio final: $80.00
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
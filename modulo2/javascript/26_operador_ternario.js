// Sintaxis: condicion ? valor_si_true : valor_si_false
const stockDisponible = 8;
const estadoStock = stockDisponible > 0 ? "Disponible" : "Agotado";
console.log(`Estado: ${estadoStock}`);   // Estado: Disponible

// Dentro de template literals — muy útil
const precioUnitario = 25.50;
const cantidadItems  = 3;
const totalPedido    = precioUnitario * cantidadItems;

console.log(`Pedido: ${cantidadItems} item(s) x $${precioUnitario}`);
console.log(`Total: $${totalPedido.toFixed(2)}`);
console.log(`Envío gratis: ${totalPedido >= 50 ? "Sí ✅" : "No ❌ (mínimo $50)"}`);
// Pedido: 3 item(s) x $25.50
// Total: $76.50
// Envío gratis: Sí ✅

// Asignación de estado de cuenta bancaria
const saldoActual = -150;
const estadoCuenta = saldoActual >= 0 ? "Al día" : "En descubierto";
const colorAlerta  = saldoActual >= 0 ? "verde" : "rojo";
console.log(`[${colorAlerta.toUpperCase()}] Cuenta: ${estadoCuenta}`);
// [ROJO] Cuenta: En descubierto

// ❌ No anidar ternarios — difícil de leer y de mantener
const edad = 60
const categoriaEdad = edad >= 65 ? "senior" : edad >= 18 ? "adulto" : "menor";

// ✅ Mejor usar if/else if para tres o más casos
let categoriaEdadClara;
if (edad >= 65) {
  categoriaEdadClara = "senior";
} else if (edad >= 18) {
  categoriaEdadClara = "adulto";
} else {
  categoriaEdadClara = "menor";
}
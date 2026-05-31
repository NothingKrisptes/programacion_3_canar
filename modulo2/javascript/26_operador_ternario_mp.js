const vehiculosDisponibles = 8;
const estadoFlota = vehiculosDisponibles > 0 ? "Vehículos disponibles" : "Sin vehículos disponibles";

console.log(`Estado de flota: ${estadoFlota}`);


const tarifaDiaria = 45.5;
const diasAlquiler = 3;
const totalReserva = tarifaDiaria * diasAlquiler;

console.log(`Reserva: ${diasAlquiler} día(s) x $${tarifaDiaria}`);
console.log(`Total: $${totalReserva.toFixed(2)}`);
console.log(`Entrega en aeropuerto gratis: ${totalReserva >= 150 ? "Sí ✅" : "No ❌ (mínimo $150)"}`);


const saldoCliente = -150;
const estadoCuentaCliente = saldoCliente >= 0 ? "Al día" : "Con saldo pendiente";
const colorAviso = saldoCliente >= 0 ? "verde" : "rojo";

console.log(`[${colorAviso.toUpperCase()}] Cuenta del cliente: ${estadoCuentaCliente}`);


const edadConductor = 60;
const categoriaConductor = edadConductor >= 65
  ? "senior"
  : edadConductor >= 25
    ? "adulto"
    : "joven";


let categoriaConductorClara;

if (edadConductor >= 65) {
  categoriaConductorClara = "Conductor senior (pueden aplicar restricciones)";
} else if (edadConductor >= 25) {
  categoriaConductorClara = "Conductor adulto (condiciones estándar)";
} else {
  categoriaConductorClara = "Conductor joven (puede requerir seguro adicional)";
}

console.log(`Categoría de conductor: ${categoriaConductorClara}`);
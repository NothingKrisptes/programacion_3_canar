const nombreCliente = "Carlos Ramírez";
const diasReserva = 5;
const tarifaDiaria = 45.00;

let totalParcial = 0;
totalParcial = diasReserva * tarifaDiaria;
totalParcial += 15;

console.log(`${nombreCliente} alquiló por ${diasReserva} días. Total: $${totalParcial}`);

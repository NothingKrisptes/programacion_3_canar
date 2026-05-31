const nombreCliente = "Luis";
const apellidoCliente = "Morales";
const diasReserva = 7;

console.log(`Reserva confirmada para ${nombreCliente}`);

console.log(`Cliente: ${nombreCliente.toUpperCase()} ${apellidoCliente.toUpperCase()}`);
console.log(`Si extiende 1 día más, total de días: ${diasReserva + 1}`);
console.log(`¿Califica para descuento por semana completa? ${diasReserva >= 7 ? "Sí" : "No"}`);

const ticket = `
Cliente: ${nombreCliente} ${apellidoCliente}
Días reservados: ${diasReserva}
Descuento aplicado: ${diasReserva >= 7 ? "10%" : "0%"}
`;

console.log(ticket);
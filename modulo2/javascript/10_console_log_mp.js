console.log("Iniciando sistema de reservas");
console.log("Vehículo seleccionado:", "Toyota Corolla 2024");
console.log("Datos:", "Cliente", "Días", "Tarifa");

console.error("Error: vehículo no disponible en las fechas seleccionadas");

console.warn("Advertencia: combustible no incluido en la tarifa base");

console.table([
  { cliente: "Ana García", vehiculo: "Corolla", dias: 5 }, 
  { cliente: "Luis Morales", vehiculo: "RAV4", dias: 3 }
]);

const totalDias = 5;
const tarifaDiaria = 45;
console.log(`Total: ${totalDias} días × $${tarifaDiaria} = $${totalDias * tarifaDiaria}`);
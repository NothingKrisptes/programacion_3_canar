// TypeScript — funciones con tipos para evitar errores de negocio
// Función para calcular el total de una reserva
function calcularTotalReserva(dias: number, tarifaDiaria: number): number {
  return dias * tarifaDiaria;
}

console.log(calcularTotalReserva(5, 45)); // 225

function calcularRecargoAeropuerto(montoBase: number, porcentaje: number): number {
  return montoBase + montoBase * (porcentaje / 100);
}

function saludarClienteTS(nombre: string): string {
  return `Hola, ${nombre}, bienvenido a Wheels to go.`;
}

function esAlquilerLargoPlazo(dias: number): boolean {
  return dias >= 10;
}

function registrarLog(mensaje: string): void {
  console.log(`[LOG] ${mensaje}`);
}

console.log(calcularRecargoAeropuerto(100, 15));
console.log(saludarClienteTS("Ana"));
console.log(esAlquilerLargoPlazo(12));
registrarLog("Reserva creada correctamente.");

// Parámetros opcionales: algunos datos del cliente pueden faltar
function presentarCliente(
  nombre: string,
  licencia?: string,
  ciudad?: string
): string {
  let resultado = `Cliente: ${nombre}`;

  if (licencia !== undefined) {
    resultado += `, licencia: ${licencia}`;
  }

  if (ciudad !== undefined) {
    resultado += `, ciudad: ${ciudad}`;
  }

  return resultado;
}

console.log(presentarCliente("Ana"));
console.log(presentarCliente("Ana", "ABC-1234"));
console.log(presentarCliente("Ana", "ABC-1234", "Quito"));

// Búsqueda de vehículo: retorna null si no encuentra
function buscarVehiculo(
  vehiculos: string[],
  busqueda: string,
  exacto?: boolean
): string | null {
  for (const vehiculo of vehiculos) {
    if (exacto) {
      if (vehiculo === busqueda) return vehiculo;
    } else {
      if (vehiculo.toLowerCase().includes(busqueda.toLowerCase())) {
        return vehiculo;
      }
    }
  }
  return null;
}

const flotaModelos = ["Sedán Compacto", "SUV Familiar", "Pickup 4x4", "Económico"];

console.log(buscarVehiculo(flotaModelos, "suv"));
console.log(buscarVehiculo(flotaModelos, "SUV Familiar", true));
console.log(buscarVehiculo(flotaModelos, "Motocicleta"));

// Parámetros por defecto: descuentos y recargos
function calcularTotalConDescuento(
  montoBase: number,
  porcentajeDescuento: number = 10,
  incluirSeguro: boolean = true
): number {
  let total = montoBase * (1 - porcentajeDescuento / 100);

  if (incluirSeguro) {
    total += 15; // costo fijo del seguro
  }

  return total;
}

console.log(calcularTotalConDescuento(200));
console.log(calcularTotalConDescuento(200, 20));
console.log(calcularTotalConDescuento(200, 20, false));

// Repetir un aviso al cliente
function repetirAviso(mensaje: string, veces: number = 2): void {
  for (let i = 1; i <= veces; i++) {
    console.log(`[${i}/${veces}] ${mensaje}`);
  }
}

repetirAviso("Recuerde devolver el vehículo con el tanque lleno.");
repetirAviso("Oferta especial para miembros.", 3);


// Rest parameters: estadísticas de tarifas
function calcularEstadisticasTarifas(...tarifas: number[]): {
  min: number;
  max: number;
  promedio: number;
} {
  if (tarifas.length === 0) {
    return { min: 0, max: 0, promedio: 0 };
  }

  let min = tarifas[0];
  let max = tarifas[0];
  let suma = 0;

  for (const t of tarifas) {
    if (t < min) min = t;
    if (t > max) max = t;
    suma += t;
  }

  return {
    min,
    max,
    promedio: suma / tarifas.length
  };
}

const statsTarifas = calcularEstadisticasTarifas(30, 45, 50, 60, 35);
console.log(statsTarifas);

// Filtrar solo montos positivos de pagos
function pagosValidos(...montos: number[]): number[] {
  const resultado: number[] = [];
  for (const m of montos) {
    if (m > 0) resultado.push(m);
  }
  return resultado;
}

console.log(pagosValidos(100, -20, 50, 0, 200));
const nombreCompleto: string = "Ana García";
const codigoReserva: string = "W2G-2026-0001";
const saludoCliente: string = `Hola, ${nombreCompleto}, tu reserva ${codigoReserva} está confirmada.`;
const observacion: string = "";

console.log(nombreCompleto);
console.log(saludoCliente);
console.log(`Longitud del código de reserva: ${codigoReserva.length}`);

console.log(nombreCompleto.toUpperCase());
console.log(nombreCompleto.toLowerCase());
console.log(codigoReserva.includes("W2G"));
console.log(nombreCompleto.split(" ")); 

const tarifaDiariaBase: number = 45;
const recargoSeguro: number = 5.5;
const descuentoMiembro: number = 10;
const totalDias: number = 7;
const totalSinDescuento: number = (tarifaDiariaBase + recargoSeguro) * totalDias;

console.log(tarifaDiariaBase);
console.log(recargoSeguro);
console.log(totalSinDescuento);
console.log(totalSinDescuento.toFixed(2));

console.log(40 + 5);   // suma de tarifas
console.log(50 - 10);  // aplicar descuento
console.log(45 * 3);   // 3 días de alquiler
console.log(200 / 4);  
console.log(10 % 3);
console.log(2 ** 4);


const tieneLicenciaVigente: boolean = true;
const tieneMultasPendientes: boolean = false;

console.log(tieneLicenciaVigente);
console.log(!tieneLicenciaVigente);
console.log(tieneLicenciaVigente && !tieneMultasPendientes);
console.log(tieneLicenciaVigente || tieneMultasPendientes);

const edadConductor: number = 25;
const esConductorValido: boolean = edadConductor >= 21;
console.log(`¿Conductor válido? ${esConductorValido}`);

let datoFlexible: any = "W2G-01";
datoFlexible = 42;
datoFlexible = true;
datoFlexible = { codigo: "W2G-01" };

function formatearEntradaReserva(valor: unknown): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }

  if (typeof valor === "number") {
    return valor.toFixed(2);
  }

  if (typeof valor === "boolean") {
    return valor ? "Sí" : "No";
  }

  return "Valor de entrada no reconocido";
}

console.log(formatearEntradaReserva("w2g-0001"));
console.log(formatearEntradaReserva(123.456));
console.log(formatearEntradaReserva(true));
console.log(formatearEntradaReserva(null));

function mostrarMensajeSistema(mensaje: string): void {
  console.log(`[SISTEMA] ${mensaje}`);
}

mostrarMensajeSistema("Servidor de reservas en línea.");
mostrarMensajeSistema("Flota actualizada correctamente.");

function calcularDiasRestantes(diasTotales: number, diasUsados: number): number {
  return diasTotales - diasUsados;
}

const diasRestantes: number = calcularDiasRestantes(10, 4);
console.log(`Días restantes de alquiler: ${diasRestantes}`);
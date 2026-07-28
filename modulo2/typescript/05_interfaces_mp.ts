type NombreCliente = string;
type CodigoReserva = string;
type Monto = number;

type EstadoReserva = "pendiente" | "confirmada" | "en_ruta" | "finalizada" | "cancelada";
type TipoVehiculo = "economico" | "sedan" | "suv" | "premium";

type ListaReservas = CodigoReserva[];
type ListaMontos = Monto[];

interface Cliente {
  id: number;
  nombre: NombreCliente;
  email: string;
  esMiembro: boolean;
}

function mostrarCliente(c: Cliente): void {
  console.log(`${c.nombre} — ${c.email} — miembro: ${c.esMiembro}`);
}

function clienteValido(c: Cliente): boolean {
  return c.nombre.trim().length > 0 && c.email.includes("@");
}

const clienteAna: Cliente = {
  id: 1,
  nombre: "Ana García",
  email: "ana@wheelstogo.com",
  esMiembro: true
};

mostrarCliente(clienteAna);
console.log(`¿Cliente válido? ${clienteValido(clienteAna)}`);


interface Vehiculo {
  codigo: string;
  modelo: string;
  tipo: TipoVehiculo;
  tarifaDiaria: number;
  disponible: boolean;
}

function mostrarVehiculo(v: Vehiculo): void {
  console.log(
    `[${v.codigo}] ${v.modelo} (${v.tipo}) — $${v.tarifaDiaria}/día — ` +
    (v.disponible ? "Disponible" : "No disponible")
  );
}

function estaDisponible(v: Vehiculo): boolean {
  return v.disponible;
}

const suvFamiliar: Vehiculo = {
  codigo: "W2G-SUV-01",
  modelo: "SUV Familiar",
  tipo: "suv",
  tarifaDiaria: 60,
  disponible: true
};

mostrarVehiculo(suvFamiliar);
console.log(`¿Disponible? ${estaDisponible(suvFamiliar)}`);


interface Empleado {
  readonly id: number;
  nombre: string;
  email: string;
  rol: "asesor" | "administrador" | "operador";
  sucursal?: string;
  salario?: number;
}

const asesor: Empleado = {
  id: 10,
  nombre: "Carlos Pérez",
  email: "carlos@wheelstogo.com",
  rol: "asesor",
  sucursal: "Quito",
  salario: 900
};

function mostrarEmpleado(e: Empleado): void {
  console.log(
    `${e.nombre} — ${e.rol} — ` +
    `sucursal: ${e.sucursal ?? "no asignada"} — ` +
    `salario: ${e.salario ?? 0}`
  );
}

mostrarEmpleado(asesor);


// Extender interfaces: Reserva base y reservas especiales
interface ReservaBase {
  codigo: CodigoReserva;
  clienteId: number;
  vehiculoCodigo: string;
  dias: number;
  estado: EstadoReserva;
}

interface ReservaConPago extends ReservaBase {
  montoTotal: Monto;
  pagado: boolean;
}

const reservaEjemplo: ReservaConPago = {
  codigo: "W2G-2026-0001",
  clienteId: 1,
  vehiculoCodigo: "W2G-SUV-01",
  dias: 5,
  estado: "confirmada",
  montoTotal: 350,
  pagado: true
};

function mostrarReserva(r: ReservaBase): void {
  console.log(
    `Reserva ${r.codigo} — Cliente: ${r.clienteId} — Vehículo: ${r.vehiculoCodigo} — ` +
    `${r.dias} día(s) — Estado: ${r.estado}`
  );
}

mostrarReserva(reservaEjemplo);
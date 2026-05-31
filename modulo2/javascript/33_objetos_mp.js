// OBJETOS JAVASCRIPT - contexto Wheels to go
// Cliente
const cliente = {
  nombre: "Ana",
  edad: 28,
  activo: true
};

console.log(cliente.nombre);
console.log(cliente.edad);
console.log(cliente["nombre"]);

const clave = "edad";
console.log(cliente[clave]);

console.log(cliente.telefono); 

cliente.ciudad = "Quito";
console.log(cliente.ciudad);

delete cliente.activo;
console.log(cliente.activo);

// Calculadora de tarifas
const calculadoraTarifas = {
  calcularDiaria(base, recargo) {
    return base + recargo;
  },
  aplicarDescuento(monto, porcentaje) {
    return monto - monto * porcentaje;
  },
  calcularTotal(dias, tarifaDiaria) {
    return dias * tarifaDiaria;
  }
};

console.log(calculadoraTarifas.calcularDiaria(40, 5));
console.log(calculadoraTarifas.aplicarDescuento(100, 0.1));
console.log(calculadoraTarifas.calcularTotal(3, 45));

const reserva = {
  codigo: "R001",
  cliente: "Ana",
  dias: 5,
  tarifaDiaria: 45,

  resumen() {
    return `Reserva ${this.codigo} para ${this.cliente}: ${this.dias} día(s) x $${this.tarifaDiaria}`;
  },

  total() {
    return this.dias * this.tarifaDiaria;
  },

  resumenArrow: () => {
    return `Reserva: ${this.codigo}`; 
  }
};

console.log(reserva.resumen());
console.log(`Total: $${reserva.total()}`);
console.log(reserva.resumenArrow());

const nombre = "Carlos";
const edad = 32;
const sucursal = "Centro";

const asesor1 = {
  nombre: nombre,
  edad: edad,
  sucursal: sucursal
};

const asesor2 = { nombre, edad, sucursal };

console.log(asesor2);
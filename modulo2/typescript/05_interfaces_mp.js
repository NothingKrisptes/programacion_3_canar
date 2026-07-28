"use strict";
function mostrarCliente(c) {
    console.log(`${c.nombre} — ${c.email} — miembro: ${c.esMiembro}`);
}
function clienteValido(c) {
    return c.nombre.trim().length > 0 && c.email.includes("@");
}
const clienteAna = {
    id: 1,
    nombre: "Ana García",
    email: "ana@wheelstogo.com",
    esMiembro: true
};
mostrarCliente(clienteAna);
console.log(`¿Cliente válido? ${clienteValido(clienteAna)}`);
function mostrarVehiculo(v) {
    console.log(`[${v.codigo}] ${v.modelo} (${v.tipo}) — $${v.tarifaDiaria}/día — ` +
        (v.disponible ? "Disponible" : "No disponible"));
}
function estaDisponible(v) {
    return v.disponible;
}
const suvFamiliar = {
    codigo: "W2G-SUV-01",
    modelo: "SUV Familiar",
    tipo: "suv",
    tarifaDiaria: 60,
    disponible: true
};
mostrarVehiculo(suvFamiliar);
console.log(`¿Disponible? ${estaDisponible(suvFamiliar)}`);
const asesor = {
    id: 10,
    nombre: "Carlos Pérez",
    email: "carlos@wheelstogo.com",
    rol: "asesor",
    sucursal: "Quito",
    salario: 900
};
function mostrarEmpleado(e) {
    console.log(`${e.nombre} — ${e.rol} — ` +
        `sucursal: ${e.sucursal ?? "no asignada"} — ` +
        `salario: ${e.salario ?? 0}`);
}
mostrarEmpleado(asesor);
const reservaEjemplo = {
    codigo: "W2G-2026-0001",
    clienteId: 1,
    vehiculoCodigo: "W2G-SUV-01",
    dias: 5,
    estado: "confirmada",
    montoTotal: 350,
    pagado: true
};
function mostrarReserva(r) {
    console.log(`Reserva ${r.codigo} — Cliente: ${r.clienteId} — Vehículo: ${r.vehiculoCodigo} — ` +
        `${r.dias} día(s) — Estado: ${r.estado}`);
}
mostrarReserva(reservaEjemplo);

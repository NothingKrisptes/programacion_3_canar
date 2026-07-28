"use strict";
class CuentaCliente {
    titular;
    saldo;
    historial = [];
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.registrar(`Cuenta creada con saldo inicial: $${saldoInicial}`);
        console.log(`Cuenta de cliente ${titular} creada.`);
    }
    abonar(monto) {
        this.saldo += monto;
        this.registrar(`Abono: +$${monto}`);
        console.log(`Abono de $${monto}. Saldo actual: $${this.saldo}`);
    }
    descontar(monto) {
        if (monto > this.saldo) {
            console.log("Error: saldo insuficiente para descontar.");
            return;
        }
        this.saldo -= monto;
        this.registrar(`Descuento: -$${monto}`);
        console.log(`Descuento de $${monto}. Saldo actual: $${this.saldo}`);
    }
    consultarSaldo() {
        return this.saldo;
    }
    verHistorial() {
        console.log(`\nHistorial de la cuenta de ${this.titular}:`);
        this.historial.forEach(h => console.log(`  ${h}`));
    }
    registrar(operacion) {
        this.historial.push(operacion);
    }
}
const cuentaAna = new CuentaCliente("Ana García", 200);
cuentaAna.abonar(100);
cuentaAna.descontar(120);
cuentaAna.descontar(300);
console.log(`Saldo final: $${cuentaAna.consultarSaldo()}`);
cuentaAna.verHistorial();

"use strict";
class TarifaBase {
    descripcion;
    tarifaDiaria;
    constructor(descripcion, tarifaDiaria) {
        this.descripcion = descripcion;
        this.tarifaDiaria = tarifaDiaria;
    }
    // Método común para describir la tarifa
    describir(dias) {
        const total = this.calcularTotal(dias);
        return `${this.constructor.name} "${this.descripcion}" — ` +
            `${dias} día(s) → Total: $${total.toFixed(2)}`;
    }
}
// Tarifa estándar sin descuentos
class TarifaEstandar extends TarifaBase {
    calcularTotal(dias) {
        return this.tarifaDiaria * dias;
    }
}
// Tarifa con descuento por larga duración
class TarifaLargaDuracion extends TarifaBase {
    diasDescuento;
    porcentajeDescuento;
    constructor(descripcion, tarifaDiaria, diasDescuento, porcentajeDescuento) {
        super(descripcion, tarifaDiaria);
        this.diasDescuento = diasDescuento;
        this.porcentajeDescuento = porcentajeDescuento;
    }
    calcularTotal(dias) {
        const totalBase = this.tarifaDiaria * dias;
        if (dias >= this.diasDescuento) {
            const descuento = totalBase * (this.porcentajeDescuento / 100);
            return totalBase - descuento;
        }
        return totalBase;
    }
}
// Tarifa para miembros con descuento fijo
class TarifaMiembro extends TarifaBase {
    porcentajeDescuentoMiembro;
    constructor(descripcion, tarifaDiaria, porcentajeDescuentoMiembro) {
        super(descripcion, tarifaDiaria);
        this.porcentajeDescuentoMiembro = porcentajeDescuentoMiembro;
    }
    calcularTotal(dias) {
        const totalBase = this.tarifaDiaria * dias;
        const descuento = totalBase * (this.porcentajeDescuentoMiembro / 100);
        return totalBase - descuento;
    }
}
// Tarifa con seguro incluido
class TarifaConSeguro extends TarifaBase {
    costoSeguroPorDia;
    constructor(descripcion, tarifaDiaria, costoSeguroPorDia) {
        super(descripcion, tarifaDiaria);
        this.costoSeguroPorDia = costoSeguroPorDia;
    }
    calcularTotal(dias) {
        const costoAlquiler = this.tarifaDiaria * dias;
        const costoSeguro = this.costoSeguroPorDia * dias;
        return costoAlquiler + costoSeguro;
    }
}
console.log("=== POLIMORFISMO - TARIFAS DE ALQUILER ===\n");
// Todas son TarifaBase, pero el cálculo interno cambia
const tarifas = [
    new TarifaEstandar("Sedán estándar", 45),
    new TarifaLargaDuracion("SUV larga duración", 60, 7, 15), // 15% desc desde 7 días
    new TarifaMiembro("Económico miembro", 30, 10), // 10% desc a miembros
    new TarifaConSeguro("Premium con seguro", 90, 12) // +12/día de seguro
];
const diasAlquiler = 10;
for (const tarifa of tarifas) {
    console.log(`  ${tarifa.describir(diasAlquiler)}`);
}
// Calcular el ingreso total si se alquila cada tipo una vez
const ingresoTotal = tarifas.reduce((acc, tarifa) => acc + tarifa.calcularTotal(diasAlquiler), 0);
console.log(`\n  Ingreso total por todas las tarifas: $${ingresoTotal.toFixed(2)}`);

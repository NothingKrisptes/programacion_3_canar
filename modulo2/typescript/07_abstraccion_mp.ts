class CuentaCliente {
  private saldo: number;
  private historial: string[] = [];

  constructor(private titular: string, saldoInicial: number) {
    this.saldo = saldoInicial;
    this.registrar(`Cuenta creada con saldo inicial: $${saldoInicial}`);
    console.log(`Cuenta de cliente ${titular} creada.`);
  }

  abonar(monto: number): void {
    this.saldo += monto;
    this.registrar(`Abono: +$${monto}`);
    console.log(`Abono de $${monto}. Saldo actual: $${this.saldo}`);
  }

  descontar(monto: number): void {
    if (monto > this.saldo) {
      console.log("Error: saldo insuficiente para descontar.");
      return;
    }
    this.saldo -= monto;
    this.registrar(`Descuento: -$${monto}`);
    console.log(`Descuento de $${monto}. Saldo actual: $${this.saldo}`);
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  verHistorial(): void {
    console.log(`\nHistorial de la cuenta de ${this.titular}:`);
    this.historial.forEach(h => console.log(`  ${h}`));
  }

  private registrar(operacion: string): void {
    this.historial.push(operacion);
  }
}

const cuentaAna = new CuentaCliente("Ana García", 200);
cuentaAna.abonar(100);
cuentaAna.descontar(120);
cuentaAna.descontar(300);
console.log(`Saldo final: $${cuentaAna.consultarSaldo()}`);
cuentaAna.verHistorial();
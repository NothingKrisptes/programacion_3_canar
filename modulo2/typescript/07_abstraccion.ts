// abstraccion
class CuentaBancaria {
  // El saldo y el historial son internos — nadie los ve directamente
  private saldo:     number;
  private historial: string[] = [];

  constructor(titular: string, saldoInicial: number) {
    this.saldo = saldoInicial;
    this.historial.push(`Cuenta creada con ${saldoInicial}€`);
    console.log(`Cuenta de ${titular} creada.`);
  }

  // Interfaz pública — lo que el usuario ve y usa
  depositar(cantidad: number): void {
    this.saldo += cantidad;
    this.registrar(`Depósito: +${cantidad}€`); // método interno
    console.log(`  Depositado ${cantidad}€. Saldo: ${this.saldo}€`);
  }

  retirar(cantidad: number): void {
    if (cantidad > this.saldo) {
      console.log("  Error: saldo insuficiente.");
      return;
    }
    this.saldo -= cantidad;
    this.registrar(`Retiro: -${cantidad}€`);
    console.log(`  Retirado ${cantidad}€. Saldo: ${this.saldo}€`);
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  verHistorial(): void {
    console.log("\n  Historial:");
    this.historial.forEach(h => console.log(`    ${h}`));
  }

  // Método privado — el usuario NO sabe que existe
  // Solo se usa internamente
  private registrar(operacion: string): void {
    this.historial.push(operacion);
  }
}

console.log("=== CUENTA BANCARIA ===\n");
const cuenta = new CuentaBancaria("Ana García", 1000);

cuenta.depositar(500);
cuenta.retirar(200);
cuenta.retirar(2000);  // intento fallido

console.log(`\nSaldo actual: ${cuenta.consultarSaldo()}€`);
cuenta.verHistorial();
// El usuario no puede acceder directamente al saldo
// cuenta.saldo = 999999;  // ❌ Error — saldo es private
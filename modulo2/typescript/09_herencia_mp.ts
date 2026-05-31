class Vehiculo {
  constructor(
    protected placa: string,
    protected modelo: string,
    protected anio: number
  ) {}

  describir(): string {
    return `${this.modelo} (${this.anio}) - Placa: ${this.placa}`;
  }

  arrancar(): void {
    console.log(`  ${this.modelo} con placa ${this.placa} está arrancando.`);
  }

  detener(): void {
    console.log(`  ${this.modelo} con placa ${this.placa} se detuvo.`);
  }
}

class Sedan extends Vehiculo {
  private tieneAireAcondicionado: boolean;

  constructor(
    placa: string,
    modelo: string,
    anio: number,
    tieneAireAcondicionado: boolean
  ) {
    super(placa, modelo, anio);
    this.tieneAireAcondicionado = tieneAireAcondicionado;
  }

  activarAire(): void {
    if (this.tieneAireAcondicionado) {
      console.log(`  ${this.modelo}: aire acondicionado activado.`);
    } else {
      console.log(`  ${this.modelo}: este sedán no tiene aire acondicionado.`);
    }
  }

  describir(): string {
    const aire = this.tieneAireAcondicionado ? "con A/C" : "sin A/C";
    return `${super.describir()} — Sedán ${aire}`;
  }
}

class Suv extends Vehiculo {
  private es4x4: boolean;

  constructor(
    placa: string,
    modelo: string,
    anio: number,
    es4x4: boolean
  ) {
    super(placa, modelo, anio);
    this.es4x4 = es4x4;
  }

  activarModoOffRoad(): void {
    if (this.es4x4) {
      console.log(`  ${this.modelo}: modo 4x4 activado para caminos difíciles.`);
    } else {
      console.log(`  ${this.modelo}: no dispone de tracción 4x4.`);
    }
  }

  describir(): string {
    const tipo = this.es4x4 ? "4x4" : "2WD";
    return `${super.describir()} — SUV ${tipo}`;
  }
}

class Pickup extends Vehiculo {
  private capacidadCargaKg: number;

  constructor(
    placa: string,
    modelo: string,
    anio: number,
    capacidadCargaKg: number
  ) {
    super(placa, modelo, anio);
    this.capacidadCargaKg = capacidadCargaKg;
  }

  cargar(pesoKg: number): void {
    if (pesoKg > this.capacidadCargaKg) {
      console.log(
        `  ${this.modelo}: carga excedida (${pesoKg}kg / máximo ${this.capacidadCargaKg}kg).`
      );
    } else {
      console.log(
        `  ${this.modelo}: carga de ${pesoKg}kg aceptada (máx. ${this.capacidadCargaKg}kg).`
      );
    }
  }

  describir(): string {
    return `${super.describir()} — Pickup (capacidad: ${this.capacidadCargaKg}kg)`;
  }
}

console.log("=== HERENCIA - VEHÍCULOS WHEELS TO GO ===\n");

const sedanCiudad = new Sedan("PCX-1234", "Sedán Compacto", 2022, true);
const suvFamiliar = new Suv("PBX-5678", "SUV Familiar", 2023, true);
const pickupTrabajo = new Pickup("TBY-9012", "Pickup 4x4", 2021, 1000);

sedanCiudad.arrancar();
suvFamiliar.arrancar();
pickupTrabajo.detener();

sedanCiudad.activarAire();
suvFamiliar.activarModoOffRoad();
pickupTrabajo.cargar(800);
pickupTrabajo.cargar(1500);

console.log(`\nSedán:  ${sedanCiudad.describir()}`);
console.log(`SUV:    ${suvFamiliar.describir()}`);
console.log(`Pickup: ${pickupTrabajo.describir()}`);

console.log(`\n¿sedanCiudad es Sedan?  ${sedanCiudad instanceof Sedan}`);
console.log(`¿sedanCiudad es Vehiculo? ${sedanCiudad instanceof Vehiculo}`);
console.log(`¿sedanCiudad es Suv?    ${sedanCiudad instanceof Suv}`);
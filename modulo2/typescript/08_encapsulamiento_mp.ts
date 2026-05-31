class EmpleadoWheels {
  private _nombre: string;
  private _salario: number;
  private _email: string;

  constructor(nombre: string, salario: number, email: string) {
    this._nombre = nombre;
    this._salario = salario;
    this._email = email;
  }

  get nombre(): string {
    return this._nombre;
  }
  get salario(): number {
    return this._salario;
  }
  get email(): string {
    return this._email;
  }

  set nombre(valor: string) {
    if (valor.trim().length < 2) {
      throw new Error("El nombre debe tener al menos 2 caracteres.");
    }
    this._nombre = valor.trim();
  }

  set salario(valor: number) {
    if (valor < 0) {
      throw new Error("El salario no puede ser negativo.");
    }
    this._salario = valor;
  }

  set email(valor: string) {
    if (!valor.includes("@")) {
      throw new Error("El email no es válido.");
    }
    this._email = valor.toLowerCase();
  }

  toString(): string {
    return `${this._nombre} — $${this._salario} — ${this._email}`;
  }
}

const empWheels = new EmpleadoWheels("Ana García", 900, "Ana@WheelsToGo.com");
console.log(empWheels.toString());

empWheels.salario = 1000;
empWheels.email = "ana@wheelstogo.com";
console.log(`Nuevo salario: $${empWheels.salario}`);
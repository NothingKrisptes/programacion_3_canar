// encapsulamiento
class Empleado {
  // Atributos privados — nadie los cambia directamente
  private _nombre:  string;
  private _salario: number;
  private _email:   string;

  constructor(nombre: string, salario: number, email: string) {
    this._nombre  = nombre;
    this._salario = salario;
    this._email   = email;
  }

  // Getters — permiten LEER el valor
  get nombre():  string { return this._nombre; }
  get salario(): number { return this._salario; }
  get email():   string { return this._email; }

  // Setters — permiten ESCRIBIR con validación
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
    return `${this._nombre} — ${this._salario}€ — ${this._email}`;
  }
}

console.log("=== ENCAPSULAMIENTO ===\n");
const emp = new Empleado("Ana García", 2500, "Ana@Empresa.COM");
console.log(emp.toString());

// Usar los setters con validación
emp.salario = 3000;
emp.email   = "ana@empresa.com";
console.log(`Nuevo salario: ${emp.salario}€`);

// El setter valida los datos
try {
  emp.salario = -500;
} catch (e) {
  console.log(`Error al cambiar salario: ${(e as Error).message}`);
}

try {
  emp.email = "emailsinrobadillo";
} catch (e) {
  console.log(`Error al cambiar email: ${(e as Error).message}`);
}
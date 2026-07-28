// primera-clase
class Persona {
  // Atributos
  nombre: string;
  edad:   number;

  // Constructor — se ejecuta al crear la persona con new
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad   = edad;
  }

  // Métodos
  saludar(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }

  cumplirAños(): void {
    this.edad++;
    console.log(`¡Feliz cumpleaños, ${this.nombre}! Ahora tienes ${this.edad}.`);
  }
}

// Crear instancias (objetos) con new
const ana  = new Persona("Ana García", 28);
const luis = new Persona("Luis Pérez", 31);

console.log(ana.saludar());
console.log(luis.saludar());
ana.cumplirAños();
console.log(ana.saludar());
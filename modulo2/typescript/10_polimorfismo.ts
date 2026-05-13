// polimorfismo
// Clase abstracta — no se puede instanciar directamente
// Solo sirve como base para otras clases
abstract class Forma {
  constructor(protected color: string) {}

  // Método abstracto — CADA subclase DEBE implementarlo a su manera
  abstract area(): number;
  abstract perimetro(): number;

  // Método concreto — igual para todas las formas
  describir(): string {
    return `${this.constructor.name} ${this.color}: ` +
           `área=${this.area().toFixed(2)}, perímetro=${this.perimetro().toFixed(2)}`;
  }
}

class Circulo extends Forma {
  constructor(color: string, private radio: number) {
    super(color);
  }

  // Cada clase implementa area() A SU MANERA
  area(): number      { return Math.PI * this.radio ** 2; }
  perimetro(): number { return 2 * Math.PI * this.radio; }
}

class Rectangulo extends Forma {
  constructor(color: string, private ancho: number, private alto: number) {
    super(color);
  }

  area(): number      { return this.ancho * this.alto; }
  perimetro(): number { return 2 * (this.ancho + this.alto); }
}

class Triangulo extends Forma {
  constructor(color: string, private a: number, private b: number, private c: number) {
    super(color);
  }

  perimetro(): number { return this.a + this.b + this.c; }
  area(): number {
    const s = this.perimetro() / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

console.log("=== POLIMORFISMO ===\n");

// Un array con distintos tipos — todos son Forma
const formas: Forma[] = [
  new Circulo("rojo",    5),
  new Rectangulo("azul", 4, 6),
  new Triangulo("verde", 3, 4, 5),
  new Circulo("naranja", 3),
];

// El mismo bucle llama a describir() en cada forma
// Sin saber si es Círculo, Rectángulo o Triángulo
for (const forma of formas) {
  console.log(`  ${forma.describir()}`);
}

// Calcular el área total — funciona con cualquier tipo de Forma
const areaTotal = formas.reduce((acc, f) => acc + f.area(), 0);
console.log(`\n  Área total: ${areaTotal.toFixed(2)}`);

// new Forma("rojo");  // ❌ Error — Forma es abstracta, no se puede instanciar
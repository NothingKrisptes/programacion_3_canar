// type-alias
// Definir el alias
type Usuario = {
  nombre: string;
  edad:   number;
  email:  string;
};

// Ahora usas el nombre en todas partes
function mostrarUsuario(u: Usuario): void {
  console.log(`${u.nombre} (${u.edad} años) — ${u.email}`);
}

function validarUsuario(u: Usuario): boolean {
  return u.nombre.length > 0 && u.email.includes("@");
}

// Crear un objeto del tipo Usuario
const ana: Usuario = {
  nombre: "Ana García",
  edad:   28,
  email:  "ana@email.com"
};

mostrarUsuario(ana);
console.log(`¿Válido? ${validarUsuario(ana)}`);

// TypeScript verifica que el objeto tenga todos los campos
// const incompleto: Usuario = { nombre: "Luis" };  // ❌ falta edad y email


// tipos-alias
// Alias de tipos primitivos — claridad semántica
type Nombre    = string;
type Precio    = number;
type Activo    = boolean;

// Alias para union types — uno de varios valores posibles
type Rol       = "admin" | "editor" | "lector";
type Estado    = "activo" | "inactivo" | "suspendido";
type Resultado = number | string | null;

// Alias para arrays
type ListaNombres = string[];
type ListaPrecios = number[];

// Usar los alias
const miNombre: Nombre  = "Ana";
const miRol:    Rol     = "admin";
// const malRol: Rol    = "superuser"; // ❌ no es uno de los valores permitidos

const estado: Estado = "activo";
console.log(`${miNombre} — rol: ${miRol} — estado: ${estado}`);

// Con union types TypeScript te avisa si usas un valor no permitido
function puedeEditar(rol: Rol): boolean {
  return rol === "admin" || rol === "editor";
}

console.log(puedeEditar("admin"));   // true
console.log(puedeEditar("lector"));  // false
// console.log(puedeEditar("dios")); // ❌ "dios" no es Rol


// interface-basica
interface Producto {
  id:        number;
  nombre:    string;
  precio:    number;
  stock:     number;
  categoria: string;
}

// Uso exactamente igual que un type
function mostrarProducto(p: Producto): void {
  console.log(`[${p.id}] ${p.nombre} — ${p.precio}€ (stock: ${p.stock})`);
}

function hayStock(p: Producto): boolean {
  return p.stock > 0;
}

const laptop: Producto = {
  id:        1,
  nombre:    "Laptop Pro",
  precio:    999,
  stock:     5,
  categoria: "Electrónica"
};

mostrarProducto(laptop);
console.log(`¿Hay stock? ${hayStock(laptop)}`);


// propiedades-especiales
interface Empleado {
  readonly id:    number;     // readonly — no se puede cambiar después de crearlo
  nombre:         string;
  email:          string;
  departamento:   string;
  telefono?:      string;     // ? — es opcional, puede no estar
  salario?:       number;
}

const ana2: Empleado = {
  id:          1,
  nombre:      "Ana García",
  email:       "ana@empresa.com",
  departamento:"Tecnología"
  // telefono y salario son opcionales — no hace falta incluirlos
};

const luis: Empleado = {
  id:          2,
  nombre:      "Luis Pérez",
  email:       "luis@empresa.com",
  departamento:"Ventas",
  telefono:    "600111222",
  salario:     2500
};

// ana.id = 99;  // ❌ Error — id es readonly

console.log(`${ana2.nombre} — tel: ${ana.telefono ?? "no registrado"}`);
console.log(`${luis.nombre} — tel: ${luis.telefono ?? "no registrado"}`);

function mostrarSalario(e: Empleado): void {
  if (e.salario !== undefined) {
    console.log(`${e.nombre}: ${e.salario}€/mes`);
  } else {
    console.log(`${e.nombre}: salario no registrado`);
  }
}

mostrarSalario(ana2);
mostrarSalario(luis);


// extender-interfaces
interface Animal {
  nombre: string;
  edad:   number;
}

// Perro tiene todo lo de Animal + sus propias propiedades
interface Perro extends Animal {
  raza:     string;
  vacunado: boolean;
}

// GatoSiames tiene todo lo de Animal + sus propias
interface Gato extends Animal {
  color:      string;
  esInterior: boolean;
}

const rex: Perro = {
  nombre:   "Rex",
  edad:     3,
  raza:     "Labrador",
  vacunado: true
};

const misi: Gato = {
  nombre:     "Misi",
  edad:       5,
  color:      "gris",
  esInterior: true
};

function presentarAnimal(a: Animal): void {
  console.log(`${a.nombre} (${a.edad} años)`);
}

// Funciona con Perro y Gato porque ambos son Animal
presentarAnimal(rex);
presentarAnimal(misi);

function mostrarPerro(p: Perro): void {
  console.log(`${p.nombre} — ${p.raza} — vacunado: ${p.vacunado}`);
}

mostrarPerro(rex);
// mostrarPerro(misi);  // ❌ Error — Gato no tiene raza ni vacunado
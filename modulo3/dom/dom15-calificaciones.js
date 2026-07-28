

// dom13-calificaciones.js
// Arreglo de objetos: alumnos con nombre y nota (0-10)
// Cálculos: promedio, nota máxima, nota mínima, conteo de aprobados/reprobados

const alumnos = [];   // arreglo principal
const NOTA_MINIMA_APROBACION = 6;

// ── Agregar alumno al arreglo ──────────────────────────────────────────────
function agregarAlumno() {
   const nombre = document.getElementById('inNombre').value.trim();
   const nota   = parseFloat(document.getElementById('inNota').value);


   const divError = document.getElementById('error');
   divError.style.display = 'none';


   if (nombre === '') {
       divError.textContent   = 'Por favor ingresa el nombre del alumno.';
       divError.style.display = 'block';
       return;
   }


   if (isNaN(nota) || nota < 0 || nota > 10) {
       divError.textContent   = 'La nota debe ser un número entre 0 y 10.';
       divError.style.display = 'block';
       return;
   }


   alumnos.push({ nombre, nota });


   // Limpiar campos y re-renderizar tabla
   document.getElementById('inNombre').value = '';
   document.getElementById('inNota').value   = '';
   document.getElementById('inNombre').focus();


   renderizarTabla();


   // Ocultar estadísticas previas al agregar un nuevo registro
   document.getElementById('estadisticas').style.display = 'none';
}

// ── Renderizar la tabla de alumnos ─────────────────────────────────────────
function renderizarTabla() {
   const tbody = document.getElementById('tablaBody');
   tbody.innerHTML = '';

   alumnos.forEach((alumno, index) => {
       const aprobado = alumno.nota >= NOTA_MINIMA_APROBACION;
       const fila = document.createElement('tr');
       fila.innerHTML = `
           <td>${index + 1}</td>
           <td>${alumno.nombre}</td>
           <td>${alumno.nota.toFixed(2)}</td>
           <td class="${aprobado ? 'estado-aprobado' : 'estado-reprobado'}">
               ${aprobado ? 'Aprobado' : 'Reprobado'}
           </td>
           <td>
               <button class="btn-eliminar" onclick="eliminarAlumno(${index})" title="Eliminar">✕</button>
           </td>
       `;
       tbody.appendChild(fila);
   });

   document.getElementById('listaAlumnos').style.display =
       alumnos.length > 0 ? 'block' : 'none';
}

// ── Eliminar alumno del arreglo ────────────────────────────────────────────
function eliminarAlumno(index) {
   alumnos.splice(index, 1);
   renderizarTabla();
   document.getElementById('estadisticas').style.display = 'none';
}

// ── Calcular estadísticas del arreglo ──────────────────────────────────────
function calcularEstadisticas() {
   const divError = document.getElementById('error');
   divError.style.display = 'none';

   if (alumnos.length === 0) {
       divError.textContent   = 'Agrega al menos un alumno antes de calcular.';
       divError.style.display = 'block';
       return;
   }

   const notas     = alumnos.map(a => a.nota);
   const promedio  = notas.reduce((acc, n) => acc + n, 0) / notas.length;
   const mayor     = Math.max(...notas);
   const menor     = Math.min(...notas);
   const aprobados = alumnos.filter(a => a.nota >= NOTA_MINIMA_APROBACION).length;

   document.getElementById('sPromedio').textContent  = promedio.toFixed(2);
   document.getElementById('sMayor').textContent     = mayor.toFixed(2);
   document.getElementById('sMenor').textContent     = menor.toFixed(2);
   document.getElementById('sAprobados').textContent = `${aprobados} / ${alumnos.length}`;
   document.getElementById('estadisticas').style.display = 'block';
}

// ── Limpiar todo ───────────────────────────────────────────────────────────
function limpiar() {
   alumnos.length = 0;
   renderizarTabla();
   document.getElementById('estadisticas').style.display = 'none';
   document.getElementById('error').style.display        = 'none';
   document.getElementById('inNombre').value = '';
   document.getElementById('inNota').value   = '';
   document.getElementById('inNombre').focus();
}

// Enter en los campos de ingreso agrega el alumno
window.onload = () => {
   ['inNombre', 'inNota'].forEach(id => {
       document.getElementById(id).addEventListener('keydown', e => {
           if (e.key === 'Enter') agregarAlumno();
       });
   });
};
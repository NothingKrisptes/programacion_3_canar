// Tercer ejemplo: Botón que crece con eventos
const boton = document.getElementById('botonAnimado');

// Aumentar tamaño
function agrandar() {
   boton.style.transform = 'scale(1.5)';
}

// Volver a tamaño normal
function normalizar() {
   boton.style.transform = 'scale(1)';
}

// Mouse events
boton.addEventListener('mouseover', agrandar);
boton.addEventListener('mouseout', normalizar);

// Touch events
boton.addEventListener('touchstart', (e) => {
   e.preventDefault();
   agrandar();
});
boton.addEventListener('touchend', normalizar);

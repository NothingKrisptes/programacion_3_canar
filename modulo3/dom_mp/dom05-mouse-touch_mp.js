const caja = document.getElementById('caja');

caja.addEventListener('mouseover', () => {
    caja.style.backgroundColor = 'yellow';
});
caja.addEventListener('mouseout', () => {
    caja.style.backgroundColor = 'lightgray';
});
caja.addEventListener('click', () => {
    alert('¡Has seleccionado este vehículo de Wheels To Go!');
});

const area = document.getElementById('area');

area.addEventListener('touchstart', () => {
    area.style.backgroundColor = 'green';
});
area.addEventListener('touchend', () => {
    area.style.backgroundColor = '#0070f3';
});

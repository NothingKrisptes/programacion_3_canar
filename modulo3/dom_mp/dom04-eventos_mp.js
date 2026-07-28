function mostrarAlerta(){
    alert('¡Wheels To Go tiene descuentos esta semana!');
}

function agregarVehiculo(){
    const lista = document.getElementById('lista-vehiculos1');
    const nuevoVehiculo = document.createElement('li');
    nuevoVehiculo.textContent = 'SUV Familiar 2024';
    lista.appendChild(nuevoVehiculo);
}

document.getElementById('btn3').addEventListener("click", function(){
    const lista2 = document.getElementById('lista-vehiculos2');
    const nuevoVehiculo = document.createElement('li');
    nuevoVehiculo.textContent = 'Pickup 4x4 desde Evento Listener';
    lista2.appendChild(nuevoVehiculo);
})

function cambiarTexto(){
    const parrafo = document.getElementById('parrafo');
    parrafo.textContent = "Vehículo seleccionado: Sedán Compacto";
}

function cambiarContenido(){
    const contenido = document.getElementById('contenido');
    contenido.textContent = "Oficina de Retiro: Guayaquil - Aeropuerto JJO";
}

document.getElementById('campo').addEventListener ('input', () => {
    console.log('Nombre del conductor: ',
        document.getElementById('campo').value);
});

document.getElementById('campo_actualizar_parrafo').addEventListener ('input', () => {
    const valorCampo = document
        .getElementById('campo_actualizar_parrafo').value;
    document.getElementById('parrafo_placa')
        .textContent = 
            `Placa: ${valorCampo}`;
});

document.addEventListener("DOMContentLoaded", 
    function () {
    const titulo = document.getElementById("titulo");
    console.log("Titulo: ", titulo);

    const notas = document.getElementsByClassName("nota");
    console.log("Notas: ", notas);

    const vehiculos = document.getElementsByTagName("li");
    console.log("Vehículos: ", vehiculos);

    const primerVehiculo = document.querySelector(".vehiculo");
    console.log("Primer vehículo: ", primerVehiculo);

    const todosLosVehiculos = document.querySelectorAll(".vehiculo");
    console.log("Todos los vehículos: ", todosLosVehiculos);

    Array.from(todosLosVehiculos).forEach(element =>{
        console.log("Vehículo: ", element);
    });        
});

document.addEventListener("DOMContentLoaded", 
    function () {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Estado de la Reserva: Confirmada - Wheels To Go"

    console.log("Mensaje: ", mensaje);

    const link = document.getElementById("link");
    link.textContent = "www.wheelstogo.com";
    link.href = "https://www.wheelstogo.com";
    link.classList.add("boton");
    console.log("Link: ", link);    
});

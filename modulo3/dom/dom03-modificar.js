document.addEventListener("DOMContentLoaded", 
    function () {
    const titulo = document.getElementById("mensaje");
    mensaje.textContent = "Texto Modificado desde el 3er. Semestre"

    console.log("Mensaje: ", mensaje);

    const link = document.getElementById("link");
    link.textContent = "www.google.com";
    link.href = "https://www.google.com";
    link.classList.add("boton");
    console.log("Link: ", link);    
});
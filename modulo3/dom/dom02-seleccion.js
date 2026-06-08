document.addEventListener("DOMContentLoaded", 
    function () {
    const titulo = document.getElementById("titulo");
    console.log("Titulo: ", titulo);

    const notas = document.getElementsByClassName("nota");
    console.log("Notas: ", notas);

    const items = document.getElementsByTagName("li");
    console.log("Items: ", items);

    const primerItem = document.querySelector(".item");
    console.log("Primer item: ", primerItem);

    const todosLosItems = document.querySelectorAll(".item");
    console.log("Todos los items: ", todosLosItems);

    Array.from(todosLosItems).forEach(element =>{
        console.log("Item: ", element);
    });        
});
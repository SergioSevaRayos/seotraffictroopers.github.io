// script.js


// Script para el menú móvil (si lo tienes en este archivo)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".grid-item, .termino,.grid-item-blog");

    const checkVisibility = () => {
        let delay = 0; // Inicializamos el retardo en 0

        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            // Verifica si el elemento está en el viewport
            if (elementTop < window.innerHeight && elementBottom > 0) {
                // Aplicamos un retardo incremental a cada elemento
                setTimeout(() => {
                    element.classList.add("visible");
                }, delay);
                delay += 15; // Incrementamos el retardo para el siguiente elemento (ajusta este valor para controlar la velocidad)
            }
        });
    };

    // Ejecuta la función al cargar la página y al hacer scroll
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Verifica la visibilidad al cargar la página
});

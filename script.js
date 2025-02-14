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
    const gridItems = document.querySelectorAll(".grid-item");

    const checkVisibility = () => {
        gridItems.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;
            const itemBottom = item.getBoundingClientRect().bottom;

            // Verifica si el elemento está en el viewport
            if (itemTop < window.innerHeight && itemBottom > 0) {
                item.classList.add("visible");
            }
        });
    };

    // Ejecuta la función al cargar la página y al hacer scroll
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Verifica la visibilidad al cargar la página
});
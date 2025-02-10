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


var swiper = new Swiper('.swiper-container', {
    speed: 3000, // Duración de la transición en milisegundos (800ms)
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 1000, // Tiempo entre transiciones (1 segundo)
        disableOnInteraction: true, // No se detiene al interactuar
    },
    rewind: true, // Desactiva el rewind para manejar manualmente el rebote

    on: {
        // Detecta cuando el carrusel llega al final
        reachEnd: function () {
            swiper.params.autoplay.reverseDirection = true; // Invierte la dirección
            swiper.autoplay.start(); // Reinicia el autoplay
        },
        // Detecta cuando el carrusel llega al principio
        reachBeginning: function () {
            swiper.params.autoplay.reverseDirection = false; // Restablece la dirección
            swiper.autoplay.start(); // Reinicia el autoplay
        },
    },
});
document.querySelectorAll('.grid-item').forEach(item => {
    const bgImage = item.getAttribute('data-background');
    item.style.setProperty('--bg-image', `url(${bgImage})`);
});
document.addEventListener('scroll', function () {
    const descripcion = document.querySelector('.descripcion-inicio');
    const rect = descripcion.getBoundingClientRect();

    // Verifica si el elemento está en la ventana visible
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        descripcion.classList.add('visible');
    }
});
document.getElementById("currentYear").innerHTML = new Date().getFullYear();
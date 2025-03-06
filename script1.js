document.addEventListener('DOMContentLoaded', function () {
    const swiperContainer = document.querySelector('.swiper-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cargar Swiper.js dinámicamente
                const script = document.createElement('script');
                script.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
                script.onload = () => {
                    // Inicializar Swiper
                    var swiper = new Swiper('.swiper-container', {
                        speed: 3000,
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
                            delay: 1000,
                            disableOnInteraction: true,
                        },
                        rewind: true,

                        on: {
                            reachEnd: function () {
                                swiper.params.autoplay.reverseDirection = true;
                                swiper.autoplay.start();
                            },
                            reachBeginning: function () {
                                swiper.params.autoplay.reverseDirection = false;
                                swiper.autoplay.start();
                            },
                        },
                    });

                    document.querySelectorAll('.grid-item').forEach(item => {
                        const bgImage = item.getAttribute('data-background');
                        item.style.setProperty('--bg-image', `url(${bgImage})`);
                    });
                };
                document.body.appendChild(script);

                observer.unobserve(swiperContainer);
            }
        });
    });

    observer.observe(swiperContainer);

    document.addEventListener('scroll', function () {
        const descripcion = document.querySelector('.descripcion-inicio');
        const rect = descripcion.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            descripcion.classList.add('visible');
        }
    });
});
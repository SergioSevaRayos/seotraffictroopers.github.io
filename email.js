let emailjsInitialized = false;
document.addEventListener('DOMContentLoaded', function() {

    // Actualizar el año del footer
    

    // Código para EmailJS (todo dentro del DOMContentLoaded)
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            if (!emailjsInitialized) {
                console.error("EmailJS aún no se ha inicializado. Inténtalo de nuevo más tarde.");
                alert("Hubo un error al enviar tu mensaje. Inténtalo de nuevo más tarde.");
                return;
            }

            emailjs.sendForm('service_cv2dwjk', 'template_90coegc', this)
                .then(function() {
                    console.log('¡Mensaje enviado correctamente!');
                    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
                    form.reset();
                }, function(error) {
                    console.error('Error al enviar el mensaje:', error);
                    alert('Hubo un error al enviar tu mensaje. Inténtalo de nuevo más tarde.');
                });
        });
    } else {
        console.error("No se encontró el formulario con ID 'contact-form'.");
    }

    // Inicialización de EmailJS (DENTRO del DOMContentLoaded)
    emailjs.init("-I_WUsxCAsER-kg5C"); // Reemplaza con tu Public Key de EmailJS
    emailjsInitialized = true; // Establece la bandera a true
});
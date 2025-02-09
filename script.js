// Script para el menú móvil
const menuToggle = document.querySelector('.menu-toggle'); // Selector correcto
const navLinks = document.querySelector('.nav-links');

// Script para el formulario de contacto
document.getElementById('formulario-contacto').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  // Validación básica (puedes agregar más validaciones)
  if (!nombre || !email || !mensaje) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const params = {
    from_name: nombre,
    from_email: email,
    message: mensaje,
  };

  // Reemplaza con tus credenciales reales
  const serviceId = "TU_SERVICE_ID";  // ***REEMPLAZA***
  const templateId = "TU_TEMPLATE_ID"; // ***REEMPLAZA***

  emailjs.send(serviceId, templateId, params)
    .then(function (response) {
      console.log("Correo enviado con éxito!", response);
      document.getElementById('mensaje-enviado').classList.remove('oculto');
      document.getElementById('formulario-contacto').reset(); // Corregido: cierre correcto de la función
    })
    .catch(function (error) {
      console.error("Error al enviar el correo:", error);
      alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
    });
});
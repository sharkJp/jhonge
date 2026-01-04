(function () {
  emailjs.init("oMjs61nv4FaTHf7YY"); // tu Public Key
})();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const button = form.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validación mínima
  const nombre = form.nombre.value.trim();
  if (nombre.length < 3) {
    status.textContent = "El nombre debe tener al menos 3 caracteres.";
    status.style.color = "red";
    return;
  }

  // Estado enviando
  button.disabled = true;
  button.textContent = "Enviando...";
  status.textContent = "";

  emailjs.sendForm(
    "service_fi97lra",
    "template_s3t5s6j",
    this
  ).then(
    () => {
      status.textContent =
        "Gracias por contactarme. Te responderé en menos de 24 horas.";
      status.style.color = "green";
      form.reset();
    },
    (error) => {
      console.error("EmailJS Error:", error);
      status.textContent =
        "Ocurrió un error. Intenta nuevamente o escríbeme por correo.";
      status.style.color = "red";
    }
  ).finally(() => {
    button.disabled = false;
    button.textContent = "Enviar";
  });
});


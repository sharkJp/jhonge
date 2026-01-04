(function () {
  emailjs.init("TU_PUBLIC_KEY"); // ← reemplaza esto
})();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  status.textContent = "Enviando mensaje...";
  status.style.color = "#555";

  emailjs
    .sendForm(
      "service_fj97lra",
  "TU_TEMPLATE_ID",
  this
      
    )
    .then(
      () => {
        status.textContent = "Mensaje enviado correctamente ✅";
        status.style.color = "green";
        form.reset();
      },
      (error) => {
        status.textContent = "Error al enviar el mensaje ❌";
        status.style.color = "red";
        console.error(error);
      }
    );
});

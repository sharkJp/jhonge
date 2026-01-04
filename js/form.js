(function () {
  emailjs.init("TU_PUBLIC_KEY_AQUI"); // ⚠️ MUY IMPORTANTE
})();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "TU_SERVICE_ID",   // ejemplo: service_fi97lra
      "TU_TEMPLATE_ID",  // ejemplo: template_xxxxx
      this
    )
    .then(
      () => {
        status.textContent = "Mensaje enviado correctamente ✅";
        status.style.color = "green";
        form.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        status.textContent = "Error al enviar el mensaje ❌";
        status.style.color = "red";
      }
    );
});

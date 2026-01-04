(function () {
  emailjs.init("oMjs61nv4FaTHf7YY");
})();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
     "service_fi97lra",
  "ttemplate_s3t5s6j",
    this
  ).then(
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

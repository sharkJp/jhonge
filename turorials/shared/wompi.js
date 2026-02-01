function initWompi() {
  const wompiBtn = document.getElementById("wompi-btn");
  if (!wompiBtn || !window.WidgetCheckout) return;

  wompiBtn.addEventListener("click", () => {

    const selected =
      document.querySelector('input[name="monto"]:checked');

    if (!selected) {
      alert("Selecciona un monto");
      return;
    }

    const monto = parseInt(selected.value, 10);
    const referencia = "donacion-jhonge-" + Date.now();

    const checkout = new window.WidgetCheckout({
      currency: "COP",
      amountInCents: monto,
      reference: referencia,
      publicKey: "pub_prod_stv3qR8zVVggugxlYsiG1akjaaAYwVLx",

      // 👇 ahora pasamos datos a gracias.html
      redirectUrl:
        `https://www.jhonge.com.co/gracias.html?amount=${monto/100}&ref=${referencia}`
    });

    checkout.open();
  });
}

// Esperar a que footer cargue
const wompiInterval = setInterval(() => {
  if (document.getElementById("wompi-btn") && window.WidgetCheckout) {
    clearInterval(wompiInterval);
    initWompi();
  }
}, 300);

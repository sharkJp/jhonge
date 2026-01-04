const btn = document.getElementById("themeToggle");
const body = document.body;

function updateIcon() {
  btn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
}

// Click
btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
  updateIcon();
});

// Cargar tema guardado
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

updateIcon();

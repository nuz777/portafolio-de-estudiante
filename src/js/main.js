// 🚀 Esperar a que cargue todo
window.addEventListener("DOMContentLoaded", () => {

  // =========================
  // ✍️ TYPING EFFECT
  // =========================
  const frases = [
    "Aprendiz de desarrollo de software",
    "Trabajo con Python",
    "Construyo soluciones funcionales",
  ];

  let i = 0;
  let j = 0;
  let escribiendo = true;

  const elemento = document.getElementById("typing");

  function typing() {
    if (!elemento) return; // evita error

    if (escribiendo) {
      elemento.textContent = frases[i].substring(0, j + 1);
      j++;

      if (j === frases[i].length) {
        escribiendo = false;
        setTimeout(typing, 1200);
        return;
      }
    } else {
      elemento.textContent = frases[i].substring(0, j - 1);
      j--;

      if (j === 0) {
        escribiendo = true;
        i = (i + 1) % frases.length;
      }
    }

    setTimeout(typing, escribiendo ? 60 : 30);
  }

  typing();

  // =========================
  // =========================
  const form = document.getElementById("contacto-form");
  const mensaje = document.getElementById("mensaje-exito");

  mensaje.style.display = "none";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    mensaje.style.display = "block";

    setTimeout(() => {
      mensaje.style.display = "none";
    }, 3000);

    form.reset();
  });

  // =========================
  //  BIENVENIDA
  // =========================
  alert("Hola, este es mi portafolio.");

  // =========================
  // BOTÓN CAMBIAR TEXTO
  // =========================
  const btnTexto = document.createElement("button");
btnTexto.textContent = "Cambiar descripcion";

const info = document.querySelector(".info p");

// Guardamos el texto original
const textoOriginal = info.textContent;

// Nuevo texto
const textoNuevo =
  "I am passionate about building interactive and functional web applications.";

info.insertAdjacentElement("afterend", btnTexto);

// Estado para saber cuál texto está activo
let cambiado = false;

btnTexto.addEventListener("click", () => {
  if (cambiado) {
    info.textContent = textoOriginal;
  } else {
    info.textContent = textoNuevo;
  }
  cambiado = !cambiado; // alterna entre true y false
});

  // =========================
  //  TOGGLE PROYECTOS
  // =========================
  const btnToggle = document.createElement("button");
  btnToggle.textContent = "Ver / ocultar proyectos";

  const proyectos = document.getElementById("proyectos");

  proyectos.insertAdjacentElement("beforebegin", btnToggle);

  btnToggle.addEventListener("click", () => {
    proyectos.style.display =
      proyectos.style.display === "none" ? "block" : "none";
  });

});
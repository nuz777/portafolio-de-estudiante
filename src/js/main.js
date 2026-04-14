const frases = [
        "Soy Aprendiz de desarrollo de software",
        "Trabajo con Python y Web",
        "Construyo soluciones funcionales",
      ];

      let i = 0;
      let j = 0;
      let escribiendo = true;

      function typing() {
        const elemento = document.getElementById("typing");

        if (escribiendo) {
          elemento.textContent = frases[i].substring(0, j + 1);
          j++;

          if (j === frases[i].length) {
            escribiendo = false;
            setTimeout(typing, 1200); // pausa cuando termina
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

      /* form */
      document
        .getElementById("contacto-form")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          document.getElementById("mensaje-exito").style.display = "block";
          this.reset();
        });



const form = document.getElementById("contacto-form");
const mensaje = document.getElementById("mensaje-exito");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Mostrar mensaje
  mensaje.style.display = "block";

  // Ocultar después de 3 segundos
  setTimeout(() => {
    mensaje.style.display = "none";
  }, 3000);

  // Limpiar formulario (opcional)
  form.reset();
});


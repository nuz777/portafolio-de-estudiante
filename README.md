#  Portafolio Web - Ivan Mejía

Este proyecto es un **portafolio personal web** desarrollado con HTML, CSS y JavaScript, diseñado para mostrar información profesional, proyectos, habilidades y una sección interactiva de contacto.

---

##  Descripción

El portafolio presenta una interfaz moderna y responsiva que incluye:

- Información personal
- Proyectos desarrollados
- Habilidades en aprendizaje
- Formulario de contacto interactivo
- Página adicional de mascotas con animaciones

---

##  Tecnologías utilizadas

- **HTML5** → Estructura del sitio
- **CSS3** → Diseño, animaciones y responsive
- **JavaScript (Vanilla)** → Interactividad y lógica
- **Font Awesome** → Iconos
- **Google Fonts (Inter)** → Tipografía

---

## Estructura del proyecto

 portafolio

┣ 📂 public/img

┣ 📂 src

┃ ┣ 📂 css

┃ ┃ ┗ index.css

┃ ┃ ┗ + .css 

┃ ┗ 📂 js

┃ ┃ ┣ main.js

┃ ┃ ┗ mascotas.js

┣ index.html

┣ mascotas.html

┗ README.md



---

##  Páginas del proyecto

###  index.html

Página principal del portafolio:

- Header fijo con navegación
- Sección **Sobre mí**
- Sección **Proyectos** (con enlaces a GitHub)
- Sección **Habilidades** (cards visuales)
- Formulario de contacto con validación básica

---

### 🐾 mascotas.html

Página secundaria con una galería de mascotas:

- Diseño en grid responsive
- Tarjetas con imágenes y descripciones
- Animaciones de aparición al hacer scroll

---

##  Estilos (CSS)

El archivo `style.css` incluye:

### 🔹 Diseño general
- Reset de estilos
- Fondo con imagen + degradado oscuro
- Tipografía moderna

### 🔹 Header
- Fijo con efecto blur
- Cambio de color al hacer scroll

### 🔹 Layout
- Uso de **Flexbox** y **Grid**
- Diseño responsive

### 🔹 Componentes
- Cards animadas
- Botones interactivos
- Formulario estilizado

### 🔹 Animaciones
- Hover en tarjetas
- Efecto `fade-in` en mascotas
- Transiciones suaves

---

##  Funcionalidades JavaScript

###  Efecto Typing (`main.js`)

Simula escritura dinámica en el texto del perfil:

```js

const frases = [
  "Soy Aprendiz de desarrollo de software",
  "Trabajo con Python y Web",
  "Construyo soluciones funcionales",
];

📩 Formulario de contacto
Previene el envío real (preventDefault)
Muestra mensaje de éxito
Limpia el formulario automáticamente
Oculta el mensaje después de 3 segundos

Animación al hacer scroll (mascotas.js)

Uso de Intersection Observer para mostrar elementos:

if (entry.isIntersecting) {
  entry.target.classList.add("visible");
}

📱 Responsive Design

El sitio está optimizado para:

📱 Móviles
💻 Tablets
🖥️ Escritorio

Se adapta usando media queries y layouts flexibles.

+  Cómo usar el proyecto
Clona el repositorio:
git clone https://github.com/nuz777/tu-repo.git
Abre el archivo:
index.html
¡Listo! Puedes visualizar el portafolio en tu navegador.

-Autor

Ivan Mejía
Desarrollador de software Jr

GitHub: https://github.com/nuz777

Proyecto desplegeado: https://nuz777.github.io/index.html

Este proyecto es de uso personal y educativo. Puedes adaptarlo libremente. ^_^


// Cargar el navbar y marcar link activo
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");
  if (!navbarContainer) return;

  const footerContainer = document.getElementById("footer");
  if (footerContainer) {
    fetch("assets/componentes/footer.html")
      .then(r => r.text())
      .then((html) => { footerContainer.innerHTML = html; })
      .catch(e => console.error("Error cargando footer:", e));
  }

  fetch("assets/componentes/navbar.html")
    .then((response) => response.text())
    .then((html) => {
      navbarContainer.innerHTML = html;

      // 1) obtener nombre de archivo actual (si viene vacío, asumir index.html)
      const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

      // 2) recorrer links del navbar y normalizar su href (quitar "./")
      const navLinks = navbarContainer.querySelectorAll("a.nav-link");
      navLinks.forEach((link) => {
        const rawHref = link.getAttribute("href") || "";
        // convertir href relativo a un URL absoluto y extraer solo el archivo
        const targetPage =
          new URL(rawHref, window.location.href).pathname.split("/").pop();

        // 3) comparar ya normalizados
        if (targetPage === currentPage) {
          link.classList.add("text-danger"); // color rojo
          link.removeAttribute("href");      // no cliqueable
          link.style.cursor = "default";     // cursor normal (opcional)
        }
      });
    })
    .catch((err) => console.error("Error cargando navbar:", err));
});

function crearCardCategoria(href, imgSrc, altText, titulo) {
  // Creamos el enlace principal
  const link = document.createElement("a");
  link.href = href;
  link.className = "d-block text-reset";

  // Card
  const card = document.createElement("div");
  card.className = "card card-max";

  // Imagen
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = altText;
  img.className = "card-img-top";

  // Cuerpo
  const cardBody = document.createElement("div");
  cardBody.className = "card-body text-center";

  const h3 = document.createElement("h3");
  h3.className = "card-title mb-0";
  h3.textContent = titulo;

  // Armar estructura
  cardBody.appendChild(h3);
  card.appendChild(img);
  card.appendChild(cardBody);
  link.appendChild(card);

  return link; // devolvemos el <a> completo
}

const contenedor = document.getElementById("card-index-1");
const cardRopa1 = crearCardCategoria(
  "./ropa.html",
  "./assets/img/ropa-index.png",
  "Ropa",
  "Ropa"
)
contenedor.appendChild(cardRopa1);

const contenedor2 = document.getElementById("card-index-2");
const cardZapas = crearCardCategoria(
  "./zapatillas.html",
  "./assets/img/zapatillas-index.png",
  "Zapatillas",
  "Zapatillas"
)
contenedor2.appendChild(cardZapas);

const contenedor3 = document.getElementById("card-index-3");
const cardAccesorios = crearCardCategoria(
  "./accesorios.html",
  "./assets/img/accesorios-index.png",
  "Accesorios",
  "Accesorios"
)
contenedor3.appendChild(cardAccesorios);
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

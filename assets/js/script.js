/* =========================
   DATOS DE PRODUCTOS
   ========================= */
const productos = [
  {
    id: "campus-black",
    href: "./product.html?id=campus-black",
    imgSrc: "./assets/img/campus-00s-r-1.png",
    altText: "Campus 00s Black",
    titulo: "Campus 00s Black",
    descripcion:
      "Zapatilla Campus 00s de gamuza color negro con detalles blancos.",
    precio: 109990,
    tallas: [
      { us: "5.5", uk: "4.5", eu: "38", cm: "23.5" },
      { us: "6", uk: "5", eu: "38.5", cm: "24" },
      { us: "6.5", uk: "5.5", eu: "39", cm: "24.5" },
      { us: "7", uk: "6", eu: "40", cm: "25" },
      { us: "7.5", uk: "6.5", eu: "40.5", cm: "25.5" },
    ],
  },
  {
    id: "campus-white",
    href: "./product.html?id=campus-white",
    imgSrc: "./assets/img/Campu-00s-r-2.png",
    altText: "Campus 00s White",
    titulo: "Campus 00s White",
    descripcion:
      "Zapatilla Campus 00s de gamuza color blanco con detalles negros.",
    precio: 89990,
    tallas: [
      { us: "5.5", uk: "4.5", eu: "38", cm: "23.5" },
      { us: "6", uk: "5", eu: "38.5", cm: "24" },
      { us: "6.5", uk: "5.5", eu: "39", cm: "24.5" },
      { us: "7", uk: "6", eu: "40", cm: "25" },
      { us: "7.5", uk: "6.5", eu: "40.5", cm: "25.5" },
    ],
  },
  {
    id: "campus-pink",
    href: "./product.html?id=campus-pink",
    imgSrc: "./assets/img/Campus-00s-r-3.png",
    altText: "Campus 00s Pink",
    titulo: "Campus 00s Pink",
    descripcion:
      "Zapatilla Campus 00s de gamuza color rosado con detalles blancos.",
    precio: 99990,
    tallas: [
      { us: "5.5", uk: "4.5", eu: "38", cm: "23.5" },
      { us: "6", uk: "5", eu: "38.5", cm: "24" },
      { us: "6.5", uk: "5.5", eu: "39", cm: "24.5" },
      { us: "7", uk: "6", eu: "40", cm: "25" },
      { us: "7.5", uk: "6.5", eu: "40.5", cm: "25.5" },
    ],
  },
  {
    id: "tn-negra",
    href: "./product.html?id=tn-negra",
    imgSrc: "./assets/img/tn-negra.jpg",
    altText: "Nike TN negra",
    titulo: "Nike TN Air Max Plus",
    descripcion: "Zapatilla de hombre original en color negro.",
    precio: 185990,
    tallas: [
      { us: "5.5", uk: "4.5", eu: "38", cm: "23.5" },
      { us: "6", uk: "5", eu: "38.5", cm: "24" },
      { us: "6.5", uk: "5.5", eu: "39", cm: "24.5" },
      { us: "7", uk: "6", eu: "40", cm: "25" },
      { us: "7.5", uk: "6.5", eu: "40.5", cm: "25.5" },
    ],
  },
  {
    id: "tn-blanca",
    href: "./product.html?id=tn-blanca",
    imgSrc: "./assets/img/tn_blanca.jpg",
    altText: "Nike TN blanca",
    titulo: "Nike TN Air Max Plus",
    descripcion: "Zapatilla de hombre original en color blanco.",
    precio: 185990,
    tallas: [
      { us: "5.5", uk: "4.5", eu: "38", cm: "23.5" },
      { us: "6", uk: "5", eu: "38.5", cm: "24" },
      { us: "6.5", uk: "5.5", eu: "39", cm: "24.5" },
      { us: "7", uk: "6", eu: "40", cm: "25" },
      { us: "7.5", uk: "6.5", eu: "40.5", cm: "25.5" },
    ],
  },
  {
    id: "tn-azul",
    href: "./product.html?id=tn-azul",
    imgSrc: "./assets/img/tn-azuljpg.jpg",
    altText: "Nike TN azul",
    titulo: "Nike TN Air Max Plus",
    descripcion: "Zapatilla de hombre original en color azul.",
    precio: 185990,
    tallas: [
      { us: "5.5", uk: "4.5", eu: "38", cm: "23.5" },
      { us: "6", uk: "5", eu: "38.5", cm: "24" },
      { us: "6.5", uk: "5.5", eu: "39", cm: "24.5" },
      { us: "7", uk: "6", eu: "40", cm: "25" },
      { us: "7.5", uk: "6.5", eu: "40.5", cm: "25.5" },
    ],
  },
  {
    id: "lafrance-negra",
    href: "./product.html?id=lafrance-negra",
    imgSrc: "./assets/img/leFrance-negras.png",
    altText: "Puma LaFrance negra",
    titulo: "LaFrance PUMA",
    descripcion: "Zapatilla de hombre original color negro.",
    precio: 110990,
    tallas: [
      { us: "5.5", uk: "4.5", eu: "38", cm: "23.5" },
      { us: "6", uk: "5", eu: "38.5", cm: "24" },
      { us: "6.5", uk: "5.5", eu: "39", cm: "24.5" },
      { us: "7", uk: "6", eu: "40", cm: "25" },
      { us: "7.5", uk: "6.5", eu: "40.5", cm: "25.5" },
    ],
  },
  {
    id: "lafrance-roja",
    href: "./product.html?id=lafrance-roja",
    imgSrc: "./assets/img/LefranceR.png",
    altText: "Puma LaFrance roja",
    titulo: "LaFrance PUMA",
    descripcion: "Zapatilla de hombre original color rojo.",
    precio: 110990,
    tallas: [
      { us: "5.5", uk: "4.5", eu: "38", cm: "23.5" },
      { us: "6", uk: "5", eu: "38.5", cm: "24" },
      { us: "6.5", uk: "5.5", eu: "39", cm: "24.5" },
      { us: "7", uk: "6", eu: "40", cm: "25" },
      { us: "7.5", uk: "6.5", eu: "40.5", cm: "25.5" },
    ],
  },
  {
    id: "lafrance-plateada",
    href: "./product.html?id=lafrance-plateada",
    imgSrc: "./assets/img/leFrance-plateada.png",
    altText: "Puma LaFrance plateada",
    titulo: "LaFrance PUMA",
    descripcion: "Zapatilla de hombre original color plateado.",
    precio: 110990,
    tallas: [
      { us: "5.5", uk: "4.5", eu: "38", cm: "23.5" },
      { us: "6", uk: "5", eu: "38.5", cm: "24" },
      { us: "6.5", uk: "5.5", eu: "39", cm: "24.5" },
      { us: "7", uk: "6", eu: "40", cm: "25" },
      { us: "7.5", uk: "6.5", eu: "40.5", cm: "25.5" },
    ],
  },
  {
    id: "adidas-mercedes",
    href: "./product.html?id=adidas-mercedes",
    imgSrc: "./assets/img/MERCE.PNG",
    altText: "Adidas F1 Mercedes",
    titulo: "Adidas F1 Mercedes",
    descripcion: "Polerón F1 Mercedes color negro.",
    precio: 99990,
    tallas: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "liverpool",
    href: "./product.html?id=liverpool",
    imgSrc: "./assets/img/liver.png",
    altText: "Polerón Liverpool",
    titulo: "Poleron Liverpool",
    descripcion: "Polerón rojo del equipo Liverpool FC.",
    precio: 89990,
    tallas: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "poleron-adidas",
    href: "./product.html?id=poleron-adidas",
    imgSrc: "./assets/img/POLERON-N.PNG",
    altText: "Polerón Adidas negro",
    titulo: "Poleron Adidas",
    descripcion: "Polerón negro Adidas.",
    precio: 59990,
    tallas: ["XS", "S", "M", "L", "XL"],
  },
];

/* =========================
   FACTORÍAS DE CARDS
   ========================= */
function crearCardProducto({ href, imgSrc, altText, titulo, precio }) {
  const link = document.createElement("a");
  link.href = href;
  link.className = "d-block text-reset";

  const card = document.createElement("div");
  card.className = "card card-max";

  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = altText || titulo;
  img.className = "card-img-top";

  const body = document.createElement("div");
  body.className = "card-body text-center";

  const h3 = document.createElement("h3");
  h3.className = "card-title mb-2";
  h3.textContent = titulo;

  const p = document.createElement("p");
  p.className = "mb-3";
  p.textContent = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(precio);

  body.appendChild(h3);
  body.appendChild(p);
  card.appendChild(img);
  card.appendChild(body);
  link.appendChild(card);
  return link;
}

function crearCardCategoria(href, imgSrc, altText, titulo) {
  const link = document.createElement("a");
  link.href = href;
  link.className = "d-block text-reset";

  const card = document.createElement("div");
  card.className = "card card-max";

  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = altText;
  img.className = "card-img-top";

  const body = document.createElement("div");
  body.className = "card-body text-center";

  const h3 = document.createElement("h3");
  h3.className = "card-title mb-0";
  h3.textContent = titulo;

  body.appendChild(h3);
  card.appendChild(img);
  card.appendChild(body);
  link.appendChild(card);
  return link;
}

/* =========================
   UTILS DETALLE PRODUCTO
   ========================= */
function formatearCLP(n) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(n);
}
function getParamId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}
function buscarProducto(id) {
  return productos.find((p) => p.id === id);
}
function plantillaTablaTallasZapatilla(tallas) {
  if (
    !Array.isArray(tallas) ||
    tallas.length === 0 ||
    typeof tallas[0] !== "object"
  )
    return "";
  const filas = tallas
    .map(
      (t) =>
        `<tr><td>${t.us}</td><td>${t.uk}</td><td>${t.eu}</td><td>${t.cm}</td></tr>`
    )
    .join("");
  return `
    <div class="size-table mt-3">
      <h4>Tabla de Tallas</h4>
      <table class="table table-bordered">
        <thead><tr><th>US</th><th>UK</th><th>EU</th><th>CM</th></tr></thead>
        <tbody>${filas}</tbody>
      </table>
    </div>`;
}
function plantillaSelectTalla(tallas) {
  let options = "";
  if (!tallas || tallas.length === 0) {
    options = `<option value="única">Talla única</option>`;
  } else if (typeof tallas[0] === "object") {
    options = tallas
      .map((t) => `<option value="${t.eu}">EU ${t.eu} (US ${t.us})</option>`)
      .join("");
  } else {
    options = tallas.map((t) => `<option value="${t}">${t}</option>`).join("");
  }
  return `
    <div class="mt-3">
      <label for="select-size" class="font-weight-bold">Selecciona tu talla</label>
      <select id="select-size" class="form-control w-auto">${options}</select>
    </div>`;
}
function renderProductoPage() {
  const wrap = document.getElementById("div-producto");
  if (!wrap) return; // no estamos en product.html

  const id = getParamId();
  const prod = buscarProducto(id);
  if (!prod) {
    wrap.innerHTML = `<div class="col-12"><div class="alert alert-warning">Producto no encontrado.</div></div>`;
    return;
  }

  const esZapatilla =
    Array.isArray(prod.tallas) &&
    prod.tallas[0] &&
    typeof prod.tallas[0] === "object";

  wrap.innerHTML = `
    <div class="col-md-6 d-flex justify-content-center">
      <img src="${prod.imgSrc}" alt="${
    prod.altText
  }" class="img-producto size-img-prod img-fluid" />
    </div>
    <div class="col-md-6" id="text-producto">
      <div class="compra-productos">
        <h2>${prod.titulo}</h2>
        <p>${prod.descripcion || ""}</p>
        <h3>${formatearCLP(prod.precio)}</h3>

        ${plantillaSelectTalla(prod.tallas)}
        ${esZapatilla ? plantillaTablaTallasZapatilla(prod.tallas) : ""}

        <div class="content mt-3">
          <button class="btn btn-danger" id="btn-carrito">Agregar al carrito</button>
        </div>
      </div>
    </div>
  `;

  // Aquí luego conectaremos "Agregar al carrito"
}

/* =========================
   MAIN (único DOMContentLoaded)
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  /* --- Footer --- */
  const footerContainer = document.getElementById("footer");
  if (footerContainer) {
    fetch("assets/componentes/footer.html")
      .then((r) => r.text())
      .then((html) => {
        footerContainer.innerHTML = html;
      })
      .catch((e) => console.error("Error cargando footer:", e));
  }

  /* --- Navbar --- */
  const navbarContainer = document.getElementById("navbar");
  if (navbarContainer) {
    fetch("assets/componentes/navbar.html")
      .then((r) => r.text())
      .then((html) => {
        navbarContainer.innerHTML = html;

        // Resaltar link activo
        const currentPage =
          window.location.pathname.split("/").pop() || "index.html";
        const navLinks = navbarContainer.querySelectorAll("a.nav-link");
        navLinks.forEach((link) => {
          const rawHref = link.getAttribute("href") || "";
          const targetPage = new URL(rawHref, window.location.href).pathname
            .split("/")
            .pop();
          if (targetPage === currentPage) {
            link.classList.add("text-danger");
            link.removeAttribute("href");
            link.style.cursor = "default";
          }
        });
      })
      .catch((e) => console.error("Error cargando navbar:", e));
  }

  /* --- Cards de INDEX (solo si existen) --- */
  const cont1 = document.getElementById("card-index-1");
  if (cont1) {
    cont1.appendChild(
      crearCardCategoria(
        "./ropa.html",
        "./assets/img/ropa-index.png",
        "Ropa",
        "Ropa"
      )
    );
  }
  const cont2 = document.getElementById("card-index-2");
  if (cont2) {
    cont2.appendChild(
      crearCardCategoria(
        "./zapatillas.html",
        "./assets/img/zapatillas-index.png",
        "Zapatillas",
        "Zapatillas"
      )
    );
  }
  const cont3 = document.getElementById("card-index-3");
  if (cont3) {
    cont3.appendChild(
      crearCardCategoria(
        "./accesorios.html",
        "./assets/img/accesorios-index.png",
        "Accesorios",
        "Accesorios"
      )
    );
  }

  /* --- Grid de productos (si hay slots) --- */
  const ids = [
    "card-product-1",
    "card-product-2",
    "card-product-3",
    "card-product-4",
    "card-product-5",
    "card-product-6",
    "card-product-7",
    "card-product-8",
    "card-product-9",
    "card-product-10",
    "card-product-11",
    "card-product-12",
  ];
  productos.slice(0, ids.length).forEach((prod, index) => {
    const mount = document.getElementById(ids[index]);
    if (mount) mount.appendChild(crearCardProducto(prod));
  });

  /* --- Render detalle si estamos en product.html --- */
  renderProductoPage();
});

/* -- Validación de formulario de ingreso -- */

// assets/js/login.js
(function () {
  const form = document.getElementById("loginForm");
  const alertBox = document.getElementById("loginAlert");

  const emailInput = document.getElementById("loginEmail");
  const passInput = document.getElementById("loginPass");

  const emailFb = document.getElementById("emailFeedback");
  const passFb = document.getElementById("passFeedback");

  const submitBtn = document.getElementById("loginBtn");

  const EMAIL_MAX = 100;
  const allowedDomains = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

  function showError(input, fbEl, msg) {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    if (fbEl) fbEl.textContent = msg || "";
  }
  function showOk(input, fbEl) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    if (fbEl) fbEl.textContent = "";
  }
  function clearState(input, fbEl) {
    input.classList.remove("is-invalid", "is-valid");
    if (fbEl) fbEl.textContent = "";
  }

  // --- Validación "en vivo" para correo: mensaje justo al llegar a 100 chars ---
  emailInput.addEventListener("input", function () {
    const val = emailInput.value.trim();

    // Si llega a 100, mostrar error inmediatamente (aunque el atributo maxlength ya limite)
    if (val.length >= EMAIL_MAX) {
      showError(emailInput, emailFb, "El máximo de caracteres es 100.");
    } else if (val.length === 0) {
      // Sin texto: estado neutro
      clearState(emailInput, emailFb);
    } else {
      // Quitamos el error de longitud mientras escribe (<100); el dominio se valida en blur
      emailInput.classList.remove("is-invalid");
      emailFb.textContent = "";
    }
    updateSubmitState();
  });

  // --- Validación al terminar de escribir (blur): dominios permitidos ---
  emailInput.addEventListener("blur", function () {
    const email = emailInput.value.trim();
    if (!email) {
      showError(emailInput, emailFb, "El correo es obligatorio.");
      updateSubmitState();
      return;
    }

    if (email.length >= EMAIL_MAX) {
      showError(emailInput, emailFb, "El máximo de caracteres es 100.");
      updateSubmitState();
      return;
    }

    const basicFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const domainOk = allowedDomains.some((d) =>
      email.toLowerCase().endsWith(d)
    );
    if (!basicFormat || !domainOk) {
      showError(
        emailInput,
        emailFb,
        "Solo se permiten correos con @duoc.cl, @profesor.duoc.cl o @gmail.com."
      );
    } else {
      showOk(emailInput, emailFb);
    }
    updateSubmitState();
  });

  // --- Validación en vivo de contraseña ---
  passInput.addEventListener("input", function () {
    const pass = passInput.value.trim();
    if (!pass) {
      clearState(passInput, passFb);
    } else if (pass.length < 4 || pass.length > 10) {
      showError(
        passInput,
        passFb,
        "La contraseña debe tener entre 4 y 10 caracteres."
      );
    } else {
      showOk(passInput, passFb);
    }
    updateSubmitState();
  });

  // --- Habilitar/deshabilitar botón según estado de ambos campos ---
  function updateSubmitState() {
    const emailOk =
      emailInput.value.trim().length > 0 &&
      emailInput.value.trim().length < EMAIL_MAX &&
      !emailInput.classList.contains("is-invalid");

    const pass = passInput.value.trim();
    const passOk =
      pass.length >= 4 &&
      pass.length <= 10 &&
      !passInput.classList.contains("is-invalid");

    submitBtn.disabled = !(emailOk && passOk);
  }
  updateSubmitState();

  // --- Envío del formulario ---
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alertBox.innerHTML = "";

    // Forzar validaciones finales
    emailInput.dispatchEvent(new Event("blur"));
    passInput.dispatchEvent(new Event("input"));

    if (submitBtn.disabled) return;

    try {
      SVAuth.login(emailInput.value.trim(), passInput.value.trim());
      SVAuth.updateNavbarAuthState();
      window.location.href = "./index.html";
    } catch (err) {
      alertBox.innerHTML = `<div class="alert alert-danger" role="alert">${err.message}</div>`;
    }
  });
})();

/* -- validaciones de registro -- */
// assets/js/register.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const alertBox = document.getElementById("regAlert");

  const nameInput = document.getElementById("regName");
  const emailInput = document.getElementById("regEmail");
  const passInput = document.getElementById("regPass");
  const pass2Input = document.getElementById("regPass2");

  const nameFb = document.getElementById("nameFeedback");
  const emailFb = document.getElementById("emailFeedback");
  const passFb = document.getElementById("passFeedback");
  const pass2Fb = document.getElementById("pass2Feedback");

  const submitBtn =
    document.getElementById("registerBtn") ||
    form.querySelector('button[type="submit"]');

  const EMAIL_MAX = 100;
  const allowedDomains = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

  function showError(input, fbEl, msg) {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    if (fbEl) fbEl.textContent = msg || "";
  }
  function showOk(input, fbEl) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    if (fbEl) fbEl.textContent = "";
  }
  function clearState(input, fbEl) {
    input.classList.remove("is-invalid", "is-valid");
    if (fbEl) fbEl.textContent = "";
  }

  function validateName() {
    const val = (nameInput?.value || "").trim();
    if (!val) {
      showError(nameInput, nameFb, "El nombre es obligatorio.");
      return false;
    }
    showOk(nameInput, nameFb);
    return true;
  }

  // Email: error inmediato al llegar a 100; dominios al salir del campo
  function emailInputHandler() {
    const val = emailInput.value.trim();
    if (val.length >= EMAIL_MAX) {
      showError(emailInput, emailFb, "El máximo de caracteres es 100.");
    } else if (val.length === 0) {
      clearState(emailInput, emailFb);
    } else {
      emailInput.classList.remove("is-invalid");
      if (emailFb) emailFb.textContent = "";
    }
    updateSubmitState();
  }
  function emailBlurHandler() {
    const email = emailInput.value.trim();
    if (!email) {
      showError(emailInput, emailFb, "El correo es obligatorio.");
      return updateSubmitState();
    }
    if (email.length >= EMAIL_MAX) {
      showError(emailInput, emailFb, "El máximo de caracteres es 100.");
      return updateSubmitState();
    }

    const basicFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const domainOk = allowedDomains.some((d) =>
      email.toLowerCase().endsWith(d)
    );
    if (!basicFormat || !domainOk) {
      showError(
        emailInput,
        emailFb,
        "Solo se permiten correos con @duoc.cl, @profesor.duoc.cl o @gmail.com."
      );
    } else {
      showOk(emailInput, emailFb);
    }
    updateSubmitState();
  }

  function validatePass() {
    const pass = passInput.value.trim();
    if (!pass) {
      clearState(passInput, passFb);
      return false;
    }
    if (pass.length < 4 || pass.length > 10) {
      showError(
        passInput,
        passFb,
        "La contraseña debe tener entre 4 y 10 caracteres."
      );
      return false;
    }
    showOk(passInput, passFb);
    return true;
  }

  function validatePass2() {
    const p1 = passInput.value.trim();
    const p2 = pass2Input.value.trim();
    if (!p2) {
      clearState(pass2Input, pass2Fb);
      return false;
    }
    if (p2.length < 4 || p2.length > 10) {
      showError(
        pass2Input,
        pass2Fb,
        "La contraseña debe tener entre 4 y 10 caracteres."
      );
      return false;
    }
    if (p1 !== p2) {
      showError(pass2Input, pass2Fb, "Las contraseñas no coinciden.");
      return false;
    }
    showOk(pass2Input, pass2Fb);
    return true;
  }

  function updateSubmitState() {
    const ok =
      validateName() &
      (emailInput.value.trim().length > 0 &&
        emailInput.value.trim().length < EMAIL_MAX &&
        !emailInput.classList.contains("is-invalid")) &
      validatePass() &
      validatePass2();

    if (submitBtn) submitBtn.disabled = !ok;
  }

  // Listeners
  nameInput.addEventListener("input", function () {
    validateName();
    updateSubmitState();
  });
  emailInput.addEventListener("input", emailInputHandler);
  emailInput.addEventListener("blur", emailBlurHandler);
  passInput.addEventListener("input", function () {
    validatePass();
    validatePass2();
    updateSubmitState();
  });
  pass2Input.addEventListener("input", function () {
    validatePass2();
    updateSubmitState();
  });

  // Estado inicial
  updateSubmitState();

  // Submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alertBox.innerHTML = "";

    emailBlurHandler(); // fuerza validación de dominio
    validatePass(); // fuerza errores si corresponde
    validatePass2();
    validateName();
    updateSubmitState();

    if (submitBtn && submitBtn.disabled) return;

    try {
      SVAuth.registerUser({
        nombre: nameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passInput.value.trim(),
      });
      SVAuth.updateNavbarAuthState();
      window.location.href = "./index.html";
    } catch (err) {
      alertBox.innerHTML = `<div class="alert alert-danger" role="alert">${err.message}</div>`;
    }
  });
});

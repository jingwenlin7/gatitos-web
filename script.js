// ===== Menú responsive =====
const menuBtn = document.getElementById("menuBtn");
const menuLinks = document.getElementById("menuLinks");

menuBtn.addEventListener("click", () => {
  const abierto = menuLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", abierto);
});

// Cierra el menú en móvil al pulsar un enlace
menuLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menuLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// ===== Galería de gatitos (fotos aleatorias de cataas.com) =====
const grid = document.getElementById("galeriaGrid");
const masFotosBtn = document.getElementById("masFotosBtn");

function gatitoSrc() {
  // ?v= única -> evita la caché y da una foto distinta cada vez
  const v = Date.now() + Math.random().toString(36).slice(2);
  return `https://cataas.com/cat?width=520&height=390&v=${v}`;
}

function anyadirGatitos(n = 6) {
  for (let i = 0; i < n; i++) {
    const img = document.createElement("img");
    img.src = gatitoSrc();
    img.alt = "Gatito adorable";
    img.loading = "lazy";
    img.addEventListener("error", () => {
      img.src = gatitoSrc(); // reintenta si la foto falla
    });
    grid.appendChild(img);
  }
}

anyadirGatitos();
masFotosBtn.addEventListener("click", () => anyadirGatitos(3));

// ===== Formulario de contacto (demo: sin servidor) =====
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formOk").hidden = false;
  form.reset();
});

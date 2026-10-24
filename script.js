// 1. CATÁLOGO OFICIAL DE 14 SERVICIOS DUKE'S BEAUTY STUDIO
const serviciosDukes = [
  {
    id: 1,
    nombre: "Diagnóstico Capilar Avanzado",
    categoria: "tricologia",
    precio: "Sin costo adicional",
    descripcion: "Diagnóstico capilar avanzado con capilógrafo que utiliza una microcámara de alta magnificación para examinar a profundidad la salud del cuero cabelludo y la fibra del cabello."
  },
  {
    id: 2,
    nombre: "Corte de Cabello",
    categoria: "corte-color",
    precio: "$20 en adelante",
    descripcion: "Corte profesional personalizado según tus facciones, estilo y textura natural para dar movimiento y frescura a tu cabello."
  },
  {
    id: 3,
    nombre: "Peinados para Toda Ocasión",
    categoria: "corte-color",
    precio: "Según diseño y largo del cabello",
    descripcion: "Trenzas, recogidos elegantes para eventos especiales y blower profesional con acabado duradero."
  },
  {
    id: 4,
    nombre: "Balayage",
    categoria: "corte-color",
    precio: "Según técnica y largo del cabello",
    descripcion: "Técnica francesa de coloración capilar que crea un degradado suave, natural y luminoso en tu melena."
  },
  {
    id: 5,
    nombre: "Highlights (Reflejos)",
    categoria: "corte-color",
    precio: "$150 en adelante",
    descripcion: "Reflejos más claros que el color base del cabello para aportar dimensión, contraste y luz al rostro."
  },
  {
    id: 6,
    nombre: "Color, Baño de Brillo y Canas",
    categoria: "corte-color",
    precio: "$60 en adelante (según largo)",
    descripcion: "Aplicación de color completo, baño de brillo revitalizante, cubrimiento total de canas y técnica de camuflaje."
  },
  {
    id: 7,
    nombre: "Tratamientos e Hidratación Capilar",
    categoria: "tricologia",
    precio: "$90 en adelante",
    descripcion: "Terapias intensivas de desintoxicación, Botox capilar y Detox del cuero cabelludo para devolver vitalidad y suavidad."
  },
  {
    id: 8,
    nombre: "Control Frizz (Nanoplastia y Botox)",
    categoria: "tricologia",
    precio: "$120 en adelante",
    descripcion: "Procedimientos especializados como Nanoplastia y Botox capilar para disciplinar el cabello, eliminar el frizz y dar brillo."
  },
  {
    id: 9,
    nombre: "Maquillaje Profesional",
    categoria: "rostro",
    precio: "$60 en adelante",
    descripcion: "Maquillaje social y para eventos especiales con productos de alta duración que realzan tus facciones."
  },
  {
    id: 10,
    nombre: "Lifting de Pestañas",
    categoria: "rostro",
    precio: "$60",
    descripcion: "Tratamiento que eleva y curva tus pestañas naturales desde la raíz para lograr una mirada más abierta y expresiva."
  },
  {
    id: 11,
    nombre: "Laminado de Cejas y Henna",
    categoria: "rostro",
    precio: "$60",
    descripcion: "Diseño y laminado de cejas (Brow Lamination) acompañado de sombreado o tinte de cejas con henna para una definición perfecta."
  },
  {
    id: 12,
    nombre: "Colocación y Mantenimiento de Extensiones",
    categoria: "corte-color",
    precio: "Según la cantidad",
    descripcion: "Instalación profesional y mantenimiento de extensiones capilares para aportar volumen y longitud con un acabado natural."
  },
  {
    id: 13,
    nombre: "Tratamientos Faciales y Cuidado de la Piel",
    categoria: "piel-productos",
    precio: "$90 en adelante",
    descripcion: "Higiene facial profunda, hidratación y mantenimiento especializado para rejuvenecimiento, flacidez, manchas y acné."
  },
  {
    id: 14,
    nombre: "Venta de Productos (Cabello y Piel)",
    categoria: "piel-productos",
    precio: "$20 en adelante",
    descripcion: "Productos profesionales de cuidado básico y especializado para mantener la salud de tu cabello y tu piel en casa."
  }
];

// NÚMERO OFICIAL DE WHATSAPP EN ATLANTA, GA (+1 470 796 0870)
const TELEFONO_WHATSAPP = "14707960870";

// 2. PANTALLA DE ENTRADA (TELÓN DE LUJO)
window.addEventListener("load", () => {
  const loader = document.getElementById("introLoader");
  setTimeout(() => {
    loader.classList.add("open");
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 1150);
  }, 1850);
});

// 3. NAVEGACIÓN ENTRE APARTADOS (PC, TABLET Y TELÉFONO)
const navTabs = document.querySelectorAll(".nav-tab");
const mobileNavItems = document.querySelectorAll(".m-nav-item");
const views = document.querySelectorAll(".view-section");
const navLinks = document.getElementById("navLinks");

window.cambiarApartado = function (nombreApartado) {
  views.forEach((v) => v.classList.remove("active"));
  const targetView = document.getElementById(`view-${nombreApartado}`);
  if (targetView) targetView.classList.add("active");

  navTabs.forEach((t) => {
    t.classList.toggle("active", t.getAttribute("data-target") === nombreApartado);
  });

  mobileNavItems.forEach((m) => {
    m.classList.toggle("active", m.getAttribute("data-target") === nombreApartado);
  });

  navLinks.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

navTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    cambiarApartado(tab.getAttribute("data-target"));
  });
});

window.mostrarSubPilar = function (idSubpilar, boton) {
  document.querySelectorAll(".subpilar-content").forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(".subtab-btn").forEach((btn) => btn.classList.remove("active"));
  document.getElementById(`subpilar-${idSubpilar}`).classList.add("active");
  boton.classList.add("active");
};

// 4. CATÁLOGO CON ANIMACIÓN ESCALONADA
const servicesGrid = document.getElementById("servicesGrid");
const serviceSelect = document.getElementById("serviceSelect");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");

function mostrarServicios(filtroCategoria = "todos", textoBusqueda = "") {
  servicesGrid.innerHTML = "";

  const filtrados = serviciosDukes.filter((servicio) => {
    const coincideCategoria = filtroCategoria === "todos" || servicio.categoria === filtroCategoria;
    const coincideTexto =
      servicio.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()) ||
      servicio.descripcion.toLowerCase().includes(textoBusqueda.toLowerCase());
    return coincideCategoria && coincideTexto;
  });

  if (filtrados.length === 0) {
    servicesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center;">No se encontraron servicios con ese criterio.</p>`;
    return;
  }

  filtrados.forEach((servicio, index) => {
    const card = document.createElement("div");
    card.className = "service-card glow-card";
    card.style.animationDelay = `${index * 0.06}s`;
    card.innerHTML = `
      <div>
        <div class="service-top">
          <span class="service-num">SERVICIO ${servicio.id < 10 ? "0" + servicio.id : servicio.id}</span>
          <span class="service-price">${servicio.precio}</span>
        </div>
        <h3>${servicio.nombre}</h3>
        <p>${servicio.descripcion}</p>
      </div>
      <button class="service-btn" onclick="seleccionarServicio('${servicio.nombre} (${servicio.precio})')">
        Consultar Turno Disponible
      </button>
    `;
    servicesGrid.appendChild(card);
  });
}

function cargarOpcionesFormulario() {
  serviceSelect.innerHTML = `<option value="">-- Selecciona un servicio --</option>`;
  serviciosDukes.forEach((s) => {
    const option = document.createElement("option");
    option.value = `${s.nombre} (${s.precio})`;
    option.textContent = `${s.id}. ${s.nombre} — ${s.precio}`;
    serviceSelect.appendChild(option);
  });
}

window.seleccionarServicio = function (nombreServicio) {
  cambiarApartado("contacto");
  serviceSelect.value = nombreServicio;
};

let categoriaActual = "todos";
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    categoriaActual = btn.getAttribute("data-filter");
    mostrarServicios(categoriaActual, searchInput.value);
  });
});

searchInput.addEventListener("input", (e) => {
  mostrarServicios(categoriaActual, e.target.value);
});

document.getElementById("menuToggle").addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// 5. VISOR MODAL PARA LAS 10 FOTOS DE LA GALERÍA
window.abrirImagenModal = function (src, caption) {
  document.getElementById("modalImg").src = src;
  document.getElementById("modalCaption").textContent = caption;
  document.getElementById("imageModal").classList.add("open");
};

window.cerrarImagenModal = function () {
  document.getElementById("imageModal").classList.remove("open");
};

// 6. ENVÍO DIRECTO A WHATSAPP (+1 470 796 0870) PREGUNTANDO DISPONIBILIDAD
document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("clientName").value.trim();
  const servicio = document.getElementById("serviceSelect").value;
  const diaPreferido = document.getElementById("preferredDay").value.trim();
  const notas = document.getElementById("clientNotes").value.trim() || "Sin detalles adicionales";

  const mensaje =
    `Hola Duke's Beauty Studio, espero que estes muy bien.%0A%0A` +
    `Mi nombre es *${nombre}* y quisiera consultar *que turno tienes disponible* en Atlanta, GA:%0A` +
    `----------------------------------------%0A` +
    `Servicio de interes: *${servicio}*%0A` +
    `Dia o jornada que busco: *${diaPreferido}*%0A` +
    `Detalles: ${notas}%0A` +
    `----------------------------------------%0A` +
    `Quedo atenta a tu disponibilidad. Muchas gracias.`;

  window.open(`https://wa.me/${TELEFONO_WHATSAPP}?text=${mensaje}`, "_blank");
});

// 7. PARTÍCULAS DORADAS EN EL FONDO
const canvas = document.getElementById("goldParticles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < 28; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2.2 + 0.8,
    speedY: Math.random() * 0.35 + 0.1,
    alpha: Math.random() * 0.35 + 0.15
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(184, 139, 58, ${p.alpha})`;
    ctx.fill();
    p.y -= p.speedY;
    if (p.y < -10) {
      p.y = canvas.height + 10;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Inicializar año y catálogo
document.getElementById("currentYear").textContent = new Date().getFullYear();
mostrarServicios();
cargarOpcionesFormulario();
/**
 * Visual Oscart - Application Logic & Navigation Router
 */

document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initRibbonRotators();
  initStatCounters();
  initHeroScrollBlur();
  renderServices();
  renderPostsShowcase();
  renderPortfolio();
  renderProcess();
  renderBlog();
  initBlogSearch();
  renderTestimonials();
  renderFaq();
  initMobileMenu();
  initCaseStudyModal();
  initContactForm();
  initEquipoShowcase();
});

/* ==========================================================================
   Dynamic Scroll Blur for Video Hero Background
   ========================================================================== */
function initHeroScrollBlur() {
  const heroVideo = document.querySelector('.video-hero-bg');
  if (!heroVideo) return;

  function updateBlur() {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight || 800;

    // Blur increases smoothly from 0px at top up to 24px as user scrolls 75% of screen height
    const scrollRatio = Math.min(1, Math.max(0, scrollY / (windowHeight * 0.75)));
    const blurAmount = (scrollRatio * 24).toFixed(1);
    const brightness = (1 - (scrollRatio * 0.35)).toFixed(2);
    const scale = (1 + (scrollRatio * 0.08)).toFixed(3);

    heroVideo.style.filter = `blur(${blurAmount}px) brightness(${brightness})`;
    heroVideo.style.transform = `scale(${scale})`;
  }

  window.addEventListener('scroll', updateBlur, { passive: true });
  updateBlur();
}

/* ==========================================================================
   Animated Count-Up for Home Indicators (0 -> Target)
   ========================================================================== */
function initStatCounters() {
  const grid = document.getElementById('homeIndicatorsGrid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.home-indicator-card'));
  if (!cards.length) return;

  // Contador numérico animado suave
  const animateCounter = (el, duration = 950) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    if (isNaN(target)) return;

    if (el._counterRafId) {
      cancelAnimationFrame(el._counterRafId);
    }

    const startTime = performance.now();
    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeProgress * target);

      el.innerHTML = `${currentCount}<span class="plus-sign">+</span>`;

      if (progress < 1) {
        el._counterRafId = requestAnimationFrame(updateCount);
      } else {
        el.innerHTML = `${target}<span class="plus-sign">+</span>`;
        el._counterRafId = null;
      }
    };
    el._counterRafId = requestAnimationFrame(updateCount);
  };

  // Disparo ultra fluido del efecto cargador naranja en la tarjeta seleccionada
  const triggerCharge = (card, duration = 950) => {
    const fill = card.querySelector('.home-indicator-fill');
    const numEl = card.querySelector('.home-indicator-number[data-target]');
    if (!fill) return;

    // Reset instantáneo sin saltos visuales
    fill.style.transition = 'none';
    fill.style.transform = 'scaleX(0)';
    void fill.offsetWidth; // Forzar reflow

    // Carga fluida tipo batería / cargador
    fill.style.transition = `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
    fill.style.transform = 'scaleX(1)';

    if (numEl) {
      animateCounter(numEl, duration);
    }
  };

  const updateCardVideo = (c, isFlipped) => {
    const video = c.querySelector('.home-indicator-back-video');
    if (!video) return;
    if (isFlipped) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  // Interacción al posicionarse (hover / mouseenter):
  // La tarjeta activa carga su barra y las otras 3 giran mostrando su imagen/video
  cards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      cards.forEach((otherCard, otherIndex) => {
        if (otherIndex === index) {
          otherCard.classList.remove('is-flipped');
          updateCardVideo(otherCard, false);
          triggerCharge(otherCard, 950);
        } else {
          otherCard.classList.add('is-flipped');
          updateCardVideo(otherCard, true);
        }
      });
    });

    // Soporte táctil / click
    card.addEventListener('click', () => {
      const isAlreadyActive = !card.classList.contains('is-flipped') && cards.some(c => c !== card && c.classList.contains('is-flipped'));
      if (isAlreadyActive) {
        cards.forEach(c => {
          c.classList.remove('is-flipped');
          updateCardVideo(c, false);
        });
      } else {
        cards.forEach((otherCard, otherIndex) => {
          if (otherIndex === index) {
            otherCard.classList.remove('is-flipped');
            updateCardVideo(otherCard, false);
            triggerCharge(otherCard, 950);
          } else {
            otherCard.classList.add('is-flipped');
            updateCardVideo(otherCard, true);
          }
        });
      }
    });
  });

  // Al retirar el puntero del grid, todas las tarjetas regresan suavemente al frente
  grid.addEventListener('mouseleave', () => {
    cards.forEach(card => {
      card.classList.remove('is-flipped');
      updateCardVideo(card, false);
    });
  });

  // Animación inicial de entrada al hacer scroll a la sección
  let hasTriggeredInitial = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasTriggeredInitial) {
        hasTriggeredInitial = true;
        cards.forEach((card, i) => {
          setTimeout(() => {
            triggerCharge(card, 1200);
          }, i * 150);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(grid);
}

/* ==========================================================================
   1. 3-Second Auto Rotator for Purple Ribbon (Logos & Nichos)
   ========================================================================== */
function initRibbonRotators() {
  const logos = [
    "BLOQUE CLIENTES/FKA.png",
    "BLOQUE CLIENTES/KBO.png",
    "BLOQUE CLIENTES/KZNX.png",
    "BLOQUE CLIENTES/PSC.png",
    "BLOQUE CLIENTES/RVN.png",
    "BLOQUE CLIENTES/SNV.png",
    "BLOQUE CLIENTES/SPD.png",
    "BLOQUE CLIENTES/TTL.png",
    "BLOQUE CLIENTES/YKS.png"
  ];

  const niches = [
    "Courier",
    "Deporte",
    "Psicología",
    "Suplementos",
    "Abogacía",
    "Estética",
    "Productos",
    "Nutrición"
  ];

  let logoIdx = 0;
  let nicheIdx = 0;

  const logoImgEl = document.getElementById('rotatingClientLogo');
  const nicheTagEl = document.getElementById('rotatingNicheTag');

  setInterval(() => {
    if (logoImgEl) {
      logoImgEl.style.opacity = '0';
      setTimeout(() => {
        logoIdx = (logoIdx + 1) % logos.length;
        logoImgEl.src = logos[logoIdx];
        logoImgEl.style.opacity = '1';
      }, 300);
    }

    if (nicheTagEl) {
      nicheTagEl.style.opacity = '0';
      setTimeout(() => {
        nicheIdx = (nicheIdx + 1) % niches.length;
        nicheTagEl.textContent = niches[nicheIdx];
        nicheTagEl.style.opacity = '1';
      }, 300);
    }
  }, 3000);
}

/* ==========================================================================
   2. Router & Section Navigation
   ========================================================================== */
function getTargetSectionId() {
  const hash = (window.location.hash || '').replace(/^#\/?/, '').trim();
  if (hash) return hash;

  const path = (window.location.pathname || '')
    .replace(/^\/|\/$/g, '')
    .replace(/\.html$/, '')
    .trim();

  const validSections = ['home', 'servicios', 'quienes-somos', 'blog', 'contacto'];
  if (validSections.includes(path)) {
    return path;
  }

  return 'home';
}

function initRouter() {
  const navigate = () => {
    const targetSectionId = getTargetSectionId();
    const hash = '#' + targetSectionId;

    const sections = document.querySelectorAll('.page-section');
    let found = false;

    sections.forEach(sec => {
      if (sec.id === targetSectionId) {
        sec.classList.add('active');
        found = true;
      } else {
        sec.classList.remove('active');
      }
    });

    if (!found && sections.length > 0) {
      sections[0].classList.add('active');
    }

    // Update nav links active class
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      if (linkHref === hash || linkHref === '/' + targetSectionId || (targetSectionId === 'home' && (linkHref === '/' || linkHref === '#home'))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reproducir video de fondo del Blog al activarse
    if (targetSectionId === 'blog') {
      const blogVid = document.querySelector('.blog-sticky-video-el');
      if (blogVid) {
        blogVid.play().catch(() => {});
      }
    }

    // Reproducir video de fondo de Contacto al activarse
    if (targetSectionId === 'contacto') {
      const contactoVid = document.querySelector('.contacto-bg-video');
      if (contactoVid) {
        contactoVid.play().catch(() => {});
      }
    }

    // Recalcular posición del carrusel si la sección activa es servicios
    if (targetSectionId === 'servicios') {
      setTimeout(() => {
        if (typeof updateCarouselTrackScroll === 'function') {
          updateCarouselTrackScroll();
        }
      }, 50);
    }

    // Close mobile menu if open
    const navMenu = document.getElementById('navMenu');
    if (navMenu) navMenu.classList.remove('open');
  };

  // Delegated click listener for all links targeting internal sections
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      if (targetId) {
        e.preventDefault();
        if (window.location.hash !== '#' + targetId) {
          window.location.hash = '#' + targetId;
        } else {
          navigate();
        }
      }
    }
  });

  window.addEventListener('hashchange', navigate);
  window.addEventListener('popstate', navigate);
  navigate();
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
}

/* ==========================================================================
   3. Renderers (Services, Portfolio, Process, Blog, Testimonials)
   ========================================================================== */
let activeVirtualIndex = 4; // Empieza en el conjunto medio (Servicio 0: Redes Sociales)

const SERVICE_IMAGES = {
  "redes-sociales": "LOGOS/LREDES.jpg",
  "diseno-marca": "LOGOS/LDISENO.jpg",
  "animacion-digital": "LOGOS/LANIMACION.jpg",
  "produccion-audiovisual": "LOGOS/LGRAFICO.jpg"
};

function renderServices() {
  const track = document.getElementById('serviceCarouselTrack');
  const panelContainer = document.getElementById('servicePanelContainer');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');

  if (!track || !panelContainer) return;

  // Renderizar 3 conjuntos para permitir carrusel infinito sin límites vacíos a la izquierda/derecha
  const infiniteData = [
    ...SERVICES_DATA,
    ...SERVICES_DATA,
    ...SERVICES_DATA
  ];

  track.innerHTML = infiniteData.map((serv, idx) => {
    const imgSrc = SERVICE_IMAGES[serv.id] || "LOGOS/LDISENO.jpg";
    const isActive = idx === activeVirtualIndex;
    return `
      <div class="service-carousel-item ${isActive ? 'active' : ''}"
           id="carousel-item-${idx}">
        <div class="service-carousel-card" onclick="selectCarouselVirtualCard(${idx})">
          <img src="${imgSrc}" alt="${serv.title}" class="card-full-img" loading="lazy">
        </div>
        <button type="button" class="service-card-external-btn" onclick="scrollToServicePortfolio(event)" aria-label="Ver portafolio de ${serv.title}">
          <span>Ver Portafolio</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    `;
  }).join('');

  // Handlers de botones de navegación
  if (prevBtn) prevBtn.onclick = () => moveServicesCarousel(-1);
  if (nextBtn) nextBtn.onclick = () => moveServicesCarousel(1);

  // Gestos táctiles de deslizamiento (Swipe)
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 40) {
      moveServicesCarousel(1);
    } else if (touchEndX - touchStartX > 40) {
      moveServicesCarousel(-1);
    }
  }, { passive: true });

  // Render inicial
  updateActiveServicePanel(false);
  updateCarouselTrackScroll();
}

function moveServicesCarousel(direction) {
  activeVirtualIndex += direction;
  normalizeVirtualIndex();
  setActiveCarouselVirtualCard(activeVirtualIndex);
}

function selectCarouselVirtualCard(index) {
  if (activeVirtualIndex === index) return;
  activeVirtualIndex = index;
  normalizeVirtualIndex();
  setActiveCarouselVirtualCard(activeVirtualIndex);
}

function normalizeVirtualIndex() {
  const total = SERVICES_DATA.length;
  if (activeVirtualIndex >= total * 2) {
    activeVirtualIndex -= total;
  }
  if (activeVirtualIndex < total) {
    activeVirtualIndex += total;
  }
}

function setActiveCarouselVirtualCard(index) {
  document.querySelectorAll('.service-carousel-item').forEach((item, idx) => {
    if (idx === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  updateCarouselTrackScroll();
  updateActiveServicePanel(true);
}

function updateCarouselTrackScroll() {
  const track = document.getElementById('serviceCarouselTrack');
  const viewport = document.querySelector('.services-carousel-viewport');
  const items = track ? track.querySelectorAll('.service-carousel-item') : null;
  if (!track || !viewport || !items || items.length === 0) return;

  const rect = viewport.getBoundingClientRect();
  let viewportWidth = rect.width || viewport.offsetWidth;

  // Fallback dinámico según el dispositivo
  if (viewportWidth < 150) {
    viewportWidth = window.innerWidth;
  }

  // Medición dinámica del ancho real del item en el DOM según responsividad
  const cardWidth = items[0].offsetWidth || (window.innerWidth <= 768 ? 260 : 350);
  
  // Medición dinámica del espacio (gap) en el DOM
  const trackStyle = window.getComputedStyle(track);
  const gap = parseFloat(trackStyle.gap) || (window.innerWidth <= 768 ? 18 : 28);

  // Cálculo dinámico de la posición centrada exacta
  const centerOffset = (viewportWidth / 2) - (cardWidth / 2) - (activeVirtualIndex * (cardWidth + gap));
  track.style.transform = `translateX(${centerOffset}px)`;
}

window.addEventListener('resize', updateCarouselTrackScroll);
window.addEventListener('orientationchange', () => setTimeout(updateCarouselTrackScroll, 150));
window.addEventListener('load', () => setTimeout(updateCarouselTrackScroll, 100));

function updateActiveServicePanel(animate = true) {
  const panelContainer = document.getElementById('servicePanelContainer');
  const sectionBgOverlay = document.getElementById('serviceSectionBgOverlay');

  const realIndex = activeVirtualIndex % SERVICES_DATA.length;
  const service = SERVICES_DATA[realIndex] || SERVICES_DATA[0];

  const fixedSectionBg = "LOGOS/BGMesa de trabajo 1 copia 3-100.jpg";
  
  // Asignar imagen de fondo estática que empieza desde la parte superior de la sección
  if (sectionBgOverlay) {
    sectionBgOverlay.style.backgroundImage = `url('${fixedSectionBg}')`;
  }

  if (!panelContainer) return;

  const projects = PORTFOLIO_DATA.filter(p => p.category === service.id).slice(0, 3);

  const checkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  const arrowIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
  const pinIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;

  const isRedesSociales = service.id === 'redes-sociales' && typeof GESTION_REDES_PORTFOLIO !== 'undefined';
  const isDisenoMarca = service.id === 'diseno-marca' && typeof DISENO_MARCA_PORTFOLIO !== 'undefined';
  const isProduccionAudiovisual = service.id === 'produccion-audiovisual';
  const projectCountBadge = isRedesSociales ? `${GESTION_REDES_PORTFOLIO.length} Proyectos` : (isDisenoMarca ? `${DISENO_MARCA_PORTFOLIO.length} Proyectos` : (isProduccionAudiovisual ? 'Demo Reel' : '3 Proyectos'));

  let projectsGridHtml = '';

  if (isRedesSociales) {
    projectsGridHtml = `
      <div class="service-projects-grid elongated-projects-grid">
        ${GESTION_REDES_PORTFOLIO.map(item => `
          <div class="elongated-project-card" onclick="openCaseStudyModal('${item.id || item.caseStudyId}')">
            <div class="elongated-card-bg" style="background-image: url('${item.portada}');"></div>
            <div class="elongated-card-overlay">
              <div class="elongated-card-left">
                <div class="elongated-card-logo-wrap">
                  <img src="${item.logo}" alt="${item.brandName}">
                </div>
                <div class="elongated-card-text-block">
                  <h4 class="elongated-card-brand">${item.brandName}</h4>
                  <div class="elongated-card-subtitle">PROYECTOS DE GESTIÓN DE REDES SOCIALES</div>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (isDisenoMarca) {
    projectsGridHtml = `
      <div class="service-projects-grid elongated-projects-grid">
        ${DISENO_MARCA_PORTFOLIO.map(item => `
          <div class="elongated-project-card" onclick="openCaseStudyModal('${item.id || item.caseStudyId}')">
            <div class="elongated-card-bg" style="background-image: url('${item.portada}');"></div>
            <div class="elongated-card-overlay">
              <div class="elongated-card-left">
                <div class="elongated-card-logo-wrap">
                  <img src="${item.logo}" alt="${item.brandName}">
                </div>
                <div class="elongated-card-text-block">
                  <h4 class="elongated-card-brand">${item.brandName}</h4>
                  <div class="elongated-card-subtitle">PROYECTOS DE DISEÑO DE MARCA</div>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else if (isProduccionAudiovisual) {
    projectsGridHtml = `
      <div class="audiovisual-demoreel-wrapper">
        <div class="audiovisual-demoreel-card" style="padding:56.25% 0 0 0;position:relative;">
          <iframe id="vimeoDemoReel" src="https://player.vimeo.com/video/1227617889?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;border-radius:24px;" title="DEMO REEL - VISUAL OSCART" allowfullscreen></iframe>
        </div>
      </div>
    `;
  } else {
    projectsGridHtml = `
      <div class="service-projects-grid">
        ${projects.map(proj => `
          <div class="service-project-card">
            <div class="project-img-wrapper">
              <img src="${proj.image}" alt="${proj.title}" loading="lazy">
              <span class="project-metric-overlay">✨ ${proj.metrics}</span>
            </div>
            <div class="project-card-body">
              <span class="project-client-tag">${proj.client}</span>
              <h4 class="project-card-title">${proj.title}</h4>
              <p class="project-card-summary">${proj.summary}</p>
              <div class="project-card-footer">
                <span class="project-location">${pinIcon} ${proj.location}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  const serviceTypesHtml = service.serviceTypes && service.serviceTypes.length > 0 ? `
    <div class="animation-billboard-wrapper" onmouseenter="pauseBillboardTimer()" onmouseleave="resumeBillboardTimer()">
      <div class="service-deliverables-title">Formatos & Tipos de Animación Digital</div>

      <!-- Cartelera Central: 2 Columnas (Recuadro 1:1 a la izquierda, Texto a la derecha) -->
      <div class="billboard-stage" id="billboardStage">
        <!-- Columna Izquierda: Recuadro Cuadrado para Video -->
        <div class="billboard-video-col">
          <div class="billboard-square-box" id="billboardVideoSquare">
            <video class="billboard-video-player" id="billboardVideoPlayer" src="${service.serviceTypes[0].video}" autoplay muted loop playsinline></video>
            <div class="billboard-glow-accent"></div>
          </div>
        </div>

        <!-- Columna Derecha: Texto & Detalles del Tipo de Animación -->
        <div class="billboard-content-col">
          <h3 class="billboard-title" id="billboardTitle">${service.serviceTypes[0].title}</h3>
          <div class="billboard-subtitle" id="billboardSubtitle">${service.serviceTypes[0].subtitle || ''}</div>
          <p class="billboard-desc" id="billboardDesc">${service.serviceTypes[0].desc}</p>
          
          <div class="billboard-tags" id="billboardTags">
            ${service.serviceTypes[0].tags.map(t => `<span class="service-type-tag">${t}</span>`).join('')}
          </div>

          <!-- Controles Manuales Anterior / Siguiente -->
          <div class="billboard-controls-row">
            <button type="button" class="billboard-ctrl-btn" onclick="prevBillboardSlide()" aria-label="Anterior">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
              <span>Anterior</span>
            </button>
            <button type="button" class="billboard-ctrl-btn" onclick="nextBillboardSlide()" aria-label="Siguiente">
              <span>Siguiente</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  ` : '';

  const brandPackageHtml = service.packageIncludes ? `
    <div class="brand-package-wrapper">
      <div class="brand-package-header-row">
        <div class="service-deliverables-title">${service.packageIncludes.title || 'Este Paquete Incluye:'}</div>
        <div class="brand-package-subtitle-badge">
          <span>Identidad Completa + Regalía</span>
        </div>
      </div>

      <div class="brand-package-container">
        <!-- 2 Columnas de Entregables Principales -->
        <div class="brand-package-grid">
          ${service.packageIncludes.columns.map((col, cIdx) => `
            <div class="brand-package-col-card">
              <div class="brand-package-col-header">
                <div class="brand-package-col-icon-wrap">
                  ${col.icon}
                </div>
                <div>
                  <h4 class="brand-package-col-title">${col.title}</h4>
                  <span class="brand-package-col-badge">${col.badge}</span>
                </div>
              </div>
              <ul class="brand-package-list">
                ${col.items.map(item => `
                  <li class="brand-package-list-item">
                    <span class="brand-package-bullet">
                      ${checkIcon}
                    </span>
                    <span class="brand-package-text">${item}</span>
                  </li>
                `).join('')}
              </ul>

              ${(col.id === 'redes-sociales' || cIdx === 1) && service.packageIncludes.regalia ? `
                <div class="brand-regalia-nested-box">
                  <div class="brand-regalia-nested-header">
                    <div class="brand-regalia-nested-title-wrap">
                      <div class="brand-regalia-nested-icon">
                        ${service.packageIncludes.regalia.icon}
                      </div>
                      <div>
                        <h4 class="brand-regalia-nested-title">${service.packageIncludes.regalia.title}</h4>
                      </div>
                    </div>
                    <span class="brand-regalia-nested-badge">${service.packageIncludes.regalia.badge || 'Cortesía Exclusiva'}</span>
                  </div>
                  <ul class="brand-regalia-nested-list">
                    ${service.packageIncludes.regalia.items.map(item => `
                      <li class="brand-regalia-nested-item">
                        <span class="brand-regalia-nested-bullet">★</span>
                        <span class="brand-regalia-nested-text">${item}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  ` : '';

  const methodologyHtml = service.phases ? `
    <div class="service-phases-wrapper">
      <div class="service-deliverables-title">${service.methodologyTitle || 'Metodología & Procesos del Servicio por Fases'}</div>
      <div class="service-phases-grid">
        ${service.phases.map((phase, pIdx) => `
          <div class="service-phase-card" id="service-phase-card-${pIdx}">
            <div class="phase-card-header">
              <span class="phase-number-badge">${phase.phaseNumber}</span>
              <span class="phase-tag-badge">${phase.badge}</span>
            </div>
            <h4 class="phase-card-title">${phase.title}</h4>
            <p class="phase-card-desc">${phase.description}</p>
            
            ${phase.pillars && phase.pillars.length > 0 ? `
              <div class="phase-pillars-grid">
                ${phase.pillars.map(pillar => `
                  <div class="phase-pillar-item">
                    <div class="phase-pillar-header">
                      <strong class="phase-pillar-title">${pillar.title}</strong>
                    </div>
                    <p class="phase-pillar-desc">${pillar.desc}</p>
                  </div>
                `).join('')}
              </div>
            ` : ''}

            <div class="phase-ticker-wrapper">
              <div class="phase-ticker-label">PROCESOS INCLUIDOS:</div>
              <div class="phase-process-ticker-pill">
                ${checkIcon}
                <span class="phase-ticker-text" id="phase-ticker-text-${pIdx}">${phase.processes[0]}</span>
              </div>
            </div>

            ${phase.videoEmbed ? `
              <div class="phase-video-accordion-wrap">
                <button type="button" class="phase-toggle-video-btn" onclick="togglePhaseVideo(${pIdx})" id="phase-toggle-video-btn-${pIdx}" aria-label="Ver video explicativo">
                  <span class="phase-toggle-text">Ver más</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div class="phase-video-collapsible" id="phase-video-collapse-${pIdx}">
                  <div class="phase-video-embed-container" style="margin-top: 20px; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.12); box-shadow: 0 12px 35px rgba(0, 0, 0, 0.45); width: 100%;">
                    ${phase.videoEmbed}
                  </div>
                </div>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  ` : `
    <div class="service-deliverables-title">Entregables y Metodología Incluidos</div>
    <div class="service-deliverables-grid">
      ${service.deliverables.map(item => `
        <div class="deliverable-chip">${checkIcon} <span>${item}</span></div>
      `).join('')}
    </div>
  `;

  panelContainer.innerHTML = `
    <div class="service-immersive-fluid immersive-animate">
      <div class="service-hero-header">
        <div style="width: 100%;">
          <div class="service-hero-badge">${service.badge}</div>
          <h3 class="service-hero-title">${service.title}</h3>
          <p class="service-hero-desc">${service.fullDesc || service.shortDesc}</p>
        </div>
      </div>

      ${serviceTypesHtml}

      ${brandPackageHtml}

      ${methodologyHtml}

      <div class="service-projects-header" id="serviceProjectsHeader">
        <div class="service-projects-title">
          Portafolio
          <span class="project-count-badge">${projectCountBadge}</span>
        </div>
        <p style="font-size: 0.95rem; color: var(--accent-primary); font-weight: 600; margin: 4px 0 16px 0;">
          Proyectos de ${service.title}
        </p>
      ${projectsGridHtml}
    </div>
  `;

  if (service.phases) {
    initPhaseTickers(service.phases);
  }
  if (service.serviceTypes && service.serviceTypes.length > 0) {
    initAnimationBillboard(service.serviceTypes);
  } else {
    if (billboardInterval) {
      clearInterval(billboardInterval);
      billboardInterval = null;
    }
  }
}

let phaseTickerIntervals = [];

/* ==========================================================================
   Controlador de Cartelera de Animación (10s Rotación Automática)
   ========================================================================== */
let billboardInterval = null;
let currentBillboardIndex = 0;
let billboardData = [];

function initAnimationBillboard(types) {
  if (billboardInterval) {
    clearInterval(billboardInterval);
    billboardInterval = null;
  }
  if (!types || types.length === 0) return;

  billboardData = types;
  currentBillboardIndex = 0;
  updateBillboardDOM(0, false);
  startBillboardTimer();
}

function startBillboardTimer() {
  if (billboardInterval) {
    clearInterval(billboardInterval);
  }

  billboardInterval = setInterval(() => {
    currentBillboardIndex = (currentBillboardIndex + 1) % billboardData.length;
    updateBillboardDOM(currentBillboardIndex, true);
  }, 10000);
}

function updateBillboardDOM(index, animate = true) {
  const item = billboardData[index];
  if (!item) return;

  const stage = document.getElementById('billboardStage');
  if (animate && stage) {
    stage.classList.add('billboard-fade-transition');
    setTimeout(() => {
      renderBillboardContent(item, index);
      stage.classList.remove('billboard-fade-transition');
    }, 200);
  } else {
    renderBillboardContent(item, index);
  }
}

function renderBillboardContent(item, index) {
  const videoPlayer = document.getElementById('billboardVideoPlayer');
  const title = document.getElementById('billboardTitle');
  const subtitle = document.getElementById('billboardSubtitle');
  const desc = document.getElementById('billboardDesc');
  const tags = document.getElementById('billboardTags');

  if (videoPlayer && item.video) {
    videoPlayer.src = item.video;
    videoPlayer.load();
    const playPromise = videoPlayer.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }
  if (title) title.textContent = item.title;
  if (subtitle) subtitle.textContent = item.subtitle || '';
  if (desc) desc.textContent = item.desc;
  if (tags && item.tags) {
    tags.innerHTML = item.tags.map(t => `<span class="service-type-tag">${t}</span>`).join('');
  }
}

window.selectBillboardSlide = function(index) {
  currentBillboardIndex = index;
  updateBillboardDOM(index, true);
  startBillboardTimer();
};

window.prevBillboardSlide = function() {
  currentBillboardIndex = (currentBillboardIndex - 1 + billboardData.length) % billboardData.length;
  updateBillboardDOM(currentBillboardIndex, true);
  startBillboardTimer();
};

window.nextBillboardSlide = function() {
  currentBillboardIndex = (currentBillboardIndex + 1) % billboardData.length;
  updateBillboardDOM(currentBillboardIndex, true);
  startBillboardTimer();
};

window.pauseBillboardTimer = function() {
  if (billboardInterval) {
    clearInterval(billboardInterval);
    billboardInterval = null;
  }
};

window.resumeBillboardTimer = function() {
  startBillboardTimer();
};

function initPhaseTickers(phases) {
  phaseTickerIntervals.forEach(id => clearInterval(id));
  phaseTickerIntervals = [];

  phases.forEach((phase, pIdx) => {
    if (!phase.processes || phase.processes.length <= 1) return;

    let currentProcessIdx = 0;
    const intervalId = setInterval(() => {
      const el = document.getElementById(`phase-ticker-text-${pIdx}`);
      if (!el) {
        clearInterval(intervalId);
        return;
      }

      el.classList.add('fade-out');
      setTimeout(() => {
        currentProcessIdx = (currentProcessIdx + 1) % phase.processes.length;
        el.textContent = phase.processes[currentProcessIdx];
        el.classList.remove('fade-out');
      }, 300);
    }, 3000);

    phaseTickerIntervals.push(intervalId);
  });
}

window.togglePhaseVideo = function(pIdx) {
  const collapseEl = document.getElementById(`phase-video-collapse-${pIdx}`);
  const btn = document.getElementById(`phase-toggle-video-btn-${pIdx}`);
  if (!collapseEl) return;

  const isExpanded = collapseEl.classList.contains('expanded');
  if (isExpanded) {
    collapseEl.classList.remove('expanded');
    if (btn) {
      btn.classList.remove('active');
      const textSpan = btn.querySelector('.phase-toggle-text');
      if (textSpan) textSpan.textContent = 'Ver más';
    }
  } else {
    collapseEl.classList.add('expanded');
    if (btn) {
      btn.classList.add('active');
      const textSpan = btn.querySelector('.phase-toggle-text');
      if (textSpan) textSpan.textContent = 'Ver menos';
    }
  }
};

window.scrollToServicePortfolio = function(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const el = document.getElementById('serviceProjectsHeader');
  if (el) {
    const yOffset = -75;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

/* ==========================================================================
   Carrusel de Publicaciones Destacadas (POST PORTA) - Estilo 3D
   ========================================================================== */
let postActiveIdx = 0;
const postSlideIndices = {};

function renderPostsShowcase() {
  const stage = document.getElementById('postsCarouselStage');
  const prevBtn = document.getElementById('postsCarouselPrevBtn');
  const nextBtn = document.getElementById('postsCarouselNextBtn');

  if (!stage || typeof POST_PORTA_DATA === 'undefined' || !POST_PORTA_DATA.length) return;

  const total = POST_PORTA_DATA.length;

  // Build persistent DOM nodes once if stage is empty
  if (!stage.children.length || stage.querySelectorAll('.post-card-outer-wrap').length !== total) {
    let html = '';
    POST_PORTA_DATA.forEach((post, i) => {
      const slidesCount = post.slides.length;
      html += `
        <div class="post-card-outer-wrap pos-hidden" id="post-card-wrap-${i}" data-idx="${i}">
          <div class="post-porta-card" onclick="handlePostCardClickByIndex(${i})">
            
            <div class="post-tap-zone left" onclick="handlePostTapZoneClick(event, ${i}, -1)"></div>
            <div class="post-tap-zone right" onclick="handlePostTapZoneClick(event, ${i}, 1)"></div>

            <div class="post-slides-wrapper" id="post-slides-track-${post.id}">
              ${post.slides.map(slide => `
                <div class="post-slide-item">
                  ${slide.type === 'video' ? `
                    <video autoplay loop muted playsinline class="post-slide-media">
                      <source src="${encodeURI(slide.src)}" type="video/mp4">
                    </video>
                  ` : `
                    <img src="${encodeURI(slide.src)}" alt="${post.title}" class="post-slide-media" loading="lazy">
                  `}
                </div>
              `).join('')}
            </div>
          </div>

          <div class="post-external-footer" id="post-footer-${post.id}">
            <button class="post-ext-btn" onclick="event.stopPropagation(); changePostSlide('${post.id}', -1)" aria-label="Slide anterior">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <div class="post-slide-dots" id="post-dots-${post.id}">
              ${post.slides.map((_, sIdx) => `<span class="post-dot ${sIdx === 0 ? 'active' : ''}" onclick="event.stopPropagation(); setPostSlide('${post.id}', ${sIdx})"></span>`).join('')}
            </div>
            <button class="post-ext-btn" onclick="event.stopPropagation(); changePostSlide('${post.id}', 1)" aria-label="Siguiente slide">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      `;
    });
    stage.innerHTML = html;

    if (prevBtn) prevBtn.onclick = () => movePostsCarousel(-1);
    if (nextBtn) nextBtn.onclick = () => movePostsCarousel(1);

    // Touch/swipe handling on stage for mobile
    let tx = 0;
    stage.addEventListener('touchstart', e => { tx = e.changedTouches[0].screenX; }, { passive: true });
    stage.addEventListener('touchend', e => {
      const diff = tx - e.changedTouches[0].screenX;
      if (diff > 45) movePostsCarousel(1);
      else if (diff < -45) movePostsCarousel(-1);
    }, { passive: true });
  }

  // Update position classes smoothly
  updatePostsShowcaseState();
}

function handlePostTapZoneClick(event, index, direction) {
  event.stopPropagation();
  const total = POST_PORTA_DATA.length;
  let offset = (index - postActiveIdx) % total;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;

  if (offset === 0) {
    // Si la tarjeta está en el CENTRO: cambiar slide interno
    const post = POST_PORTA_DATA[index];
    if (post) changePostSlide(post.id, direction);
  } else {
    // Si la tarjeta está a un LADO: rotar carrusel para traerla al centro
    movePostsCarousel(offset);
  }
}

function updatePostsShowcaseState() {
  const total = POST_PORTA_DATA.length;
  if (!total) return;

  POST_PORTA_DATA.forEach((post, i) => {
    const cardWrap = document.getElementById(`post-card-wrap-${i}`);
    if (!cardWrap) return;

    // Calculate circular relative offset (-2, -1, 0, +1, +2)
    let offset = (i - postActiveIdx) % total;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    let posClass = 'pos-hidden';
    if (offset === 0) posClass = 'pos-center';
    else if (offset === -1) posClass = 'pos-left-1';
    else if (offset === 1) posClass = 'pos-right-1';
    else if (offset === -2) posClass = 'pos-left-2';
    else if (offset === 2) posClass = 'pos-right-2';

    cardWrap.className = `post-card-outer-wrap ${posClass}`;
    cardWrap.setAttribute('data-offset', offset);

    // Slide track transform
    const slideTrack = document.getElementById(`post-slides-track-${post.id}`);
    const currentSlideIdx = postSlideIndices[post.id] || 0;
    if (slideTrack) {
      slideTrack.style.transform = `translateX(-${currentSlideIdx * 100}%)`;
    }

    // Dots & counter update
    const dotsContainer = document.getElementById(`post-dots-${post.id}`);
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.post-dot');
      dots.forEach((dot, sIdx) => {
        dot.classList.toggle('active', sIdx === currentSlideIdx);
      });
    }

    const counter = document.getElementById(`post-counter-${post.id}`);
    if (counter) {
      counter.textContent = `${currentSlideIdx + 1} / ${post.slides.length}`;
    }
  });
}

function movePostsCarousel(direction) {
  const total = POST_PORTA_DATA.length;
  postActiveIdx = ((postActiveIdx + direction) % total + total) % total;
  updatePostsShowcaseState();
}

function handlePostCardClickByIndex(i) {
  const total = POST_PORTA_DATA.length;
  let offset = (i - postActiveIdx) % total;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;

  if (offset !== 0) {
    movePostsCarousel(offset);
  }
}

function handlePostCardClick(offset) {
  if (offset !== 0) {
    movePostsCarousel(offset);
  }
}

window.changePostSlide = function(postId, direction) {
  const post = POST_PORTA_DATA.find(p => p.id === postId);
  if (!post) return;
  let current = postSlideIndices[postId] || 0;
  current += direction;
  if (current < 0) current = post.slides.length - 1;
  else if (current >= post.slides.length) current = 0;
  postSlideIndices[postId] = current;
  renderPostsShowcase();
};

window.setPostSlide = function(postId, slideIndex) {
  postSlideIndices[postId] = slideIndex;
  renderPostsShowcase();
};

/* ==========================================================================
   Protocol Case Study Modal Handlers
   ========================================================================== */
window.openCaseStudyModal = function(caseStudyId) {
  const modal = document.getElementById('caseStudyModal');
  const container = document.getElementById('caseStudyModalContent');
  if (!modal || !container) return;

  // 1. Caso de Estudio: Diseño de Marca
  const brandData = typeof DISENO_MARCA_PORTFOLIO !== 'undefined' ? DISENO_MARCA_PORTFOLIO.find(p => p.id === caseStudyId || p.caseStudyId === caseStudyId) : null;
  if (brandData) {
    const videoSrc = brandData.video || "";
    const mockups = brandData.mockups || [];
    const fondos = brandData.fondos || [];
    const versiones = brandData.versiones || [];
    const valores = brandData.valores || [];

    const html = `
      <!-- 1. Video Portada Inicial (VIDEO.mp4) -->
      <div class="protocol-hero-video-box">
        <video src="${videoSrc}" autoplay loop muted playsinline controls></video>
      </div>

      <!-- 2. Logo + Concepto de Marca -->
      <div class="protocol-brand-header">
        <div class="protocol-brand-logo-card">
          <img src="${brandData.logo}" alt="${brandData.brandName}">
        </div>
        <div class="protocol-brand-text-content">
          <h3 class="protocol-concept-title">${brandData.conceptTitle || "CONCEPTO DE LA MARCA"}</h3>
          <p class="protocol-concept-desc">${brandData.conceptText}</p>
        </div>
      </div>

      <!-- 3. 3 Mockups Rectangulares -->
      <div class="protocol-mockups-grid brand-mockups-grid">
        ${mockups.map((imgSrc, idx) => `
          <div class="mockup-card-16-9">
            <img src="${imgSrc}" alt="Mockup ${idx + 1}" loading="lazy">
          </div>
        `).join('')}
      </div>

      <!-- 4. Carrusel Infinito de Fondos que se mueve -->
      <div class="protocol-posts-carousel-container brand-fondos-carousel">
        <div class="protocol-posts-track">
          ${[...fondos, ...fondos, ...fondos, ...fondos].map((imgSrc, idx) => `
            <div class="protocol-post-card brand-fondo-card">
              <img src="${imgSrc}" alt="Fondo ${idx + 1}" loading="lazy">
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 5. 3 Versiones del Logo / Isotipo (Tamaño Completo sin texto) -->
      <div class="brand-versions-grid">
        ${versiones.map((ver, idx) => `
          <div class="brand-version-card">
            <img src="${typeof ver === 'string' ? ver : ver.image}" alt="Versión ${idx + 1}" loading="lazy">
          </div>
        `).join('')}
      </div>

      <!-- 6. Misión y Visión -->
      <div class="brand-mission-vision-card">
        <div class="brand-mv-col">
          <h3 class="brand-mv-title">MISIÓN</h3>
          <p class="brand-mv-text">${brandData.misionText}</p>
        </div>
        <div class="brand-mv-col">
          <h3 class="brand-mv-title">VISIÓN</h3>
          <p class="brand-mv-text">${brandData.visionText}</p>
        </div>
      </div>

      <!-- 7. 5 Valores de la Marca -->
      <div class="brand-valores-grid">
        ${valores.map((imgSrc, idx) => `
          <div class="brand-valor-card">
            <img src="${imgSrc}" alt="Valor ${idx + 1}" loading="lazy">
          </div>
        `).join('')}
      </div>
    `;

    container.innerHTML = html;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    return;
  }

  // 2. Caso de Estudio: Gestión de Redes Sociales
  if (typeof GESTION_REDES_PORTFOLIO === 'undefined') return;
  const data = GESTION_REDES_PORTFOLIO.find(p => p.id === caseStudyId || p.caseStudyId === caseStudyId);
  if (!data) return;


  const videoHeroSrc = data.videoHero || data.heroVideo || "";
  const conceptTitleText = data.conceptTitle || "CONCEPTO DE MARCA";
  const conceptDescText = data.conceptDesc || data.conceptText || "";

  // Duplicar publicaciones para carrusel infinito continuo sin huecos
  const postsList = Array.isArray(data.posts) ? data.posts : [];
  const duplicatedPosts = [...postsList, ...postsList];

  // Soportar animaciones como array de objetos o strings
  const animationsList = (data.animations || []).map((anim, idx) => {
    if (typeof anim === 'string') {
      return { src: anim, title: `Reel Estratégico #${idx + 1}` };
    }
    return anim;
  });

  // Soportar métricas
  const campaignsText = data.metricsBanner?.campaigns || data.campaignsCount || "+24 Campañas Realizadas";
  const reachText = data.metricsBanner?.reach || "+36K Alcance Orgánico";
  const socialLinksObj = data.metricsBanner?.socialLinks || {
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    tiktok: "https://www.tiktok.com",
    youtube: "https://www.youtube.com"
  };

  // Soportar links de instagram como objetos o strings
  const igLinksList = (data.instagramLinks || []).map((link, idx) => {
    if (typeof link === 'string') {
      return { url: link, title: `Ver Publicación #${idx + 1} en Instagram` };
    }
    return link;
  });

  const instagramIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`;
  const facebookIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`;
  const youtubeIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>`;
  const tiktokIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>`;

  const html = `
    <!-- 1. Video Portada Inicial -->
    <div class="protocol-hero-video-box">
      <video src="${videoHeroSrc}" autoplay loop muted playsinline></video>
    </div>

    <!-- 2. Concepto de la Marca Header -->
    <div class="protocol-brand-header">
      <div class="protocol-brand-logo-card">
        <img src="${data.logo}" alt="${data.brandName}">
      </div>
      <div class="protocol-brand-text-content">
        <h3 class="protocol-concept-title">${conceptTitleText}</h3>
        <p class="protocol-concept-desc">${conceptDescText}</p>
      </div>
    </div>

    <!-- 3. Carrusel Infinito de Posts -->
    <div class="protocol-posts-carousel-container">
      <div class="protocol-posts-track">
        ${duplicatedPosts.map(imgSrc => `
          <div class="protocol-post-card">
            <img src="${imgSrc}" alt="Post Content" loading="lazy">
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 4. 3 Animaciones Verticales (4:5) -->
    <div class="protocol-animations-grid">
      ${animationsList.map(anim => `
        <div class="animation-card-4-5">
          <video src="${anim.src}" autoplay loop muted playsinline></video>
        </div>
      `).join('')}
    </div>

    <!-- 5. Banner de Métricas & Redes Sociales -->
    <div class="protocol-metrics-banner">
      <div class="metrics-banner-left">
        <div class="metrics-sublabel">CAMPAÑAS REALIZADAS</div>
        <div class="metrics-value-row">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="3"></circle><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(45 12 12)"></ellipse><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-45 12 12)"></ellipse></svg>
          <span class="metrics-big-number">${campaignsText}</span>
        </div>
      </div>
      <div class="metrics-banner-right">
        <div class="metrics-sublabel" style="text-align: right;">REDES SOCIALES GESTIONADAS</div>
        <div class="social-icons-row">
          <a href="${socialLinksObj.instagram}" target="_blank" rel="noopener" class="social-icon-chip" title="Instagram">
            ${instagramIcon}
          </a>
          <a href="${socialLinksObj.facebook}" target="_blank" rel="noopener" class="social-icon-chip" title="Facebook">
            ${facebookIcon}
          </a>
          <a href="${socialLinksObj.youtube}" target="_blank" rel="noopener" class="social-icon-chip" title="YouTube">
            ${youtubeIcon}
          </a>
          <a href="${socialLinksObj.tiktok}" target="_blank" rel="noopener" class="social-icon-chip" title="TikTok">
            ${tiktokIcon}
          </a>
        </div>
      </div>
    </div>

    <!-- 6. 3 Mockups Rectangulares Amplios (16:9) -->
    <div class="protocol-mockups-grid">
      ${(data.mockups || []).map((imgSrc, idx) => `
        <div class="mockup-card-16-9">
          <img src="${imgSrc}" alt="Mockup ${idx + 1}" loading="lazy">
        </div>
      `).join('')}
    </div>

    <!-- 7. Contenido Publicado (Instagram Embeds 4 Columnas) -->
    <div class="protocol-published-section">
      <h3 class="protocol-published-title">Contenido Publicado</h3>
      <div class="protocol-instagram-grid">
        ${igLinksList.map(link => {
          let rawUrl = typeof link === 'string' ? link : (link.url || '');
          rawUrl = rawUrl.trim();
          if (!rawUrl.endsWith('/')) rawUrl += '/';
          const embedUrl = rawUrl.endsWith('embed/') ? rawUrl : `${rawUrl}embed/`;
          return `
            <div class="instagram-embed-card">
              <iframe src="${embedUrl}" width="100%" height="520" frameborder="0" scrolling="no" allowtransparency="true" loading="lazy"></iframe>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  container.innerHTML = html;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeCaseStudyModal = function() {
  const modal = document.getElementById('caseStudyModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
    const videos = modal.querySelectorAll('video');
    videos.forEach(v => v.pause());
  }
};

function initCaseStudyModal() {
  const closeBtn = document.getElementById('caseStudyModalCloseBtn');
  const modal = document.getElementById('caseStudyModal');

  if (closeBtn) {
    closeBtn.addEventListener('click', window.closeCaseStudyModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.closeCaseStudyModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeCaseStudyModal();
    }
  });
}

function renderPortfolio() {
  const container = document.getElementById('portfolioGridContainer');
  if (!container) return;

  const renderGrid = (filter = 'all') => {
    const items = filter === 'all' 
      ? PORTFOLIO_DATA 
      : PORTFOLIO_DATA.filter(p => p.category === filter);

    container.innerHTML = items.map(p => {
      const clickAttr = p.caseStudyId ? `onclick="openCaseStudyModal('${p.caseStudyId}')" style="cursor: pointer;"` : '';
      return `
        <div class="portfolio-card" ${clickAttr}>
          <div class="portfolio-thumb">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
          </div>
          <div class="portfolio-info">
            <span class="portfolio-tag">${p.categoryName} • ${p.location}</span>
            <h3 class="portfolio-name">${p.title}</h3>
            <p style="color: var(--text-muted);">${p.summary}</p>
            <span class="portfolio-metric">${p.metrics}</span>
          </div>
        </div>
      `;
    }).join('');
  };

  renderGrid('all');

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-filter');
      renderGrid(cat);
    });
  });
}

function renderProcess() {
  const container = document.getElementById('processGridContainer');
  if (!container) return;

  container.innerHTML = PROCESS_STEPS.map(step => `
    <div class="process-card">
      <div class="process-number">${step.number}</div>
      <h3 class="service-title">${step.title}</h3>
      <p style="color: var(--text-muted);">${step.desc}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   Blog Section & Buscador Inteligente
   ========================================================================== */
let activeBlogTag = 'todos';

let currentBlogActiveIndex = 0;

function renderBlog(filteredPosts = null) {
  const showcase = document.getElementById('netflixBlogShowcase');
  if (!showcase || typeof BLOG_DATA === 'undefined') return;

  const postsToRender = filteredPosts !== null ? filteredPosts : BLOG_DATA;

  if (!postsToRender.length) {
    showcase.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; background: rgba(33, 35, 51, 0.85); border-radius: 24px; border: 1px dashed rgba(255, 255, 255, 0.2); backdrop-filter: blur(16px);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f76319" stroke-width="2" style="margin-bottom: 16px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <h3 style="font-size: 1.35rem; color: #FFFFFF; margin-bottom: 8px;">No encontramos artículos con esa palabra clave</h3>
        <p style="color: #CBD5E1; max-width: 520px; margin: 0 auto 20px auto; font-size: 0.95rem;">Prueba buscando términos más generales como "estrategia", "branding", "redes", "diseño" o "motion".</p>
        <button onclick="clearBlogSearch()" class="btn btn-secondary" style="padding: 10px 24px;">Ver Todos los Artículos</button>
      </div>
    `;
    return;
  }

  // Sanitize index
  if (currentBlogActiveIndex >= postsToRender.length) {
    currentBlogActiveIndex = 0;
  }

  const activePost = postsToRender[currentBlogActiveIndex] || postsToRender[0];

  showcase.innerHTML = `
    <!-- 1. Hero Feature Banner Principal (Cartelera interactiva que cambia cada 5s) -->
    <div class="netflix-hero-banner" id="netflixHeroBanner">
      <img src="${encodeURI(activePost.image)}" alt="${activePost.title}" class="netflix-hero-bg-img" id="netflixHeroImg">
      <div class="netflix-hero-gradient"></div>

      <div class="netflix-hero-content">
        <div class="netflix-meta-row">
          <span class="netflix-blog-category-text" id="netflixHeroCategory">${activePost.category}</span>
          <span class="netflix-meta-dot">•</span>
          <span class="netflix-read-time" id="netflixHeroReadTime">${activePost.readTime || '5 min de lectura'}</span>
        </div>

        <h2 class="netflix-blog-title" id="netflixHeroTitle">${activePost.title}</h2>
        
        <p class="netflix-blog-desc" id="netflixHeroDesc">${activePost.snippet}</p>

        <button onclick="openBlogModal('${activePost.id}')" class="netflix-blog-btn" id="netflixHeroBtn">
          Leer Artículo Completo →
        </button>
      </div>

      <div class="netflix-hero-dots" id="netflixHeroDots">
        ${postsToRender.map((_, dotIdx) => `
          <span class="netflix-dot-item ${dotIdx === currentBlogActiveIndex ? 'active' : ''}" onclick="selectNetflixBlogItem(${dotIdx})"></span>
        `).join('')}
      </div>
    </div>

    <!-- 2. Sección Netflix Top 3 Más Leídos con Números Gigantes de Contorno -->
    <div class="netflix-top-section">
      <div class="netflix-carousel-header" style="margin-bottom: 20px;">
        <h3 class="netflix-carousel-title">Top 3 <span>Artículos Más Leídos</span></h3>
      </div>

      <div class="netflix-top-grid">
        ${BLOG_DATA.slice(0, 3).map((post, rankIdx) => `
          <div class="netflix-top-item" onclick="openBlogModal('${post.id}')" title="Leer ${post.title}">
            <span class="netflix-top-rank-num">${rankIdx + 1}</span>
            <div class="netflix-top-col">
              <div class="netflix-top-card-wrap">
                <img src="${encodeURI(post.image)}" alt="${post.title}" loading="lazy">
              </div>
              <div class="netflix-top-card-info">
                <h4 class="netflix-top-card-title">${post.title}</h4>
                <div class="netflix-top-badge-row">
                  <span class="netflix-top-badge">TOP ${rankIdx + 1}</span>
                  <span class="netflix-top-date">${post.date || 'Reciente'}</span>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 3. Todos los Artículos (Cuadrícula de 4 Columnas hacia abajo, sin neón naranja) -->
    <div class="netflix-carousel-section">
      <div class="netflix-carousel-header">
        <h3 class="netflix-carousel-title">Todos los <span>Artículos</span></h3>
      </div>

      <div class="netflix-blog-grid-4" id="netflixBlogGrid">
        ${postsToRender.map((post, idx) => `
          <div class="netflix-card-item ${idx === currentBlogActiveIndex ? 'active' : ''}" onclick="handleBlogCardClick('${post.id}', ${idx})" title="Leer ${post.title}">
            <div class="netflix-card-thumb">
              <img src="${encodeURI(post.image)}" alt="${post.title}" loading="lazy">
            </div>
            <div class="netflix-card-content">
              <h4 class="netflix-card-title">${post.title}</h4>
              <span class="netflix-card-sub">${post.date || 'Reciente'}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  startBlogCarteleraTimer();
}

let blogCarteleraTimer = null;

function startBlogCarteleraTimer() {
  if (blogCarteleraTimer) clearInterval(blogCarteleraTimer);
  blogCarteleraTimer = setInterval(() => {
    const modal = document.getElementById('blogArticleModal');
    if (modal && modal.classList.contains('active')) return;

    if (typeof BLOG_DATA !== 'undefined' && BLOG_DATA.length > 0) {
      currentBlogActiveIndex = (currentBlogActiveIndex + 1) % BLOG_DATA.length;
      updateBlogHeroBanner();
    }
  }, 5000);
}

function updateBlogHeroBanner() {
  if (typeof BLOG_DATA === 'undefined' || !BLOG_DATA.length) return;
  const post = BLOG_DATA[currentBlogActiveIndex];
  if (!post) return;

  const heroImg = document.getElementById('netflixHeroImg');
  const heroCat = document.getElementById('netflixHeroCategory');
  const heroRead = document.getElementById('netflixHeroReadTime');
  const heroTitle = document.getElementById('netflixHeroTitle');
  const heroDesc = document.getElementById('netflixHeroDesc');
  const heroBtn = document.getElementById('netflixHeroBtn');
  const heroDots = document.getElementById('netflixHeroDots');

  if (heroImg) {
    heroImg.style.opacity = '0';
    setTimeout(() => {
      heroImg.src = encodeURI(post.image);
      heroImg.alt = post.title;
      heroImg.style.opacity = '1';
    }, 220);
  }
  if (heroCat) heroCat.textContent = post.category;
  if (heroRead) heroRead.textContent = post.readTime || '5 min de lectura';
  if (heroTitle) heroTitle.textContent = post.title;
  if (heroDesc) heroDesc.textContent = post.snippet;
  if (heroBtn) heroBtn.setAttribute('onclick', `openBlogModal('${post.id}')`);

  if (heroDots) {
    heroDots.querySelectorAll('.netflix-dot-item').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentBlogActiveIndex);
    });
  }

  document.querySelectorAll('.netflix-card-item').forEach((card, idx) => {
    card.classList.toggle('active', idx === currentBlogActiveIndex);
  });
}

window.handleBlogCardClick = function(id, index) {
  currentBlogActiveIndex = index;
  updateBlogHeroBanner();
  openBlogModal(id);
  startBlogCarteleraTimer();
};

window.selectNetflixBlogItem = function(index) {
  currentBlogActiveIndex = index;
  updateBlogHeroBanner();
  startBlogCarteleraTimer();
};

function initBlogSearch() {
  const searchInput = document.getElementById('blogSearchInput');
  const clearBtn = document.getElementById('blogSearchClearBtn');
  const tagsContainer = document.getElementById('blogTagsFilter');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (clearBtn) clearBtn.style.display = query ? 'flex' : 'none';
    filterBlogArticles();
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', clearBlogSearch);
  }

  if (tagsContainer) {
    tagsContainer.querySelectorAll('.blog-tag-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        tagsContainer.querySelectorAll('.blog-tag-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeBlogTag = chip.getAttribute('data-tag') || 'todos';
        filterBlogArticles();
      });
    });
  }
}

function filterBlogArticles() {
  const searchInput = document.getElementById('blogSearchInput');
  const resultsInfo = document.getElementById('blogSearchResultsInfo');
  if (typeof BLOG_DATA === 'undefined') return;

  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  let filtered = BLOG_DATA.filter(post => {
    // Tag filter
    if (activeBlogTag !== 'todos') {
      const catLower = post.category.toLowerCase();
      const titleLower = post.title.toLowerCase();
      const matchTag = catLower.includes(activeBlogTag) || titleLower.includes(activeBlogTag);
      if (!matchTag) return false;
    }

    // Text query search
    if (!query) return true;

    const titleMatch = post.title.toLowerCase().includes(query);
    const snippetMatch = post.snippet.toLowerCase().includes(query);
    const categoryMatch = post.category.toLowerCase().includes(query);
    const contentMatch = (post.content || '').toLowerCase().includes(query);

    return titleMatch || snippetMatch || categoryMatch || contentMatch;
  });

  if (resultsInfo) {
    if (query || activeBlogTag !== 'todos') {
      resultsInfo.style.display = 'block';
      resultsInfo.textContent = `Mostrando ${filtered.length} ${filtered.length === 1 ? 'artículo encontrado' : 'artículos encontrados'}`;
    } else {
      resultsInfo.style.display = 'none';
    }
  }

  renderBlog(filtered);
}

function clearBlogSearch() {
  const searchInput = document.getElementById('blogSearchInput');
  const clearBtn = document.getElementById('blogSearchClearBtn');
  const resultsInfo = document.getElementById('blogSearchResultsInfo');
  const tagsContainer = document.getElementById('blogTagsFilter');

  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  if (resultsInfo) resultsInfo.style.display = 'none';

  activeBlogTag = 'todos';
  if (tagsContainer) {
    tagsContainer.querySelectorAll('.blog-tag-chip').forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-tag') === 'todos');
    });
  }

  filterBlogArticles();
}

function renderTestimonials() {
  const container = document.getElementById('testimonialsGridContainer');
  if (!container) return;

  const starIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;

  const duplicatedList = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  container.innerHTML = `
    <div class="testimonials-carousel-viewport">
      <div class="testimonials-infinite-track">
        ${duplicatedList.map(item => `
          <div class="purple-testimonial-card">
            <div class="testimonial-stars-row">
              ${starIcon.repeat(item.rating || 5)}
            </div>
            <p class="purple-testimonial-quote">"${item.text}"</p>
            <div class="testimonial-author-wrapper">
              ${item.avatar ? `
                <div class="testimonial-avatar-wrap">
                  <img src="${item.avatar}" alt="${item.name}" class="testimonial-avatar-img" loading="lazy" onerror="this.parentElement.style.display='none'">
                </div>
              ` : ''}
              <div class="testimonial-author-info">
                <h4 class="purple-testimonial-author">${item.name}</h4>
                ${item.role ? `<span class="purple-testimonial-role">${item.role}</span>` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderFaq() {
  const container = document.getElementById('faqAccordionContainer');
  if (!container || typeof FAQ_DATA === 'undefined') return;

  container.innerHTML = FAQ_DATA.map((faq, idx) => `
    <div class="faq-accordion-item">
      <button type="button" class="faq-accordion-header" onclick="toggleFaqItem('${faq.id}')">
        <span class="faq-question-text">${faq.question}</span>
        <span class="faq-chevron-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </span>
      </button>
      <div class="faq-accordion-body">
        <p class="faq-answer-text">${faq.answer}</p>
      </div>
    </div>
  `).join('');
}

window.toggleFaqItem = function(faqId) {
  const items = document.querySelectorAll('.faq-accordion-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-accordion-header');
    if (btn && btn.getAttribute('onclick').includes(faqId)) {
      item.classList.toggle('active');
    }
  });
};

/* Modal Blog Reader */
window.openBlogModal = function(postId) {
  const post = BLOG_DATA.find(p => p.id === postId);
  if (!post) return;

  const modal = document.getElementById('blogArticleModal');
  const body = document.getElementById('blogArticleBody');

  if (modal && body) {
    body.innerHTML = `
      <div style="margin-bottom: 28px;">
        <button type="button" onclick="closeBlogModal()" style="background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.18); border-radius: 10px; color: #a3a8c3; padding: 10px 20px; font-size: 0.9rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; font-family: 'Poppins', sans-serif; transition: all 0.3s ease;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Volver a artículos
        </button>
      </div>
      <div class="blog-meta" style="margin-bottom: 16px;">
        <span class="blog-category-badge">${post.category}</span>
        <span>•</span>
        <span>Por ${post.author}</span>
        <span>•</span>
        <span>${post.date}</span>
      </div>
      <h1 class="section-title" style="margin-bottom: 24px; font-size: clamp(1.85rem, 3.5vw, 2.6rem); line-height: 1.25;">${post.title}</h1>
      <img src="${encodeURI(post.image)}" alt="${post.title}" style="width: 100%; max-height: 480px; object-fit: cover; border-radius: 16px; margin-bottom: 32px;">
      <div class="article-body">
        ${post.content}
      </div>
      <div style="margin-top: 56px; padding-top: 32px; border-top: 1px solid var(--border-color); display: flex; justify-content: center;">
        <button type="button" onclick="closeBlogModal()" style="background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.16); border-radius: 12px; color: #cbd5e1; padding: 12px 28px; font-size: 0.95rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; font-family: 'Poppins', sans-serif; transition: all 0.3s ease;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          Volver a artículos
        </button>
      </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
  }
};

window.closeBlogModal = function() {
  const modal = document.getElementById('blogArticleModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

/* Close modal on backdrop click or ESC */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeBlogModal();
});

/* ==========================================================================
   Automatic Background Contact Form Submission (Zero Redirects)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('mainContactForm');
  const statusBox = document.getElementById('contactFormStatus');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Enviar Mensaje';

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite; display: inline-block; vertical-align: middle; margin-right: 8px;"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
        Enviando mensaje...
      `;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/digital@visualoscart.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      const resData = await response.json();

      if (resData.success === "true" || resData.success === true) {
        form.reset();
        if (statusBox) {
          statusBox.style.display = 'block';
          statusBox.innerHTML = `
            <div style="background: rgba(37, 211, 102, 0.15); border: 1.5px solid #25D366; color: #FFFFFF; padding: 22px 18px; border-radius: 16px; text-align: center; box-shadow: 0 10px 30px rgba(37, 211, 102, 0.25);">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2.5" style="margin: 0 auto 12px auto; display: block;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <h4 style="font-size: 1.3rem; font-weight: 800; color: #FFFFFF; margin-bottom: 6px; font-family: 'Poppins', sans-serif;">¡Mensaje Enviado Exitosamente!</h4>
              <p style="font-size: 0.98rem; color: #CBD5E1; line-height: 1.5;">Tus datos se enviaron directamente a <strong>digital@visualoscart.com</strong>. Te responderemos a la brevedad.</p>
            </div>
          `;
        }
      } else if (resData.message && resData.message.includes('Activation')) {
        if (statusBox) {
          statusBox.style.display = 'block';
          statusBox.innerHTML = `
            <div style="background: rgba(247, 99, 25, 0.15); border: 1.5px solid #f76319; color: #FFFFFF; padding: 22px 18px; border-radius: 16px; text-align: center;">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#f76319" stroke-width="2.5" style="margin: 0 auto 12px auto; display: block;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <h4 style="font-size: 1.2rem; font-weight: 800; color: #FFFFFF; margin-bottom: 8px; font-family: 'Poppins', sans-serif;">¡Casi listo! Falta activar el correo</h4>
              <p style="font-size: 0.95rem; color: #CBD5E1; line-height: 1.5; margin-bottom: 14px;">Abre <strong>digital@visualoscart.com</strong> (o la carpeta Spam) y presiona <strong>"Activate Form"</strong> en el correo de FormSubmit una sola vez.</p>
              <a href="https://wa.me/50661078028?text=Hola%20Visual%20Oscart!%20Quiero%20enviar%20mi%20solicitud%20directa" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #7C3AED, #6366F1); color: #FFF; font-weight: 700; padding: 10px 22px; border-radius: 30px; text-decoration: none; font-size: 0.9rem; box-shadow: 0 4px 15px rgba(124,58,237,0.4);">
                Enviar por WhatsApp Directo
              </a>
            </div>
          `;
        }
      } else {
        throw new Error('FormSubmit returned error');
      }
    } catch (err) {
      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.innerHTML = `
          <div style="background: rgba(124, 58, 237, 0.15); border: 1.5px solid #7C3AED; color: #FFFFFF; padding: 22px 18px; border-radius: 16px; text-align: center;">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2.5" style="margin: 0 auto 12px auto; display: block;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <h4 style="font-size: 1.25rem; font-weight: 800; color: #FFFFFF; margin-bottom: 6px; font-family: 'Poppins', sans-serif;">¡Gracias por tu mensaje!</h4>
            <p style="font-size: 0.95rem; color: #CBD5E1; line-height: 1.5; margin-bottom: 12px;">Se ha registrado tu solicitud para <strong>digital@visualoscart.com</strong>.</p>
            <a href="https://wa.me/50661078028?text=Hola%20Visual%20Oscart!%20Quiero%20enviar%20mi%20solicitud%20por%20WhatsApp" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #7C3AED, #6366F1); color: #FFF; font-weight: 700; padding: 10px 22px; border-radius: 30px; text-decoration: none; font-size: 0.9rem; box-shadow: 0 4px 15px rgba(124,58,237,0.4);">
              Enviar por WhatsApp Directo
            </a>
          </div>
        `;
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  });
}

/* ==========================================================================
   Sección Interactiva de Equipo (Auto-Rotación 10s + Tabs)
   ========================================================================== */
const EQUIPO_MEMBERS = [
  {
    id: 0,
    name: "Oscar Chavarría",
    role: "Lead Manager",
    photo: "EQUIPO/1%20OSCAR.jpg?v=20261015",
    desc: "Lidera la visión y dirección creativa de Visual Oscart, coordinando proyectos integrales, animación digital 3D y campañas estratégicas en redes sociales para impulsar marcas de alto impacto.",
    softwares: [
      "APPS/OSCAR%201.jpg?v=20261015",
      "APPS/OSCAR%202.jpg?v=20261015",
      "APPS/OSCAR%203.jpg?v=20261015",
      "APPS/OSCAR%204.jpg?v=20261015"
    ]
  },
  {
    id: 1,
    name: "Mario Chavarría",
    role: "Producción Audiovisual",
    photo: "EQUIPO/3%20MARIO.jpg?v=20261015",
    desc: "Especialista en producción y edición de video, postproducción avanzada, corrección de color y motion graphics, aportando dinamismo y el máximo estándar visual a cada pieza publicitaria.",
    softwares: [
      "APPS/MARIO%201.jpg?v=20261015",
      "APPS/MARIO%202.jpg?v=20261015",
      "APPS/MARIO%203.jpg?v=20261015",
      "APPS/MARIO%204.jpg?v=20261015"
    ]
  },
  {
    id: 2,
    name: "Annemarie Regniet",
    role: "Community Manager",
    photo: "EQUIPO/2%20ANNE.jpg?v=20261015",
    desc: "Gestiona la presencia digital de las marcas en redes sociales, estructurando calendarios estratégicos, programación organizada de publicaciones e interacción constante con la comunidad.",
    softwares: [
      "APPS/ANNE%201.jpg?v=20261015",
      "APPS/ANNE%202.jpg?v=20261015",
      "APPS/ANNE%203.jpg?v=20261015",
      "APPS/ANNE%204.jpg?v=20261015"
    ]
  }
];

/* ==========================================================================
   Sección Interactiva de Equipo - Acordeón Horizontal Dinámico
   ========================================================================== */
window.activateAccordionCard = function(index) {
  const track = document.getElementById('equipoAccordionTrack');
  const cards = document.querySelectorAll('.equipo-accordion-card');
  if (!cards || cards.length === 0) return;

  if (track) track.classList.add('has-active');

  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
};

window.resetAccordionCards = function() {
  const track = document.getElementById('equipoAccordionTrack');
  const cards = document.querySelectorAll('.equipo-accordion-card');
  if (!cards || cards.length === 0) return;

  if (track) track.classList.remove('has-active');
  cards.forEach(card => card.classList.remove('active'));
};

window.toggleAccordionCard = function(index) {
  const cards = document.querySelectorAll('.equipo-accordion-card');
  if (cards[index] && cards[index].classList.contains('active')) {
    window.resetAccordionCards();
  } else {
    window.activateAccordionCard(index);
  }
};

function initEquipoShowcase() {
  window.resetAccordionCards();
}

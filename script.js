document.addEventListener('DOMContentLoaded', function() {

    // Elementos DOM
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const scrollProgressBar = document.getElementById('scroll-progress-bar');
    const video = document.getElementById('hero-video');

    // ================================
    // VIDEO HANDLING
    // ================================
    if (video) {
        // Asegurar que el video se reproduzca
        video.play().catch(e => {
            console.log('Autoplay prevented, user interaction required');
        });

        // Reiniciar video si se pausa
        video.addEventListener('pause', () => {
            video.play().catch(() => {});
        });

        // Loop suave
        video.addEventListener('ended', () => {
            video.currentTime = 0;
            video.play().catch(() => {});
        });
    }

    // ================================
    // HERO SCROLL EFFECT - VIDEO FIJO
    // ================================
    const heroSection = document.querySelector('.hero-section');
    const videoWrapper = document.querySelector('.video-wrapper');
    const heroContent = document.querySelector('.hero-content-overlay');

    function handleHeroScroll() {
        if (!heroSection || !videoWrapper || !heroContent) return;

        const scrollY = window.pageYOffset;
        const viewportHeight = window.innerHeight;
        const heroHeight = heroSection.offsetHeight;

        // Calcular progreso dentro del hero (0 a 1)
        const scrollProgress = Math.min(Math.max(scrollY / (heroHeight - viewportHeight), 0), 1);

        // El overlay y texto aparecen gradualmente
        // 0% - 10%: Video normal, sin overlay
        // 10% - 35%: Overlay aparece gradualmente
        // 35% - 100%: Texto visible de forma estática antes de soltar

        if (scrollProgress < 0.1) {
            // Sin overlay
            videoWrapper.classList.remove('overlay-active');
            heroContent.classList.remove('visible');
        } else if (scrollProgress < 0.35) {
            // Overlay apareciendo
            videoWrapper.classList.add('overlay-active');
            heroContent.classList.remove('visible');
        } else {
            // Overlay completo + texto visible
            videoWrapper.classList.add('overlay-active');
            heroContent.classList.add('visible');
        }
    }

    // ================================
    // NAVEGACIÓN MÓVIL
    // ================================
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ================================
    // NAVBAR SCROLL EFFECT
    // ================================
    function updateNavbar() {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // ================================
    // SCROLL PROGRESS BAR
    // ================================
    function updateScrollProgress() {
        const scrollY = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollY / docHeight) * 100;

        if (scrollProgressBar) {
            scrollProgressBar.style.width = `${scrollPercent}%`;
        }
    }

    // ================================
    // ACTIVE NAV LINK ON SCROLL
    // ================================
    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }

    // ================================
    // SCROLL REVEAL ANIMATIONS
    // ================================
    const revealElements = document.querySelectorAll('.service-card, .section-header, .about-content, .contact-info, .contact-form-container, .stat-item');

    const revealStyle = document.createElement('style');
    revealStyle.textContent = `
        .service-card, .section-header, .about-content, .contact-info, .contact-form-container, .stat-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        .service-card:nth-child(1) { transition-delay: 0s; }
        .service-card:nth-child(2) { transition-delay: 0.1s; }
        .service-card:nth-child(3) { transition-delay: 0.2s; }
        .service-card:nth-child(4) { transition-delay: 0.3s; }
    `;
    document.head.appendChild(revealStyle);

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    }

    // ================================
    // COUNTER ANIMATION
    // ================================
    const counters = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    function animateCounters() {
        const windowHeight = window.innerHeight;
        const aboutSection = document.querySelector('.about-section');

        if (!aboutSection || countersAnimated) return;

        const sectionTop = aboutSection.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 200) {
            countersAnimated = true;

            counters.forEach(counter => {
                const target = +counter.getAttribute('data-count');
                const increment = target / 100;

                const updateCount = () => {
                    const current = +counter.innerText;
                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment);
                        setTimeout(updateCount, 40); // Lento para apreciar la subida
                    } else {
                        counter.innerText = target;
                        // Activar explosión neón soft
                        counter.classList.add('neon-explode');
                        const suffix = counter.nextElementSibling;
                        if (suffix && suffix.classList.contains('stat-suffix')) {
                            suffix.classList.add('neon-explode');
                        }
                    }
                };

                updateCount();
            });
        }
    }

    // ================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ================================
    // FORM SUBMISSION
    // ================================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = `
                <span>Enviando...</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-dasharray="32">
                        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
                    </circle>
                </svg>
            `;
            submitBtn.disabled = true;

            // Datos a enviar a WhatsApp
            const nameStr = this.querySelector('#name').value;
            const emailStr = this.querySelector('#email').value;
            const messageStr = this.querySelector('#message').value;

            const text = `Hola Visual Oscart! Soy *${nameStr}* (${emailStr}).\n\nTe escribo para lo siguiente:\n${messageStr}`;
            const waUrl = `https://wa.me/50661078028?text=${encodeURIComponent(text)}`;

            // Redirigir a WhatsApp
            window.open(waUrl, '_blank');

            // Mostrar estado de éxito en el botón
            submitBtn.innerHTML = `
                <span>¡Abriendo WhatsApp!</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
            submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

            setTimeout(() => {
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        });
    }

    // ================================
    // TEAM DECK INTERACTION
    // ================================
    const teamDeck = document.querySelector('.team-deck');
    const teamCards = document.querySelectorAll('.team-card');

    if (teamCards.length > 0) {
        teamCards.forEach((card) => {
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                // Si la tarjeta ya estaba activa, desactívala
                if (card.classList.contains('active')) {
                    card.classList.remove('active');
                    teamDeck.classList.remove('has-active');
                } else {
                    // Cierra las demás
                    teamCards.forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                    teamDeck.classList.add('has-active');
                }
            });
        });

        // Click fuera para cerrar
        document.addEventListener('click', (e) => {
            if (teamDeck && teamDeck.classList.contains('has-active') && !e.target.closest('.team-card')) {
                teamCards.forEach(c => c.classList.remove('active'));
                teamDeck.classList.remove('has-active');
            }
        });
    }

    // ================================
    // SERVICE MODALS
    // ================================
    const serviceExpands = document.querySelectorAll('.service-expand');
    const modalsOverlay = document.getElementById('modals-overlay');
    const serviceModals = document.querySelectorAll('.service-modal');
    const modalCloses = document.querySelectorAll('.modal-close');

    if (serviceExpands.length > 0) {
        serviceExpands.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const modal = document.getElementById(`modal-${index}`);
                if (modal) {
                    modalsOverlay.classList.add('active');
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Bloquear scroll
                }
            });
        });

        const closeModal = () => {
            modalsOverlay.classList.remove('active');
            serviceModals.forEach(modal => modal.classList.remove('active'));
            document.body.style.overflow = ''; // Restaurar scroll
        };

        modalCloses.forEach(btn => {
            btn.addEventListener('click', closeModal);
        });

        if (modalsOverlay) {
            modalsOverlay.addEventListener('click', closeModal);
        }
    }

    // ================================
    // COMPANY MEGA MODAL & ORBITS
    // ================================
    const btnTeamReveal = document.getElementById('btn-team-reveal');
    const companyModal = document.getElementById('company-modal');

    if (btnTeamReveal && companyModal) {
        btnTeamReveal.addEventListener('click', (e) => {
            e.preventDefault();
            companyModal.classList.add('active');
            modalsOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Reset deck en caso de que hubieran seleccionado una carta antes
            const teamCards = companyModal.querySelectorAll('.team-card');
            const teamDeck = companyModal.querySelector('.team-deck');
            teamCards.forEach(c => c.classList.remove('active'));
            if (teamDeck) teamDeck.classList.remove('has-active');
        });
    }

    // ================================
    // PORTFOLIO MODAL
    // ================================
    const btnPortfolio = document.getElementById('btn-portfolio');
    const portfolioModal = document.getElementById('portfolio-modal');

    if (btnPortfolio && portfolioModal) {
        btnPortfolio.addEventListener('click', (e) => {
            e.preventDefault();
            portfolioModal.classList.add('active');
            modalsOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Parallax para tarjetas laterales del modal portafolio
    const parallaxCards = document.querySelectorAll('.parallax-card');
    if (portfolioModal && parallaxCards.length > 0) {
        portfolioModal.addEventListener('mousemove', (e) => {
            const rect = portfolioModal.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const moveX = (x - centerX) * 0.01;
            const moveY = (y - centerY) * 0.01;

            parallaxCards.forEach((card, index) => {
                const factor = ((index % 5) + 1) * 0.4;
                card.style.marginLeft = `${moveX * factor}px`;
                card.style.marginTop = `${moveY * factor}px`;
            });
        });

        portfolioModal.addEventListener('mouseleave', () => {
            parallaxCards.forEach(card => {
                card.style.marginLeft = '';
                card.style.marginTop = '';
            });
        });
    }

    // Botones de categorías del portafolio
    const portfolioCatBtns = document.querySelectorAll('.portfolio-cat-btn');
    const categoriesContainer = document.getElementById('portfolio-categories-container');
    const brandsGridContainer = document.getElementById('brands-grid-container');
    const brandsGrid = document.getElementById('brands-grid');
    const btnBackCategories = document.getElementById('btn-back-categories');
    const brandDetailsModal = document.getElementById('brand-details-modal');
    const brandModalClose = document.getElementById('brand-modal-close');

    const portfolioLogoCont = document.querySelector('.portfolio-logo-container');
    const portfolioTitle = document.querySelector('.portfolio-title');
    const portfolioSubtitle = document.querySelector('.portfolio-subtitle');

    const redesDetailsModal = document.getElementById('redes-details-modal');
    const redesModalClose = document.getElementById('redes-modal-close');

    const animacionDetailsModal = document.getElementById('animacion-details-modal');
    const animacionModalClose = document.getElementById('animacion-modal-close');
    const lightboxOverlay = document.getElementById('animacion-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    portfolioCatBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            
            // Efecto visual de click
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);

            if (category === 'identidad') {
                if (categoriesContainer) categoriesContainer.style.display = 'none';
                if (brandsGridContainer) {
                    brandsGridContainer.style.display = 'flex';
                    renderBrandsGrid(window.marcasData, 'IDENTIDAD VISUAL', 'brand');
                }
                if (portfolioLogoCont) portfolioLogoCont.style.display = 'none';
                if (portfolioTitle) portfolioTitle.style.display = 'none';
                if (portfolioSubtitle) portfolioSubtitle.innerHTML = 'Selecciona una marca para ver en detalle';
            } else if (category === 'redes') {
                if (categoriesContainer) categoriesContainer.style.display = 'none';
                if (brandsGridContainer) {
                    brandsGridContainer.style.display = 'flex';
                    renderBrandsGrid(window.redesData, 'GESTIN DE REDES', 'redes');
                }
                if (portfolioLogoCont) portfolioLogoCont.style.display = 'none';
                if (portfolioTitle) portfolioTitle.style.display = 'none';
                if (portfolioSubtitle) portfolioSubtitle.innerHTML = 'Selecciona una marca para ver en detalle';
            } else if (category === 'animacion') {
                if (categoriesContainer) categoriesContainer.style.display = 'none';
                if (brandsGridContainer) {
                    brandsGridContainer.style.display = 'flex';
                    renderBrandsGrid(window.animacionData, 'ANIMACIN DIGITAL', 'animacion');
                }
                if (portfolioLogoCont) portfolioLogoCont.style.display = 'none';
                if (portfolioTitle) portfolioTitle.style.display = 'none';
                if (portfolioSubtitle) portfolioSubtitle.innerHTML = 'Selecciona un proyecto para ver en detalle';
            }
        });
    });

    if (btnBackCategories) {
        btnBackCategories.addEventListener('click', () => {
            if (brandsGridContainer) brandsGridContainer.style.display = 'none';
            if (categoriesContainer) categoriesContainer.style.display = 'grid'; // O la visualización que tenía
            
            // Restaurar encabezados
            if (portfolioLogoCont) portfolioLogoCont.style.display = 'block';
            if (portfolioTitle) portfolioTitle.style.display = 'block';
            if (portfolioSubtitle) portfolioSubtitle.innerHTML = 'Selecciona una categoría para descubrir nuestros trabajos';
        });
    }

    // Cierre del nuevo modal de Redes
    if (redesModalClose) {
        redesModalClose.addEventListener('click', (e) => {
            e.stopPropagation();
            if (redesDetailsModal) {
                redesDetailsModal.classList.remove('active');
                document.body.style.overflow = '';
                const bgVideo = document.getElementById('redes-video');
                if (bgVideo) bgVideo.pause();
                
                // Limpiar grid de videos dinámicos para cortar reproducción
                const animGridEl = document.getElementById('redes-anim-grid');
                if (animGridEl) animGridEl.innerHTML = '';
            }
        });
    }

    // Cierre y gestión del Modal Animación Digital
    if (animacionModalClose) {
        animacionModalClose.addEventListener('click', (e) => {
            e.stopPropagation();
            if (animacionDetailsModal) {
                animacionDetailsModal.classList.remove('active');
                document.body.style.overflow = '';
                const bgVideo = document.getElementById('animacion-video');
                const pVideo = document.getElementById('animacion-video-proceso');
                const rVideo = document.getElementById('animacion-video-renders');
                if (bgVideo) bgVideo.pause();
                if (pVideo) pVideo.pause();
                if (rVideo) rVideo.pause();
                
                const frameContainer = document.getElementById('animacion-youtube-container');
                if (frameContainer) frameContainer.innerHTML = '';
            }
        });
    }

    if (lightboxClose && lightboxOverlay) {
        lightboxClose.addEventListener('click', () => {
            lightboxOverlay.classList.remove('active');
        });
        lightboxOverlay.addEventListener('click', (e) => {
            if (e.target === lightboxOverlay) lightboxOverlay.classList.remove('active');
        });
    }

    // Funcionalidad Dynamic Brands Generalizada
    function renderBrandsGrid(dataList = [], subtitleName = 'PORTAFOLIO', modalType = 'brand') {
        if (!brandsGrid) return;
        brandsGrid.innerHTML = ''; // Limpiar
        
        dataList.forEach((marca, index) => {
            const btn = document.createElement('button');
            btn.className = 'brand-card-item';
            btn.style.animationDelay = `${index * 0.1}s`;
            
            // Build inline style for background if portada exists
            const bgStyle = marca.portada 
                ? `background-image: url('${marca.portada}'); background-size: cover; background-position: center; filter: brightness(0.4) saturate(0.8); opacity: 0.5;` 
                : '';

            btn.innerHTML = `
                <div class="bc-bg" style="${bgStyle}"></div>
                <div class="bc-content">
                    <div class="bc-logo"><img src="${marca.logoBtn}" alt="${marca.name}"></div>
                    <div class="bc-info">
                        <h3>${marca.name.toUpperCase()}</h3>
                        <span>${subtitleName}</span>
                    </div>
                </div>
            `;
            btn.addEventListener('click', () => {
                if (modalType === 'brand') openBrandModal(marca);
                else if (modalType === 'redes') openRedesModal(marca);
                else if (modalType === 'animacion') openAnimacionModal(marca);
            });
            brandsGrid.appendChild(btn);
        });
    }

    function openBrandModal(marca) {
        if (!brandDetailsModal) return;

        // Populate elements
        const titleEl = document.getElementById('brand-title');
        const videoEl = document.getElementById('brand-video');
        const conceptoEl = document.getElementById('brand-concepto-text');
        const profileImg = document.getElementById('brand-profile-img');
        const mockupsCont = document.getElementById('brand-mockups-container');
        const track1 = document.getElementById('carousel-track-1');
        const track2 = document.getElementById('carousel-track-2');
        const versionsCont = document.getElementById('brand-versions-container');
        const misionEl = document.getElementById('brand-mision-text');
        const visionEl = document.getElementById('brand-vision-text');
        const valuesCont = document.getElementById('brand-values-container');

        if (titleEl) titleEl.textContent = marca.name;
        if (videoEl) {
            videoEl.src = marca.video;
            videoEl.play().catch(e => console.log('Autoplay error', e));
        }
        if (conceptoEl) conceptoEl.textContent = marca.concepto;
        if (profileImg) profileImg.src = marca.logoBtn;
        if (misionEl) misionEl.textContent = marca.mision;
        if (visionEl) visionEl.textContent = marca.vision;

        // Apply Portada to the whole Philosophy section
        const philSection = document.querySelector('.brand-philosophy-section');
        if (philSection) {
            if (marca.portada) {
                philSection.style.backgroundImage = `linear-gradient(rgba(22, 22, 22, 0.85), rgba(22, 22, 22, 0.85)), url('${marca.portada}')`;
                philSection.style.backgroundSize = 'cover';
                philSection.style.backgroundPosition = 'center';
            } else {
                philSection.style.backgroundImage = 'none';
            }
        }

        // Mockups
        if (mockupsCont) {
            mockupsCont.innerHTML = '';
            marca.mockups.forEach(m => {
                const img = document.createElement('img');
                img.src = m;
                img.className = 'brand-mockup-img';
                // Efecto de aparición cuando se haga scroll se podría añadir (usando IntersectionObserver)
                setTimeout(() => img.classList.add('in-view'), 300);
                mockupsCont.appendChild(img);
            });
        }

        // Fondos (Carrusel)
        if (track1 && track2) {
            track1.innerHTML = '';
            track2.innerHTML = '';
            // Duplicamos los fondos para asegurar el infinite loop suave
            const fondosHTML = marca.fondos.map(f => `<img src="${f}" alt="Fondo">`).join('');
            track1.innerHTML = fondosHTML;
            track2.innerHTML = fondosHTML;
        }

        // Versiones
        if (versionsCont) {
            versionsCont.innerHTML = '';
            marca.versiones.forEach(v => {
                const img = document.createElement('img');
                img.src = v;
                versionsCont.appendChild(img);
            });
        }

        // Valores
        if (valuesCont) {
            valuesCont.innerHTML = '';
            marca.valores.forEach(v => {
                const img = document.createElement('img');
                img.src = v;
                valuesCont.appendChild(img);
            });
        }

        // Mostrar modal
        brandDetailsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    let redesVideoInterval = null;

    function openRedesModal(marca) {
        if (!redesDetailsModal) return;

        // Limpiar ciclos anteriores
        if (redesVideoInterval) clearInterval(redesVideoInterval);

        const titleEl = document.getElementById('redes-title');
        const videoEl = document.getElementById('redes-video');
        const conceptoEl = document.getElementById('redes-concepto-text');
        const profileImg = document.getElementById('redes-profile-img');
        const track1 = document.getElementById('redes-carousel-track-1');
        const track2 = document.getElementById('redes-carousel-track-2');
        const animGridEl = document.getElementById('redes-anim-grid');
        const socialIconsCont = document.getElementById('redes-social-icons');
        const campanasNumEl = document.getElementById('redes-campanas-num');
        const mockupsCont = document.getElementById('redes-mockups-container');
        const linksCont = document.getElementById('redes-links-container');

        // Fondo dinámico para el recuadro de estadísticas (Portada)
        const statsStrip = redesDetailsModal.querySelector('.redes-stats-strip');
        if (statsStrip) {
            if (marca.portada) {
                statsStrip.style.backgroundImage = `linear-gradient(rgba(22, 22, 22, 0.75), rgba(22, 22, 22, 0.75)), url('${marca.portada}')`;
                statsStrip.style.backgroundSize = 'cover';
                statsStrip.style.backgroundPosition = 'center';
            } else {
                statsStrip.style.backgroundImage = 'none';
            }
        }

        // Contador estático (Animado desde data)
        if (campanasNumEl) {
            campanasNumEl.textContent = marca.campanas ? marca.campanas : "21"; 
        }

        // Iconos de redes sociales animados flotantes Dinámicos
        if (socialIconsCont) {
            const redesIconsMap = {
                instagram: `<div class="redes-icon-box" style="animation-delay: 0s;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></div>`,
                facebook: `<div class="redes-icon-box" style="animation-delay: 0.4s;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></div>`,
                youtube: `<div class="redes-icon-box" style="animation-delay: 0.8s;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></div>`,
                tiktok: `<div class="redes-icon-box" style="animation-delay: 1.2s;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg></div>`,
                linkedin: `<div class="redes-icon-box" style="animation-delay: 0.8s;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></div>`,
                web: `<div class="redes-icon-box" style="animation-delay: 1.2s;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>`
            };

            const selectedRedes = marca.redes || ['instagram', 'facebook', 'youtube', 'tiktok'];
            
            socialIconsCont.innerHTML = selectedRedes.map((r, i) => {
                // Reescribir animation-delay según el índice para mantener el efecto de ola flotante 
                let delay = i * 0.4;
                let htmlBox = redesIconsMap[r];
                if(htmlBox) {
                    return htmlBox.replace(/animation-delay: [^;]+;/, `animation-delay: ${delay}s;`);
                }
                return '';
            }).join('');
        }

        if (titleEl) titleEl.textContent = marca.name;
        if (videoEl) {
            videoEl.src = marca.video;
            videoEl.play().catch(e => console.log('Autoplay error', e));
        }
        if (conceptoEl) conceptoEl.textContent = marca.concepto;
        if (profileImg) profileImg.src = marca.perfil || marca.logoBtn;

        // Fondos/Posts (Carrusel)
        if (track1 && track2 && marca.posts) {
            const postsHTML = marca.posts.map(p => `<img src="${p}" alt="Post">`).join('');
            track1.innerHTML = postsHTML;
            track2.innerHTML = postsHTML;
        }

        // Animación dinámica 3 Columnas (grid de videos)
        if (animGridEl && marca.animaciones) {
            animGridEl.innerHTML = '';
            // Tomamos hasta 3 videos
            const videosToShow = marca.animaciones.slice(0, 3);
            videosToShow.forEach((animSrc, index) => {
                const videoCont = document.createElement('video');
                videoCont.className = 'redes-anim-grid-video';
                videoCont.src = animSrc;
                videoCont.muted = true;
                videoCont.playsInline = true;
                videoCont.autoplay = true;
                videoCont.loop = true;
                animGridEl.appendChild(videoCont);
                // Aseguramos que se reproduzcan
                videoCont.play().catch(e => console.log('Grid video autoplay error', e));
            });
        }

        // Mockups
        if (mockupsCont && marca.mockups) {
            mockupsCont.innerHTML = '';
            marca.mockups.forEach(m => {
                const img = document.createElement('img');
                img.src = m;
                mockupsCont.appendChild(img);
            });
        }

        // Instagram Embeds (LINKS)
        if (linksCont && marca.links) {
            linksCont.innerHTML = '';
            marca.links.forEach(linkUrl => {
                const iframe = document.createElement('iframe');
                iframe.src = linkUrl;
                iframe.width = "400";
                iframe.height = "520";
                iframe.frameBorder = "0";
                iframe.scrolling = "no";
                iframe.allowTransparency = "true";
                linksCont.appendChild(iframe);
            });
        }

        // Mostrar nuevo modal
        redesDetailsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    if (brandModalClose) {
        brandModalClose.addEventListener('click', () => {
            if (brandDetailsModal) {
                brandDetailsModal.classList.remove('active');
                // IMPORTANTE: Pausar el video
                const videoEl = document.getElementById('brand-video');
                if (videoEl) videoEl.pause();
                // Ojo: Si estábamos en portafolio modal, el background seguiría frozen
                // Pero si portafolio-modal sigue activo, lo dejamos
            }
        });
    }

    function openAnimacionModal(marca) {
        if (!animacionDetailsModal) return;

        const titleEl = document.getElementById('animacion-title');
        const videoEl = document.getElementById('animacion-video');
        const iframeCont = document.getElementById('animacion-youtube-container');
        const conceptoEl = document.getElementById('animacion-concepto-text');
        const moodboardWrapper = document.getElementById('animacion-moodboard-wrapper');
        const moodboardGrid = document.getElementById('animacion-moodboard');
        const videoProcesoEl = document.getElementById('animacion-video-proceso');
        const videoRendersEl = document.getElementById('animacion-video-renders');
        const foto1El = document.getElementById('animacion-foto1');
        const foto2El = document.getElementById('animacion-foto2');

        if (titleEl) titleEl.textContent = marca.name;
        if (conceptoEl) conceptoEl.textContent = marca.concepto;

        if (moodboardWrapper) {
            if (marca.portada) {
                moodboardWrapper.style.backgroundImage = `url('${marca.portada}')`;
            } else {
                moodboardWrapper.style.backgroundImage = 'none';
            }
        }

        if (videoEl && marca.video) {
            videoEl.src = marca.video;
            videoEl.load();
            videoEl.play().catch(e => console.log('Autoplay focus error', e));
        }

        if (iframeCont && marca.videoLink || marca.youtubeLink) {
            const url = marca.videoLink || marca.youtubeLink;
            let finalEmbedUrl = '';
            
            if (url.includes('vimeo.com')) {
                finalEmbedUrl = url; // Vimeo ya viene como embed-ready o link directo que manejamos
            } else {
                let videoId = '';
                if (url.includes('watch?v=')) {
                    videoId = url.split('watch?v=')[1].split('&')[0];
                } else if (url.includes('youtu.be/')) {
                    videoId = url.split('youtu.be/')[1].split('?')[0];
                } else if (url.includes('embed/')) {
                    videoId = url.split('embed/')[1].split('?')[0];
                }
                if (videoId) finalEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
            }

            if (finalEmbedUrl) {
                iframeCont.innerHTML = `<iframe src="${finalEmbedUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
            }
        }

        if (videoProcesoEl) videoProcesoEl.src = marca.videoProceso || '';
        if (videoRendersEl) videoRendersEl.src = marca.videoRenders || '';
        if (foto1El) foto1El.src = marca.foto1 || '';
        if (foto2El) foto2El.src = marca.foto2 || '';

        const iconsCont = document.getElementById('animacion-icons-container');
        if (iconsCont) {
            iconsCont.innerHTML = '';
            if (marca.icons && marca.icons.length > 0) {
                marca.icons.forEach(iconUrl => {
                    const iconEl = document.createElement('div');
                    iconEl.className = 'animacion-icon-wrapper';
                    iconEl.innerHTML = `<img src="${iconUrl}" alt="Icon">`;
                    iconsCont.appendChild(iconEl);
                });
            }
        }

        // Moodboard Accordion (Estilo Biblioteca APILADA)
        if (moodboardGrid && marca.inspoImages) {
            moodboardGrid.innerHTML = '';
            
            marca.inspoImages.forEach((imgUrl, idx) => {
                const piece = document.createElement('div');
                piece.className = 'moodboard-piece';
                
                piece.innerHTML = `<img src="${imgUrl}" alt="Inspo ${idx+1}">`;
                
                moodboardGrid.appendChild(piece);
            });
        }

        // Mostrar modal
        animacionDetailsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Parallax logic for orbits
    const aboutVisual = document.querySelector('.parallax-container');
    const circles = document.querySelectorAll('.parallax-circle');
    
    if (aboutVisual && circles.length) {
        aboutVisual.addEventListener('mousemove', (e) => {
            const rect = aboutVisual.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (x - centerX) * 0.05;
            const moveY = (y - centerY) * 0.05;
            
            circles[0].style.marginLeft = `${moveX * 1}px`;
            circles[0].style.marginTop = `${moveY * 1}px`;
            
            circles[1].style.marginLeft = `${moveX * -1.5}px`;
            circles[1].style.marginTop = `${moveY * -1.5}px`;
            
            circles[2].style.marginLeft = `${moveX * 2}px`;
            circles[2].style.marginTop = `${moveY * 2}px`;
        });
        
        aboutVisual.addEventListener('mouseleave', () => {
            circles.forEach(circle => {
                circle.style.marginLeft = '0px';
                circle.style.marginTop = '0px';
            });
        });
    }

    // ================================
    // PORTFOLIO PARALLAX SCROLL
    // ================================
    function portfolioParallaxOnScroll() {
        const portfolioSection = document.querySelector('.portfolio-section');
        const floatImgs = document.querySelectorAll('.floating-port-img');
        if (!portfolioSection || floatImgs.length === 0) return;

        const rect = portfolioSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Si la sección está visible en la pantalla
        if (rect.top < windowHeight && rect.bottom > 0) {
            // Calcular qué porcentaje hemos cruzado
            const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
            
            // Distintos desplazamientos en Y y rotaciones para cada imagen
            if(floatImgs[0]) floatImgs[0].style.transform = `translateY(${scrollPercent * -300}px) rotate(-10deg)`;
            if(floatImgs[1]) floatImgs[1].style.transform = `translateY(${scrollPercent * -150}px) rotate(5deg)`;
            if(floatImgs[2]) floatImgs[2].style.transform = `translateY(${scrollPercent * -250}px) rotate(12deg)`;
            if(floatImgs[3]) floatImgs[3].style.transform = `translateY(${scrollPercent * -400}px) rotate(-8deg)`;
            
            // Imágenes de fondo (Diferentes velocidades para exagerar 3D)
            if(floatImgs[4]) floatImgs[4].style.transform = `translateY(${scrollPercent * -80}px) rotate(15deg)`;
            if(floatImgs[5]) floatImgs[5].style.transform = `translateY(${scrollPercent * -50}px) rotate(-20deg)`;
            if(floatImgs[6]) floatImgs[6].style.transform = `translateY(${scrollPercent * -120}px) rotate(-5deg)`;
            if(floatImgs[7]) floatImgs[7].style.transform = `translateY(${scrollPercent * -70}px) rotate(8deg)`;
        }
    }

    // ================================
    // FAQ PARALLAX SCROLL
    // ================================
    function faqParallaxOnScroll() {
        const faqSection = document.querySelector('.faq-section');
        const marks = document.querySelectorAll('.faq-mark');
        if (!faqSection || marks.length === 0) return;

        const rect = faqSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
            
            if(marks[0]) marks[0].style.transform = `translateY(${scrollPercent * -200}px) rotate(10deg)`;
            if(marks[1]) marks[1].style.transform = `translateY(${scrollPercent * -100}px) rotate(-15deg)`;
            if(marks[2]) marks[2].style.transform = `translateY(${scrollPercent * -300}px) rotate(-5deg)`;
            if(marks[3]) marks[3].style.transform = `translateY(${scrollPercent * -150}px) rotate(20deg)`;
            if(marks[4]) marks[4].style.transform = `translateY(${scrollPercent * -80}px) rotate(-10deg)`;
        }
    }

    // ================================
    // SCROLL EVENT HANDLER
    // ================================
    function onScroll() {
        handleHeroScroll();
        updateNavbar();
        updateScrollProgress();
        highlightNavLink();
        revealOnScroll();
        animateCounters();
        portfolioParallaxOnScroll();
        faqParallaxOnScroll();
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // ================================
    // INICIALIZACIÓN MAESTRA
    // ================================
    
    // 1. Funciones críticas de inicio inmediato
    try {
        handleHeroScroll();
        onScroll();
        console.log('✨ UI Core Ready');
    } catch (e) {
        console.error('Error in UI Core init:', e);
    }

    // 2. FAQ Accordion (Iniciado por separado para evitar fallos de script)
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(button => {
            button.addEventListener('click', () => {
                const item = button.parentElement;
                const isActive = item.classList.contains('active');
                document.querySelectorAll('.faq-item').forEach(otherItem => otherItem.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        });
    }

    // 3. Verificación de datos locales (Fallback preventivo)
    if (!window.marcasData) {
        console.warn('marcas_data.js no detectado, el portafolio dependerá 100% de Supabase.');
    }

    console.log('🎬 Visual Oscart - System Ready');
});
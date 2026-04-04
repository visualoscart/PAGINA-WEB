/* ================================
   VISUAL OSCART - JavaScript
   Video Background Loop
   ================================ */

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
    // INICIALIZACIÓN
    // ================================
    // ================================
    // FAQ ACCORDION LOGIC
    // ================================
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const isActive = item.classList.contains('active');
            
            // Cerrar todas las demás tarjetas
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Si no estaba activa, abrirla
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    handleHeroScroll();
    onScroll();

    console.log('🎬 Visual Oscart - Video Loop Ready');
});
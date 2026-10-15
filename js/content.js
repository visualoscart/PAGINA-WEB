/**
 * Dataset estructurado para Visual Oscart - Agencia Creativa
 * Soluciones integrales en comunicación visual y digital
 */

const SERVICES_DATA = [
  {
    id: "redes-sociales",
    title: "Gestión de Redes Sociales",
    shortDesc: "Planificación, creación y administración de contenido estratégico para fortalecer tu presencia digital y construir comunidades leales.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,
    badge: "Estrategia Digital",
    deliverables: [
      "Calendario editorial mensual estratégico",
      "Diseño de piezas visuales y copys persuasivos",
      "Gestión de comunidad y moderación de mensajes",
      "Monitoreo de métricas y reportes de rendimiento",
      "Estrategias de contenido orgánico e impresiones"
    ],
    fullDesc: "Transformamos tus canales digitales en potentes motores de atracción. Diseñamos parrillas de contenido personalizadas según los hábitos del consumidor en Costa Rica y Latinoamérica, combinando estética de alta tendencia con análisis de audiencia.",
    priceBase: 350,
    phases: [
      {
        phaseNumber: "FASE 1",
        title: "BRANDING Y BASES DE LA MARCA",
        badge: "Paso Inicial Único",
        description: "Antes de iniciar cualquier gestión de redes sociales, es imprescindible establecer una base estratégica que garantice coherencia, diferenciación y eficiencia comunicativa. Esta fase se realiza una sola vez al inicio del servicio y permite definir la identidad visual, el estilo narrativo y la estructura de contenido que guiará todas las publicaciones futuras.",
        processes: [
          "Reunión estratégica para definir tono, objetivos y estilo",
          "Rebranding o diseño de marca desde cero",
          "Refrescamiento visual si ya existe identidad",
          "Animación digital del logotipo",
          "Calendario mensual de contenido"
        ],
        videoEmbed: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1235297048?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;border-radius:16px;" title="Gestión de Redes Sociales - Fase 1" allowfullscreen></iframe></div>`
      },
      {
        phaseNumber: "FASE 2",
        title: "PRODUCCIÓN Y PUBLICACIÓN DE CONTENIDO",
        badge: "Ciclo Operativo Mensual",
        description: "A partir de esta etapa, se establece un proceso operativo que se repite mensualmente. Su objetivo es asegurar una comunicación constante, alineada con los objetivos estratégicos del cliente y adaptada a sus necesidades actuales. Este ciclo garantiza coherencia, agilidad y capacidad de respuesta frente a cambios, manteniendo siempre una línea editorial clara y funcional.",
        processes: [
          "1 Reunión mensual para planificación anticipada",
          "Entrega de guiones y guía de contenido por tipo de publicación",
          "Producción y postproducción de contenido en video e imagen",
          "Servicio de copywriting profesional",
          "Programación y publicación del contenido en redes sociales",
          "Acceso a aplicación con reporte de rendimientos mensuales, recursos de marca y seguimiento de contenido"
        ]
      },
      {
        phaseNumber: "FASE 2",
        title: "PUBLICIDAD PAGADA EN REDES SOCIALES",
        badge: "Meta Business Ads (Opcional)",
        description: "Este servicio se ejecuta mensualmente solo si el cliente lo solicita, en coordinación con la planificación de contenido, y permite ajustar el enfoque según resultados, comportamiento de la audiencia y necesidades comerciales del cliente. Las campañas se gestionan directamente desde Meta Business, con soporte continuo y monitoreo activo para garantizar eficiencia y alineación con los objetivos definidos.",
        processes: [
          "Estrategia de pauta según objetivos (alcance, tráfico, conversaciones)",
          "Creación de campañas en Meta Business",
          "Monitorización y soporte continuo",
          "Reportes de rendimiento"
        ]
      },
      {
        phaseNumber: "FASE 2",
        title: "APLICACIONES GRÁFICAS",
        badge: "Diseño Gráfico Incluido",
        description: "Este componente puede entenderse como un servicio de diseño gráfico incluido dentro de la gestión mensual. Está pensado para brindar soluciones visuales adicionales que respondan a necesidades operativas, promocionales o institucionales del cliente. Desde piezas impresas hasta adaptaciones digitales, nos encargamos de diseñar materiales gráficos que fortalecen la presencia de marca en distintos puntos de contacto.",
        processes: [
          "Solicitud mensual de piezas gráficas adicionales según necesidades del cliente",
          "Diseño de materiales digitales para uso comercial, institucional o promocional",
          "Entrega de archivos finales en formatos listos para uso o impresión"
        ]
      }
    ]
  },
  {
    id: "diseno-marca",
    title: "Diseño de Marca",
    shortDesc: "Desarrollo de identidades visuales sólidas y memorables que transmiten la esencia de cada empresa y destacan en el mercado.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    badge: "Branding & Identity",
    deliverables: [
      "Sistema de logotipo principal, secundario e imagotipo",
      "Manual de normas de identidad visual completo",
      "Paleta cromática de alta jerarquía y tipografías corporativas",
      "Papelería institucional y mockups de aplicación real",
      "Assets digitales para web, firmas de correo y kits de prensa"
    ],
    fullDesc: "Creamos conceptos visuales perdurables. Diseñamos marcas con personalidad clara, preparadas para escalar en mercados locales e internacionales con coherencia en cada punto de contacto.",
    priceBase: 500
  },
  {
    id: "animacion-digital",
    title: "Animación Digital",
    shortDesc: "Motion graphics y piezas audiovisuales dinámicas que aportan impacto, diferencian tu mensaje y cautivan la atención al instante.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l14 9-14 9V3z"></path><circle cx="12" cy="12" r="10"></circle></svg>`,
    badge: "Motion Graphics",
    deliverables: [
      "Motion graphics 2D y 3D para redes y publicidad",
      "Videos explicativos animados (Explainer Videos)",
      "Logotipos animados e intrometidas para marca",
      "Piezas verticales dinámicas para Reels, TikTok y Stories",
      "Animación de datos e infografías cinéticas"
    ],
    fullDesc: "El movimiento genera conexión instantánea. Desarrollamos piezas animadas con ritmo visual perfecto, transiciones fluidas y diseño de sonido que multiplican el tiempo de retención de tu audiencia.",
    priceBase: 400
  },
  {
    id: "produccion-audiovisual",
    title: "Producción Audiovisual",
    shortDesc: "Creación de spots publicitarios, coberturas de eventos y contenido audiovisual estratégico diseñado para campañas de alto nivel.",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`,
    badge: "Film & Production",
    deliverables: [
      "Guionismo técnico, storyboard y dirección de arte",
      "Rodaje con equipos cinematográficos 4K y drones",
      "Edición, corrección de color y etalonaje profesional",
      "Diseño de audio, locución y banda sonora original",
      "Formatos optimizados para televisión, web y redes sociales"
    ],
    fullDesc: "Damos vida a historias cinematográficas con alto estándar estético. Desde spots publicitarios hasta la cobertura de grandes eventos corporativos en Costa Rica y la región LatAm.",
    priceBase: 750
  }
];

const PORTFOLIO_DATA = [
  // 1. GESTIÓN DE REDES SOCIALES (PROYECTOS POR PROTOCOLO DE CARPETAS)
  {
    id: "proj-rs-1",
    title: "Speedy Logistics - Gestión Integral de Redes",
    category: "redes-sociales",
    categoryName: "Gestión de Redes",
    image: "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/PORTADA.png",
    client: "Speedy Logistics",
    location: "Costa Rica / EE. UU.",
    summary: "Empresa de Courier & Logística Internacional",
    metrics: "+24 Campañas Realizadas",
    caseStudyId: "speedy-logistics"
  },
  {
    id: "proj-rs-2",
    title: "Psicosinapsis - Estrategia & Presencia Digital",
    category: "redes-sociales",
    categoryName: "Gestión de Redes",
    image: "PORTAFOLIO/2 GESTION PSICOSINAPSIS/PORTADA.png",
    client: "Psicosinapsis",
    location: "Costa Rica",
    summary: "Consultoría Psicológica Multidisciplinaria",
    metrics: "+36 Campañas Realizadas",
    caseStudyId: "psicosinapsis"
  },

  // 2. DISEÑO DE MARCA (PROYECTOS POR PROTOCOLO DE CARPETAS)
  {
    id: "proj-dm-1",
    title: "Fuku Arenal - Branding & Experiencia Eco-Consciente",
    category: "diseno-marca",
    categoryName: "Diseño de Marca",
    image: "PORTAFOLIO/1 DISENO FUKU ARENAL/PORTADA.jpg",
    client: "Fuku Arenal",
    location: "Arenal, Costa Rica",
    summary: "Identidad visual y branding para alojamiento eco-consciente",
    metrics: "Identidad Corporativa",
    caseStudyId: "fuku-arenal"
  },
  {
    id: "proj-dm-2",
    title: "Raven Store - Identidad Visual & Branding Coleccionable",
    category: "diseno-marca",
    categoryName: "Diseño de Marca",
    image: "PORTAFOLIO/2 DISENO RAVEN HOUSE/PORTADA.jpg",
    client: "Raven Store",
    location: "Costa Rica",
    summary: "Diseño de marca elegante y dinámico para tienda de coleccionismo",
    metrics: "Identidad Corporativa",
    caseStudyId: "raven-house"
  },
  {
    id: "proj-dm-3",
    title: "Free Way - Movilidad Turística & Identidad de Flota",
    category: "diseno-marca",
    categoryName: "Diseño de Marca",
    image: "PORTAFOLIO/3 DISENO FREE WAY/PORTADA.jpg",
    client: "Free Way",
    location: "Costa Rica",
    summary: "Branding estratégico para empresa de alquiler de vehículos turísticos",
    metrics: "Identidad Corporativa",
    caseStudyId: "free-way"
  },

  // 3. ANIMACIÓN DIGITAL (3 PROYECTOS)
  {
    id: "proj-ad-1",
    title: "Campaña Motion Visual para Lanzamiento de Producto",
    category: "animacion-digital",
    categoryName: "Animación Digital",
    image: "assets/showcase/motion.jpg",
    client: "Aura Lifestyle",
    location: "San José, Costa Rica",
    summary: "Serie de 6 piezas de motion graphics 3D con fluidos sintéticos y partículas luminosas para campaña omnichannel.",
    metrics: "3.2M Reproducciones Orgánicas"
  },
  {
    id: "proj-ad-2",
    title: "CyberPay App 3D Explainer Video & Micro-Interacciones",
    category: "animacion-digital",
    categoryName: "Animación Digital",
    image: "assets/showcase/social.jpg",
    client: "CyberPay LatAm",
    location: "Latinoamérica",
    summary: "Video explicativo animado en 3D combinando renders de interfaz fluida y diseño de sonido cinético.",
    metrics: "+420% Descargas de la App"
  },
  {
    id: "proj-ad-3",
    title: "FinTech Motion Graphics & Visual Identity System",
    category: "animacion-digital",
    categoryName: "Animación Digital",
    image: "assets/showcase/branding.jpg",
    client: "Kubo Financial",
    location: "Costa Rica / Colombia",
    summary: "Infografías animadas y logotipos dinámicos en movimiento creados para campaña de adquisición de usuarios.",
    metrics: "+280% Retención en Video Ads"
  },

  // 4. PRODUCCIÓN AUDIOVISUAL (3 PROYECTOS)
  {
    id: "proj-pa-1",
    title: "Producción Audiovisual Spot Comercial Cumbre Empresarial",
    category: "produccion-audiovisual",
    categoryName: "Producción Audiovisual",
    image: "assets/showcase/audiovisual.jpg",
    client: "Foro de Innovación LatAm",
    location: "Costa Rica",
    summary: "Spot publicitario de alta escala con rodaje en estudio, dron 4K y postproducción de audio inmersivo.",
    metrics: "+80% Incremento en Inscripciones"
  },
  {
    id: "proj-pa-2",
    title: "BMW LatAm - Spot Cinematográfico de Lanzamiento",
    category: "produccion-audiovisual",
    categoryName: "Producción Audiovisual",
    image: "assets/showcase/motion.jpg",
    client: "BMW Regional LatAm",
    location: "Costa Rica",
    summary: "Rodaje nocturno con cámaras de cine, corrección de color profesional y diseño sonoro envolvente.",
    metrics: "5.5M Repro en TV & Web"
  },
  {
    id: "proj-pa-3",
    title: "Festival Destino CR - Cobertura Audiovisual & Aftermovie",
    category: "produccion-audiovisual",
    categoryName: "Producción Audiovisual",
    image: "assets/showcase/branding.jpg",
    client: "Instituto de Turismo CR",
    location: "Guanacaste, Costa Rica",
    summary: "Cobertura de festival multicultural con tomas aéreas con FPV drone, edición rítmica y mezcla de audio directo.",
    metrics: "+300% Compartidos en Redes"
  }
];

const POST_PORTA_DATA = [
  {
    id: "post-1",
    title: "Post 1 - Estrategia & Branding",
    slides: [
      { type: "video", src: "POST PORTA/POST 1/1.mp4" },
      { type: "image", src: "POST PORTA/POST 1/2.png" },
      { type: "image", src: "POST PORTA/POST 1/3.png" },
      { type: "image", src: "POST PORTA/POST 1/4.png" },
      { type: "image", src: "POST PORTA/POST 1/5.png" },
      { type: "image", src: "POST PORTA/POST 1/7.jpg" },
      { type: "image", src: "POST PORTA/POST 1/8.jpg" },
      { type: "image", src: "POST PORTA/POST 1/9.png" }
    ]
  },
  {
    id: "post-2",
    title: "Post 2 - Campaña Visual & Motion",
    slides: [
      { type: "video", src: "POST PORTA/POST 2/1.mp4" },
      { type: "image", src: "POST PORTA/POST 2/2.png" },
      { type: "image", src: "POST PORTA/POST 2/3.png" },
      { type: "image", src: "POST PORTA/POST 2/4.png" },
      { type: "image", src: "POST PORTA/POST 2/5.png" },
      { type: "image", src: "POST PORTA/POST 2/6.png" },
      { type: "image", src: "POST PORTA/POST 2/7.png" },
      { type: "image", src: "POST PORTA/POST 2/8.png" },
      { type: "image", src: "POST PORTA/POST 2/9.png" },
      { type: "image", src: "POST PORTA/POST 2/10.png" }
    ]
  },
  {
    id: "post-3",
    title: "Post 3 - Identidad & Contenido",
    slides: [
      { type: "video", src: "POST PORTA/POST 3/1.mp4" },
      { type: "image", src: "POST PORTA/POST 3/2.png" },
      { type: "image", src: "POST PORTA/POST 3/3.png" },
      { type: "image", src: "POST PORTA/POST 3/4.png" },
      { type: "image", src: "POST PORTA/POST 3/5.png" },
      { type: "image", src: "POST PORTA/POST 3/6.png" },
      { type: "image", src: "POST PORTA/POST 3/7.png" }
    ]
  },
  {
    id: "post-4",
    title: "Post 4 - Diseño & Dirección de Arte",
    slides: [
      { type: "video", src: "POST PORTA/POST 4/1.mp4" },
      { type: "image", src: "POST PORTA/POST 4/2.jpeg" },
      { type: "image", src: "POST PORTA/POST 4/3.jpeg" },
      { type: "image", src: "POST PORTA/POST 4/4.jpg" },
      { type: "image", src: "POST PORTA/POST 4/5.jpeg" }
    ]
  },
  {
    id: "post-5",
    title: "Post 5 - Contenido Digital & Social Media",
    slides: [
      { type: "video", src: "POST PORTA/POST 5/1.mp4" },
      { type: "image", src: "POST PORTA/POST 5/2.png" },
      { type: "image", src: "POST PORTA/POST 5/3.png" },
      { type: "image", src: "POST PORTA/POST 5/4.png" },
      { type: "image", src: "POST PORTA/POST 5/5.jpg" },
      { type: "image", src: "POST PORTA/POST 5/6.png" },
      { type: "image", src: "POST PORTA/POST 5/7.png" },
      { type: "image", src: "POST PORTA/POST 5/8.png" },
      { type: "image", src: "POST PORTA/POST 5/9.png" }
    ]
  },
  {
    id: "post-6",
    title: "Post 6 - Animación & Motion Graphics",
    slides: [
      { type: "video", src: "POST PORTA/POST 6/1.mp4" },
      { type: "image", src: "POST PORTA/POST 6/2.jpg" },
      { type: "image", src: "POST PORTA/POST 6/3.jpg" },
      { type: "image", src: "POST PORTA/POST 6/4.jpg" },
      { type: "image", src: "POST PORTA/POST 6/5.jpg" },
      { type: "image", src: "POST PORTA/POST 6/6.png" },
      { type: "image", src: "POST PORTA/POST 6/7.jpg" },
      { type: "image", src: "POST PORTA/POST 6/8.png" },
      { type: "image", src: "POST PORTA/POST 6/9.jpg" }
    ]
  }
];

const BLOG_DATA = [
  {
    id: "blog-identidad-visual-intro",
    title: "Un logo no basta: el poder de la identidad visual",
    slug: "un-logo-no-basta-el-poder-de-la-identidad-visual",
    category: "Branding & Identidad",
    author: "Oscar T. - Director Creativo",
    date: "22 Sep, 2026",
    readTime: "5 min de lectura",
    image: "BLOGS/1 IDENTIDAD VISUAL INTRO/PORTADA.jpg",
    snippet: "Un logo por sí solo no alcanza, es apenas la punta del iceberg. Descubre qué es una identidad visual sólida y cómo convierte tu negocio en una marca memorable.",
    content: `
      <p>Recuerdo la primera vez que escuché a alguien decir: <em>“Quiero empezar mi negocio, necesito un logo”</em>. Y aunque el entusiasmo era genuino, me quedó claro que había una confusión enorme: pensar que un logo es lo único que un negocio necesita en temas gráficos.</p>

      <p>Pero la verdad es que un logo, por sí solo, no alcanza. Es apenas la punta del iceberg. Detrás de él existe un concepto mucho más amplio y poderoso que muchos desconocen: <strong>la identidad visual</strong>.</p>

      <p>La identidad visual es lo que realmente define cómo se percibe tu negocio. Es como la personalidad de una persona: no basta con saber su nombre, lo que recordamos es cómo se viste, cómo se expresa, cómo se comporta. Eso mismo ocurre con las marcas: lo que las hace memorables no es solo un símbolo, sino todo un sistema que refleja su esencia y las diferencia en el mercado.</p>

      <p>Pero, antes de hablar de su importancia, quiero detenerme un momento y explicar qué es exactamente este término.</p>

      <h2>¿Qué es una identidad visual?</h2>
      <p>Es el conjunto de elementos que hacen que una marca sea reconocible y coherente en cualquier lugar donde aparezca. Colores, tipografía, estilo fotográfico, aplicaciones en materiales, tono visual en redes sociales… todo eso forma parte de su esencia.</p>
      <p>Cuando alguien ve tu marca, no solo está viendo un logo. Está percibiendo tu historia, tu cultura, tu forma de presentarte al mundo. Y esa percepción es la que genera confianza o, por el contrario, la que hace que pasen de largo.</p>

      <h2>Identidad visual vs. logo</h2>
      <p>El logo es importante, sí. Pero es solo una pieza dentro de un sistema mucho más grande. Pensar que un logo es suficiente es como creer que una persona se define únicamente por su firma.</p>
      <p>La identidad visual es todo lo que acompaña a ese logo: los colores que transmiten emociones, la tipografía que refleja tu estilo, los elementos gráficos que cuentan tu historia. Es lo que le da coherencia a tu marca y hace que sea recordada.</p>

      <h2>El problema de no tener identidad visual</h2>
      <p>Muchos negocios pequeños y emprendimientos arrancan con entusiasmo, pero sin una identidad clara. ¿Qué pasa entonces?</p>
      <ul>
        <li><strong>La comunicación se vuelve inconsistente.</strong></li>
        <li><strong>Los clientes no logran recordarlos.</strong></li>
        <li><strong>La marca no transmite credibilidad.</strong></li>
        <li><strong>No se genera fidelidad</strong>, porque no hay un concepto con el que las personas puedan identificarse.</li>
      </ul>
      <p>Es como conocer a alguien que cada día cambia de forma de vestir, de hablar y de comportarse. Nunca vas a entender quién es realmente, y eso genera desconfianza.</p>

      <h2>La importancia de una identidad visual sólida</h2>
      <p>Una identidad bien construida es la base de la credibilidad.</p>
      <ul>
        <li><strong>Genera confianza:</strong> transmite profesionalismo y seriedad.</li>
        <li><strong>Crea diferenciación:</strong> permite que incluso un pequeño negocio se percibe como una marca fuerte.</li>
        <li><strong>Construye fidelidad:</strong> las personas se identifican con la esencia, cultura y estética de la marca.</li>
        <li><strong>Facilita el crecimiento:</strong> abre puertas a mercados más grandes y competitivos.</li>
      </ul>

      <h2>Lo que diferencia un pequeño negocio de una gran marca</h2>
      <p>Aquí está el punto clave: la identidad visual es lo que marca la diferencia entre un emprendimiento que lucha por ser reconocido y una marca consolidada que inspira confianza.</p>
      <p>No se trata solo de tamaño o inversión. Se trata de cómo te comunicas y cómo te presentas. Una pequeña empresa con una identidad sólida puede proyectarse con la misma fuerza que una marca internacional.</p>
      <p>Hasta aquí hemos hablado de la teoría, pero nada transmite mejor la importancia de una identidad visual que ver cómo funciona en la práctica. Las grandes marcas han entendido que no basta con un logo: han construido sistemas completos que se reconocen en cualquier parte del mundo.</p>
      <p>Por eso quiero mostrarte algunos ejemplos que ilustran cómo la identidad visual se convierte en un lenguaje propio. Son casos que muchos conocemos y que demuestran cómo los colores, las formas y las aplicaciones gráficas logran que una marca sea memorable y genere fidelidad.</p>

      <div class="blog-example-block" style="margin: 28px 0;">
        <h3>1. McDonald’s</h3>
        <img src="BLOGS/1 IDENTIDAD VISUAL INTRO/MCDONALDS.jpg" alt="Ejemplo McDonald's" style="width: 100%; border-radius: 14px; margin: 12px 0 16px 0; object-fit: cover; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
        <p>El rojo y amarillo, los arcos dorados, los vasos y cajas brandeadas, los banners en los locales… todo está diseñado para ser reconocible y generar fidelidad aspiracional.</p>
      </div>

      <div class="blog-example-block" style="margin: 28px 0;">
        <h3>2. Apple</h3>
        <img src="BLOGS/1 IDENTIDAD VISUAL INTRO/APPLE.jpg" alt="Ejemplo Apple" style="width: 100%; border-radius: 14px; margin: 12px 0 16px 0; object-fit: cover; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
        <p>Su minimalismo, la tipografía limpia, el uso del blanco y negro, la experiencia visual en tiendas y empaques. Todo comunica innovación y exclusividad.</p>
      </div>

      <div class="blog-example-block" style="margin: 28px 0;">
        <h3>3. Nike</h3>
        <img src="BLOGS/1 IDENTIDAD VISUAL INTRO/NIKE.jpg" alt="Ejemplo Nike" style="width: 100%; border-radius: 14px; margin: 12px 0 16px 0; object-fit: cover; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
        <p>El swoosh, el uso del negro y blanco, la tipografía bold y el tono aspiracional en campañas. Su identidad visual es tan fuerte que basta un símbolo para reconocerlos.</p>
      </div>

      <blockquote class="blog-quote">"La identidad visual es el puente entre lo que tú quieres transmitir y lo que tu cliente necesita sentir."</blockquote>

      <p>Si estás empezando un negocio, mi recomendación es que no te quedes solo con el logo. El logo es importante, claro, pero no es suficiente para construir credibilidad. La identidad visual es lo que realmente le da vida a tu marca, lo que hace que las personas te reconozcan y confíen en ti.</p>
      <p>Piensa en tu identidad como una inversión, no como un gasto. Es el puente entre lo que tú quieres transmitir y lo que tu cliente necesita sentir. Y créeme, esa coherencia visual puede ser la diferencia entre que tu negocio se perciba como un proyecto improvisado o como una marca sólida, capaz de competir con las grandes.</p>
      <p>Porque al final, las personas no solo compran productos o servicios: <strong>compran lo que tu marca representa.</strong></p>
    `
  },
  {
    id: "blog-colores-intro",
    title: "¿Cómo escoger los colores de mi marca? Guía práctica",
    slug: "como-escoger-los-colores-de-mi-marca-guia-practica",
    category: "Branding & Identidad",
    author: "Oscar T. - Director Creativo",
    date: "13 Oct, 2026",
    readTime: "6 min de lectura",
    image: "BLOGS/2 COLORES INTRO/PORTADA.jpg",
    snippet: "Antes de elegir una sola tonalidad, debes comprender la personalidad de tu negocio. Descubre cómo la psicología del color y sus tonalidades comunican la esencia de tu marca.",
    content: `
      <p>Si te preguntara cuál es el color de Coca-Cola, probablemente lo responderías en menos de un segundo.</p>

      <p>Lo mismo ocurre con McDonald's, Starbucks, Spotify o Netflix.</p>

      <p>Y aunque muchas personas creen que esto ocurre porque son empresas enormes, la realidad es otra: antes de convertirse en grandes marcas, fueron marcas que aprendieron a comunicar visualmente.</p>

      <p>Una parte importante de esa comunicación son sus colores.</p>

      <p>Por eso, cuando un diseñador elige una paleta de color, no lo hace únicamente porque se vea bonita. Detrás de cada elección existe intención, estrategia y un mensaje que se quiere transmitir.</p>

      <p>Antes de hablar de psicología del color o teoría del color, creo que es importante responder una pregunta:</p>

      <h2>¿Cómo decide un diseñador qué colores utilizar?</h2>

      <p>La respuesta corta es que no se trata de gustos personales.</p>

      <p>El color debe responder a la personalidad de la marca, a su mercado, a su público objetivo y a la percepción que desea generar.</p>

      <p>Cuando trabajamos en una identidad visual, los colores deben responder a preguntas mucho más profundas. Por ejemplo:</p>

      <ul>
        <li>¿A quién le habla la marca?</li>
        <li>¿Qué quiere transmitir?</li>
        <li>¿Cómo quiere ser percibida?</li>
        <li>¿Cuál es su personalidad?</li>
        <li>¿En qué industria se desarrolla?</li>
      </ul>

      <p>Porque no comunica lo mismo una clínica médica que una cafetería. Tampoco comunica igual una empresa tecnológica que una marca de lujo.</p>

      <p>Antes de elegir una sola tonalidad, es necesario comprender la esencia del negocio. Los colores son simplemente una herramienta para expresar visualmente esa personalidad.</p>

      <h2>Cuando los colores empiezan a comunicar</h2>

      <p>Aquí es donde entra uno de los conceptos más interesantes del diseño: <strong>la psicología del color</strong>.</p>

      <p>Seguramente alguna vez escuchaste que ciertos colores transmiten emociones. Y aunque no existe una regla universal que aplique para todas las culturas y situaciones, sí existen asociaciones que se repiten constantemente y que terminan influyendo en la forma en que percibimos una marca.</p>

      <p>Sin embargo, hay algo que muchas personas desconocen:</p>

      <p>Cuando hablamos del significado de un color, normalmente simplificamos demasiado las cosas. Porque no basta con decir que una marca es azul, roja o verde.</p>

      <p>La realidad es que <strong>cada color posee diferentes tonalidades</strong>, y cada una puede transmitir sensaciones completamente distintas.</p>

      <p>Por eso, cuando un diseñador trabaja una identidad visual, no solo piensa en qué color utilizar, sino también en qué tono específico representa mejor la personalidad de la marca. Veamos algunos ejemplos:</p>

      <div class="blog-color-section" style="margin: 32px 0;">
        <h3>1. Azul</h3>
        <p>El azul suele asociarse con confianza, estabilidad, seguridad y profesionalismo. Por eso es uno de los colores más utilizados en empresas corporativas, entidades financieras y compañías tecnológicas. Pero no todos los azules comunican exactamente lo mismo:</p>
        <img src="BLOGS/2 COLORES INTRO/AZUL.jpg" alt="Psicología del color Azul" style="width: 100%; border-radius: 14px; margin: 14px 0 24px 0; object-fit: cover; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
      </div>

      <div class="blog-color-section" style="margin: 32px 0;">
        <h3>2. Rojo</h3>
        <p>El rojo se relaciona con energía, acción, pasión y movimiento. Es un color que llama la atención rápidamente y genera una sensación de urgencia:</p>
        <img src="BLOGS/2 COLORES INTRO/ROJO.jpg" alt="Psicología del color Rojo" style="width: 100%; border-radius: 14px; margin: 14px 0 24px 0; object-fit: cover; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
      </div>

      <div class="blog-color-section" style="margin: 32px 0;">
        <h3>3. Verde</h3>
        <p>El verde suele asociarse con crecimiento, bienestar, naturaleza y salud. Es uno de los colores que más sensación de equilibrio genera visualmente:</p>
        <img src="BLOGS/2 COLORES INTRO/VERDE.jpg" alt="Psicología del color Verde" style="width: 100%; border-radius: 14px; margin: 14px 0 24px 0; object-fit: cover; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
      </div>

      <div class="blog-color-section" style="margin: 32px 0;">
        <h3>4. Amarillo</h3>
        <p>El amarillo normalmente se relaciona con optimismo, energía y cercanía. Es un color muy efectivo para transmitir sensaciones positivas:</p>
        <img src="BLOGS/2 COLORES INTRO/AMARILLO.jpg" alt="Psicología del color Amarillo" style="width: 100%; border-radius: 14px; margin: 14px 0 24px 0; object-fit: cover; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
      </div>

      <div class="blog-color-section" style="margin: 32px 0;">
        <h3>5. Anaranjado y Tonos Tierra</h3>
        <p>El anaranjado suele asociarse con energía, entusiasmo, creatividad y cercanía. Es un color muy dinámico, pero a diferencia del rojo, suele sentirse más amigable y accesible. Por esa razón es frecuente encontrarlo en marcas que buscan transmitir innovación sin perder cercanía con su audiencia:</p>
        <img src="BLOGS/2 COLORES INTRO/CAFE.jpg" alt="Psicología del color Anaranjado y Tonos Tierra" style="width: 100%; border-radius: 14px; margin: 14px 0 24px 0; object-fit: cover; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
      </div>

      <div class="blog-color-section" style="margin: 32px 0;">
        <h3>6. Morado</h3>
        <p>El morado es uno de los colores más interesantes dentro de la psicología del color porque combina la estabilidad del azul con la energía del rojo. Tradicionalmente se ha relacionado con la creatividad, la imaginación, la innovación y la exclusividad. Es una excelente opción para marcas que quieren salirse de lo convencional:</p>
        <img src="BLOGS/2 COLORES INTRO/MORADO.jpg" alt="Psicología del color Morado" style="width: 100%; border-radius: 14px; margin: 14px 0 24px 0; object-fit: cover; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
      </div>

      <blockquote class="blog-quote">"Dos marcas pueden utilizar exactamente el mismo color y transmitir sensaciones completamente distintas simplemente modificando su tonalidad."</blockquote>

      <p>Como conclusión, no basta con elegir un color y asumir que automáticamente comunicará algo específico. Dos marcas pueden utilizar exactamente el mismo color y transmitir sensaciones completamente distintas simplemente modificando su tonalidad.</p>

      <p>Por eso, cuando trabajamos en branding, la pregunta no es únicamente qué color usar, sino también <strong>qué versión de ese color representa mejor la personalidad de tu marca</strong>.</p>

      <p>Y justamente ahí es donde entra otra herramienta fundamental para los diseñadores: la rueda cromática y las combinaciones de color. Pero sobre esto hablaremos en un próximo artículo.</p>
    `
  },
  {
    id: "blog-combinar-colores",
    title: "Cómo combinar colores sin arruinar tu marca",
    slug: "como-combinar-colores-sin-arruinar-tu-marca",
    category: "Branding & Identidad",
    author: "Oscar T. - Director Creativo",
    date: "13 Oct, 2026",
    readTime: "5 min de lectura",
    image: "BLOGS/3 COMBINAR COLORES/PORTADA.jpg",
    snippet: "Descubre cómo usar la rueda cromática, la regla del 60-30-10 y el contraste para armar una paleta armoniosa sin caer en un carnaval visual.",
    content: `
      <p>En el artículo anterior vimos cómo cada color comunica emociones y cómo una simple variación de tono puede cambiar por completo la percepción de tu negocio.</p>

      <p>Pero en el diseño real ocurre algo inevitable: llega el momento de juntar dos, tres o cuatro colores para diseñar un logo, un sitio web, un empaque o piezas de redes sociales, y las cosas se complican.</p>

      <p>Muchas marcas caen en dos extremos: o terminan con una paleta aburrida y plana que pasa desapercibida, o crean un auténtico carnaval visual donde todos los colores compiten y gritan al mismo tiempo.</p>

      <p>Para evitar esto existe una herramienta que los diseñadores utilizamos a diario y que no tiene nada de magia misteriosa: <strong>la rueda cromática</strong>.</p>

      <h2>La rueda cromática: el mapa que evita desastres visuales</h2>

      <p>Imagina la rueda cromática como un mapa de relaciones entre colores. Así como en la vida hay personas que se complementan por ser distintas y otras que se llevan bien por ser parecidas, con los colores pasa exactamente lo mismo.</p>

      <p>Para armar una paleta funcional, no necesitas memorizar fórmulas complejas. Solo necesitas comprender las armonías básicas que mejor funcionan en una marca:</p>

      <ul>
        <li><strong>Combinación Monocromática (Un solo color, varias tonalidades):</strong> Se toma un solo color base y se juega con versiones más claras, más oscuras o menos saturadas. Es la opción más elegante, sobria y segura. Si buscas una marca minimalista y moderna, esta armonía nunca falla.</li>
        <li><strong>Combinación Análoga (Los vecinos de la rueda):</strong> Se eligen colores que están uno al lado del otro en la rueda (por ejemplo: amarillo, naranja y rojo; o azul, verde azulado y verde). Genera una sensación de armonía natural muy agradable a la vista, similar a la que encontramos en un atardecer o en la naturaleza.</li>
        <li><strong>Combinación Complementaria (Los polos opuestos):</strong> Son colores ubicados frente a frente en la rueda cromática (como azul y naranja, o morado y amarillo). Tienen un contraste altísimo y transmiten mucha energía. Si se usan con moderación, hacen que los elementos clave salten a la vista al instante.</li>
        <li><strong>Combinación Triádica (El triángulo equilibrado):</strong> Tres colores separados a la misma distancia en la rueda (como amarillo, azul y rojo). Es una combinación dinámica y vibrante, ideal para marcas juveniles o creativas, siempre y cuando uno de ellos lidere y los otros dos lo acompañen.</li>
      </ul>

      <h2>La regla de oro: En una paleta no todos los colores pueden ser protagonistas</h2>

      <p>Uno de los errores más comunes de quienes crean su propia marca es tratar a todos los colores por igual. Piensan que si tienen tres colores en la marca, los tres deben aparecer en el mismo porcentaje en cada diseño.</p>

      <p>Eso genera una guerra de atención. Cuando todo intenta destacar, <strong>nada destaca</strong>.</p>

      <p>En una identidad visual exitosa siempre debe haber una jerarquía clara. Una guía práctica infalible que solemos aplicar en diseño es la regla del <strong>60 - 30 - 10</strong>:</p>

      <ul>
        <li><strong>El 60% — Color Dominante:</strong> Es el lienzo que sostiene todo el diseño. Generalmente es un tono neutro (blanco, negro, gris carbón, crema) o el color principal de la marca. Su función es darle aire y descanso a la vista.</li>
        <li><strong>El 30% — Color Secundario:</strong> Acompaña al dominante, dando estructura a tarjetas, fondos secundarios, bloques de texto o barras de navegación.</li>
        <li><strong>El 10% — Color de Acento:</strong> Este es el color con mayor personalidad o contraste de tu paleta. Debe reservarse <em>exclusivamente</em> para lo que necesitas que el usuario note: el botón de contacto o compra, un llamado a la acción, un precio o el detalle clave de tu mensaje.</li>
      </ul>

      <h2>El factor crítico que salva ventas: El Contraste</h2>

      <p>De nada sirve tener una paleta con colores hermosos si tus clientes no logran leer lo que dices.</p>

      <p>El contraste es la diferencia de luminosidad entre un elemento y su fondo. Si colocas un texto amarillo sobre fondo blanco, o un texto gris claro sobre fondo celeste, el ojo humano tiene que esforzarse para descifrarlo. Y en el mundo digital, <strong>un cliente que tiene que esforzarse para leer es un cliente que se va</strong>.</p>

      <p>Una prueba rápida y muy efectiva que puedes hacer con cualquier diseño es pasarlo a blanco y negro (escala de grises). Si al quitar el color sigues distinguiendo con total claridad qué es texto y qué es fondo, tu contraste es saludable.</p>

      <h2>Grandes marcas que dominan el contraste y los acentos</h2>

      <p>Miremos cómo aplican estos principios marcas que todos conocemos:</p>

      <ul>
        <li><strong>IKEA:</strong> Utiliza una combinación complementaria directa (azul y amarillo). El azul domina los grandes espacios de la tienda y el catálogo, mientras que el amarillo funciona como un acento potente que guía hacia ofertas y puntos clave.</li>
        <li><strong>Spotify:</strong> Su paleta es predominantemente oscura (el negro y el gris oscuro ocupan más del 85%), lo que permite que su verde brillante al 10% sea imposible de ignorar en el botón de reproducir.</li>
        <li><strong>Apple:</strong> Lleva la armonía monocromática al extremo. Blancos, negros y grises neutros dominan el entorno, permitiendo que los colores reales de sus productos sean los verdaderos protagonistas.</li>
      </ul>

      <blockquote class="blog-quote">"Una paleta de color exitosa no busca hacer ruido visual; busca guiar la mirada de tu cliente con claridad, intención y coherencia."</blockquote>

      <p>Al final del día, crear la paleta de tu marca no se trata de coleccionar tus colores favoritos, sino de construir un sistema visual funcional que trabaje a favor de tu negocio.</p>

      <p>Menos colores con una intención clara siempre comunicarán más profesionalismo y solidez que una paleta saturada y sin jerarquía.</p>
    `
  },
  {
    id: "blog-redes-ventas",
    title: "Publicar todos los días no te traerá ventas",
    slug: "publicar-todos-los-dias-no-te-traera-ventas",
    category: "Redes Sociales & Estrategia",
    author: "Oscar T. - Director Creativo",
    date: "13 Oct, 2026",
    readTime: "6 min de lectura",
    image: "BLOGS/4 REDES SOCIALES ESTRATEGIA/PORTADA.jpg",
    snippet: "Descubre por qué la trampa de publicar por publicar agota a los negocios sin dejar ganancias, y cuál es la estructura de contenido que realmente convierte seguidores en clientes.",
    content: `
      <p>He visto a decenas de dueños de negocios atrapados en la misma pesadilla: con el teléfono en la mano a las 11 de la noche, agotados tras un día de trabajo, preguntándose con desesperación: <em>“¿Qué publico mañana?”</em>.</p>

      <p>Durante años, supuestos expertos en marketing nos vendieron una mentira muy peligrosa: <strong>“Para triunfar en redes tienes que publicar todos los días, sin falta”</strong>. Algunos incluso recomiendan dos o tres publicaciones diarias para que el algoritmo no te castigue.</p>

      <p>¿El resultado real de esa fórmula?</p>

      <p>Emprendedores frustrados, equipos creativos agotados por el burnout y perfiles llenos de contenido de relleno que consigue algunos likes curiosos, pero <strong>cero conversaciones de venta</strong>.</p>

      <p>Si sientes que dedicas horas infinitas a crear reels, carruseles e historias pero tu cuenta bancaria no nota la diferencia, quiero darte una buena noticia: el problema no es tu producto ni el algoritmo. El problema es que caíste en la trampa de la <strong>consistencia sin intención</strong>.</p>

      <h2>La trampa de las métricas de vanidad: Likes vs. Facturación</h2>

      <p>En el mundo digital es muy fácil confundir popularidad con rentabilidad.</p>

      <p>Un video bailando, un meme viral o una frase motivacional genérica pueden conseguir 50,000 reproducciones y cientos de "me gusta". Se siente increíble en el ego, claro que sí. Pero al final del mes, los likes no pagan salarios, ni alquileres, ni proveedores.</p>

      <p>El error está en pensar que el objetivo de las redes sociales es acumular público masivo. La realidad es otra: <strong>un negocio no necesita que todo el mundo lo vea; necesita que las personas correctas confíen en él</strong>.</p>

      <p>Prefiero mil veces una cuenta con 2,000 seguidores donde cada publicación genera 3 preguntas de cotización por mensaje directo, que una cuenta con 100,000 seguidores donde nadie compra absolutamente nada.</p>

      <h2>El contenido que realmente vende: Los 3 pilares esenciales</h2>

      <p>Cuando trabajamos la gestión de redes sociales para una marca, no empezamos abriendo Canva a ver qué se nos ocurre. Empezamos definiendo un sistema equilibrado donde cada pieza cumple una función específica dentro del viaje del cliente:</p>

      <ul>
        <li><strong>1. Contenido de Atracción con Filtro:</strong> No busca agradar a cualquiera. Toca un problema específico, una duda frecuente o un error común que comete tu cliente ideal. Quien se detiene a leerlo o mirarlo es porque tiene ese problema y le interesa una solución profesional.</li>
        <li><strong>2. Contenido de Autoridad y Confianza:</strong> Este es el pilar que el 90% de las marcas olvida. La gente no compra de cuentas frías o anónimas; compra de personas o marcas en las que confía. Aquí muestras casos de éxito reales, testimonios, el detrás de cámaras de tu proceso, el estándar con el que trabajas y cómo resuelves las dudas más difíciles de tu sector.</li>
        <li><strong>3. Contenido de Conversión Directa:</strong> No hay que tenerle miedo a vender, pero hay que saber hacerlo. Cuando ya educaste y construiste confianza, una llamada a la acción clara (un enlace directo, una invitación a agendar una llamada o un recordatorio de cupos disponibles) se siente como el paso natural lógico, nunca como una venta agresiva o desesperada.</li>
      </ul>

      <h2>Calidad Estratégica vs. Ruido Diario</h2>

      <p>Piénsalo desde la perspectiva de tu cliente: ¿cuándo fue la última vez que compraste un producto o contrataste un servicio solo porque esa empresa publicó siete posts en una semana?</p>

      <p>Probablemente nunca. Compraste porque viste una publicación bien argumentada, con un diseño impecable, que resolvió una duda que tenías desde hacía semanas y te demostró que sabían exactamente lo que hacían.</p>

      <p>Por eso, en el entorno actual de redes sociales, <strong>tres publicaciones estratégicas, bien producidas y con mensaje claro a la semana superan por goleada a siete publicaciones hechas a la carrera solo para "cumplir con el calendario"</strong>.</p>

      <p>Cuando publicas con prisa, la calidad visual baja, el copy pierde profundidad y el mensaje se diluye. Y lo peor de todo: proyectas una imagen de improvisación que aleja a los clientes de mayor presupuesto.</p>

      <h2>3 preguntas que debes hacerte antes de presionar "Publicar"</h2>

      <p>A partir de hoy, antes de subir cualquier contenido a tus redes, hazte estas tres preguntas sencillas:</p>

      <ul>
        <li><strong>¿A quién beneficia este post?</strong> (Si solo habla de lo maravilloso que eres tú o tu negocio sin aportar una solución o perspectiva útil a quien lo lee, replantéalo).</li>
        <li><strong>¿Qué objeción o duda de compra está derribando?</strong> (¿Le aclara a tu cliente cómo trabajas, por qué vale lo que vale o qué resultado puede esperar?).</li>
        <li><strong>¿Cuál es el siguiente paso que espero que dé la persona?</strong> (¿Guardar el post como referencia? ¿Compartirlo con su socio? ¿Escribir un mensaje con una palabra clave para recibir información?).</li>
      </ul>

      <blockquote class="blog-quote">"El objetivo de tus redes sociales no es entretener a la masa; es construir la confianza suficiente para que tu cliente ideal decida que tú eres la única opción lógica."</blockquote>

      <p>Deja de medir tu éxito por cuántas veces publicas a la semana. Empieza a medirlo por la claridad de tu mensaje, la calidad visual con la que te presentas al mundo y las conversaciones reales que eres capaz de generar.</p>

      <p>Cuando cambias la obsesión por el algoritmo por el compromiso con el valor real, las redes sociales dejan de ser una carga agotadora y se convierten en el mejor vendedor de tu empresa.</p>
    `
  },
  {
    id: "blog-percepcion-valor",
    title: "Por qué tu producto es bueno pero se percibe barato en internet",
    slug: "por-que-tu-producto-es-bueno-pero-se-percibe-barato-en-internet",
    category: "Branding & Estrategia",
    author: "Oscar T. - Director Creativo",
    date: "13 Oct, 2026",
    readTime: "5 min de lectura",
    image: "BLOGS/5 PERCEPCION DE VALOR/PORTADA.jpg",
    snippet: "Descubre cómo la diferencia entre el valor real y el valor percibido define si los clientes respetan tus precios o te regatean cada centavo.",
    content: `
      <p>Imagina que entras a un restaurante que te recomendaron. La comida que preparan es extraordinaria, los ingredientes son de primer nivel y el chef tiene años de experiencia.</p>

      <p>Pero cuando te sientas, la carta está arrugada y manchada, los cubiertos son endebles, la luz es fría como la de un hospital y las fotos de los platillos en la pared están borrosas y pixeladas.</p>

      <p>¿Qué pensamiento cruza automáticamente por tu mente?</p>

      <p><em>“Si me cobran caro por esto, me están estafando”</em>.</p>

      <p>Incluso si el sabor es el mejor de la ciudad, tu cerebro ya tomó una decisión antes del primer bocado: <strong>este lugar se siente barato</strong>.</p>

      <p>Esto mismo ocurre todos los días en internet con miles de empresas y profesionales talentosos. Tienen un servicio increíble, un producto de calidad superior y una dedicación envidiable, pero en redes sociales y en su sitio web su imagen proyecta todo lo contrario.</p>

      <h2>La diferencia entre Valor Real y Valor Percibido</h2>

      <p>En los negocios existen dos tipos de valor:</p>

      <ul>
        <li><strong>El Valor Real:</strong> La calidad objetiva de lo que vendes (los materiales, tu tiempo, tu experiencia, el resultado que entregas).</li>
        <li><strong>El Valor Percibido:</strong> La estimación psicológica que hace el cliente sobre cuánto debería costar lo que ofreces, basada únicamente en las señales visuales y de comunicación que recibe.</li>
      </ul>

      <p>A través de una pantalla de teléfono o computadora, <strong>tu cliente no puede tocar tu producto, no puede probar tu comida ni puede comprobar tu experiencia en persona</strong>.</p>

      <p>Lo único que tiene para evaluar tu calidad antes de sacar su tarjeta de crédito es <strong>cómo te presentas al mundo</strong>.</p>

      <p>Si tu identidad visual parece improvisada, si tus fotos parecen tomadas a la carrera con mala luz y si tus diseños no tienen un estándar claro, el cliente asumirá automáticamente que tu servicio también es improvisado.</p>

      <h2>Los 3 síntomas de una marca que se percibe barata</h2>

      <ul>
        <li><strong>1. Inconsistencia tipográfica y visual:</strong> Usar cinco fuentes distintas en una semana, cambiar de colores según el estado de ánimo y llenar cada imagen de textos pegados a los bordes sin dejar respirar el diseño. El desorden visual comunica falta de criterio y amateurismo.</li>
        <li><strong>2. Fotografía y video sin dirección de arte:</strong> Tomar fotos de productos sobre escritorios desordenados, con sombras duras o fondos poco cuidados. Una buena iluminación y un fondo limpio multiplican por cinco el valor aparente de cualquier artículo.</li>
        <li><strong>3. Imitar a todos los demás en lugar de construir un estándar:</strong> Cuando una marca copia exactamente los mismos reels, los mismos audios y las mismas plantillas que usan otros diez negocios de su ciudad, se convierte en un genérico (un "commodity"). Y a los genéricos siempre se les compite por precio.</li>
      </ul>

      <h2>El costo oculto: El regateo constante</h2>

      <p>¿Te ha pasado que un cliente potencial te escribe, le das tu cotización y su primera respuesta es: <em>“¿Y no me puede hacer un descuento?”</em> o <em>“En otro lugar me lo dejan a la mitad”</em>?</p>

      <p>El regateo no ocurre porque la gente no tenga dinero. Ocurre porque <strong>tu valor percibido está por debajo del precio que estás cobrando</strong>.</p>

      <p>Cuando una marca proyecta una imagen impecable, sólida y de alto nivel (piensa en Apple, en un café de especialidad de diseño o en un hotel boutique), nadie pide rebajas. El precio se respeta porque la experiencia visual confirma que lo vale.</p>

      <h2>Cómo elevar el valor percibido de tu negocio a partir de hoy</h2>

      <p>No necesitas un presupuesto de un millón de dólares para elevar tu percepción. Necesitas intención y estándares claros:</p>

      <ul>
        <li><strong>Abraza el espacio negativo (menos es más):</strong> Las marcas de bajo costo llenan cada milímetro de carteles con ofertas y textos en negrita. Las marcas de alto valor dejan aire, espacios limpios y tipografías elegantes. El vacío comunica confianza.</li>
        <li><strong>Define una dirección visual y apégate a ella:</strong> Mantén una paleta de color estricta, una o dos tipografías maestras y un estilo fotográfico coherente en todas partes. La repetición crea reconocimiento; el reconocimiento crea prestigio.</li>
        <li><strong>Invierte en la presentación de tus entregables:</strong> Desde el PDF de una propuesta comercial hasta el empaque de un producto o la portada de un video, cada punto de contacto debe sentirse como un regalo cuidadosamente preparado.</li>
      </ul>

      <blockquote class="blog-quote">"La gente no compra lo que es objetivamente mejor; compra lo que mejor comunica su calidad."</blockquote>

      <p>Si sabes que tu trabajo es bueno, deja de permitir que tu presencia digital le diga lo contrario al mercado. Cuando tu imagen visual está a la altura de tu talento, dejas de competir por centavos y empiezas a atraer a los clientes que valoran y pagan lo que realmente mereces.</p>
    `
  },
  {
    id: "blog-motion-retencion",
    title: "No empieces a grabar sin saber la regla de 3 segundos",
    slug: "no-empieces-a-grabar-sin-saber-la-regla-de-3-segundos",
    category: "Video & Motion Graphics",
    author: "Oscar T. - Director Creativo",
    date: "13 Oct, 2026",
    readTime: "5 min de lectura",
    image: "BLOGS/6 MOTION GRAPHICS RETENCION/PORTADA.jpg",
    snippet: "El cerebro humano decide en 3 segundos si quedarse o seguir deslizando. Aprende cómo los motion graphics y el ritmo visual frenan el scroll.",
    content: `
      <p>Hagamos un experimento mental muy rápido: entra a tu cuenta de Instagram o TikTok y desliza el dedo hacia arriba en la sección de Reels o Para Ti.</p>

      <p>¿Cuánto tiempo tardas en decidir si te quedas a ver un video o sigues deslizando?</p>

      <p>Un estudio reciente de consumo digital demostró que el cerebro humano procesa una imagen en 0.4 segundos y decide si un contenido merece su atención en <strong>menos de 3 segundos</strong>.</p>

      <p>Si en esa diminuta ventana de tiempo no lograste despertar curiosidad o emoción, tu video murió. No importa si a partir del segundo 10 tenías la revelación más brillante de tu vida: el 95% de las personas ya pasaron de largo con un simple movimiento de pulgar.</p>

      <p>En un entorno digital saturado de estímulos, <strong>la atención es la moneda más cara del mundo</strong>.</p>

      <h2>Por qué las publicaciones estáticas están perdiendo la batalla</h2>

      <p>Durante años, las fotos fijas y los artes gráficos tradicionales fueron los reyes de las redes. Pero hoy nuestros ojos están acostumbrados a pantallas dinámicas en constante evolución.</p>

      <p>Desde un punto de vista evolutivo y neurobiológico, <strong>el ojo humano está diseñado para reaccionar al movimiento antes que a cualquier otra cosa</strong>. En la naturaleza, el movimiento significaba peligro o alimento. En una pantalla de smartphone, el movimiento es lo único que tiene la fuerza de frenar el scroll automático.</p>

      <p>Aquí es donde los <strong>Motion Graphics (animación digital)</strong> y la edición con ritmo visual dejan de ser un adorno estético y se convierten en una herramienta de supervivencia comercial.</p>

      <h2>Los 3 ganchos visuales (Hooks) para ganar los primeros 3 segundos</h2>

      <p>Un buen gancho no es solo un título llamativo; es una experiencia visual completa que ocurre en el segundo cero:</p>

      <ul>
        <li><strong>1. Movimiento en el primer fotograma:</strong> No empieces con una persona saludando a la cámara de forma estática diciendo <em>“Hola a todos, hoy les voy a hablar de...”</em>. Empieza con una transición visual rápida, un zoom dinámico o un elemento gráfico que entre en movimiento de inmediato.</li>
        <li><strong>2. Tipografía cinética de alto contraste:</strong> El 70% de las personas consume videos en redes sin volumen en el trabajo, en el transporte o en la cama. Si tu título no aparece en pantalla con una animación limpia, tipografía legible y alto contraste, estás perdiendo a más de la mitad de tu audiencia potencial.</li>
        <li><strong>3. Romper el patrón visual del feed:</strong> Si todos en tu industria usan fondos blancos con texto negro aburrido, usa una paleta oscura con acentos vibrantes o una animación 3D. El cerebro ignora lo predecible; solo se detiene ante lo que rompe la monotonía.</li>
      </ul>

      <h2>El error del logotipo estático en la era del video</h2>

      <p>Piénsalo por un momento: las marcas más influyentes del mundo (Netflix con su emblemática "N" expandiéndose, Nike, PlayStation, Apple) <strong>nunca muestran un logotipo estático en pantalla</strong>.</p>

      <p>Sus identidades respiran, tienen transiciones, tienen sonido y se transforman.</p>

      <p>Un logotipo con animación digital profesional al inicio o al cierre de tus videos transmite inmediatamente un estándar corporativo de alto presupuesto, incluso si tu empresa es un equipo pequeño. Le dice al espectador: <em>“Esta marca cuida los detalles y juega en las grandes ligas”</em>.</p>

      <h2>Ritmo visual: Cómo retener hasta el último segundo</h2>

      <p>Ganar los primeros 3 segundos es solo la mitad de la batalla. La otra mitad es mantener a la persona pegada a la pantalla hasta que llegue a tu llamado a la acción.</p>

      <p>Para lograrlo, aplica la regla del <strong>ritmo cada 3 segundos</strong>:</p>

      <ul>
        <li>Cambia de plano o escala de encuadre.</li>
        <li>Introduce una microanimación (un gráfico que ilustre lo que estás diciendo, una flecha, un resaltador visual).</li>
        <li>Agrega diseño sonoro sutil (efectos de sonido que acompañen las apariciones en pantalla).</li>
      </ul>

      <blockquote class="blog-quote">"En internet no compites únicamente contra tus competidores de negocio; compites contra la capacidad de atención de un ser humano con un dedo veloz."</blockquote>

      <p>El contenido que convierte no es el que más datos arroja a la pantalla, sino el que mejor sabe guiar la mirada y mantener el interés del espectador de principio a fin.</p>

      <p>Cuando dominas el arte del movimiento visual, dejas de rogar por atención y empiezas a cautivarla de forma natural.</p>
    `
  },
  {
    id: "blog-vender-sin-vender",
    title: "¡Ya no vendas en redes sociales!",
    slug: "ya-no-vendas-en-redes-sociales",
    category: "Estrategia & Storytelling",
    author: "Oscar T. - Director Creativo",
    date: "13 Oct, 2026",
    readTime: "5 min de lectura",
    image: "BLOGS/7 VENDER SIN VENDER/PORTADA.jpg",
    snippet: "Por qué los perfiles que parecen folletos de supermercado espantan a los clientes y cómo el storytelling visual hace que la gente te busque voluntariamente.",
    content: `
      <p>Seguramente te ha tocado entrar al perfil de Instagram o TikTok de un negocio y encontrarte con un panorama desolador:</p>

      <p>Diez publicaciones seguidas diciendo:<br>
      <em>“¡Producto disponible en stock!”</em>, <em>“¡Aprovecha nuestro 2x1!”</em>, <em>“¡El mejor servicio al mejor precio!”</em>, <em>“¡Escríbenos al WhatsApp para cotizar!”</em>.</p>

      <p>¿Qué sensación te produce una cuenta así?</p>

      <p>Exactamente: ganas de cerrar la aplicación y salir huyendo. Se siente como entrar a una tienda donde un vendedor insistente te persigue a diez centímetros de distancia repitiéndote que le compres.</p>

      <p>El problema es que muchas marcas confunden tener presencia en redes sociales con repartir volantes publicitarios en una esquina. Y en el mundo moderno, esa estrategia no solo no funciona, sino que <strong>destruye el valor de tu marca</strong>.</p>

      <h2>La gran paradoja: A la gente le fascina comprar, pero odia que le vendan</h2>

      <p>Piénsalo en tu propia vida: a todos nos encanta la emoción de estrenar unos tenis nuevos, reservar unas vacaciones en un hotel increíble o contratar un servicio que nos va a resolver un problema enorme.</p>

      <p>Lo que detestamos es sentirnos presionados o manipulados.</p>

      <p>Las marcas más exitosas de la era digital entendieron una verdad fundamental: <strong>las redes sociales no son un canal de venta directa; son un canal de seducción y confianza</strong>.</p>

      <p>Cuando intentas vender en cada publicación, te posicionas como alguien desesperado por dinero. Pero cuando educas, inspiras y muestras tu universo visual con maestría, te posicionas como un líder al que los clientes quieren acudir voluntariamente.</p>

      <h2>Vender a través de historias (Storytelling de Marca)</h2>

      <p>La diferencia entre una marca común y una marca inolvidable está en qué es lo que realmente comunica:</p>

      <ul>
        <li><strong>La marca común vende características:</strong> <em>“Vendemos colchones ortopédicos con resortes de acero inoxidable”</em>.</li>
        <li><strong>La marca líder vende transformación:</strong> Muestra a una persona levantándose con una sonrisa a las 6:00 a.m., llena de energía para jugar con sus hijos o cerrar un negocio importante, porque durmió profundamente toda la noche.</li>
      </ul>

      <p>No vendas el proceso técnico de lo que haces. Vende <strong>la tranquilidad, el prestigio o el tiempo libre que tu cliente disfrutará después de trabajar contigo</strong>.</p>

      <h2>Los 3 secretos para que los clientes te busquen a ti</h2>

      <ul>
        <li><strong>1. Enseña tus mejores secretos sin miedo:</strong> Muchos emprendedores tienen miedo de dar consejos útiles porque piensan: <em>“Si les enseño cómo se hace, lo van a hacer ellos mismos y no me van a contratar”</em>. La realidad es exactamente la contraria. Cuando demuestras tu dominio sobre un tema de forma generosa, el cliente piensa: <em>“Si esto lo enseña gratis, lo que hace cuando le pagan debe ser extraordinario”</em>. Quien tiene presupuesto no quiere hacerlo solo; quiere contratar al que demostró ser el mejor.</li>
        <li><strong>2. Muestra el detrás de cámaras y los procesos reales:</strong> A la gente le fascina ver cómo se fabrica un producto, cómo se prepara una sesión de fotos, qué errores se corrigieron o qué decisiones técnicas se tomaron en un proyecto. El proceso humaniza tu negocio y justifica el precio de tu trabajo.</li>
        <li><strong>3. Comunica una filosofía y un estilo de vida:</strong> Las personas no solo compran un servicio; compran pertenecer a una tribu que comparte sus valores estéticos y profesionales. Si tu contenido refleja orden, buen gusto, pasión por el detalle y excelencia, atraerás clientes que vibran exactamente con esa misma mentalidad.</li>
      </ul>

      <blockquote class="blog-quote">"Cuando dejas de perseguir ventas y comienzas a construir deseo, los clientes dejan de pedir rebajas y empiezan a pedir disponibilidad."</blockquote>

      <p>El mejor marketing digital es aquel que no parece marketing. Es el que educa, entretiene y resuelve problemas reales con tanta calidad que comprar tu servicio se convierte en el paso lógico y natural.</p>

      <p>Deja de empujar tus productos hacia la gente. Empieza a construir una marca tan magnética que sean ellos quienes toquen a tu puerta.</p>
    `
  }
];

const TESTIMONIALS_DATA = [
  {
    rating: 5,
    name: "Camila Silva",
    role: "Directora de Marca",
    text: "Visual Oscart rediseñó todo nuestro empaque y ahora somos líderes visuales.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80"
  },
  {
    rating: 5,
    name: "Laura Méndez",
    role: "Founder & CEO",
    text: "Increíble creatividad. Capturaron la esencia de nuestra marca a la perfección.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80"
  },
  {
    rating: 5,
    name: "Carlos Ruiz",
    role: "Gerente de Operaciones",
    text: "La animación superó lo que imaginábamos. Muy puntuales en su entrega.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80"
  },
  {
    rating: 5,
    name: "Alejandro Torres",
    role: "Director Comercial",
    text: "Propuestas frescas y vanguardistas. Un equipo en quien confiar tu imagen.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80"
  },
  {
    rating: 5,
    name: "Valeria Benítez",
    role: "Marketing Lead",
    text: "La estrategia para nuestras redes sociales incrementó nuestro alcance orgánico e interacción al instante.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80"
  },
  {
    rating: 5,
    name: "Diego Morales",
    role: "Socio Fundador",
    text: "El spot audiovisual reflejó exactamente el dinamismo y profesionalismo que buscábamos para nuestra empresa.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&h=160&q=80"
  },
  {
    rating: 5,
    name: "Sofía Castro",
    role: "Directora Creativa",
    text: "Excelente acompañamiento y dirección de arte en cada etapa del proyecto. Totalmente recomendados.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&h=160&q=80"
  },
  {
    rating: 5,
    name: "Mariana Vargas",
    role: "Líder de Comunicaciones",
    text: "Transformaron la comunicación visual de nuestra marca de forma excepcional con piezas creativas e impecables.",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=160&h=160&q=80"
  }
];

const FAQ_DATA = [
  {
    id: "faq-1",
    question: "¿Cuáles son todos los servicios?",
    answer: "<strong>Gestión de Redes Sociales:</strong> Nos encargamos de crear, gestionar y optimizar tu presencia en las plataformas sociales para conectar efectivamente con tu audiencia y aumentar tu visibilidad.<br><br><strong>Diseño de Marca:</strong> Desarrollamos la identidad visual de tu marca desde cero, asegurando que cada elemento refleje la esencia y valores de tu negocio para destacar en el mercado.<br><br><strong>Animación Digital:</strong> Creamos animaciones impactantes y memorables que capturan la atención de tu público, ideal para promociones, explicativos o simplemente para darle vida a tu contenido digital.<br><br><strong>Producción Audiovisual:</strong> Nos especializamos en la producción y postproducción de piezas audiovisuales de alto impacto visual, desde spots promocionales hasta reels estratégicos y videos corporativos."
  },
  {
    id: "faq-2",
    question: "¿Dónde están ubicados?",
    answer: "Visual Oscart tiene su base en Costa Rica. Aunque no contamos con una ubicación física, nuestros servicios digitales de alta calidad nos permiten atender a clientes tanto dentro de todo el territorio costarricense como internacionalmente, asegurando la mejor experiencia sin importar dónde te encuentres."
  },
  {
    id: "faq-3",
    question: "¿Cómo contratar con nosotros?",
    answer: "Contratar con nosotros es muy sencillo. Solo necesitas contactarnos a través de teléfono, WhatsApp, correo electrónico o nuestras redes sociales. Programaremos una reunión virtual para discutir tus necesidades específicas y encontrar la mejor manera de ayudarte."
  }
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Descubrimiento",
    desc: "Analizamos tu marca, audiencia, objetivos estratégicos y competencia en el mercado regional para definir una hoja de ruta clara."
  },
  {
    number: "02",
    title: "Estrategia & Concepto",
    desc: "Desarrollamos el concepto creativo, la dirección de arte y los guiones o estructuras visuales que darán forma al proyecto."
  },
  {
    number: "03",
    title: "Diseño & Producción",
    desc: "Ejecutamos la creación gráfica, rodaje cinematográfico o animación motion graphics utilizando tecnología y software de nivel profesional."
  },
  {
    number: "04",
    title: "Entrega & Despliegue",
    desc: "Optimizamos los entregables finales para todos los formatos y acompañamos en la implementación para asegurar el máximo alcance."
  }
];

/**
 * Dataset dinámico para los Casos de Estudio por Protocolo de Carpetas en Gestión de Redes Sociales
 */
const GESTION_REDES_PORTFOLIO = [
  {
    id: "speedy-logistics",
    caseStudyId: "speedy-logistics",
    folder: "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS",
    brandName: "Speedy Logistics",
    niche: "Empresa de Courier & Logística Internacional",
    logo: "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/PERFIL.png",
    portada: "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/PORTADA.png",
    heroVideo: "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/VIDEO.mp4",
    videoHero: "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/VIDEO.mp4",
    conceptTitle: "CONCEPTO DE MARCA",
    conceptText: "Speedy Logistics es una empresa especializada en la gestión y transporte de compras internacionales desde Estados Unidos hacia Costa Rica, comprometida con ofrecer un servicio eficiente, seguro y transparente. La operación se orienta a facilitar el acceso a productos adquiridos en comercios estadounidenses, garantizando una experiencia logística confiable, ágil y enfocada en las necesidades del cliente.",
    conceptDesc: "Speedy Logistics es una empresa especializada en la gestión y transporte de compras internacionales desde Estados Unidos hacia Costa Rica, comprometida con ofrecer un servicio eficiente, seguro y transparente.",
    posts: [
      "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/POST 1.png",
      "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/POST 2.png",
      "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/POST 3.png",
      "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/POST 4.png",
      "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/POST 5.png",
      "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/POST 6.png",
      "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/POST 7.png"
    ],
    animations: [
      { src: "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/ANIMACION 1.mp4", title: "Spot Promocional 4:5" },
      { src: "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/ANIMACION 2.mp4", title: "Reel Estratégico 4:5" },
      { src: "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/ANIMACION 3.mp4", title: "Contenido Dinámico 4:5" }
    ],
    campaignsCount: "+24 Campañas Realizadas",
    metricsBanner: {
      campaigns: "+24 Campañas Conectadas",
      reach: "+36K Alcance Orgánico",
      socialLinks: {
        instagram: "https://www.instagram.com",
        facebook: "https://www.facebook.com",
        tiktok: "https://www.tiktok.com",
        youtube: "https://www.youtube.com"
      }
    },
    socialNetworks: ["instagram", "facebook", "tiktok", "youtube"],
    mockups: [
      "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/MOCKUP 1.png",
      "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/MOCKUP 2.png",
      "PORTAFOLIO/1 GESTION SPEEDY LOGISTICS/MOCKUP 3.png"
    ],
    instagramLinks: [
      { url: "https://www.instagram.com/p/DWWfY3ECSYq/", title: "Ver Publicación #1 en Instagram" },
      { url: "https://www.instagram.com/p/DVoSZw2DiIp/", title: "Ver Publicación #2 en Instagram" },
      { url: "https://www.instagram.com/p/DTQCMoDCirK/", title: "Ver Publicación #3 en Instagram" },
      { url: "https://www.instagram.com/p/DR2MN7cCbzI/", title: "Ver Publicación #4 en Instagram" }
    ]
  },
  {
    id: "psicosinapsis",
    caseStudyId: "psicosinapsis",
    folder: "PORTAFOLIO/2 GESTION PSICOSINAPSIS",
    brandName: "Psicosinapsis",
    niche: "Consultoría Psicológica Multidisciplinaria",
    logo: "PORTAFOLIO/2 GESTION PSICOSINAPSIS/PERFIL.png",
    portada: "PORTAFOLIO/2 GESTION PSICOSINAPSIS/PORTADA.png",
    heroVideo: "PORTAFOLIO/2 GESTION PSICOSINAPSIS/VIDEO.mp4",
    videoHero: "PORTAFOLIO/2 GESTION PSICOSINAPSIS/VIDEO.mp4",
    conceptTitle: "CONCEPTO DE MARCA",
    conceptText: "Psicosinapsis es una consultoría psicológica multidisciplinaria que integra los enfoques clínico, educativo y organizacional desde una perspectiva conductual, ética y empática. Su propósito es fomentar el bienestar emocional, cognitivo y social mediante la modificación de conductas, el desarrollo de habilidades psicosociales y el fortalecimiento de ambientes saludables y funcionales.",
    conceptDesc: "Psicosinapsis es una consultoría psicológica multidisciplinaria que integra los enfoques clínico, educativo y organizacional desde una perspectiva conductual, ética y empática.",
    posts: [
      "PORTAFOLIO/2 GESTION PSICOSINAPSIS/POST 1.png",
      "PORTAFOLIO/2 GESTION PSICOSINAPSIS/POST 2.png",
      "PORTAFOLIO/2 GESTION PSICOSINAPSIS/POST 3.png",
      "PORTAFOLIO/2 GESTION PSICOSINAPSIS/POST 4.png",
      "PORTAFOLIO/2 GESTION PSICOSINAPSIS/POST 5.jpg",
      "PORTAFOLIO/2 GESTION PSICOSINAPSIS/POST 6.png",
      "PORTAFOLIO/2 GESTION PSICOSINAPSIS/POST 7.png"
    ],
    animations: [
      { src: "PORTAFOLIO/2 GESTION PSICOSINAPSIS/ANIMACION 1.mp4", title: "Spot Promocional 4:5" },
      { src: "PORTAFOLIO/2 GESTION PSICOSINAPSIS/ANIMACION 2.mp4", title: "Reel Estratégico 4:5" },
      { src: "PORTAFOLIO/2 GESTION PSICOSINAPSIS/ANIMACION 3.mp4", title: "Contenido Dinámico 4:5" }
    ],
    campaignsCount: "+36 Campañas Realizadas",
    metricsBanner: {
      campaigns: "+36 Campañas Conectadas",
      reach: "+45K Alcance Orgánico",
      socialLinks: {
        instagram: "https://www.instagram.com",
        facebook: "https://www.facebook.com",
        tiktok: "https://www.tiktok.com",
        youtube: "https://www.youtube.com"
      }
    },
    socialNetworks: ["instagram", "facebook", "tiktok", "youtube"],
    mockups: [
      "PORTAFOLIO/2 GESTION PSICOSINAPSIS/MOCKUP 1 .png",
      "PORTAFOLIO/2 GESTION PSICOSINAPSIS/MOCKUP 2.png",
      "PORTAFOLIO/2 GESTION PSICOSINAPSIS/MOCKUP 3 .png"
    ],
    instagramLinks: [
      { url: "https://www.instagram.com/p/DPm0Rm3gMqS/", title: "Ver Publicación #1 en Instagram" },
      { url: "https://www.instagram.com/p/DQ-B8HRkj5J/", title: "Ver Publicación #2 en Instagram" },
      { url: "https://www.instagram.com/p/DU-7aSxkmxX/", title: "Ver Publicación #3 en Instagram" },
      { url: "https://www.instagram.com/p/DVykMZJCRIZ/", title: "Ver Publicación #4 en Instagram" }
    ]
  }
];

/**
 * Dataset dinámico para los Casos de Estudio por Protocolo de Carpetas en Diseño de Marca
 */
const DISENO_MARCA_PORTFOLIO = [
  {
    id: "fuku-arenal",
    caseStudyId: "fuku-arenal",
    folder: "PORTAFOLIO/1 DISENO FUKU ARENAL",
    brandName: "Fuku Arenal",
    niche: "Alojamiento Turístico & Experiencia Eco-Consciente",
    logo: "PORTAFOLIO/1 DISENO FUKU ARENAL/LOGO.jpg",
    portada: "PORTAFOLIO/1 DISENO FUKU ARENAL/PORTADA.jpg",
    video: "PORTAFOLIO/1 DISENO FUKU ARENAL/VIDEO.mp4",
    conceptTitle: "CONCEPTO DE LA MARCA",
    conceptText: "FUKU ARENAL es un alojamiento tipo Airbnb ubicado cerca del volcán Arenal, pensado para viajeros que desean escapar del ritmo acelerado de la ciudad y sumergirse en un entorno natural sin renunciar a la comodidad. Su propuesta se centra en ofrecer una experiencia eco-consciente y acogedora.",
    misionText: "Crear estancias memorables a través de detalles cuidados, hospitalidad auténtica y experiencias diseñadas para que cada huésped se sienta parte del destino.",
    visionText: "Ser el espacio donde cada viajero descubre una experiencia única que conecta con el lugar, la cultura y las emociones que quiere vivir.",
    mockups: [
      "PORTAFOLIO/1 DISENO FUKU ARENAL/MOCKUP1.jpg",
      "PORTAFOLIO/1 DISENO FUKU ARENAL/MOCKUP 2.jpg",
      "PORTAFOLIO/1 DISENO FUKU ARENAL/MOCKUP3.jpg"
    ],
    fondos: [
      "PORTAFOLIO/1 DISENO FUKU ARENAL/FONDO 1.jpg",
      "PORTAFOLIO/1 DISENO FUKU ARENAL/FONDO 2.jpg",
      "PORTAFOLIO/1 DISENO FUKU ARENAL/FONDO 3.jpg",
      "PORTAFOLIO/1 DISENO FUKU ARENAL/FONDO 4.jpg"
    ],
    versiones: [
      {
        image: "PORTAFOLIO/1 DISENO FUKU ARENAL/VERSION 1.png",
        text: "Este es el formato principal que se utilizará de forma institucional. Para representar la marca de manera corporativa."
      },
      {
        image: "PORTAFOLIO/1 DISENO FUKU ARENAL/VERSION 2.png",
        text: "Se puede desarrollar un isotipo con el ícono del volcán para ser usado en espacios reducidos (stickers, redes, favicon)."
      },
      {
        image: "PORTAFOLIO/1 DISENO FUKU ARENAL/VERSION 3.png",
        text: "Un formato más adaptable para banners y publicidad exterior, donde se puede colocar el ícono junto al nombre en una distribución equilibrada."
      }
    ],
    valores: [
      "PORTAFOLIO/1 DISENO FUKU ARENAL/VALOR 1.png",
      "PORTAFOLIO/1 DISENO FUKU ARENAL/VALOR 2.png",
      "PORTAFOLIO/1 DISENO FUKU ARENAL/VALOR 3.png",
      "PORTAFOLIO/1 DISENO FUKU ARENAL/VALOR 4.png",
      "PORTAFOLIO/1 DISENO FUKU ARENAL/VALOR 5.png"
    ]
  },
  {
    id: "raven-house",
    caseStudyId: "raven-house",
    folder: "PORTAFOLIO/2 DISENO RAVEN HOUSE",
    brandName: "Raven Store",
    niche: "Coleccionismo, Trading Card Games & Sublimación",
    logo: "PORTAFOLIO/2 DISENO RAVEN HOUSE/LOGO.jpg",
    portada: "PORTAFOLIO/2 DISENO RAVEN HOUSE/PORTADA.jpg",
    video: "PORTAFOLIO/2 DISENO RAVEN HOUSE/VIDEO.mp4",
    conceptTitle: "CONCEPTO DE LA MARCA",
    conceptText: "Raven Store es un espacio donde la magia y el estilo se fusionan, ofreciendo un ambiente elegante, moderno y lleno de dinamismo. Este negocio familiar se especializa en trading card games, sublimación y figuras coleccionables.",
    misionText: "Crear un espacio donde la comunidad amante del coleccionismo y los juegos de estrategia encuentre productos únicos, atención cercana y soluciones rápidas, combinando elegancia, modernidad y un servicio comprometido que siempre va más allá.",
    visionText: "Convertirnos en la tienda de referencia para coleccionistas y jugadores en Costa Rica, reconocida por su estilo distintivo, su experiencia de compra personalizada y su capacidad de conseguir lo que cada cliente busca, fortaleciendo una comunidad apasionada y en crecimiento.",
    mockups: [
      "PORTAFOLIO/2 DISENO RAVEN HOUSE/MOCKUP 1.jpg",
      "PORTAFOLIO/2 DISENO RAVEN HOUSE/MOCKUP 2.jpg",
      "PORTAFOLIO/2 DISENO RAVEN HOUSE/MOCKUP 3.jpg"
    ],
    fondos: [
      "PORTAFOLIO/2 DISENO RAVEN HOUSE/FONDO 1.jpg",
      "PORTAFOLIO/2 DISENO RAVEN HOUSE/FONDO 2.jpg",
      "PORTAFOLIO/2 DISENO RAVEN HOUSE/FONDO 3.jpg",
      "PORTAFOLIO/2 DISENO RAVEN HOUSE/FONDO 4.jpg"
    ],
    versiones: [
      {
        image: "PORTAFOLIO/2 DISENO RAVEN HOUSE/VERSION 1.png",
        text: "Este es el formato principal que se utilizará de forma institucional. Para representar la marca de manera corporativa."
      },
      {
        image: "PORTAFOLIO/2 DISENO RAVEN HOUSE/VERSIOn 2.png",
        text: "Se puede desarrollar un isotipo con el ícono distintivo para ser usado en espacios reducidos (stickers, redes, favicon)."
      },
      {
        image: "PORTAFOLIO/2 DISENO RAVEN HOUSE/VERSION 3.png",
        text: "Un formato más adaptable para banners y publicidad exterior, donde se puede colocar el ícono junto al nombre en una distribución equilibrada."
      }
    ],
    valores: [
      "PORTAFOLIO/2 DISENO RAVEN HOUSE/VALOR 1.jpg",
      "PORTAFOLIO/2 DISENO RAVEN HOUSE/VALOR 2.jpg",
      "PORTAFOLIO/2 DISENO RAVEN HOUSE/VALOR 3.jpg",
      "PORTAFOLIO/2 DISENO RAVEN HOUSE/VALOR 4.jpg",
      "PORTAFOLIO/2 DISENO RAVEN HOUSE/VALOR 5.jpg"
    ]
  },
  {
    id: "free-way",
    caseStudyId: "free-way",
    folder: "PORTAFOLIO/3 DISENO FREE WAY",
    brandName: "Free Way",
    niche: "Alquiler de Vehículos & Movilidad Turística",
    logo: "PORTAFOLIO/3 DISENO FREE WAY/LOGO.jpg",
    portada: "PORTAFOLIO/3 DISENO FREE WAY/PORTADA.jpg",
    video: "PORTAFOLIO/3 DISENO FREE WAY/VIDEO.mp4",
    conceptTitle: "CONCEPTO DE LA MARCA",
    conceptText: "Free Way es una empresa de alquiler de vehículos especializada en el segmento turístico, dedicada a ofrecer soluciones de movilidad que elevan la forma en que los viajeros descubren Costa Rica.",
    misionText: "Brindar experiencias de movilidad que permitan a cada viajero descubrir Costa Rica con libertad, seguridad y un servicio profundamente humano. En Free Way nos comprometemos a ofrecer atención personalizada, procesos simples y vehículos confiables que conviertan cada recorrido en una aventura memorable.",
    visionText: "Ser la empresa de alquiler de vehículos más confiable y apreciada del segmento turístico, reconocida por elevar la experiencia de viaje a través de un servicio cercano, profesional y orientado a la excelencia, acompañando a cada cliente en la creación de rutas, historias y momentos inolvidables.",
    mockups: [
      "PORTAFOLIO/3 DISENO FREE WAY/MOCKUP 1.jpg",
      "PORTAFOLIO/3 DISENO FREE WAY/MOCKUP 2.jpg",
      "PORTAFOLIO/3 DISENO FREE WAY/MOCKUP 3.jpg"
    ],
    fondos: [
      "PORTAFOLIO/3 DISENO FREE WAY/FONDO 1.jpg",
      "PORTAFOLIO/3 DISENO FREE WAY/FONDO 2.jpg",
      "PORTAFOLIO/3 DISENO FREE WAY/FONDO 3.jpg",
      "PORTAFOLIO/3 DISENO FREE WAY/FONDO 4.jpg"
    ],
    versiones: [
      {
        image: "PORTAFOLIO/3 DISENO FREE WAY/VERSION 1.png",
        text: "Este es el formato principal que se utilizará de forma institucional. Para representar la marca de manera corporativa."
      },
      {
        image: "PORTAFOLIO/3 DISENO FREE WAY/VERSION 2.png",
        text: "Se puede desarrollar un isotipo con el ícono de movilidad para ser usado en espacios reducidos (stickers, redes, favicon)."
      },
      {
        image: "PORTAFOLIO/3 DISENO FREE WAY/VERSION 3.png",
        text: "Un formato más adaptable para banners y publicidad exterior, donde se puede colocar el ícono junto al nombre en una distribución equilibrada."
      }
    ],
    valores: [
      "PORTAFOLIO/3 DISENO FREE WAY/VALOR 1.jpg",
      "PORTAFOLIO/3 DISENO FREE WAY/VALOR 2.jpg",
      "PORTAFOLIO/3 DISENO FREE WAY/VALOR 3.jpg",
      "PORTAFOLIO/3 DISENO FREE WAY/VALOR 4.jpg",
      "PORTAFOLIO/3 DISENO FREE WAY/VALOR 5.jpg"
    ]
  }
];


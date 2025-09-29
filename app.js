// Project data
const projectData = {
  'vr-dodgeball': {
    title_en: 'VR Dodgeball Multiplayer',
    title_es: 'VR Dodgeball Multijugador',
    subtitle_en: 'MWC 2024 Telefónica Demo',
    subtitle_es: 'Demo de Telefónica MWC 2024',
    tech: 'Unreal Engine, C++/Blueprints, NVIDIA CloudXR, bHaptics, AWS',
    role_en: 'Game Design, Director, Programmer, Project Manager',
    role_es: 'Diseño de Juegos, Director, Programador, Jefe de Proyecto',
    description_en: '1-vs-1 Multiplayer VR dodgeball game, with haptic vest effects, Cloud Rendering and asymmetric gameplay. Showcased at Mobile World Congress 2024 as Telefónica\'s main demo.',
    description_es: 'Juego de dodgeball VR multijugador 1-vs-1, con efectos de chaleco háptico, renderizado en la nube y jugabilidad asimétrica. Presentado en el Mobile World Congress 2024 como la demostración principal de Telefónica.',
    features_en: [
      'VR object throw with physics, trajectory smoothing, player targeting and network optimization',
      'Sophisticated 3D haptic vest effects dependent on player orientation and object hit position',
      'Cloud rendering R+D using NVIDIA CloudXR, supervised and contributed to the implementation',
      'Asymmetric multiplayer: Audience members could throw balls at the two players using motion controllers'
    ],
    features_es: [
      'Lanzamiento de objetos VR con física, suavizado de trayectoria, orientación de jugadores y optimización de red',
      'Efectos sofisticados de chaleco háptico 3D dependientes de la orientación del jugador y la posición del impacto',
      'I+D de renderizado en la nube usando NVIDIA CloudXR, supervisé y contribuí a la implementación',
      'Multijugador asimétrico: Los miembros de la audiencia podían lanzar pelotas a los dos jugadores usando controladores de movimiento'
    ],
    external_links: [
      { label_en: 'Case study', label_es: 'Web oficial', url: 'https://web.archive.org/web/20241218154206/https://extendra.io/es/proyectos/telefonica-edge-haptic-arena' },
    ],
    client: 'Telefónica',
    tags: ['VR', 'B2B', 'Multiplayer', 'Unreal Engine', 'Game'],
    media: [
      { type: 'embed', src: 'https://www.youtube.com/embed/g91ErjuvVEY?si=M6lKku1KJDNL6NeH&amp;start=59', title: 'Keynote section at MWC 2024' },
      { type: 'embed', src: 'https://www.youtube.com/embed/9CiWP5Lu-HI?si=WH77uPzH7JdNbdVc&amp;start=27', title: 'Telefónica Haptic Arena Gameplay' },
      { type: 'image', src: 'media/telefonica/telefonica-edge-haptic-arena-1.jpg', alt: 'Pau Gasol at Telefonica Edge Haptic Arena MWC 2024', title: 'Pau Gasol at Telefonica Edge Haptic Arena MWC 2024' },
      { type: 'embed', src: 'https://drive.google.com/file/d/1Xm0mbCPnX4GTahRLcJR5Nf7SEF5bLrOf/preview', title: 'Telefónica Haptic Arena users playing' },
      { type: 'image', src: 'media/telefonica/playarea.jpg', alt: 'Telefónica Haptic Arena screenshot', title: 'Telefónica Haptic Arena screenshot' },
      { type: 'image', src: 'media/telef2.png', alt: 'Telefónica Haptic Arena screenshot', title: 'Telefónica Haptic Arena screenshot' },
      { type: 'image', src: 'media/telefonica/publico2.jpg', alt: 'Telefónica Haptic Arena stand', title: 'Telefónica Haptic Arena stand' },
    ],
  },
  'vr-platform': {
    title_en: 'VR Content Platform',
    title_es: 'Plataforma de Contenido VR',
    subtitle_en: 'B2B Multiplayer Platform',
    subtitle_es: 'Plataforma Multijugador B2B',
    tech: 'Unreal Engine, C++/Blueprints, Pixel Streaming, React, AWS',
    role_en: 'Lead Developer, Three-year development',
    role_es: 'Desarrollador Principal, Desarrollo de tres años',
    description_en: 'A fully-featured multiplayer B2B content platform for VR meetings, training, conferences, collaborative workspaces, showrooms, and more.',
    description_es: 'Una plataforma de contenido B2B multijugador completa para reuniones VR, entrenamiento, conferencias, espacios de trabajo colaborativos, salas de exhibición y más.',
    features_en: [
      'Multi-platform release on the Meta Quest Store, PC, and Pixel Streaming',
      'Complex VR networked interactions and robust content delivery system',
      'Developed in-house tools: voice chat, WebAPI integration, media manager, video calls, custom Slate UI components',
      'Training-specific gameplay mechanics',
      'Pixel Streaming user presence and interaction system for mobile and desktop web platforms'
    ],
    features_es: [
      'Lanzamiento multiplataforma en Meta Quest Store, PC y Pixel Streaming',
      'Interacciones VR en red complejas y sistema robusto de entrega de contenido',
      'Herramientas desarrolladas internamente: chat de voz, integración WebAPI, gestor de medios, videollamadas, componentes UI Slate personalizados',
      'Mecánicas de juego específicas para entrenamiento',
      'Sistema de presencia de usuario e interacción Pixel Streaming para plataformas web móviles y de escritorio'
    ],
    external_links: [
      { label_en: 'Meta Quest Store', label_es: 'Meta Quest Store', url: 'https://www.meta.com/es-es/experiences/extendra-hub/8573735049368457/' },
      { label_en: 'Official website (archived)', label_es: 'Web oficial (archivada)', url: 'https://abramaran.github.io/ExtendraHubArchived/' },
    ],
    tags: ['VR', 'B2B', 'Platform', 'Unreal Engine'],
    media: [
      { type: 'video', src: 'media/ExtendraHub.mp4', title: 'Extendra Hub Trailer'/* , poster: 'images/dodgeball-thumb.jpg'  */},
      { type: 'image', src: 'media/hub/conference.jpg', alt: 'Beach auditorium', title: 'Beach auditorium' },
      { type: 'image', src: 'media/extendrahub2.png', alt: 'Meeting area', title: 'Meeting area' },
      { type: 'image', src: 'media/hub/workroom_upscaled.jpg', alt: 'Workroom area', title: 'Workroom area' },
      { type: 'image', src: 'media/hub/beach.jpg', alt: 'Beach Workroom area', title: 'Beach Workroom area' },
      { type: 'embed', src: 'https://drive.google.com/file/d/1r3qMeyY-wqTzCk-1yxG8VkvRzp_hHE7f/preview', title: 'Extendra Hub interaction reel' },
    ],
  },
  'vr-surf': {
    title_en: 'VR Showroom & Surf Game',
    title_es: 'Sala de Exhibición VR y Juego de Surf',
    subtitle_en: 'Pull&Bear Pacific Metaverse',
    subtitle_es: 'Lanzamiento en Meta Quest Store',
    tech: 'Unreal Engine, C++/Blueprints, AWS, Ready Player Me',
    role_en: 'Game Design, Gameplay Programmer',
    role_es: 'Diseño de Juegos, Programador de Jugabilidad',
    description_en: 'Multiplayer VR showroom and surf game. Showcased in fashion expos and released on the Meta Quest Store.',
    description_es: 'Sala de exhibición VR multijugador y juego de surf. Presentado en exposiciones de moda y lanzado en Meta Quest Store.',
    features_en: [
      'Implemented a VR networked surf minigame played using full body movement',
      'Developed a spectator system with cinematic camera shots for showcase in fashion events',
      'UI work and voice chat plugin development',
      'Used AI actors as a debugging tool'
    ],
    features_es: [
      'Implementé un minijuego de surf VR en red jugado usando movimiento de cuerpo completo',
      'Desarrollé un sistema de espectador con tomas de cámara cinematográficas para exhibición en eventos de moda',
      'Trabajo de UI y desarrollo de plugin de chat de voz',
      'Usé actores IA como herramienta de depuración'
    ],
    external_links: [
      { label_en: 'Meta Quest Store', label_es: 'Meta Quest Store', url: 'https://www.meta.com/experiences/pullbear/5023202301102285/' },
      { label_en: 'Case study', label_es: 'Web oficial', url: 'https://web.archive.org/web/20250204104622/https://extendra.io/en/projects/pull-and-bear' },
    ],
    client: 'Pull&Bear',
    tags: ['VR', 'Game', 'B2B', 'Unreal Engine'],
    media: [
      { type: 'image', src: 'media/pb/surf.gif', alt: 'Surf minigame gameplay', title: 'Surf minigame gameplay' },
      { type: 'video', src: 'https://video.wixstatic.com/video/ec5147_d7cac6a2903f40cfaef5b87d5efcc205/1080p/mp4/file.mp4', title: 'Gameplay Video', poster: 'images/dodgeball-thumb.jpg' },
      { type: 'embed', src: 'https://drive.google.com/file/d/13sfwhqF7NQXaKMAfaBse1zNYfAU-HzU3/preview', title: 'Trailer' },
      { type: 'image', src: 'media/pb/PullAndBearMetaverse.png', alt: 'Ready Player Me integration', title: 'Pull&Bear Pacific Metaverse' }, 
      { type: 'image', src: 'media/pb/web3D.jpg', alt: 'Ready Player Me integration', title: 'Ready Player Me integration' }, 
    ],
  },
  'cpp-engine': {
    title_en: 'Custom C++ Game Engine',
    title_es: 'Motor de Juego C++ Personalizado',
    subtitle_en: 'Fighting Game Engine',
    subtitle_es: 'Motor de Juego de Lucha',
    tech: 'C++, OpenGL, FMOD',
    role_en: 'Engine and Gameplay Programmer, Game Design',
    role_es: 'Programador de Motor y Jugabilidad, Diseño de Juegos',
    description_en: 'Online multiplayer fighting game written on a fully custom C++ game engine.',
    description_es: 'Juego de lucha multijugador en línea escrito en un motor de juego C++ completamente personalizado.',
    features_en: [
      'Built all the Entity Component System game engine logic from scratch in C++',
      'Coded the logic aspect of the rendering engine: Scenes represented as node trees, asset and animations loading',
      'Highly optimized: built for a very low-specs unix machine',
      'Worked on many aspects of animation, camera and gameplay mechanics'
    ],
    features_es: [
      'Construí toda la lógica del motor de juego Entity Component System desde cero en C++',
      'Programé el aspecto lógico del motor de renderizado: Escenas representadas como árboles de nodos, carga de assets y animaciones',
      'Altamente optimizado: construido para una máquina unix de especificaciones muy bajas',
      'Trabajé en muchos aspectos de animación, cámara y mecánicas de jugabilidad'
    ],    
    external_links: [
      { label_en: 'Itch.io game page', label_es: 'Página del juego en Itch.io', url: 'https://tako-ko.itch.io/gogo-robot-brawl' },
    ],

    tags: ['Custom Engine', 'C++', 'Game', 'Research'],
    media: [
      { type: 'image', src: 'media/ggrb/ggrb.jpg', alt: 'GoGo!! Robot Brawl Screenshot', title: 'GoGo!! Robot Brawl Screenshot' },
      { type: 'image', src: 'media/ggrb/ggrb2.jpg', alt: 'GoGo!! Robot Brawl Screenshot', title: 'GoGo!! Robot Brawl Screenshot' },
      { type: 'image', src: 'media/ggrb/ggrb3.jpg', alt: 'GoGo!! Robot Brawl Screenshot', title: 'GoGo!! Robot Brawl Screenshot' },
      { type: 'embed', src: 'https://www.youtube.com/embed/b37jqULXvtA?si=HSEW4gyCjnBgcZxq', title: 'Trailer' }    ],
  },
  'playdate': {
    title_en: 'Playdate Game Development',
    title_es: 'Desarrollo de Juegos Playdate',
    subtitle_en: 'Bachelor\'s Thesis Project',
    subtitle_es: 'Trabajo de Fin de Grado',
    tech: 'C, Lua, C++, Pulp',
    role_en: 'Solo Developer, Research',
    role_es: 'Desarrollador Solo, Investigación',
    description_en: 'Bachelor\'s thesis written in English during the Playdate Developers Preview. The project included the development of a custom C game engine and a platforming game, a detailed devlog, a beginner-friendly C programming guide for Playdate, and an R&D phase exploring development in C, C++, Lua, and Pulp.',
    description_es: 'Tesis de licenciatura escrita en inglés durante la Vista Previa de Desarrolladores de Playdate. El proyecto incluyó el desarrollo de un motor de juego C personalizado y un juego de plataformas, un devlog detallado, una guía de programación C amigable para principiantes para Playdate, y una fase de I+D explorando desarrollo en C, C++, Lua y Pulp.',
    features_en: [
      'Explored innovative use of hardware features, such as stowing the crank behind the device to act as a switch',
      'Built a custom Entity Component System engine in C tailored for Playdate\'s constraints',
      'Developed additional game prototypes and game jam entries in Lua',
      'Reported SDK bugs during the developer preview, contributing to Playdate\'s ecosystem',
      'Featured on the official Playdate website under Useful links for Playdate development'
    ],
    features_es: [
      'Exploré el uso innovador de características de hardware, como guardar la manivela detrás del dispositivo para actuar como un interruptor',
      'Construí un motor Entity Component System personalizado en C adaptado para las limitaciones de Playdate',
      'Desarrollé prototipos de juegos adicionales y entradas de game jam en Lua',
      'Reporté bugs del SDK durante la vista previa del desarrollador, contribuyendo al ecosistema de Playdate',
      'Destacado en el sitio web oficial de Playdate bajo Enlaces útiles para desarrollo de Playdate'
    ],
    external_links: [
      { label_en: 'Bachelor\s Thesis (PDF)', label_es: 'Trabajo de Fin de Grado (PDF)', url: 'https://rua.ua.es/dspace/bitstream/10045/117000/1/Playdate_game_development_in_C_Benavent_Ramon_Alberto.pdf' },
      { label_en: 'Interview (in Spanish)', label_es: 'Entrevista', url: 'https://youtu.be/bbm5x8QZYZo?si=Uex1Njc2VWz1dw-z' },
    ],
    tags: ['C', 'Lua', 'Playdate', 'Game', 'Custom Engine'],
    media: [
      { type: 'embed', src: 'https://www.youtube.com/embed/Dvt0ZolhamI', title: 'TinySeconds Gameplay' },
      { type: 'image', src: 'media/playdate/playdatethesis2.jpg', alt: 'Playdate game development in C', title: 'Playdate game development in C' },
      { type: 'embed', src: 'https://www.youtube.com/embed/QDzZpxjUysk', title: 'Thesis presentation' },
      { type: 'image', src: 'media/playdate/webplaydate2.png', alt: 'Featured in Playdate\'s official website', title: 'Featured in Playdate\'s official website' },

    ]
  },
  'tous-vr': {
    title_en: 'TOUS VR Showroom',
    title_es: 'Sala de Exhibición VR TOUS',
    subtitle_en: 'Fashion Brand Experience',
    subtitle_es: 'Experiencia de Marca de Moda',
    tech: 'Unreal Engine, C++/Blueprints, Pixel Streaming, AWS',
    role_en: 'Programmer, Project Manager, Experience Design',
    role_es: 'Programador, Jefe de Proyecto, Diseño de Experiencia',
    description_en: 'Multiplayer VR showroom and styling minigame. Showcased in fashion expos, accessible from the TOUS website, published on the Meta Quest Store.',
    description_es: 'Sala de exhibición VR multijugador y minijuego de estilismo. Presentado en exposiciones de moda, accesible desde el sitio web de TOUS, publicado en Meta Quest Store.',
    features_en: [
      'Designed and implemented a storefront designing minigame',
      'Built on custom plugins and tech on which I previously worked on and acted as PM during my years in Extendra',
      'Delivered in our platform Extendra Hub'
    ],
    features_es: [
      'Diseñé e implementé un minijuego de diseño de escaparate',
      'Construido sobre plugins personalizados y tecnología en la que trabajé previamente y actué como PM durante mis años en Extendra',
      'Entregado en nuestra plataforma Extendra Hub'
    ],
    external_links: [
      { label_en: 'Case study', label_es: 'Web oficial', url: 'https://web.archive.org/web/20250204105024/extendra.io/en/projects/tous-manifesto' },
    ],
    client: 'TOUS',
    tags: ['VR', 'B2B', 'Multiplayer', 'Unreal Engine', 'C++'],
    media: [
      { type: 'embed', src: 'https://drive.google.com/file/d/1PSnp844RCqE-bb-31kWRSOjPQzpV3ioc/preview', title: 'Trailer' },
      { type: 'image', src: 'media/tous/Tous-Showroom2.jpg', alt: 'TOUS Manifesto Showroom', title: 'TOUS Manifesto Showroom' },
      { type: 'image', src: 'media/tous/tousgame.jpg', alt: 'TOUS Manifesto Minigame', title: 'TOUS Manifesto Minigame' },
      { type: 'image', src: 'media/tous/Entrada-tous.jpg', alt: 'TOUS Manifesto Entrance', title: 'TOUS Manifesto Entrance' },
    ],
  }
};

// Global state
let currentLanguage = 'en';
let currentSlide = 0;
let currentMediaSlide = 0;
let carouselInterval;
let currentProject = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  initLanguageToggle();
  initCarousel();
  initProjects();
  initModal();
  initNavigation();
  initMobileMenu();
  initKeyboardNavigation();
  
  // Set initial active language
  updateLanguageButtons();
});

// Language Toggle Functions
function initLanguageToggle() {
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang !== currentLanguage) {
        switchLanguage(lang);
      }
    });
  });
}

function switchLanguage(lang) {
  currentLanguage = lang;
  updateLanguageButtons();
  updateContent();
}

function updateLanguageButtons() {
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLanguage);
  });
}

function updateContent() {
  // Update all elements with data-en and data-es attributes
  const elements = document.querySelectorAll('[data-en][data-es]');
  elements.forEach(el => {
    const newText = el.dataset[currentLanguage];
    if (newText) {
      el.textContent = newText;
    }
  });
  
  // Update modal content if open
  if (currentProject) {
    updateModalContent(currentProject);
  }
}

// Hero Carousel Functions
function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const heroBg = document.querySelector('.hero-bg');
  
  // Set initial background
  updateAmbientBackground(0, true);
  window.addEventListener('resize', () => updateAmbientBackground(currentSlide));

  // Auto-advance carousel
  startCarouselAutoplay();
  
  // Navigation buttons
  prevBtn.addEventListener('click', () => {
    changeSlide(currentSlide - 1);
    resetCarouselAutoplay();
  });
  
  nextBtn.addEventListener('click', () => {
    changeSlide(currentSlide + 1);
    resetCarouselAutoplay();
  });
  
  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      changeSlide(index);
      resetCarouselAutoplay();
    });
  });
  
  // Pause on hover
  const carousel = document.querySelector('.hero-carousel');
  carousel.addEventListener('mouseenter', stopCarouselAutoplay);
  carousel.addEventListener('mouseleave', startCarouselAutoplay);
}

function changeSlide(newSlide) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  
  // Handle wraparound
  if (newSlide >= slides.length) newSlide = 0;
  if (newSlide < 0) newSlide = slides.length - 1;
  
  // Update active states
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  
  currentSlide = newSlide;
  
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  
  // Update ambient background
  updateAmbientBackground(currentSlide);
}

// Replace updateAmbientBackground with this version
function updateAmbientBackground(slideIndex, instant = false) {
  const slide = document.querySelectorAll('.carousel-slide')[slideIndex];
  const heroBg = document.querySelector('.hero-bg');
  if (!slide || !heroBg) return;

  const bgColor = slide.dataset.bgColor || '#8B5CF6';
  const rect = slide.getBoundingClientRect();
  const gradientPosition = Math.round(rect.right - rect.width / 2);

  // Use 12.5% alpha for a subtle glow (hex alpha 0x20)
  const gradient = `radial-gradient(ellipse at ${gradientPosition}px, ${bgColor}20 0%, transparent 70%)`;

  // Determine which layer to paint next
  const active = heroBg.dataset.active === '2' ? '2' : '1';
  const next = active === '1' ? '2' : '1';

  // Update the next layer's gradient variable
  heroBg.style.setProperty(next === '1' ? '--g1' : '--g2', gradient);

  if (instant) {
    // On first render, sync both layers and show layer 1 without fading
    heroBg.style.setProperty('--g1', gradient);
    heroBg.style.setProperty('--g2', gradient);
    heroBg.dataset.active = '1';
    return;
  }

  // Flip the visible layer to cross-fade
  requestAnimationFrame(() => {
    heroBg.dataset.active = next;
  });
}

function startCarouselAutoplay() {
  carouselInterval = setInterval(() => {
    changeSlide(currentSlide + 1);
  }, 5000);
}

function stopCarouselAutoplay() {
  if (carouselInterval) {
    clearInterval(carouselInterval);
  }
}

function resetCarouselAutoplay() {
  stopCarouselAutoplay();
  startCarouselAutoplay();
}

// Projects Functions
function initProjects() {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.dataset.project;
      openProjectModal(projectId);
    });
    
    // Keyboard support
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const projectId = card.dataset.project;
        openProjectModal(projectId);
      }
    });
  });
}

function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;
  
  currentProject = project;
  
  // Update modal content
  updateModalContent(project);
  
  // Initialize media carousel
  initMediaCarousel(project.media);
  
  // Show modal
  const modal = document.getElementById('projectModal');
  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.add('show'), 10);
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
  
  // Focus trap
  trapFocus(modal);
}

function updateModalContent(project) {
  const modal = document.getElementById('projectModal');
  
  // Update title and subtitle
  const title = modal.querySelector('.modal-title');
  const subtitle = modal.querySelector('.modal-subtitle');
  title.textContent = project[`title_${currentLanguage}`];
  subtitle.textContent = project[`subtitle_${currentLanguage}`];
  
  // Update meta information
  const techEl = modal.querySelector('.modal-tech');
  const roleEl = modal.querySelector('.modal-role');
  const clientEl = modal.querySelector('.modal-client');
  
  techEl.innerHTML = `<strong>Tech Stack:</strong> ${project.tech}`;
  roleEl.innerHTML = `<strong>${currentLanguage === 'en' ? 'Role' : 'Rol'}:</strong> ${project[`role_${currentLanguage}`]}`;
  
  if (project.client) {
    clientEl.innerHTML = `<strong>${currentLanguage === 'en' ? 'Client' : 'Cliente'}:</strong> ${project.client}`;
    clientEl.style.display = 'block';
  } else {
    clientEl.style.display = 'none';
  }
  
  // Update description
  const description = modal.querySelector('.modal-description');
  description.textContent = project[`description_${currentLanguage}`];
  
  // Update features
  const featuresList = modal.querySelector('.features-list');
  const features = project[`features_${currentLanguage}`] || [];
  featuresList.innerHTML = features.map(feature => `<li>${feature}</li>`).join('');
  
  // Update external links
  const linksContainer = modal.querySelector('.modal-links');
  if (project.external_links && project.external_links.length > 0) {
    linksContainer.innerHTML = project.external_links.map(link => 
      `<a href="${link.url}" target="_blank">${link[`label_${currentLanguage}`] || link.label_en}</a>`
    ).join('');
    linksContainer.style.display = 'flex';
  } else {
    linksContainer.style.display = 'none';
  }
}

// Modal Functions
function initModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = modal.querySelector('.modal-close');
  const backdrop = modal.querySelector('.modal-backdrop');
  
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
}

function closeModal() {
  const modal = document.getElementById('projectModal');

  // Stop any playing media first
  stopAllModalMedia();

  modal.classList.remove('show');
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';

    // Optional: clear media UI so reopening starts fresh
    const container = document.querySelector('.media-container');
    const dots = document.querySelector('.media-dots');
    if (container) container.innerHTML = '';
    if (dots) dots.innerHTML = '';
  }, 300);

  currentProject = null;
  currentMediaSlide = 0;
}

// Media Carousel Functions

// Stop all media inside a given root element (videos and embeds)
function stopMediaInElement(root) {
  if (!root) return;
  // Pause and reset <video>
  root.querySelectorAll('video').forEach(v => {
    try { v.pause(); } catch (_) {}
    try { v.currentTime = 0; } catch (_) {}
  });
  // Reload <iframe> (YouTube/Drive/etc.) to stop playback
  root.querySelectorAll('iframe').forEach(f => {
    const src = f.getAttribute('src') || f.dataset?.src || '';
    if (src) {
      // Reloading the same src stops playback without needing enablejsapi
      f.setAttribute('src', src);
    }
  });
}

// Convenience: stop everything inside the modal
function stopAllModalMedia() {
  const modal = document.getElementById('projectModal');
  stopMediaInElement(modal);
}

function initMediaCarousel(media) {
  if (!media || media.length === 0) return;
  
  const container = document.querySelector('.media-container');
  const dotsContainer = document.querySelector('.media-dots');
  const prevBtn = document.querySelector('.media-prev');
  const nextBtn = document.querySelector('.media-next');
  
  // Clear existing content
  container.innerHTML = '';
  dotsContainer.innerHTML = '';
  
  // Create media items
  media.forEach((item, index) => {
    const mediaEl = document.createElement('div');
    mediaEl.className = `media-item ${index === 0 ? 'active' : ''}`;
    
    let content = '';
    switch (item.type) {
      case 'image':
        content = `<img src="${item.src}" alt="${item.alt || item.title}" title="${item.title}">`;
        break;
      case 'video':
        content = `<video controls preload="metadata"><source src="${item.src}" type="video/mp4"></video>`;
        break;
      case 'embed':
        content = `<iframe src="${item.src}" data-src="${item.src}" frameborder="0" allowfullscreen></iframe>`;
        break;
    }
    
    mediaEl.innerHTML = content;
    container.appendChild(mediaEl);

    const iframe = mediaEl.querySelector('iframe');
    if (iframe && !iframe.dataset.src) {
      iframe.dataset.src = iframe.getAttribute('src') || '';
    }
    
    // Create dot
    const dot = document.createElement('button');
    dot.className = `media-dot ${index === 0 ? 'active' : ''}`;
    dot.setAttribute('data-media', index);
    dotsContainer.appendChild(dot);
  });
  
  // Hide navigation if only one media item
  if (media.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    dotsContainer.style.display = 'none';
    return;
  }
  
  prevBtn.style.display = 'flex';
  nextBtn.style.display = 'flex';
  dotsContainer.style.display = 'flex';
  
  // Navigation events
  prevBtn.addEventListener('click', () => changeMediaSlide(currentMediaSlide - 1));
  nextBtn.addEventListener('click', () => changeMediaSlide(currentMediaSlide + 1));
  
  // Dot events
  dotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('media-dot')) {
      const slideIndex = parseInt(e.target.dataset.media);
      changeMediaSlide(slideIndex);
    }
  });
  
  currentMediaSlide = 0;
}

function changeMediaSlide(newSlide) {
  const mediaItems = document.querySelectorAll('.media-item');
  const dots = document.querySelectorAll('.media-dot');
  if (mediaItems.length === 0) return;

  // Handle wraparound
  if (newSlide >= mediaItems.length) newSlide = 0;
  if (newSlide < 0) newSlide = mediaItems.length - 1;

  // Stop media in the slide we are leaving
  const prevItem = mediaItems[currentMediaSlide];
  if (prevItem) stopMediaInElement(prevItem);

  // Update active states
  if (mediaItems[currentMediaSlide]) mediaItems[currentMediaSlide].classList.remove('active');
  if (dots[currentMediaSlide]) dots[currentMediaSlide].classList.remove('active');

  currentMediaSlide = newSlide;

  if (mediaItems[currentMediaSlide]) mediaItems[currentMediaSlide].classList.add('active');
  if (dots[currentMediaSlide]) dots[currentMediaSlide].classList.add('active');
}

// Navigation Functions
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      
      if (targetEl) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetEl.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Mobile Menu Functions
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('.header');
  if (!btn || !navLinks || !header) return;

  const openMenu = () => {
    btn.classList.add('active');
    navLinks.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    btn.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const willOpen = !navLinks.classList.contains('open');
    willOpen ? openMenu() : closeMenu();
  };

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  // Close on link tap
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Close if resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });
}

// Keyboard Navigation
function initKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('projectModal');
    const isModalOpen = !modal.classList.contains('hidden');
    
    switch (e.key) {
      case 'Escape':
        if (isModalOpen) {
          closeModal();
        }
        break;
      case 'ArrowLeft':
        if (isModalOpen) {
          e.preventDefault();
          changeMediaSlide(currentMediaSlide - 1);
        } else {
          e.preventDefault();
          changeSlide(currentSlide - 1);
          resetCarouselAutoplay();
        }
        break;
      case 'ArrowRight':
        if (isModalOpen) {
          e.preventDefault();
          changeMediaSlide(currentMediaSlide + 1);
        } else {
          e.preventDefault();
          changeSlide(currentSlide + 1);
          resetCarouselAutoplay();
        }
        break;
    }
  });
}

// Focus Management
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];
  
  // Focus first element
  firstFocusable?.focus();
  
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    }
  });
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Performance optimizations
window.addEventListener('resize', debounce(() => {
  // Handle any resize-related updates if needed
}, 250));

// Smooth scroll behavior for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
  const scrollToElement = (element, offset = 0) => {
    const targetPosition = element.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;
    
    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
  };
}

// ===== Code Snippets (password-protected) =====

// Paste the ciphertext created with CryptoJS.AES.encrypt(...).toString()
const CODE_CIPHER = "U2FsdGVkX19e/SVdIBmzYbbsYlZxe3AgZBZXCHXerWTApNXB0l0PN2LJIs22QTX2L0GGsjKfPmgcqUq+9yYe14ETGtFHihBM1tWusR3Js6k1+R8kDZtejyEpgOrxflK+Qgy54jWrdL19iPhCsTT55qyiz08+3l4vBaF/yJgS0nBR0WXBuj2BQNJ3QiMCAB/SawIyMQOAXG4FvJEQmPQb9ez+nqI01Bh0uZ8qYUxFY+dE5Vr7MKR2Zt4jJzyND4Pzi01dE9Eesue/BaVkzU2HPdq91610pGGOkPj9tVslWw/JkkDXDiBfZb+/QxV4/JQ3kvNvCmX4bLfIMcqNblUgWUJpgdQL5kpLZ9EEAy8IbwoC0U0sfqa6CYdJ+8HB/RgA8It9vI4UKLNVWIA4aw+8b950nOth40vAS5nbd/eItppII6D30/IapuwtX7I5Pki3ikphNvXqLpMxsV7a7Iu6hCbNofjkgTIcXBA3J/P1s18A7AYiOqYzFvDNa0u5hh4/msfLqOgWBPstCKalrLXTG8cj4xbkQ6ZrA7qqKGff5sS8EpeNmmwbmNAPJniP9FMgbKck/oFp6O67I29bjXvb8RzjwpXiN4Fnw/bA1oy6ZV3H7lI8ZQqIEl62CjMqn05OJVwq1klpF0T9IF9faku2igIICWCixXJAbnDBEgyWx0gGoDEDi6Ur/wuGGZbu/omuUszHHSuNdCvj5f4HLu2USqnXbRegklh0M9MXpwdY3dmePcnL1ixDlgsm0NPyj9Be4yzzbqss4Whq+eQlM3Eu6EVRjvP6TcDTPPPkTNxVvd66Xg+5bhRaOpHw9zzMV1uW" 
function initCodeModal() {
  const openBtn  = document.getElementById('codeBtn');
  const modal    = document.getElementById('codeModal');
  if (!openBtn || !modal) return;

  const closeBtn = modal.querySelector('.modal-close');
  const backdrop = modal.querySelector('.modal-backdrop');
  const form     = document.getElementById('codeForm');
  const input    = document.getElementById('codePassword');
  const errorEl  = modal.querySelector('.code-error');
  const content  = document.getElementById('codeContent');

  function openCodeModal() {
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
    document.body.style.overflow = 'hidden';
    if (typeof trapFocus === 'function') trapFocus(modal);
    setTimeout(() => input?.focus(), 50);
  }

  function closeCodeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
      // Reset UI state
      form?.reset();
      errorEl?.classList.add('hidden');
      if (content) {
        content.innerHTML = '';
        content.classList.add('hidden');
      }
    }, 250);
  }

  openBtn.addEventListener('click', (e) => { e.preventDefault(); openCodeModal(); });
  closeBtn?.addEventListener('click', closeCodeModal);
  backdrop?.addEventListener('click', closeCodeModal);
  modal.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCodeModal(); });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const pass = (input?.value || '').trim();
    try {
      const bytes = CryptoJS.AES.decrypt(CODE_CIPHER, pass);
      const html  = bytes.toString(CryptoJS.enc.Utf8);
      if (!html) throw new Error('Bad password');
      if (content) {
        content.innerHTML = html;
        content.classList.remove('hidden');
      }
      errorEl?.classList.add('hidden');
      input.value = '';
    } catch {
      errorEl?.classList.remove('hidden');
      content?.classList.add('hidden');
      if (content) content.innerHTML = '';
    }
  });
}

// Hook into existing startup flow
document.addEventListener('DOMContentLoaded', function () {
  initCodeModal();
});

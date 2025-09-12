// Project data with translations
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

// Current language state
let currentLanguage = 'en';
let currentSlideIndex = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  setupEventListeners();
  setupSmoothScrolling();
  updateActiveNavLink();
  populateProjectTags();
  initializeTagFilters();
});

// Setup event listeners
function setupEventListeners() {
  // Project cards click events
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
      const projectId = this.dataset.project;
      openProjectModal(projectId);
    });
    
    // Add keyboard support
    card.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const projectId = this.dataset.project;
        openProjectModal(projectId);
      }
    });
  });

  // Modal close events
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Hamburger menu (for mobile)
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Scroll event for navbar
  window.addEventListener('scroll', throttle(function() {
    updateActiveNavLink();
    updateNavbarBackground();
  }, 16));

  // Tag filter events
  document.querySelectorAll('.tag-filter').forEach(filter => {
    filter.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent any navigation
      const tag = this.dataset.tag;
      filterProjects(tag);
      updateActiveFilter(this);
    });
  });
}

// Language toggle functionality
function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
  updateLanguageDisplay();
  updateContent();
}

// Update language toggle display
function updateLanguageDisplay() {
  document.documentElement.setAttribute('data-lang', currentLanguage);
  
  const langOptions = document.querySelectorAll('.lang-option');
  langOptions.forEach(option => {
    const lang = option.dataset.lang;
    option.classList.toggle('active', lang === currentLanguage);
  });
}

// Update all content based on current language
function updateContent() {
  const elementsWithLangData = document.querySelectorAll('[data-en][data-es]');
  
  elementsWithLangData.forEach(element => {
    const content = currentLanguage === 'en' ? element.dataset.en : element.dataset.es;
    element.textContent = content;
  });
}

function populateProjectTags() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const projectId = card.dataset.project;
    const project = projectData[projectId];
    const visibleTags = card.querySelector('.project-tags');

    project.tags.forEach(element => {
      const newTag = document.createElement('span');
      newTag.innerHTML = element;
      visibleTags.appendChild(newTag);
    });
  });
}


// Initialize tag filters
function initializeTagFilters() {
  // Set "All" as active by default
  const allFilter = document.querySelector('.tag-filter[data-tag="all"]');
  if (allFilter) {
    allFilter.classList.add('active');
  }
}

// Filter projects by tag
function filterProjects(tag) {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    const projectId = card.dataset.project;
    const project = projectData[projectId];
    
    let shouldShow = false;
    
    if (tag === 'all') {
      shouldShow = true;
    } else {
      // Check if the project has the selected tag
      if (project && project.tags) {
        shouldShow = project.tags.includes(tag);
      }
    }
    
    if (shouldShow) {
      card.classList.remove('filtering');
      card.style.display = 'block';
      // Trigger reflow to ensure transition works
      card.offsetHeight;
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
    } else {
      card.classList.add('filtering');
      card.style.opacity = '0';
      card.style.transform = 'scale(0.8)';
      setTimeout(() => {
        if (card.classList.contains('filtering')) {
          card.style.display = 'none';
        }
      }, 300);
    }
  });
}

// Update active filter button
function updateActiveFilter(activeButton) {
  document.querySelectorAll('.tag-filter').forEach(filter => {
    filter.classList.remove('active');
  });
  activeButton.classList.add('active');
}

// Open project modal
function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;
  
  const modal = document.getElementById('project-modal');
  const titleElement = modal.querySelector('.project-title');
  const subtitleElement = modal.querySelector('.project-subtitle');
  const techElement = modal.querySelector('.project-tech');
  const roleElement = modal.querySelector('.project-role');
  const descriptionElement = modal.querySelector('.project-description');
  const featuresList = modal.querySelector('.features-list');
  const externalLinksContainer = modal.querySelector('.external-links-list');

  // Update modal content based on current language
  const langSuffix = `_${currentLanguage}`;
  
  titleElement.textContent = project[`title${langSuffix}`];
  subtitleElement.textContent = project[`subtitle${langSuffix}`];
  techElement.textContent = project.tech;
  roleElement.textContent = project[`role${langSuffix}`];
  descriptionElement.textContent = project[`description${langSuffix}`];
  
  // Clear and populate features list
  featuresList.innerHTML = '';
  const features = project[`features${langSuffix}`];
  features.forEach(feature => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
  });

  // Clear and populate external links list
  externalLinksContainer.innerHTML = '';
  const links = project.external_links || [];
  links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';  // Open in new tab
    a.rel = 'noopener noreferrer';  // Security
    a.textContent = link[`label${langSuffix}`] || link.label_en || 'External Link';
    li.appendChild(a);
    externalLinksContainer.appendChild(li);
  });


  renderMediaSlides(projectId);

  const clientElement = modal.querySelector('.project-client');
  clientElement.textContent = '';
  const clientTextContent = project[`client`] || '';
  if (clientTextContent)
  {
    if (currentLanguage == 'es') {
      clientElement.textContent = `Cliente: ${clientTextContent}`;
    }
    else
    {
      clientElement.textContent = `Client: ${clientTextContent}`;
    }
  }
  
  // Reset carousel to first slide
  currentSlideIndex = 0;
  updateCarousel();
  
  // Show modal
  modal.classList.remove('hidden');
  
  // Focus management for accessibility
  modal.querySelector('.modal-close').focus();
  
  // Prevent body scrolling
  document.body.style.overflow = 'hidden';

  //startCarouselAutoplay();
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
  stopCarouselAutoplay();

  // Detener todos los videos/iframers del carrusel al cerrar el modal
  const allSlides = modal.querySelectorAll('.carousel-slide');
  allSlides.forEach(slide => {
    slide.querySelectorAll('video').forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
    slide.querySelectorAll('iframe').forEach(iframe => {
      const src = iframe.src;
      iframe.parentNode.replaceChild(iframe.cloneNode(false), iframe);
      // Opcional: iframe.src = src; // solo si necesitas que el embed esté listo al reabrir
    });
  });
}


// Carousel functionality
function renderMediaSlides(projectId) {
  const project = projectData[projectId];
  const media = project.media || [];
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.innerHTML = '';

  media.forEach((item, i) => {
    let slide = document.createElement('div');
    slide.className = 'carousel-slide';
    if (i === 0) slide.classList.add('active');

    if (item.type === 'image') {
      slide.innerHTML = `<img src="${item.src}" alt="${item.alt || ''}" title="${item.title || ''}" style="width: 100%; height: 100%; object-fit: cover;" />`;
    } else if (item.type === 'video') {
      slide.innerHTML = `
        <video controls poster="${item.poster || ''}" style="width: 100%; height: 100%;">
          <source src="${item.src}" type="video/mp4" />
          Tu navegador no soporta el vídeo.
        </video>
        ${item.title ? `<span class="media-title">${item.title}</span>` : ''}
      `;
    } else if (item.type === 'embed') {
      const iframe = document.createElement('iframe');
      iframe.src = item.src;
      iframe.title = item.title || '';
      iframe.frameBorder = "0";
      iframe.allow = "encrypted-media; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.addEventListener('focus', stopCarouselAutoplay); // <---- AQUÍ
      slide.appendChild(iframe);
    }
    carouselContainer.appendChild(slide);
  });

  // *** Dots dinámicos ***
  const carouselDots = document.querySelector('.carousel-dots');
  if (carouselDots) {
    carouselDots.innerHTML = ''; // Limpia dots anteriores
    for (let i = 0; i < media.length; i++) {
      const dot = document.createElement('span');
      dot.className = 'dot';
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentSlide(i + 1); // O i según la función
        updateCarousel();
        stopCarouselAutoplay();
      });
      carouselDots.appendChild(dot);
    }
  }
}

function changeSlide(direction) {
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  
  currentSlideIndex += direction;
  
  if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - 1;
  }
  
  updateCarousel();
}

function currentSlide(index) {
  currentSlideIndex = index - 1;
  updateCarousel();
}

function updateCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  
  slides.forEach((slide, index) => {
    if (index === currentSlideIndex) {
      slide.classList.add('active');
      slide.style.display = 'block';
    } else {
      slide.classList.remove('active');
      slide.style.display = 'none';

      // Pausar/reiniciar videos locales
      slide.querySelectorAll('video').forEach(video => {
        video.pause();
        video.currentTime = 0;
      });

      // Resetear embeds
      slide.querySelectorAll('iframe').forEach(iframe => {
        const src = iframe.src;
        // Clona el iframe para evitar autoplay y detener reproducción
        iframe.parentNode.replaceChild(iframe.cloneNode(false), iframe);
        // Restablece el src si quieres resetear el vídeo para siguientes slides
        iframe.src = src;
      });
    }
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlideIndex);
  });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // Don't prevent default for tag filters
      if (this.classList.contains('tag-filter')) {
        return;
      }
      
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navbarHeight - 50;
    const sectionHeight = section.offsetHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// Update navbar background on scroll
function updateNavbarBackground() {
  const navbar = document.querySelector('.navbar');
  const scrolled = window.scrollY > 50;
  
  if (scrolled) {
    navbar.style.borderBottom = '2px solid #E06D06';
  } else {
    navbar.style.borderBottom = '2px solid #250641';
  }
}

// Handle keyboard navigation for modal
document.addEventListener('keydown', function(e) {
  const modal = document.getElementById('project-modal');
  if (!modal.classList.contains('hidden')) {
    if (e.key === 'ArrowLeft') {
      changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
      changeSlide(1);
    } else if (e.key === 'Tab') {
      // Keep focus within modal
      const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  }
});

// Performance optimization: Throttle function
function throttle(func, wait) {
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

// Handle window resize events
window.addEventListener('resize', throttle(function() {
  updateNavbarBackground();
}, 250));

// Variable global para el intervalo del carrusel
let carouselInterval = null;

function isVideoPlaying() {
  const activeSlide = document.querySelector('.carousel-slide.active');
  if (!activeSlide) return false;

  // Vídeos locales
  const videos = activeSlide.querySelectorAll('video');
  for (const video of videos) {
    if (!video.paused && !video.ended && video.currentTime > 0) {
      return true;
    }
  }

  return false;
}

// Inicia el autoplay del carrusel, siempre limpia el anterior
function startCarouselAutoplay() {
  stopCarouselAutoplay(); // Limpia anterior
  carouselInterval = setInterval(() => {
    if (!isVideoPlaying()) {
      changeSlide(1);
    }
    // Si hay vídeo sonando no se avanza
  }, 5000);
}


// Detiene el autoplay del carrusel
function stopCarouselAutoplay() {
  if (carouselInterval) {
    clearInterval(carouselInterval);
    carouselInterval = null;
  }
}

// Detén el autoplay cuando el usuario interactúa con los controles
document.querySelectorAll('.carousel-btn, .dot').forEach(element => {
  element.addEventListener('click', stopCarouselAutoplay);
});

// Intersection Observer for scroll animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  document.querySelectorAll('.project-card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Initialize scroll animations after a short delay
setTimeout(setupScrollAnimations, 500);

// Email functionality - Fixed
function openEmailClient(email = 'alberto@example.com') {
  window.location.href = `mailto:${email}`;
}

// Add click event to floating email button - Fixed
document.addEventListener('DOMContentLoaded', function() {
  const emailFab = document.querySelector('.email-fab');
  if (emailFab) {
    emailFab.addEventListener('click', function(e) {
      e.preventDefault();
      openEmailClient();
    });
  }

  // Add click events to email links - Fixed
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const email = this.getAttribute('href').replace('mailto:', '');
      openEmailClient(email);
    });
  });

  // Fix contact email link specifically
  const contactEmail = document.querySelector('.contact-email');
  if (contactEmail) {
    contactEmail.addEventListener('click', function(e) {
      e.preventDefault();
      openEmailClient();
    });
  }
});

// Handle mobile navigation
function toggleMobileNav() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
}

// Add mobile navigation styles dynamically
function addMobileNavStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .nav-menu.active {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #ffffff;
        border: 2px solid #250641;
        border-top: none;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
      }
      
      .nav-menu.active .nav-link {
        padding: 0.5rem 0;
        border-bottom: 1px solid #E5E5E5;
      }
      
      .nav-menu.active .nav-link:last-child {
        border-bottom: none;
      }
    }
  `;
  document.head.appendChild(style);
}

// Initialize mobile navigation
document.addEventListener('DOMContentLoaded', function() {
  addMobileNavStyles();
  
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileNav);
  }
});

// Export functions for testing or external use
window.portfolioApp = {
  toggleLanguage,
  openProjectModal,
  closeModal,
  updateContent,
  filterProjects,
  changeSlide,
  currentSlide
};
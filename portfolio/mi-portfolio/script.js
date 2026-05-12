/**
 * ══════════════════════════════════════════════
 *  PORTFOLIO — script.js
 *  Manuel Chicangana · Frontend Developer & Creative Designer
 * ══════════════════════════════════════════════
 */

/* ─── Dark Mode ─────────────────────────────── */
(function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved ? saved === 'dark' : prefersDark;
  document.documentElement.classList.toggle('dark', isDark);
  updateThemeIcons(isDark);
})();

function updateThemeIcons(isDark) {
  const sun = document.getElementById('sun-icon');
  const moon = document.getElementById('moon-icon');
  if (!sun || !moon) return;
  sun.classList.toggle('hidden', !isDark);
  moon.classList.toggle('hidden', isDark);
}

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcons(isDark);
});


/* ─── Navbar scroll effect ───────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });


/* ─── Mobile menu ────────────────────────────── */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

mobileMenuBtn?.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('hidden', !menuOpen);

  // Animate hamburger bars
  const bars = mobileMenuBtn.querySelectorAll('.hamburger-bar');
  if (menuOpen) {
    bars[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
  } else {
    bars[0].style.transform = '';
    bars[1].style.opacity = '';
    bars[2].style.transform = '';
  }
});

// Close mobile menu on nav link click
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.add('hidden');
    const bars = mobileMenuBtn.querySelectorAll('.hamburger-bar');
    bars.forEach(bar => {
      bar.style.transform = '';
      bar.style.opacity = '';
    });
  });
});


/* ─── Smooth scroll for anchor links ────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


/* ─── Reveal on scroll (Intersection Observer) ─ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // animate once
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ─── Project data ───────────────────────────── */
const projects = {
  1: {
    title: 'EatCloud Dashboard',
    category: 'React · TypeScript',
    year: '2026',
    description: 'Plataforma frontend para gestión y calificación de donaciones, diseñada para ofrecer una experiencia clara, moderna y funcional.',
    challenge: 'El objetivo era organizar procesos de donación en una interfaz limpia, fácil de entender y preparada para integrarse con datos externos.',
    solution: 'Construí una experiencia frontend con React, TypeScript y lógica de integración API, cuidando la jerarquía visual y la usabilidad del dashboard.',
    results: ['Interfaz moderna para gestión de donaciones', 'Componentes reutilizables y escalables', 'Flujo preparado para API Integration', 'Experiencia responsive enfocada en claridad'],
    tools: ['React', 'TypeScript', 'API Integration'],
    color: '#C8FF00',
    emoji: '📊'
  },
  2: {
    title: 'Portfolio UX/UI',
    category: 'Portfolio · UI Design',
    year: '2026',
    description: 'Diseño y desarrollo de portafolio premium inspirado en productos SaaS modernos, con enfoque visual, responsive y profesional.',
    challenge: 'Crear una presencia digital clara que conectara perfil técnico, diseño gráfico y contenido audiovisual sin perder coherencia visual.',
    solution: 'Diseñé una experiencia tipo SaaS con secciones enfocadas en servicios, proyectos, proceso y contacto, manteniendo una estética premium.',
    results: ['Identidad digital profesional', 'Copy optimizado para perfil híbrido', 'Diseño responsive y moderno', 'Presentación lista para clientes y oportunidades remotas'],
    tools: ['Figma', 'HTML', 'Tailwind CSS'],
    color: '#A855F7',
    emoji: '💼'
  },
  3: {
    title: 'Modern Business Website',
    category: 'Web · Business',
    year: '2025',
    description: 'Desarrollo web corporativo moderno optimizado para experiencia visual, comunicación clara y posicionamiento digital.',
    challenge: 'Traducir una propuesta de negocio en una web clara, visual y fácil de recorrer desde cualquier dispositivo.',
    solution: 'Organicé la estructura de contenido, diseñé bloques visuales consistentes y desarrollé una experiencia responsive orientada a conversión.',
    results: ['Sitio moderno para presencia digital', 'Estructura clara para servicios', 'Diseño adaptable a móvil y escritorio', 'Base preparada para SEO básico'],
    tools: ['WordPress', 'Diseño Web', 'Responsive Design'],
    color: '#22C55E',
    emoji: '🌐'
  },
  4: {
    title: 'Twitch Streaming Brand',
    category: 'Branding · Streaming',
    year: '2025',
    description: 'Branding visual y contenido gráfico para streaming y creación de contenido digital.',
    challenge: 'Crear una presencia visual reconocible para canales de streaming, piezas gráficas y contenido en vivo.',
    solution: 'Desarrollé recursos visuales para identidad, overlays y comunicación digital con un sistema gráfico consistente.',
    results: ['Identidad visual para streaming', 'Piezas gráficas listas para contenido', 'Sistema visual adaptable', 'Estética alineada a creación digital'],
    tools: ['Photoshop', 'Illustrator', 'Figma'],
    color: '#0080FF',
    emoji: '🎮'
  },
  5: {
    title: 'Video Content Reels',
    category: 'Video · Motion Graphics',
    year: '2025',
    description: 'Edición de reels y contenido audiovisual para redes sociales utilizando motion graphics y edición dinámica.',
    challenge: 'Transformar ideas y clips base en contenido corto, claro y atractivo para captar atención en redes sociales.',
    solution: 'Edité piezas verticales con ritmo visual, cortes dinámicos, motion graphics y ajustes de audio para mejorar retención.',
    results: ['Reels optimizados para redes sociales', 'Edición dinámica y visual', 'Motion graphics aplicados al contenido', 'Formato listo para publicación'],
    tools: ['Premiere Pro', 'CapCut', 'Motion Graphics'],
    color: '#FF6B6B',
    emoji: '🎬'
  },
  6: {
    title: 'Nuevo proyecto digital',
    category: 'Freelance · Disponible',
    year: '2026',
    description: 'Actualmente disponible para nuevos proyectos de frontend, diseño web, UI y contenido visual.',
    challenge: 'Cada proyecto necesita una experiencia digital clara, funcional y alineada a los objetivos de marca.',
    solution: 'Puedo ayudarte a diseñar, desarrollar y optimizar interfaces modernas, sitios web y contenido audiovisual.',
    results: ['Frontend Development', 'Diseño UI/UX', 'Diseño Web', 'Edición de Video'],
    tools: ['React', 'WordPress', 'Figma', 'Premiere Pro'],
    color: '#00FFC2',
    emoji: '✨'
  }
};


/* ─── Project Modal ──────────────────────────── */
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.getElementById('modal-backdrop');

function openModal(id) {
  const p = projects[id];
  if (!p) return;

  modalContent.innerHTML = `
    <div class="mb-6">
      <div class="text-4xl mb-4">${p.emoji}</div>
      <p class="text-xs uppercase tracking-widest mb-2 font-body" style="color:${p.color}">${p.category} · ${p.year}</p>
      <h3 class="font-display text-2xl font-800 dark:text-silver text-graphite mb-4" style="font-weight:800;">${p.title}</h3>
      <p class="dark:text-muted text-graphite-muted text-sm leading-relaxed">${p.description}</p>
    </div>

    <div class="grid sm:grid-cols-2 gap-5 mb-6">
      <div class="glass rounded-2xl p-5">
        <p class="text-xs uppercase tracking-widest dark:text-muted text-graphite-muted mb-3">El desafío</p>
        <p class="text-sm dark:text-silver text-graphite leading-relaxed">${p.challenge}</p>
      </div>
      <div class="glass rounded-2xl p-5">
        <p class="text-xs uppercase tracking-widest dark:text-muted text-graphite-muted mb-3">La solución</p>
        <p class="text-sm dark:text-silver text-graphite leading-relaxed">${p.solution}</p>
      </div>
    </div>

    <div class="glass rounded-2xl p-5 mb-6">
      <p class="text-xs uppercase tracking-widest dark:text-muted text-graphite-muted mb-4">Resultados</p>
      <ul class="space-y-2">
        ${p.results.map(r => `
          <li class="flex items-start gap-3 text-sm dark:text-silver text-graphite">
            <span class="mt-0.5 text-xs font-bold" style="color:${p.color}">↑</span>
            ${r}
          </li>
        `).join('')}
      </ul>
    </div>

    <div>
      <p class="text-xs uppercase tracking-widest dark:text-muted text-graphite-muted mb-3">Herramientas</p>
      <div class="flex flex-wrap gap-2">
        ${p.tools.map(t => `<span class="px-3 py-1.5 rounded-full text-xs glass dark:text-silver text-graphite">${t}</span>`).join('')}
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  // Trigger reflow for transition
  requestAnimationFrame(() => { modal.style.opacity = '1'; });
}

function closeModal() {
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }, 300);
}

// Open modal on project card click
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.id;
    openModal(id);
  });
});

modalClose?.addEventListener('click', closeModal);
modalBackdrop?.addEventListener('click', closeModal);

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});


/* ─── Portfolio filter ───────────────────────── */
const filterTabs = document.querySelectorAll('.filter-tab');
const projectCards = document.querySelectorAll('.project-card');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Update active tab style
    filterTabs.forEach(t => {
      t.classList.remove('active');
      t.classList.add('dark:text-muted', 'text-graphite-muted');
    });
    tab.classList.add('active');
    tab.classList.remove('dark:text-muted', 'text-graphite-muted');

    const filter = tab.dataset.filter;

    projectCards.forEach(card => {
      const category = card.dataset.category;
      const show = filter === 'all' || category === filter;

      if (show) {
        card.style.display = '';
        // Small animation
        card.style.opacity = '0';
        card.style.transform = 'scale(0.96)';
        requestAnimationFrame(() => {
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        });
      } else {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});


/* ─── Contact form (simulated) ───────────────── */
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const submitText = document.getElementById('submit-text');
const submitIcon = document.getElementById('submit-icon');
const formSuccess = document.getElementById('form-success');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic validation
  if (!name || !email || !message) {
    // Shake the button
    submitBtn.style.transform = 'translateX(-4px)';
    setTimeout(() => submitBtn.style.transform = 'translateX(4px)', 100);
    setTimeout(() => submitBtn.style.transform = '', 200);
    return;
  }

  // Loading state
  submitText.textContent = 'Enviando...';
  submitIcon.innerHTML = `
    <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg>
  `;
  submitBtn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    submitText.textContent = '✓ Enviado';
    submitIcon.innerHTML = '';
    submitBtn.style.background = '#22C55E';

    formSuccess.classList.remove('hidden');
    contactForm.reset();

    // Reset button after delay
    setTimeout(() => {
      submitText.textContent = 'Enviar mensaje';
      submitIcon.innerHTML = `
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      `;
      submitBtn.style.background = '#C8FF00';
      submitBtn.disabled = false;
      formSuccess.classList.add('hidden');
    }, 5000);
  }, 1800);
});


/* ─── Animated counter for stats ─────────────── */
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + (el.dataset.suffix || '');
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + (el.dataset.suffix || '');
    }
  }, 16);
}

// Trigger counters when hero stats are visible
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('[data-count]');
      counters.forEach(counter => {
        animateCounter(counter, parseInt(counter.dataset.count));
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('#hero');
if (statsSection) statsObserver.observe(statsSection);


/* ─── Cursor glow effect (desktop only) ──────── */
if (window.matchMedia('(pointer: fine)').matches) {
  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
  `;
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });
}


/* ─── Parallax on hero blobs (subtle) ────────── */
document.addEventListener('mousemove', (e) => {
  const blobs = document.querySelectorAll('#hero .absolute.rounded-full');
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;

  blobs.forEach((blob, i) => {
    const factor = (i + 1) * 8;
    blob.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
    blob.style.transition = 'transform 0.8s cubic-bezier(0.16,1,0.3,1)';
  });
});


/* ─── Highlight active nav link on scroll ────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.style.color = isActive ? '#C8FF00' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));


/* ─── Page load animation ─────────────────────── */
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});

console.log('%c Manuel Chicangana Portfolio ', 'background:#C8FF00; color:#0A0A0F; font-family:monospace; font-size:14px; font-weight:bold; padding:6px 12px; border-radius:4px;');
console.log('%c Built with ♥ using HTML + Tailwind + Vanilla JS', 'color:#7A7A8C; font-family:monospace;');

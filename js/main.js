/**
 * TRUE TECH - Core Navigation & UI Helper
 * Clean, lightweight, simple
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  highlightActiveNav();
  initLanguageSelector();
  initLiquidGlassPanels();
  initScrollReveals();
  initHeroLightMotion();
  initScrollToTop();
});

/**
 * Mobile Navigation Drawer
 */
function initMobileNav() {
  // Mobile drawer removed per design update
}

/**
 * Highlight Active Navigation Link
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-list a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const cleanHref = href.toLowerCase().replace(/^\.\.\//, '').replace(/^\.\//, '');
    const cleanPath = currentPath.split('/').pop() || 'index.html';

    if (cleanHref === cleanPath || (cleanPath === '' && cleanHref === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/**
 * Language Selector Handler
 */
function initLanguageSelector() {
  const langSelect = document.getElementById('footer-language-select');
  if (!langSelect) return;

  const savedLang = localStorage.getItem('truetech_lang');
  if (savedLang) {
    langSelect.value = savedLang;
  }

  langSelect.addEventListener('change', (e) => {
    localStorage.setItem('truetech_lang', e.target.value);
  });
}

/**
 * Apple visionOS Liquid Glass Container Physics Engine
 * - Smooth 60fps organic surface distortion
 * - Dynamic specular catch-light & glare tracking
 * - Physically realistic 3D micro-tilt with damping
 * - Touch & mobile ambient breathing wave
 */
function initLiquidGlassPanels() {
  const panels = document.querySelectorAll('.liquid-glass-panel, [data-liquid-glass]');
  if (!panels.length) return;

  panels.forEach(panel => {
    let state = {
      targetMx: 50,
      targetMy: 25,
      currentMx: 50,
      currentMy: 25,
      targetRx: 0,
      targetRy: 0,
      currentRx: 0,
      currentRy: 0,
      targetOpacity: 0.75,
      currentOpacity: 0.75,
      isHovered: false,
      rafId: null
    };

    const updatePhysics = () => {
      // Lerp (Linear Interpolation) for fluid liquid motion
      const lerp = 0.08;
      state.currentMx += (state.targetMx - state.currentMx) * lerp;
      state.currentMy += (state.targetMy - state.currentMy) * lerp;
      state.currentRx += (state.targetRx - state.currentRx) * lerp;
      state.currentRy += (state.targetRy - state.currentRy) * lerp;
      state.currentOpacity += (state.targetOpacity - state.currentOpacity) * lerp;

      panel.style.setProperty('--glass-mx', `${state.currentMx.toFixed(2)}%`);
      panel.style.setProperty('--glass-my', `${state.currentMy.toFixed(2)}%`);
      panel.style.setProperty('--glass-rx', `${state.currentRx.toFixed(3)}deg`);
      panel.style.setProperty('--glass-ry', `${state.currentRy.toFixed(3)}deg`);
      panel.style.setProperty('--glass-glare-opacity', state.currentOpacity.toFixed(2));

      // Also gently modulate headline --gy if inside panel and hovered
      const headline = panel.querySelector('.headline');
      if (headline && state.isHovered) {
        // Map targetMy from 0..100 to 30vh..70vh
        const gyVal = (30 + (state.currentMy * 0.4)).toFixed(1);
        headline.style.setProperty('--gy', `${gyVal}vh`);
      }

      // Continue animation if hovered or still settling
      const diff = Math.abs(state.targetRx - state.currentRx) +
                   Math.abs(state.targetRy - state.currentRy) +
                   Math.abs(state.targetMx - state.currentMx) +
                   Math.abs(state.targetMy - state.currentMy);

      if (state.isHovered || diff > 0.05) {
        state.rafId = requestAnimationFrame(updatePhysics);
      } else {
        state.rafId = null;
      }
    };

    const startLoop = () => {
      if (!state.rafId) {
        state.rafId = requestAnimationFrame(updatePhysics);
      }
    };

    const handlePointerMove = (e) => {
      state.isHovered = true;
      state.targetOpacity = 0.95;
      const rect = panel.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

      // Percentage across panel
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      state.targetMx = px;
      state.targetMy = py;

      // Realistic subtle 3D tilt: ±3.5 degrees max
      const normX = (x / rect.width) - 0.5; // -0.5 to +0.5
      const normY = (y / rect.height) - 0.5; // -0.5 to +0.5
      state.targetRx = normY * -5.0; // Rotate on X axis
      state.targetRy = normX * 5.0;  // Rotate on Y axis

      startLoop();
    };

    const handlePointerLeave = () => {
      state.isHovered = false;
      state.targetMx = 50;
      state.targetMy = 25;
      state.targetRx = 0;
      state.targetRy = 0;
      state.targetOpacity = 0.75;
      startLoop();
    };

    panel.addEventListener('pointermove', handlePointerMove, { passive: true });
    panel.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    panel.addEventListener('pointerenter', () => {
      state.isHovered = true;
      state.targetOpacity = 0.95;
      startLoop();
    });

    // Touch support: Tap creates ripple glint
    panel.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches[0]) {
        handlePointerMove(e.touches[0]);
      }
    }, { passive: true });

    panel.addEventListener('touchend', () => {
      handlePointerLeave();
    }, { passive: true });
  });
}

/**
 * Website-Wide Scroll-Triggered Section Reveals
 */
function initScrollReveals() {
  const targets = document.querySelectorAll(
    '.reveal-on-scroll, .card, .employee-card, .section-header, .page-header-bg .container > div'
  );

  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

/**
 * Hero Section Ambient Floating Light Motion
 */
function initHeroLightMotion() {
  const heroSection = document.querySelector('.hero-minimal');
  const aura1 = document.querySelector('.hero-aura-1');
  const aura2 = document.querySelector('.hero-aura-2');

  if (!heroSection || !aura1 || !aura2) return;

  heroSection.addEventListener('pointermove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    aura1.style.transform = `translate(${x * 35}px, ${y * 35}px)`;
    aura2.style.transform = `translate(${x * -45}px, ${y * -45}px)`;
  }, { passive: true });

  heroSection.addEventListener('pointerleave', () => {
    aura1.style.transform = '';
    aura2.style.transform = '';
  }, { passive: true });
}

/**
 * Floating "Flow" Up Button Handler
 * - Provides smooth 60fps return to top when clicked
 */
function initScrollToTop() {
  const floatingBtns = document.querySelectorAll('.btn-scroll-top, #btnScrollTop');
  floatingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
}

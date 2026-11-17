/**
 * TRUE TECH - 60fps Animated Mega-Menu Controller
 * Smooth Height Expansion, Staggered Reveals, Seamless Category Transitions, Zero Layout Shift
 */

(function () {
  'use strict';

  // DOM Elements
  const header = document.querySelector('.site-header');
  const megaWrapper = document.getElementById('megaDropdownWrapper');
  const megaContainer = megaWrapper ? megaWrapper.querySelector('.mega-dropdown-container') : null;
  const megaBackdrop = document.getElementById('megaBackdrop');
  const megaLinks = document.querySelectorAll('.nav-link[data-mega]');
  const allNavLinks = document.querySelectorAll('.nav-link');
  const megaTabs = document.querySelectorAll('.mega-tab-content');

  if (!megaWrapper || !megaTabs.length) return;

  let activeTabId = null;
  let closeTimeout = null;
  const HOVER_INTENT_DELAY = 180; // Grace period (ms) for diagonal cursor travel

  /**
   * Measure the precise height of a tab content inside the container
   */
  function measureTabHeight(tab) {
    if (!tab) return 0;
    const compStyle = window.getComputedStyle(megaContainer);
    const paddingTop = parseFloat(compStyle.paddingTop) || 38;
    const paddingBottom = parseFloat(compStyle.paddingBottom) || 44;
    const tabHeight = tab.offsetHeight || tab.scrollHeight || 0;
    const inner = megaWrapper.querySelector('.mega-dropdown-inner');
    const innerHeight = inner ? inner.scrollHeight : 0;
    return Math.max(Math.ceil(tabHeight + paddingTop + paddingBottom), innerHeight, 280);
  }

  /**
   * Open or switch to a specific mega-menu tab
   */
  function openTab(tabId) {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }

    const targetTab = document.getElementById(`mega-tab-${tabId}`);
    if (!targetTab) return;

    const isAlreadyOpen = megaWrapper.classList.contains('is-open');

    // If already open on the exact same tab, keep it active
    if (isAlreadyOpen && activeTabId === tabId) {
      return;
    }

    activeTabId = tabId;

    // 1. Update nav link active highlights & ARIA states
    megaLinks.forEach(link => {
      const isTarget = link.getAttribute('data-mega') === tabId;
      link.classList.toggle('is-menu-open', isTarget);
      link.setAttribute('aria-expanded', isTarget ? 'true' : 'false');
    });

    // 2. Switch tab contents with cross-fade
    megaTabs.forEach(tab => {
      const isTarget = tab === targetTab;
      tab.classList.toggle('is-active', isTarget);
      tab.setAttribute('aria-hidden', isTarget ? 'false' : 'true');
    });

    // 3. Fluid height calculation
    const targetHeight = measureTabHeight(targetTab);
    megaWrapper.style.height = `${targetHeight}px`;

    // 4. Reveal panel wrapper and backdrop
    if (!isAlreadyOpen) {
      megaWrapper.classList.add('is-open');
      megaWrapper.setAttribute('aria-hidden', 'false');
      if (megaBackdrop) {
        megaBackdrop.classList.add('is-visible');
        megaBackdrop.setAttribute('aria-hidden', 'false');
      }
    }
  }

  /**
   * Schedule panel collapse with hover-intent grace period
   */
  function scheduleClose() {
    if (closeTimeout) clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      closeMenu();
    }, HOVER_INTENT_DELAY);
  }

  /**
   * Smoothly collapse the panel upward with reverse animation
   */
  function closeMenu() {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }

    if (!megaWrapper.classList.contains('is-open') && !activeTabId) return;

    activeTabId = null;

    // Smooth reverse collapse upward: height back to 0
    megaWrapper.style.height = '0px';
    megaWrapper.classList.remove('is-open');
    megaWrapper.setAttribute('aria-hidden', 'true');

    if (megaBackdrop) {
      megaBackdrop.classList.remove('is-visible');
      megaBackdrop.setAttribute('aria-hidden', 'true');
    }

    // Reset navigation link highlights
    megaLinks.forEach(link => {
      link.classList.remove('is-menu-open');
      link.setAttribute('aria-expanded', 'false');
    });

    // Clean up inactive tabs once reverse transition finishes
    setTimeout(() => {
      if (!activeTabId) {
        megaTabs.forEach(tab => {
          tab.classList.remove('is-active');
          tab.setAttribute('aria-hidden', 'true');
        });
      }
    }, 320);
  }

  // --- Attach Event Listeners ---

  // Nav items with mega menus
  megaLinks.forEach(link => {
    const tabId = link.getAttribute('data-mega');

    link.addEventListener('mouseenter', () => {
      openTab(tabId);
    });

    link.addEventListener('mouseleave', () => {
      scheduleClose();
    });

    link.addEventListener('focus', () => {
      openTab(tabId);
    });
  });

  // Nav items without mega menus (Home, Contact Us)
  allNavLinks.forEach(link => {
    if (!link.hasAttribute('data-mega')) {
      link.addEventListener('mouseenter', () => {
        scheduleClose();
      });
    }
  });

  // Keep dropdown open when cursor moves inside the panel
  megaWrapper.addEventListener('mouseenter', () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
  });

  megaWrapper.addEventListener('mouseleave', () => {
    scheduleClose();
  });

  // Backdrop interactions
  if (megaBackdrop) {
    megaBackdrop.addEventListener('click', closeMenu);
    megaBackdrop.addEventListener('mouseenter', scheduleClose);
  }

  // Close immediately when clicking any link inside the mega menu
  const innerLinks = megaWrapper.querySelectorAll('a');
  innerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Keyboard accessibility: Escape key closes menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && megaWrapper.classList.contains('is-open')) {
      closeMenu();
      const currentActiveLink = document.querySelector('.nav-link.is-menu-open');
      if (currentActiveLink) currentActiveLink.focus();
    }
  });

  // Outside click closes menu
  document.addEventListener('click', (e) => {
    if (megaWrapper.classList.contains('is-open')) {
      if (header && !header.contains(e.target) && !megaWrapper.contains(e.target)) {
        closeMenu();
      }
    }
  });

  // Handle window resizing
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth <= 900) {
        closeMenu();
      } else if (activeTabId) {
        const targetTab = document.getElementById(`mega-tab-${activeTabId}`);
        if (targetTab) {
          megaWrapper.style.transition = 'none';
          megaWrapper.style.height = `${measureTabHeight(targetTab)}px`;
          requestAnimationFrame(() => {
            megaWrapper.style.transition = '';
          });
        }
      }
    }, 100);
  });
})();

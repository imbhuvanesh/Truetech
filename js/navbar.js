/**
 * TRUE TECH - Premium Minimal Navbar & Animated Mega Menu Controller
 * High-Performance, Zero Layout Shift, Accessible
 */

(function () {
  'use strict';

  // DOM Elements
  const header = document.getElementById('siteHeader');
  const navItems = document.querySelectorAll('.nav-item[data-menu]');
  const megaWrapper = document.getElementById('megaMenuWrapper');
  const megaBackdrop = document.getElementById('megaBackdrop');
  const megaContents = document.querySelectorAll('.mega-menu-content');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobilePanel = document.getElementById('mobileNavPanel');
  const searchBtn = document.getElementById('searchBtn');
  const searchModal = document.getElementById('searchModalBackdrop');
  const searchInput = document.getElementById('searchInput');
  const searchClose = document.getElementById('searchCloseBtn');

  let activeMenuId = null;
  let closeTimeout = null;
  const HOVER_INTENT_DELAY = 180; // ms grace period for diagonal cursor motion

  // -------------------------------------------------------------------------
  // 1. Desktop Mega Menu Management
  // -------------------------------------------------------------------------
  function openMenu(menuId) {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }

    if (activeMenuId === menuId && megaWrapper.classList.contains('is-open')) {
      return;
    }

    activeMenuId = menuId;

    // Update nav link active states and ARIA
    navItems.forEach((item) => {
      const isTarget = item.getAttribute('data-menu') === menuId;
      item.classList.toggle('is-active', isTarget);
      const btn = item.querySelector('.nav-link-btn');
      if (btn) btn.setAttribute('aria-expanded', isTarget ? 'true' : 'false');
    });

    // Switch active content tab
    megaContents.forEach((content) => {
      const isTarget = content.getAttribute('data-content') === menuId;
      content.classList.toggle('active', isTarget);
    });

    // Expand mega menu wrapper & backdrop
    megaWrapper.classList.add('is-open');
    megaWrapper.setAttribute('aria-hidden', 'false');
    if (megaBackdrop) megaBackdrop.classList.add('is-active');
  }

  function scheduleClose() {
    if (closeTimeout) clearTimeout(closeTimeout);
    closeTimeout = setTimeout(() => {
      closeMenu();
    }, HOVER_INTENT_DELAY);
  }

  function closeMenu() {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }

    activeMenuId = null;
    megaWrapper.classList.remove('is-open');
    megaWrapper.setAttribute('aria-hidden', 'true');
    if (megaBackdrop) megaBackdrop.classList.remove('is-active');

    navItems.forEach((item) => {
      item.classList.remove('is-active');
      const btn = item.querySelector('.nav-link-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });

    // Clear content active states after transition
    setTimeout(() => {
      if (!activeMenuId) {
        megaContents.forEach((content) => content.classList.remove('active'));
      }
    }, 250);
  }

  // -------------------------------------------------------------------------
  // 2. Event Listeners for Mega Menu
  // -------------------------------------------------------------------------
  navItems.forEach((item) => {
    const menuId = item.getAttribute('data-menu');
    const btn = item.querySelector('.nav-link-btn');

    // Pointer Enter: open immediately
    item.addEventListener('mouseenter', () => {
      openMenu(menuId);
    });

    // Pointer Leave: schedule close with grace period
    item.addEventListener('mouseleave', () => {
      scheduleClose();
    });

    // Click: toggle (touch & keyboard friendly)
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (activeMenuId === menuId && megaWrapper.classList.contains('is-open')) {
          closeMenu();
        } else {
          openMenu(menuId);
        }
      });
    }
  });

  // Mega wrapper hover tracking (moving from navbar into dropdown keeps it open)
  if (megaWrapper) {
    megaWrapper.addEventListener('mouseenter', () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
    });

    megaWrapper.addEventListener('mouseleave', () => {
      scheduleClose();
    });
  }

  // Backdrop click closes menu
  if (megaBackdrop) {
    megaBackdrop.addEventListener('click', () => {
      closeMenu();
    });
  }

  // Document Click Outside
  document.addEventListener('click', (e) => {
    if (header && !header.contains(e.target) && (!megaWrapper || !megaWrapper.contains(e.target))) {
      closeMenu();
    }
  });

  // Keyboard Navigation: Escape key closes menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (searchModal && searchModal.classList.contains('is-open')) {
        closeSearch();
      } else if (megaWrapper && megaWrapper.classList.contains('is-open')) {
        closeMenu();
      } else if (mobilePanel && mobilePanel.classList.contains('is-open')) {
        closeMobileNav();
      }
    }

    // Ctrl+K or Cmd+K or / opens search modal
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
  });

  // -------------------------------------------------------------------------
  // 3. Mobile Navigation Accordion
  // -------------------------------------------------------------------------
  function toggleMobileNav() {
    const isOpen = mobilePanel.classList.contains('is-open');
    if (isOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  }

  function openMobileNav() {
    if (!mobilePanel) return;
    mobilePanel.classList.add('is-open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!mobilePanel) return;
    mobilePanel.classList.remove('is-open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileNav);
  }

  // Mobile Accordions
  const mobileAccordions = document.querySelectorAll('.mobile-accordion-btn');
  mobileAccordions.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.mobile-accordion-item');
      if (!item) return;
      const isAlreadyOpen = item.classList.contains('open');

      // Close other accordions
      document.querySelectorAll('.mobile-accordion-item').forEach((acc) => {
        acc.classList.remove('open');
      });

      if (!isAlreadyOpen) {
        item.classList.add('open');
      }
    });
  });

  // -------------------------------------------------------------------------
  // 4. Quick Search Modal (Ctrl+K)
  // -------------------------------------------------------------------------
  function openSearch() {
    if (!searchModal) return;
    searchModal.classList.add('is-open');
    if (searchInput) {
      searchInput.value = '';
      setTimeout(() => searchInput.focus(), 60);
    }
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    if (!searchModal) return;
    searchModal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', openSearch);
  }

  if (searchClose) {
    searchClose.addEventListener('click', closeSearch);
  }

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        closeSearch();
      }
    });
  }

  // Search input live filtering
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const results = document.querySelectorAll('.search-result-link');
      results.forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'flex' : 'none';
      });
    });
  }
})();

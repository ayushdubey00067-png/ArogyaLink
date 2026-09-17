/* ============================================================
   ArogyaLink — App Controller (app.js)
   SPA Router, navigation, page initialization, and
   global event handlers.
   ============================================================ */

const App = (() => {
  'use strict';

  /* ── Valid page routes ──────────────────────────────────── */
  const ROUTES = ['home', 'dashboard', 'services', 'contact'];
  const DEFAULT_ROUTE = 'home';

  /* ── Router ────────────────────────────────────────────── */

  /**
   * Get the current route from the URL hash.
   * Falls back to DEFAULT_ROUTE if invalid.
   */
  function getCurrentRoute() {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    return ROUTES.includes(hash) ? hash : DEFAULT_ROUTE;
  }

  /**
   * Navigate to a page. Shows the target page, hides all others,
   * and updates the active nav link.
   */
  function navigateTo(route) {
    if (!ROUTES.includes(route)) route = DEFAULT_ROUTE;

    /* Hide all pages */
    document.querySelectorAll('.page').forEach((page) => {
      page.classList.remove('active');
    });

    /* Show target page */
    const targetPage = document.getElementById(`page-${route}`);
    if (targetPage) {
      targetPage.classList.add('active');
      /* Trigger page-enter animation */
      targetPage.classList.remove('page-enter');
      void targetPage.offsetWidth; /* Force reflow */
      targetPage.classList.add('page-enter');
    }

    /* Update nav links */
    document.querySelectorAll('.navbar__link').forEach((link) => {
      link.classList.remove('active');
      if (link.dataset.page === route) {
        link.classList.add('active');
      }
    });

    /* Page-specific initialization */
    if (route === 'dashboard') {
      Dashboard.render();
    } else if (route === 'services') {
      const activeCard = document.querySelector('.service-selector__card.active');
      if (activeCard) {
        /* Trigger the click handler to load the panel content */
        activeCard.click();
      } else {
        document.querySelector('[data-service="symptom"]')?.click();
      }
    }

    /* Scroll to top */
    window.scrollTo({ top: 0, behavior: 'smooth' });

    /* Close mobile menu if open */
    closeMobileMenu();

    /* Re-init scroll reveals for the new page */
    setTimeout(() => {
      ArogyaAnimations.initScrollReveal();
      ArogyaAnimations.initCounters();
    }, 100);
  }

  /* ── Mobile Menu ───────────────────────────────────────── */

  function toggleMobileMenu() {
    const hamburger = document.querySelector('.navbar__hamburger');
    const menu = document.querySelector('.navbar__menu');
    const overlay = document.querySelector('.navbar__overlay');

    hamburger?.classList.toggle('open');
    menu?.classList.toggle('open');
    overlay?.classList.toggle('active');

    /* Prevent body scroll when menu is open */
    document.body.style.overflow = menu?.classList.contains('open') ? 'hidden' : '';
  }

  function closeMobileMenu() {
    const hamburger = document.querySelector('.navbar__hamburger');
    const menu = document.querySelector('.navbar__menu');
    const overlay = document.querySelector('.navbar__overlay');

    hamburger?.classList.remove('open');
    menu?.classList.remove('open');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ── Services Page: Service Selector ───────────────────── */

  function initServiceSelector() {
    const cards = document.querySelectorAll('.service-selector__card');
    const symptomPanel = document.getElementById('symptom-analyzer');
    const yogaPanel = document.getElementById('yoga-advisor');

    cards.forEach((card) => {
      card.addEventListener('click', () => {
        /* Update active card */
        cards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');

        const service = card.dataset.service;

        if (service === 'symptom') {
          symptomPanel.style.display = 'block';
          yogaPanel.style.display = 'none';
          SymptomAnalyzer.render();
        } else if (service === 'yoga') {
          symptomPanel.style.display = 'none';
          yogaPanel.style.display = 'block';
          YogaAdvisor.render();
        }
      });
    });
  }

  /* ── Hero Buttons ──────────────────────────────────────── */

  function initHeroButtons() {
    const checkSymptomsBtn = document.getElementById('hero-check-symptoms');
    const exploreYogaBtn = document.getElementById('hero-explore-yoga');

    checkSymptomsBtn?.addEventListener('click', () => {
      window.location.hash = 'services';
      setTimeout(() => {
        document.querySelector('[data-service="symptom"]')?.click();
      }, 300);
    });

    exploreYogaBtn?.addEventListener('click', () => {
      window.location.hash = 'services';
      setTimeout(() => {
        document.querySelector('[data-service="yoga"]')?.click();
      }, 300);
    });
  }

  /* ── CTA Buttons ───────────────────────────────────────── */

  function initCTAButtons() {
    const ctaStart = document.getElementById('cta-start');
    const ctaContact = document.getElementById('cta-contact');

    ctaStart?.addEventListener('click', () => {
      window.location.hash = 'services';
    });

    ctaContact?.addEventListener('click', () => {
      window.location.hash = 'contact';
    });
  }

  /* ── Navigation Event Listeners ────────────────────────── */

  function initNavigation() {
    /* Hash change */
    window.addEventListener('hashchange', () => {
      navigateTo(getCurrentRoute());
    });

    /* Nav link clicks */
    document.querySelectorAll('.navbar__link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        window.location.hash = page;
      });
    });

    /* Hamburger */
    const hamburger = document.querySelector('.navbar__hamburger');
    hamburger?.addEventListener('click', toggleMobileMenu);

    /* Overlay click to close */
    const overlay = document.querySelector('.navbar__overlay');
    overlay?.addEventListener('click', closeMobileMenu);

    /* Footer nav links */
    document.querySelectorAll('.footer__link[data-page]').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = link.dataset.page;
      });
    });
  }

  /* ── Initialize All Modules ────────────────────────────── */

  function init() {
    /* Initialize all sub-modules */
    ArogyaAnimations.init();
    SymptomAnalyzer.init();
    YogaAdvisor.init();
    Dashboard.init();
    Contact.init();

    /* Setup navigation */
    initNavigation();
    initServiceSelector();
    initHeroButtons();
    initCTAButtons();

    /* Navigate to current route */
    navigateTo(getCurrentRoute());
  }

  /* ── Boot ──────────────────────────────────────────────── */

  document.addEventListener('DOMContentLoaded', init);

  return { navigateTo };
})();

/* ============================================================
   ArogyaLink — Animations Module (animations.js)
   IntersectionObserver for scroll reveals, animated counters,
   and staggered element entrance effects.
   ============================================================ */

const ArogyaAnimations = (() => {
  'use strict';

  /* ── Scroll Reveal via IntersectionObserver ─────────────── */

  /**
   * Initialize scroll-triggered reveal animations.
   * Elements with class "reveal" will fade in when they
   * enter the viewport.
   */
  function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal, .reveal--left, .reveal--right, .reveal--scale');

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            /* Once revealed, stop observing for performance */
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /* ── Animated Counter ──────────────────────────────────── */

  /**
   * Animate a number counting up from 0 to the target value.
   * Uses requestAnimationFrame for smooth 60fps updates.
   *
   * @param {HTMLElement} element — Element whose textContent will be updated
   * @param {number} target — Final value to count up to
   * @param {string} [suffix=''] — Text appended after the number (e.g. '+')
   * @param {number} [duration=2000] — Animation duration in ms
   */
  function animateCounter(element, target, suffix = '', duration = 2000) {
    const start = performance.now();
    const startValue = 0;

    function update(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);

      /* Ease-out cubic for natural deceleration */
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (target - startValue) * eased);

      element.textContent = current.toLocaleString('en-IN') + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  /**
   * Initialize all counter elements.
   * Each element should have:
   *   data-target="5000"
   *   data-suffix="+"
   */
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');

    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target, 10) || 0;
            const suffix = el.dataset.suffix || '';
            const duration = parseInt(el.dataset.duration, 10) || 2000;

            animateCounter(el, target, suffix, duration);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    counters.forEach((el) => observer.observe(el));
  }

  /* ── Staggered Grid Reveal ─────────────────────────────── */

  /**
   * Add staggered delay classes to grid children
   * so they animate in sequence when scrolled into view.
   *
   * @param {string} containerSelector — CSS selector for the grid container
   */
  function initStaggeredReveal(containerSelector) {
    const containers = document.querySelectorAll(containerSelector);

    containers.forEach((container) => {
      const children = container.children;

      Array.from(children).forEach((child, index) => {
        child.classList.add('reveal');
        child.style.transitionDelay = `${index * 0.1}s`;
      });
    });
  }

  /* ── Navbar Scroll Effect ──────────────────────────────── */

  /**
   * Add/remove .scrolled class on the navbar based on scroll position.
   */
  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); /* Run once on init */
  }

  /* ── Preloader ─────────────────────────────────────────── */

  /**
   * Dismiss the preloader after content has loaded.
   */
  function dismissPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    setTimeout(() => {
      preloader.classList.add('hidden');
      /* Remove from DOM after transition ends */
      preloader.addEventListener('transitionend', () => {
        preloader.remove();
      });
    }, 600);
  }

  /* ── Init All Animations ───────────────────────────────── */

  function init() {
    dismissPreloader();
    initNavbarScroll();
    initScrollReveal();
    initCounters();

    /* Apply staggered reveals to key grids */
    initStaggeredReveal('.features__grid');
    initStaggeredReveal('.why-choose__grid');
    initStaggeredReveal('.stats__grid');
    initStaggeredReveal('.testimonials__grid');
  }

  /* ── Expose ────────────────────────────────────────────── */
  return {
    init,
    initScrollReveal,
    initCounters,
    initStaggeredReveal,
    animateCounter,
    initNavbarScroll,
    dismissPreloader,
  };
})();

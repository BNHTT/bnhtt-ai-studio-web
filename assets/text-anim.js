/* Text anim (2026-07-12): entrada + salida del texto de todas las secciones.
   Los títulos/descripciones ya los maneja motion.js (ahora también con salida);
   acá cubrimos el resto del texto. Excluye el hero (tiene su coreografía propia). */
(function () {
  'use strict';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var SEL = [
    '.spotlight-label', '.spotlight-desc',
    '.cascade-kicker', '.cascade-cta',
    '.contact-kicker', '.contact-title', '.contact-sub', '.contact-btn', '.contact-trust',
    '.footer-signup-label', '.footer-copy',
    '.collections-sub', '.detail-kicker', '.detail-desc'
  ].join(',');

  var els = Array.prototype.slice.call(document.querySelectorAll(SEL))
    .filter(function (el) { return !el.closest('.hero'); });

  els.forEach(function (el) { el.classList.add('ta'); });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('ta-in');
      else entry.target.classList.remove('ta-in');
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  els.forEach(function (el) { io.observe(el); });
})();

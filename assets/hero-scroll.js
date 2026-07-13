/* Hero scroll-scrub (2026-07-13): el video del hero avanza a medida que
   scrolleás por el primer viewport. Sin autoplay: el scroll controla el
   currentTime. Respeta prefers-reduced-motion (deja el póster/primer frame). */
(function () {
  'use strict';
  var video = document.getElementById('heroVideo');
  var hero = document.getElementById('hero');
  if (!video || !hero) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  video.pause();
  var raf = 0;

  function apply() {
    raf = 0;
    var d = video.duration;
    if (!d || isNaN(d) || !isFinite(d)) return;
    var h = hero.offsetHeight || window.innerHeight;
    var t = Math.min(1, Math.max(0, window.scrollY / h));
    /* *0.985 evita saltar exactamente al final (algunos browsers pintan negro) */
    try { video.currentTime = t * d * 0.985; } catch (e) {}
  }
  function onScroll() { if (!raf) raf = requestAnimationFrame(apply); }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  function primeAndApply() {
    /* fuerza el render del primer frame (si no, algunos browsers muestran negro
       hasta el primer play/seek) y aplica la posición actual de scroll */
    try { if (video.currentTime === 0) video.currentTime = 0.01; } catch (e) {}
    apply();
  }
  video.addEventListener('loadedmetadata', primeAndApply);
  video.addEventListener('loadeddata', apply);
  if (video.readyState >= 1) primeAndApply();
  else { try { video.load(); } catch (e) {} }
})();

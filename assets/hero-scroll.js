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
    var h = hero.offsetHeight || window.innerHeight;
    var t = Math.min(1, Math.max(0, window.scrollY / h));
    var d = video.duration;
    if (!d || isNaN(d)) return;
    if (video.readyState >= 1) {
      try { video.currentTime = t * d; } catch (e) {}
    }
  }
  function onScroll() { if (!raf) raf = requestAnimationFrame(apply); }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  video.addEventListener('loadedmetadata', apply);
  if (video.readyState >= 1) apply();
})();

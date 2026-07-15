/* SMOKE — Pinterest-style masonry gallery, ported from a React/framer-motion
   reference to vanilla JS:
     - useInView (framer-motion)  -> IntersectionObserver, fires once, then unobserve.
     - onError fallback           -> swap broken media for a .smoke-fallback placeholder.
   Safety-first: items are opacity:1 by CSS default. The fade-in is only enabled
   (via the "smoke-reveal-ready" class) once IntersectionObserver support is
   confirmed and prefers-reduced-motion is off, so content can never be stuck
   invisible behind an animation that fails to run. */
(function () {
  var grid = document.getElementById('smokeMasonry');
  if (!grid) return;

  /* ---- broken-media fallback (images + videos/sources) ---- */
  var media = Array.prototype.slice.call(grid.querySelectorAll('img, video'));
  media.forEach(function (el) {
    var onError = function () {
      var item = el.closest('.smoke-item');
      if (item) item.classList.add('smoke-item--error');
    };
    el.addEventListener('error', onError, true);
    if (el.tagName === 'VIDEO') {
      Array.prototype.slice.call(el.querySelectorAll('source')).forEach(function (s) {
        s.addEventListener('error', onError, true);
      });
    }
  });

  /* ---- scroll-reveal fade-in ---- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return; /* stays fully visible via CSS default */

  grid.classList.add('smoke-reveal-ready');

  var items = Array.prototype.slice.call(grid.querySelectorAll('.smoke-item'));
  var io = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });

  items.forEach(function (item) { io.observe(item); });

  /* Direct deep-link to #smoke on load, or navigating to it via hash: the
     detail section is display:none until active, so re-check visibility of
     any items already in the viewport once it becomes visible. */
  window.addEventListener('hashchange', function () {
    if (location.hash !== '#smoke') return;
    requestAnimationFrame(function () {
      items.forEach(function (item) {
        if (item.classList.contains('in-view')) return;
        var r = item.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          item.classList.add('in-view');
          io.unobserve(item);
        }
      });
    });
  });
})();

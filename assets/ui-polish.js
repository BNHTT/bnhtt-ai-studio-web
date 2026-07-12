/* UI polish JS (2026-07-12): header scroll state + nav scroll-spy */
(function () {
  'use strict';

  var header = document.querySelector('.header');
  var hero = document.querySelector('.hero');

  /* (UI-1) header sólido cuando salimos del hero */
  function onScroll() {
    if (!header) return;
    var threshold = hero ? hero.offsetHeight * 0.82 : 120;
    if (window.scrollY > threshold) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* (UI-5) scroll-spy: marca la nav de la sección visible */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.header-nav .nav-link'));
  var map = {}; /* id de sección -> link */
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href') || '';
    if (href.charAt(0) === '#' && href.length > 1) map[href.slice(1)] = link;
  });
  var sections = Object.keys(map)
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (l) { l.classList.remove('active'); });
        var link = map[entry.target.id];
        if (link) link.classList.add('active');
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { observer.observe(s); });
  }
})();

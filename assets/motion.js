/* =====================================================================
   BNHTT AI Studio — Motion system
   (1) Hero entrance choreography (letters + words, on load)
   (2) Word-stagger reveals for titles/descriptions on all pages
   Respects prefers-reduced-motion (no splitting, no animation).
   ===================================================================== */
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { document.documentElement.classList.add("motion-off"); return; }

  /* ---- helpers ---- */
  function splitLetters(el, baseDelay, step) {
    if (!el || el.dataset.split) return;
    el.dataset.split = "1";
    var text = el.textContent;
    el.textContent = "";
    var frag = document.createDocumentFragment();
    for (var i = 0; i < text.length; i++) {
      var s = document.createElement("span");
      s.className = "m-letter";
      s.textContent = text[i] === " " ? " " : text[i];
      s.style.animationDelay = (baseDelay + i * step) + "ms";
      s.setAttribute("aria-hidden", "true");
      frag.appendChild(s);
    }
    el.appendChild(frag);
  }

  function splitWords(el, step, animBase) {
    if (!el || el.dataset.split) return;
    el.dataset.split = "1";
    var words = el.textContent.trim().split(/\s+/);
    el.textContent = "";
    var frag = document.createDocumentFragment();
    words.forEach(function (w, i) {
      var s = document.createElement("span");
      s.className = "m-word";
      s.textContent = w;
      if (typeof animBase === "number") {
        s.style.animationDelay = (animBase + i * step) + "ms";
      } else {
        s.style.transitionDelay = (i * step) + "ms";
      }
      frag.appendChild(s);
      frag.appendChild(document.createTextNode(" "));
    });
    el.appendChild(frag);
  }

  /* ---- (1) HERO entrance (index only) ---- */
  var heroTitle = document.getElementById("heroTitle");
  if (heroTitle) {
    splitLetters(heroTitle, 250, 70);
    var kicker = document.querySelector(".hero-kicker");
    if (kicker) splitLetters(kicker, 80, 45);
    var sub = document.querySelector(".hero-subhead");
    if (sub) { splitWords(sub, 35, 900); sub.classList.add("m-hero-words"); }
    document.documentElement.classList.add("hero-entrance");
  }

  /* ---- (2) Word-stagger reveals everywhere ---- */
  var TITLE_SEL = [".section-title", ".cascade-title", ".collections-heading", ".detail-title", ".footer-title"].join(",");
  var DESC_SEL  = [".collections-sub", ".detail-desc", ".collection-card-name"].join(",");

  var titles = Array.prototype.slice.call(document.querySelectorAll(TITLE_SEL));
  var descs  = Array.prototype.slice.call(document.querySelectorAll(DESC_SEL));

  titles.forEach(function (el) { splitWords(el, 70); el.classList.add("m-title"); });
  descs.forEach(function (el)  { splitWords(el, 22); el.classList.add("m-desc"); });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("m-in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25, rootMargin: "0px 0px -4% 0px" });

  titles.concat(descs).forEach(function (el) {
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      /* already in view on load (e.g. collections heading) → animate right away */
      requestAnimationFrame(function () { setTimeout(function () { el.classList.add("m-in"); }, 120); });
    } else {
      io.observe(el);
    }
  });

  /* re-run for detail views shown via hash (collections page) */
  window.addEventListener("hashchange", function () {
    setTimeout(function () {
      document.querySelectorAll(".collection-detail.active .m-title, .collection-detail.active .m-desc").forEach(function (el) {
        el.classList.remove("m-in");
        void el.offsetWidth; /* reflow to restart transition */
        el.classList.add("m-in");
      });
    }, 60);
  });
})();

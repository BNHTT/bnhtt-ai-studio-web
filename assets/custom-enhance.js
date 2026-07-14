(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ===================================================================
     COMPONENTE 1: BACKGROUND PATHS (Kokonut UI)
     SVG paths con stroke-dashoffset animado
     =================================================================== */
  (function initBgPaths() {
    if (reduce) return;
    var paths = document.querySelectorAll(".bg-path");
    if (!paths.length) return;

    // Crear un gradiente linear para el SVG
    var svg = document.querySelector(".bg-paths svg");
    if (svg) {
      var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      var linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
      linearGradient.setAttribute("id", "pathGradient");
      linearGradient.setAttribute("x1", "0%");
      linearGradient.setAttribute("y1", "0%");
      linearGradient.setAttribute("x2", "100%");
      linearGradient.setAttribute("y2", "0%");

      var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stop1.setAttribute("offset", "0%");
      stop1.setAttribute("stop-color", "#1332DE");
      stop1.setAttribute("stop-opacity", "0");

      var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stop2.setAttribute("offset", "50%");
      stop2.setAttribute("stop-color", "#1332DE");
      stop2.setAttribute("stop-opacity", "0.8");

      var stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stop3.setAttribute("offset", "100%");
      stop3.setAttribute("stop-color", "#1332DE");
      stop3.setAttribute("stop-opacity", "0");

      linearGradient.appendChild(stop1);
      linearGradient.appendChild(stop2);
      linearGradient.appendChild(stop3);
      defs.appendChild(linearGradient);
      svg.insertBefore(defs, svg.firstChild);

      // Animar cada path
      paths.forEach(function (path, i) {
        var length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        path.style.transition = "none";

        var delay = i * 0.8;
        var duration = 2.5 + i * 0.4;

        // Trigger animation
        requestAnimationFrame(function () {
          path.style.transition =
            "stroke-dashoffset " + duration + "s cubic-bezier(0.16, 1, 0.3, 1) " + delay + "s";
          path.style.strokeDashoffset = "0";
        });
      });

      // Repetir ciclo
      setInterval(function () {
        paths.forEach(function (path, i) {
          var length = path.getTotalLength();
          var delay = i * 0.8;
          var duration = 2.5 + i * 0.4;

          path.style.transition =
            "stroke-dashoffset 0s ease " + (duration + delay + 0.5) + "s";
          path.style.strokeDashoffset = length;

          requestAnimationFrame(function () {
            path.style.transition =
              "stroke-dashoffset " + duration + "s cubic-bezier(0.16, 1, 0.3, 1) " + delay + "s";
            path.style.strokeDashoffset = "0";
          });
        });
      }, 12000);
    }
  })();

  /* ===================================================================
     COMPONENTE 2: SPARKLES (Aceternity UI)
     Partículas canvas animadas alrededor del título
     =================================================================== */
  (function initSparkles() {
    if (reduce) return;
    var canvas = document.getElementById("sparklesCanvas");
    if (!canvas) return;

    var ctx = canvas.getContext("2d");
    var particles = [];
    var MAX_PARTICLES = 80;
    var W, H;

    function resize() {
      var hero = document.getElementById("hero");
      if (!hero) return;
      var rect = hero.getBoundingClientRect();
      W = canvas.width = rect.width;
      H = canvas.height = rect.height;
    }

    function Particle() {
      this.reset();
    }
    Particle.prototype.reset = function () {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 1.8 + 0.4;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4 - 0.15;
      this.opacity = Math.random() * 0.7 + 0.3;
      this.life = Math.random() * 200 + 100;
      this.maxLife = this.life;
    };
    Particle.prototype.update = function () {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life--;
      this.opacity = (this.life / this.maxLife) * 0.7;
      if (this.life <= 0 || this.x < 0 || this.x > W || this.y < 0 || this.y > H) {
        this.reset();
      }
    };
    Particle.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, " + this.opacity + ")";
      ctx.fill();
    };

    function init() {
      resize();
      particles = [];
      for (var i = 0; i < MAX_PARTICLES; i++) {
        var p = new Particle();
        p.life = Math.random() * p.maxLife;
        particles.push(p);
      }
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(function (p) {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener("resize", function () {
      resize();
      // Reposicionar partículas dentro del nuevo tamaño
      particles.forEach(function (p) {
        p.x = Math.random() * W;
        p.y = Math.random() * H;
      });
    });
  })();

  /* ===================================================================
     COMPONENTE 3: SCROLL EXPANSION HERO
     Hero se expande y contenido se mueve al scrollear
     =================================================================== */
  (function initScrollExpansion() {
    if (reduce) return;
    var hero = document.getElementById("hero");
    var heroBg = document.getElementById("heroBg");
    var heroContent = document.getElementById("heroContent");
    var heroOverlay = document.getElementById("heroOverlay");
    var scrollInd = document.querySelector(".scroll-indicator");
    if (!hero || !heroBg || !heroContent) return;

    var ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var heroH = hero.offsetHeight;
        var progress = Math.min(scrollY / heroH, 1);

        // 1. Hero background: zoom out ligeramente (expansión)
        var bgScale = 1.15 - progress * 0.15;
        heroBg.style.transform = "scale(" + Math.max(bgScale, 1) + ")";
        heroBg.style.filter = "brightness(" + (1 - progress * 0.15) + ")";

        // 2. Hero content: se desvanece y se mueve hacia arriba
        var contentY = progress * 80;
        var contentOpacity = 1 - progress;
        heroContent.style.transform = "translateY(-" + contentY + "px)";
        heroContent.style.opacity = Math.max(contentOpacity, 0);

        // 3. Overlay: se desvanece
        if (heroOverlay) {
          heroOverlay.style.opacity = 1 - progress;
        }

        // 4. Scroll indicator: ocultar al scrollear
        if (scrollInd) {
          if (progress > 0.15) {
            scrollInd.classList.add("hidden");
          } else {
            scrollInd.classList.remove("hidden");
          }
        }

        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  })();

  /* ===================================================================
     COMPONENTE 5: TEXT REVEAL (Magic UI)
     Palabras/elementos que aparecen al scrollear
     =================================================================== */
  (function initTextReveal() {
    var elements = document.querySelectorAll("[data-reveal-word]");
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (!reduce) {
            var delay = Array.prototype.indexOf.call(elements, entry.target) * 0.08;
            entry.target.style.transitionDelay = delay + "s";
          }
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -5% 0px" });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  })();

  /* ===================================================================
     COMPONENTE 6: LIVE CLOCK (header-time)
     =================================================================== */
  (function initClock() {
    var clockEl = document.querySelector(".header-time");
    if (!clockEl) return;
    function update() {
      var d = new Date();
      var h = String(d.getHours()).padStart(2, "0");
      var m = String(d.getMinutes()).padStart(2, "0");
      var s = String(d.getSeconds()).padStart(2, "0");
      clockEl.textContent = h + ":" + m + ":" + s;
    }
    update();
    setInterval(update, 1000);
  })();

})();

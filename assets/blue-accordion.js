/* Blue / Aether Flux — horizontal accordion look-selector.
   One panel active at a time (flex-grow 7 vs 1), click or arrow keys to switch.
   Pure enhancement: markup is already fully visible/usable without this script
   (buttons, images and video render normally; only the "active" toggle needs JS). */
(function () {
  var acc = document.getElementById('accordionBlue');
  if (!acc) return;

  var panels = Array.prototype.slice.call(acc.querySelectorAll('.acc-panel'));
  if (!panels.length) return;

  function activate(panel) {
    panels.forEach(function (p) {
      var isActive = p === panel;
      p.classList.toggle('active', isActive);
      p.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  panels.forEach(function (panel, i) {
    panel.addEventListener('click', function () {
      activate(panel);
    });

    panel.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      var nextIndex = e.key === 'ArrowRight'
        ? Math.min(i + 1, panels.length - 1)
        : Math.max(i - 1, 0);
      var next = panels[nextIndex];
      next.focus();
      activate(next);
    });
  });
})();

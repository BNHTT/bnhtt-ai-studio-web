/* Collections page — grid ⇄ detail view switcher (hash-deep-linkable) */
(function () {
  var grid = document.getElementById('collectionsGrid');
  if (!grid) return;

  var details = Array.prototype.slice.call(document.querySelectorAll('.collection-detail'));

  function showDetail(slug) {
    var target = document.getElementById('detail-' + slug);
    if (!target) return showGrid();
    grid.classList.add('hidden');
    details.forEach(function (d) { d.classList.remove('active'); });
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    // Move focus to the back button (first focusable element in the panel,
    // ahead of the heading in DOM order) so keyboard/screen-reader users
    // land on the new content and can still Tab forward through it normally.
    var back = target.querySelector('[data-back]');
    if (back) back.focus({ preventScroll: true });
  }

  function showGrid() {
    details.forEach(function (d) { d.classList.remove('active'); });
    grid.classList.remove('hidden');
    // Pause any playing videos when leaving a detail view
    document.querySelectorAll('.collection-detail video').forEach(function (v) { v.pause(); });
  }

  function route() {
    var slug = (location.hash || '').replace('#', '');
    if (slug) { showDetail(slug); } else { showGrid(); }
  }

  grid.addEventListener('click', function (e) {
    var card = e.target.closest('[data-collection]');
    if (!card) return;
    e.preventDefault();
    location.hash = card.getAttribute('data-collection');
  });

  document.querySelectorAll('[data-back]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var detail = btn.closest('.collection-detail');
      var slug = detail ? detail.id.replace('detail-', '') : null;
      history.pushState('', document.title, location.pathname + location.search);
      showGrid();
      // Return focus to the card the user came from, instead of dropping
      // it back at the top of the document.
      var card = slug && grid.querySelector('[data-collection="' + slug + '"]');
      if (card) card.focus();
    });
  });

  window.addEventListener('hashchange', route);
  route();
})();

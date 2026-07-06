/* Site fixes: functional footer form (mailto fallback until a real list/backend exists) */
(function () {
  var form = document.querySelector('.footer-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = form.querySelector('.footer-input');
    var email = input && input.value ? input.value.trim() : '';
    var subject = encodeURIComponent('BNHTT AI Studio — I want to learn how you do this');
    var body = encodeURIComponent('Hi Bruno,\n\nI saw the BNHTT AI Studio site and I want to know more.\n\nMy email: ' + email + '\n');
    window.location.href = 'mailto:brunohuerres99@gmail.com?subject=' + subject + '&body=' + body;
  });
})();

// Tutup menu navbar otomatis saat link diklik (tampilan HP)
document.querySelectorAll('#navMenu .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    var menu = document.getElementById('navMenu');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// Filter portofolio: All / Web Project / Design
(function () {
  var buttons = document.querySelectorAll('.filter-btn');
  var groups = document.querySelectorAll('.work-group');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.getAttribute('data-filter');
      buttons.forEach(function (b) {
        var active = (b === btn);
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      groups.forEach(function (g) {
        g.hidden = !(f === 'all' || g.getAttribute('data-category') === f);
      });
    });
  });
})();

(function () {
  const toggles = document.querySelectorAll('.navigation-toggle');

  toggles.forEach((btn) => {
    const menuId = btn.getAttribute('aria-controls');
    const menu = document.getElementById(menuId);

    if (!menu) return;

    // On load, ensure mobile menus start hidden
    btn.setAttribute('aria-expanded', 'false');
    menu.hidden = true;

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      menu.hidden = expanded;
    });
  });

  // Optional: when switching to desktop width, ensure menus are visible
  const mq = window.matchMedia('(min-width: 992px)');
  mq.addEventListener('change', (e) => {
    document.querySelectorAll('.navigation-toggle').forEach((btn) => {
      const menuId = btn.getAttribute('aria-controls');
      const menu = document.getElementById(menuId);
      if (!menu) return;

      if (e.matches) {
        // desktop
        btn.setAttribute('aria-expanded', 'false');
        menu.hidden = false;
      } else {
        // mobile
        btn.setAttribute('aria-expanded', 'false');
        menu.hidden = true;
      }
    });
  });
})();

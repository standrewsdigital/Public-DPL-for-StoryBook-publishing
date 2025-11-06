(() => {
  const root = document.querySelector('[data-tabs]');
  if (!root) return;

  const tablist = root.querySelector('[role="tablist"]');
  const tabs = Array.from(root.querySelectorAll('[role="tab"]'));
  const panels = Array.from(root.querySelectorAll('[role="tabpanel"]'));

  function activate(tab, { setFocus = true, pushHash = true } = {}) {
    const targetId = tab.dataset.target;

    tabs.forEach(t => {
      const selected = t === tab;
      t.setAttribute('aria-selected', selected);
      t.tabIndex = selected ? 0 : -1;
    });

    panels.forEach(p => {
      p.hidden = p.id !== targetId;
    });

    if (setFocus) tab.focus();

    if (pushHash && targetId) {
      history.replaceState(null, "", `#${targetId}`);
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => activate(tab));
  });

  tablist.addEventListener('keydown', e => {
    const index = tabs.findIndex(t => t === document.activeElement);
    if (index < 0) return;
    let next = null;

    switch (e.key) {
      case 'ArrowRight': next = (index + 1) % tabs.length; break;
      case 'ArrowLeft': next = (index - 1 + tabs.length) % tabs.length; break;
      case 'Home': next = 0; break;
      case 'End': next = tabs.length - 1; break;
      default: return;
    }

    e.preventDefault();
    activate(tabs[next]);
  });

  function initFromHash() {
    const hash = location.hash.replace('#', '');
    const match = tabs.find(t => t.dataset.target === hash);
    if (match) {
      activate(match, { setFocus: false, pushHash: false });
    } else {
      activate(tabs[0], { setFocus: false, pushHash: false });
    }
  }

  window.addEventListener('hashchange', initFromHash);
  initFromHash();
})();

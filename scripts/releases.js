(() => {
  'use strict';

  const panels = [...document.querySelectorAll('.release-listen')];
  let current = null;

  const unload = panel => {
    panel.querySelector('.release-player-host').replaceChildren();
  };

  panels.forEach(panel => {
    panel.addEventListener('toggle', () => {
      if (!panel.open) {
        unload(panel);
        if (current === panel) current = null;
        return;
      }

      panels.forEach(other => {
        if (other !== panel && other.open) {
          other.open = false;
          unload(other);
        }
      });

      if (current && current !== panel) unload(current);
      current = panel;
      const host = panel.querySelector('.release-player-host');
      if (!host.querySelector('iframe')) {
        host.replaceChildren(panel.querySelector('template').content.cloneNode(true));
      }
    });
  });
})();

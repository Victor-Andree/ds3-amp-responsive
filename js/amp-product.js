/* Interacciones exclusivas de la ficha AMP; el contenido sigue disponible sin JS. */
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#navegacion-principal');
  const mobile = window.matchMedia('(max-width: 767px)');
  if (menuButton && menu) {
    const menuContainer = menu.closest('.header-nav');
    function setMenu(open, restoreFocus = false) {
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      menuButton.querySelector('span').textContent = open ? '×' : '☰';
      menuContainer.hidden = mobile.matches && !open;
      if (restoreFocus) menuButton.focus();
    }
    function syncMenu() {
      const focused = document.activeElement;
      menuButton.hidden = !mobile.matches;
      setMenu(false);
      if (mobile.matches && menu.contains(focused)) menuButton.focus();
      if (!mobile.matches && focused === menuButton) menu.querySelector('a').focus();
    }
    menuButton.addEventListener('click', () => {
      setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobile.matches && menuButton.getAttribute('aria-expanded') === 'true') {
        event.preventDefault();
        setMenu(false, true);
      }
    });
    menu.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (!link || !mobile.matches) return;
      setMenu(false);
      // Esperar a que el enlace revele su panel antes de trasladar el foco.
      if (link.hash && link.origin === location.origin && link.pathname === location.pathname) {
        requestAnimationFrame(() => {
          const target = document.getElementById(link.hash.slice(1));
          if (!target) return;
          if (!target.hasAttribute('tabindex')) target.tabIndex = -1;
          target.focus({ preventScroll: true });
          target.scrollIntoView({ block: 'start' });
        });
      }
    });
    mobile.addEventListener('change', syncMenu);
    syncMenu();
  }
  const mainImage = document.querySelector('#product-main-image');
  const thumbnails = [...document.querySelectorAll('.gallery-thumbnail')];

  thumbnails.forEach((button) => {
    button.addEventListener('click', () => {
      const image = button.querySelector('img');
      if (!mainImage || !image) return;
      mainImage.src = image.src;
      mainImage.alt = image.alt;
      thumbnails.forEach((item) => {
        const selected = item === button;
        item.classList.toggle('gallery-thumbnail--current', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
    });
  });

  const navigation = document.querySelector('.section-navigation');
  if (!navigation) return;
  const tabs = [...navigation.querySelectorAll('a')];
  const panels = tabs.map((tab) => document.querySelector(tab.hash));
  if (panels.some((panel) => !panel)) return;
  const grid = document.querySelector('.details-grid');
  navigation.setAttribute('role', 'tablist');
  navigation.setAttribute('aria-label', 'Información del producto');
  document.documentElement.classList.add('product-tabs-ready');

  function selectTab(index, focus = false) {
    tabs.forEach((tab, position) => {
      const selected = position === index;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panels[position].hidden = !selected;
    });
    if (grid) grid.hidden = index === 2;
    if (focus) tabs[index].focus();
  }

  tabs.forEach((tab, index) => {
    tab.id = `product-tab-${index}`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panels[index].id);
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('aria-labelledby', tab.id);
    panels[index].tabIndex = 0;
    tab.addEventListener('click', (event) => {
      event.preventDefault();
      selectTab(index);
      history.replaceState(null, '', tab.hash);
    });
    tab.addEventListener('keydown', (event) => {
      if (event.key === ' ') {
        event.preventDefault();
        tab.click();
        return;
      }
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      selectTab(next, true);
      history.replaceState(null, '', tabs[next].hash);
    });
  });

  // También funcionan los enlaces de la cabecera y las URLs con fragmento.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    if (tabs.includes(link)) return;
    const index = tabs.findIndex((tab) => tab.hash === link.hash);
    if (index >= 0) link.addEventListener('click', () => selectTab(index));
  });
  function selectFromHash() {
    const index = tabs.findIndex((tab) => tab.hash === location.hash);
    if (index >= 0) selectTab(index);
  }
  selectTab(0);
  window.addEventListener('hashchange', selectFromHash);
  selectFromHash();
})();



window.addEventListener('DOMContentLoaded', () => {

  // Submenus (aria-expanded)
  const nav = document.getElementById('nav')
  nav.querySelectorAll('.toggle-submenu').forEach(( btn ) => {
    btn.addEventListener('click', () => {
      btn.setAttribute('aria-expanded', btn.getAttribute('aria-expanded') !== 'true' ? 'true' : 'false')
    });
  });

  // Toggle mobile menu
  const toggleMenu = document.getElementById('toggle-menu')
  toggleMenu.addEventListener('click', () => {
    toggleMenu.setAttribute('aria-expanded', toggleMenu.getAttribute('aria-expanded') !== 'true' ? 'true' : 'false')
    document.documentElement.classList.toggle('overflow-hidden')
  });

  // Check for keypress
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const toggle = nav.querySelector('#toggle-menu[aria-expanded="true"]') || nav.querySelector('.toggle-submenu[aria-expanded="true"]')
      if (toggle) {
        console.debug(toggle)
        toggle.setAttribute('aria-expanded', 'false')
        setTimeout(() => toggle.focus(), 300)
      }
    }
  });
});
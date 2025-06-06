document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');

  toggleBtn.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('show');
    this.textContent = expanded ? '☰' : '✖';
  });

  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // Fecha o menu
      menu.classList.remove('show');
      toggleBtn.setAttribute('aria-expanded', false);
      toggleBtn.textContent = '☰'; // Ícone do menu fechado
    });
  });
});

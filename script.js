const body = document.body;
const openBtn = document.getElementById('menu-open');
const closeBtn = document.getElementById('menu-close');

openBtn.addEventListener('click', () => body.classList.add('show-mobile-menu'));
closeBtn.addEventListener('click', () => body.classList.remove('show-mobile-menu'));


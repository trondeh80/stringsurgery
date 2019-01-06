import 'babel-polyfill';
import 'normalize.css';
import './app.scss';

const $q = document.querySelector.bind(document);

(() => {
  const app = init();
})();

function init() {
  // we ready boss.
  const burgerItem = $q('header nav .btn.burger-icon');
  burgerItem.addEventListener('click', toggleBurger);
}

function toggleBurger() {
  const header = $q('header');
  const isOpen = header.classList.contains('open');
  if (!isOpen) {
    header.classList.add('open');
  } else {
    header.classList.remove('open');
  }
}
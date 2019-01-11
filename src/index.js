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

  const navigationList = document.getElementById('#navbar-collapse');
  if (navigationList) {
    navigationList.onanimationend = onNavigationTransitionEnd.bind(navigationList);
  }
}

function onNavigationTransitionEnd(e) {
  debugger;
  if (e.target.style.opacity === 0) {
    e.target.querySelector('ul').className.add('animation-complete');
  }
}

function toggleBurger() {
  const nav = $q('.hamburger');
  const isOpen = nav.classList.contains('is-active');
  if (!isOpen) {
    nav.classList.add('is-active');
  } else {
    nav.classList.remove('is-active');
  }
}
import 'babel-polyfill';
import 'normalize.css';
import './app.scss';

const $ = document.querySelector.bind(document);

(() => {
  const app = init();
})();

function init() {
  // we ready boss.
  const burgerItem = $('header nav .btn.burger-icon');
  burgerItem.addEventListener('click', () => {
    const isOpen = $('header').classList.contains('open');
    console.log('open', isOpen);
    if (!isOpen) {
      $('header').classList.add('open');
    } else {
      $('header').classList.remove('open');
    }
  });

}
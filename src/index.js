import 'regenerator-runtime'; /* for async await transpile */
import './assets/styles/main.css';
import './assets/styles/responsive.css';
import './scripts/component/search-bar.js';
import App from './scripts/view/app';
// import itemRestaurant from './scripts/item-restaurant';

// document.addEventListener('DOMContentLoaded', itemRestaurant);

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  content: document.querySelector('#mainContent'),
  hero: document.querySelector('.hero'),
  main: document.querySelector('main'),
  drawer: document.querySelector('#navbarDrawer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

// menu.addEventListener('click', (e) => {
//   drawer.classList.toggle('open');
//   e.stopPropagation();
// });

// hero.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });

// main.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });

import 'regenerator-runtime'; /* for async await transpile */
import './assets/styles/main.css';
import './assets/styles/responsive.css';
import './scripts/component/search-bar.js';
import swRegister from './scripts/utils/sw-register';
import App from './scripts/view/App';

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
  swRegister();
});
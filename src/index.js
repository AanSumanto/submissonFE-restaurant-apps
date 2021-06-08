import 'regenerator-runtime'; /* for async await transpile */
import './assets/styles/main.css';
import './assets/styles/responsive.css';
import itemRestaurant from './scripts/item-restaurant.js';

document.addEventListener('DOMContentLoaded', itemRestaurant);

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (e) => {
    drawer.classList.toggle('open');
    e.stopPropagation();
});

hero.addEventListener('click', () => {
    drawer.classList.remove('open');
});

main.addEventListener('click', () => {
    drawer.classList.remove('open');
});



import menu from '../menu.json';
import itemsTemplate from '../templates/cards.hbs';
const markup = itemsTemplate(menu);

const menuItems = document.querySelector('.js-menu');
menuItems.insertAdjacentHTML('beforeend', markup);
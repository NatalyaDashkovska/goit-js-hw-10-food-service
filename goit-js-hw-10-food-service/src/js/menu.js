import itemsTemplates from '../template/menu.hbs';

import ingridients from '../menu.json';

const galleryRef = document.querySelector('.js-menu');
const map = itemsTemplates(ingridients);
galleryRef.insertAdjacentHTML('beforeend', map);

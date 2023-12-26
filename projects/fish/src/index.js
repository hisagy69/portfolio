'use strict';
import initMap from './modules/initMap';
import ListShow from './modules/listShow';
import Slider from './modules/slider';
import burger from './modules/burger';
import showInput from './modules/showInput';
import scroll from './modules/scroll';
import ShowHideBlock from './modules/showHideBlock'
import Validator from './modules/validator';
import Pagination from './modules/pagination';

function init() {
	initMap('map');
	new ListShow('.nav__list-name', '.nav__list', null, '.menu_main').init();
	new ListShow('.burger__list-name', '.burger__list', '.burger__item').init();
	new Slider('.slider__slide', '.pagination', 1000).init();
	burger('burger-button', 'menu__burger', '.menu_main', '.burger__item', '.burger__list');
	showInput('.form__button', '.menu__form', '.form__search');
	scroll();
	new Validator('.callback__item').init();
	document.querySelectorAll('.blog__card').forEach((item, index) => {
		if (index > 5) {
			item.style.display = 'none';
		}
	});
	document.addEventListener('click', event => {
		if (!event.target.closest('a')) {
			return;
		}
		if (event.target.closest('a').attributes.href && event.target.closest('a').attributes.href.nodeValue === '#blog') {
			const pagination = new Pagination('.blog__cards', '.blog__card');
			pagination.init();
		}
	});
	new ShowHideBlock(['blog', 'services']).init();
};

window.addEventListener('DOMContentLoaded', init);
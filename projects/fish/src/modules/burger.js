const burger = (buttonSelector, burgerSelector, menuSelector, itemSelector, listSelector) => {
	const button = document.querySelector('.' + buttonSelector),
			menu = document.querySelector(menuSelector),
			burger = document.querySelector('.' + burgerSelector),
			list = document.querySelector(listSelector),
			items = document.querySelectorAll(itemSelector);
	const burgerShowHide = () => {
		menu.classList.toggle('menu_active');
		button.classList.toggle(buttonSelector + '_active');
		burger.classList.toggle(burgerSelector + '_active');
		if (items && !menu.matches('.menu_active')) {
			list.classList.add('d-none');
			items.forEach(item => {
				item.style.display = '';
			});
		}
	};
	burger.addEventListener('click', event => {
		if (event.target.closest(itemSelector) && event.target.closest(itemSelector) !== burger.firstElementChild) {
			event.preventDefault();
			burgerShowHide();
		}
	});
	button.addEventListener('click', burgerShowHide);
	window.addEventListener('resize', () => {
		if (document.documentElement.clientWidth > 768 && menu.matches('.menu_active')) {
			burgerShowHide();
		}
	});
};
export default burger;
class ListShow {
	constructor(navListName, listSelector, itemSelector, menuSelector) {
		this.navName = document.querySelector(navListName);
		this.list = document.querySelector(listSelector);
		this.items = document.querySelectorAll(itemSelector);
		this.menu = document.querySelector(menuSelector);
		this.listSelector = listSelector;
		this.navListName = navListName;
	}
	show(event) {
		const target = event.target;
		if (this.items[0]) {
			this.items.forEach(item => {
				item.style.display = 'none';
			});
		}
		if (target.closest(this.navListName) || target.closest(this.listSelector) && this.list.matches('.d-none')) {
			this.list.classList.remove('d-none');
			this.navName.classList.add('list-name_active');
		}
	}
	hide() {
		if (this.navName.matches('.list-name_active')) {
			this.list.classList.add('d-none');
			this.navName.classList.remove('list-name_active');
		}
	}
	init() {
		if (this.menu && document.documentElement.clientWidth > 768) {
			this.menu.addEventListener('mouseover', this.show.bind(this));
			this.list.addEventListener('mouseout', this.hide.bind(this));
		} else {
			this.navName.addEventListener('click', this.show.bind(this));
		}
	}
}
export default ListShow;
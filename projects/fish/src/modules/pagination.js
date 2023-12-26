class Pagination {
	constructor(wrapperSelector, itemSelector) {
		this.wrapper = document.querySelector(wrapperSelector);
		this.items = document.querySelectorAll(itemSelector);
		this.arr = [];
	}
	itemArrAdd() {
		this.arr = [];
		let itemArr = [];
		for (let i = 0; i < (this.items.length); i++) {
			itemArr.push(this.items[i]);
			if ((i + 1) % 4 === 0) {
				this.arr.push([...itemArr]);
				itemArr = [];
			}
		}
		if (itemArr[0]) {
			this.arr.push(itemArr);
		}
	}
	showHide() {
		this.items.forEach(item => {
			item.style.display = ''
		});
		this.cardActive = document.querySelectorAll('.card_active');
		if (this.cardActive[0]) {
			this.cardActive.forEach(item => item.classList.remove('card_active'));
		}
		for (let i = 0; i < this.paginationNumbers.length; i ++) {
			if (this.paginationNumbers[i].matches('.number_active')) {
				this.arr[i].forEach(item => item.classList.add('card_active'));
				break;
			}
		}
	}
	genPagination() {
		const blogPagination = document.createElement('div');
		blogPagination.classList.add('blog__pagination');
		this.wrapper.append(blogPagination);
		for (let i = 1; i <= Math.ceil(this.items.length / 4); i++) {
			blogPagination.insertAdjacentHTML('beforeend', `
				<span class="pagination__number">${i}</span>
			`);
		}
		this.paginationNumbers = document.querySelectorAll('.pagination__number');
		this.paginationNumbers[0].classList.add('number_active');
		this.wrapper.addEventListener('click', event => {
			const target = event.target;
			if (target.matches('.pagination__number') && !target.matches('.number_active')) {
				document.querySelector('.number_active').classList.remove('number_active');
				target.classList.add('number_active');
				this.showHide();
			}
		});
	}
	init() {
		if (this.items.length > 4) {
			this.genPagination();
			this.itemArrAdd();
			this.showHide();
		}
	}
}
export default Pagination;
class Slider {
	constructor(slideSelector, paginationSelector, timeout = 0) {
		this.slides = document.querySelectorAll(slideSelector);
		this.pagination = document.querySelector(paginationSelector);
		this.timeout = timeout;
		this.paginationSelector = paginationSelector;
		this.slideSelector = slideSelector;
	}
	sliderView() {
		this.slides.forEach(() => {
			this.pagination.insertAdjacentHTML('afterbegin', `
				<span class="${this.paginationSelector.slice(1)}__bullet"></span>
			`);
		});
		this.bullets = document.querySelectorAll(`${this.paginationSelector}__bullet`);
		this.bullets[0].classList.add(`${this.paginationSelector.slice(1)}__bullet_active`);
		this.slides[0].classList.add(`${this.slideSelector.slice(1)}_active`);
	}
	nextSlide(event) {
		const target = event.target;
		if(target.classList.matches(`${this.paginationSelector}__bullet`)) {
			this.bullets.forEach((bullet, index) => {
				bullet.classList.remove(`${this.paginationSelector.slice(1)}__bullet_active`);
				this.slides[index].classList.remove(`${this.slideSelector.slice(1)}_active`);		
				if(target === bullet) {
					this.slides[index].classList.add(`${this.slideSelector.slice(1)}_active`);
				}
			})
			target.classList.add(`${this.paginationSelector.slice(1)}__bullet_active`);
		}
	}
	animate() {
		let key;
		let	period;
		const animateShow = (timestamp) => {
			if (!period) {
				period = timestamp;
			}
			if (timestamp - period >= this.timeout) {
				period = timestamp;
				for (let i = 0; i < this.bullets.length; i++) {
					if (this.bullets[i].matches(`${this.paginationSelector}__bullet_active`)) {
						this.bullets[i].classList.remove(`${this.paginationSelector.slice(1)}__bullet_active`);
						this.slides[i].classList.remove(`${this.slideSelector.slice(1)}_active`);
						if (i + 1 === this.bullets.length) {
							this.bullets[0].classList.add(`${this.paginationSelector.slice(1)}__bullet_active`);
							this.slides[0].classList.add(`${this.slideSelector.slice(1)}_active`);
							break;
						}
						this.bullets[i + 1].classList.add(`${this.paginationSelector.slice(1)}__bullet_active`);
						this.slides[i + 1].classList.add(`${this.slideSelector.slice(1)}_active`);
						break;
					}
				}
			}
			key = requestAnimationFrame(animateShow);
		};
		this.pagination.addEventListener('mouseout', () => {
			key = requestAnimationFrame(animateShow);
		});
		this.pagination.addEventListener('mouseover', () => {
			cancelAnimationFrame(key);
		});
		key = requestAnimationFrame(animateShow);
	}
	init() {
		this.sliderView();

		this.pagination.addEventListener('click', this.nextSlide.bind(this));
		if (this.timeout) {
			this.animate();
		}
	}
};

export default Slider;
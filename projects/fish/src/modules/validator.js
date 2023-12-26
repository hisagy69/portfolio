class Validator{
	constructor(inputSelector, reg) {
		this.input = document.querySelector(inputSelector);
		this.reg = reg || {
			regMail: /\w+@\w+\.\w{2,7}/g
		};
		this.message = document.createElement('span');
	}
	init() {
		this.input.addEventListener('change', () => {
			const value = this.input.value; 
			this.message.style.cssText = `
				color: #ff0000;
				position: absolute;
				bottom: -20px;
				width: 100%;
				left: 50%;
				transform: translateX(-50%);
				text-align: center;
			`;
			if (value.match(this.reg.regMail) && value.match(this.reg.regMail)[0] === value) {
				this.input.style.borderColor = '#00ff00';
				this.message.textContent = '';
			} else {
				this.input.style.borderColor = '#ff0000';
				this.message.textContent = 'введите email вида mail@mail.ru';
				this.input.parentNode.append(this.message);
			}
		});
	}
}
export default Validator;
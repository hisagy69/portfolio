const showInput = (buttonSelector, formSelector, inputSelector) => {
	if (document.documentElement.clientWidth > 768) {
		return;
	}
	const button = document.querySelector(buttonSelector),
		form = document.querySelector(formSelector),
		input = document.querySelector(inputSelector);
	const animate = () => {
		let key,
			timeLine,
			width = 0;
		const showInput = (timestamp) => {
			if (!timeLine) {
				timeLine = timestamp;
			} 
			if (width === 100) {
				return;
			}
			if (timestamp - timeLine >= 3) {
				width++;
				timeLine = timestamp;
				input.style.width = `${width}%`;
			}
			key = requestAnimationFrame(showInput);
		};
		key = requestAnimationFrame(showInput);
	};
	button.addEventListener('click', (event) => {
		event.preventDefault();
		if (!form.matches('.active')) {
			form.classList.add('active');
			form.style.cssText = `
				position: absolute;
				right: 0;
				background: #fff;
				width: 80%;
			`;
			animate();
			input.focus();
		}
	});
	input.addEventListener('blur', () => {
		form.classList.remove('active');
		form.style.cssText = '';
		input.style.width = '';
	});
};
export default showInput;
class ShowHideBlock {
	constructor(idBlock) {
		this.blocks = [];
		this.idBlock = idBlock;
	}
	init() {
		this.idBlock.forEach(item => {
			this.blocks.push(document.getElementById(item));
		});
		document.addEventListener('click', event => {
			const target = event.target.closest('a');
			this.blocks.forEach(item => {
				if (!target || !target.attributes.href || target.attributes.href.nodeValue === '#') {
					return;
				}
				if (target.attributes.href.nodeValue === '#' + item.id) {
					item.classList.add('active');
				} else {
					item.style.display = 'none';
				}
			});
		});
	}
}
export default ShowHideBlock;
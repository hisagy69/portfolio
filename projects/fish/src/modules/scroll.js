const scroll = () => {
	const animate = (event) => {
		const target = event.target,
			link = target.closest('a');
		if (!link || !link.attributes.href || !link.attributes.href.nodeValue || link.attributes.href.nodeValue.charAt(0) !== '#') {
			return;
		}
		event.preventDefault();

		const block = link.hash ? document.querySelector(link.hash) : 0,
			scrollTo = block ? block.offsetTop : 0;
		let key;
		const scrollShow = () => {
			if (Math.abs(document.documentElement.scrollTop - scrollTo) <= 50) {
				document.documentElement.scrollTop = scrollTo;
				return;
			}
			if (document.documentElement.scrollTop < scrollTo) {
				if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {
					document.documentElement.scrollTop = scrollTo;
					return;
				}
				document.documentElement.scrollTop += 50;
				key = requestAnimationFrame(scrollShow);
			}
			if (document.documentElement.scrollTop > scrollTo) {
				document.documentElement.scrollTop -= 50;
				key = requestAnimationFrame(scrollShow);
			}
		};
		key = requestAnimationFrame(scrollShow);
	};
	document.addEventListener('click', animate);
};
export default scroll;
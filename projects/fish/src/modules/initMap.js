function initMap(mapWrapSelector) {
	const wrap = document.getElementById(mapWrapSelector),
		uluru = {lat: 59.943007, lng: 30.440411},
		label = `  
			<div class="overlay" id="content"><p class="overlay__text">Санкт-Петербург, ул.Якорная д.17, к.3, оф.19</p></div>
		`;
	const statusMessage = document.createElement('div');
	wrap.append(statusMessage);
	statusMessage.style.cssText = `
		z-index: 9999;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	`;
	let keyRequest;
	const animate = () => {
		let start = null,
			prevItem = null,
			fantom = null,
			i = 0;
		statusMessage.innerHTML = `
			<div class="animate">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		`;
		const loader = document.querySelector('.animate'),
					divCollection = loader.querySelectorAll('div');
		statusMessage.querySelector('.animate').style.cssText = `
			width: 40px;
			height: 40px;
			display: flex;
			flex-wrap: wrap;
			margin: auto;
		`;
		divCollection[2].style.order = 1;
		[...divCollection].forEach(item => {
			item.style.cssText = `
				width: 20px;
				height: 20px;
				background: #000;
				display: inline-block;
				opacity: 0.1;
				margin: 0;
			`;
		});

		const animateFrame = timestamp => {
			if (!start) start = timestamp;
			if (timestamp - start >= 100) {
				divCollection[i].style.opacity = 1;
				if (prevItem) prevItem.style.opacity = 0.5;
				if (fantom) fantom.style.opacity = 0;
				fantom = prevItem;
				prevItem = divCollection[i];
				if (i === 3) {
					i = 0;
					start = timestamp;
					keyRequest = requestAnimationFrame(animateFrame);
					return;
				}
					i++;
					start = timestamp;
				}
				keyRequest = requestAnimationFrame(animateFrame);
			};
		keyRequest = requestAnimationFrame(animateFrame);
	};
	const outputData = (data) => {
		const map = new google.maps.Map(document.getElementById('map'), {
			center: uluru,
			zoom: 17,
			zoomControl: false,
			scaleControl: false,
			fullscreenControl: false,
			streetViewControl: false,
			mapTypeControl: false,
			styles: data
		});
		const informwindow = new google.maps.InfoWindow({
			content: label,
			maxWidth: 341
		});
		const marker = new google.maps.Marker({
			position: uluru, 
			map: map,
			icon: '../img/marker.png',
		});
		statusMessage.style.cssText = '';
		statusMessage.textContent = '';
		informwindow.open(map, marker);
	};
	const errorData = (error) => {
		console.error(error);
		statusMessage.textContent = 'Ошибка загрузки карты';
	}
	const getData = (url) => {
		return new Promise((resolve, reject) => {
			const request = new XMLHttpRequest();
			request.open('GET', url);
			request.addEventListener('readystatechange', () => {
				if (request.readyState !== 4) {
					return;
				}
				cancelAnimationFrame(keyRequest);
				if (request.status === 200) {
					resolve(JSON.parse(request.response));
				} else {
					reject(request.response.statusText);
				}
			});
			request.send();
		});
	};
	animate();
	getData('../json/map.json')
		.then(outputData)
		.catch(errorData);
};

export default initMap;
!function(n){var i={};function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,n){t.exports=n(6)},function(t,e){var i=this;function o(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function a(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}var n=function(t){var e=this;a(this,i);var n=t.target.closest(".city-list"),t=document.querySelectorAll(".city-list>ul");n?n.querySelector("ul").classList.toggle("d-none"):o(t).find(function(t){if(a(this,e),!t.matches(".d-none"))return t.classList.add("d-none"),t}.bind(this))}.bind(this);document.addEventListener("click",n)},function(t,e,n){"use strict";n.r(e),e.default=n.p+"img/5ddc4a45b80f7fef5047a0af612cb887.jpg"},function(t,e,n){"use strict";n.r(e),e.default=n.p+"img/f8a16717bc5fe09d225573dd027be387.png"},function(t,e,n){var o=this;function r(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}(function(){var t,e,i=this;r(this,o),document.documentElement.scrollHeight!==document.documentElement.clientHeight&&(t=document.createElement("div"),e=document.querySelector(".advantages"),t.classList.add("scroll-button"),t.style.cssText="\n\t\tdisplay: none;\n\t\twidth: 2rem;\n\t\theight: 2rem;\n\t\tbackground: url(".concat(n(5).default,") no-repeat center / 70% #f4d733;\n\t\tposition: fixed;\n\t\tright: 2rem;\n\t\tbottom: 2rem;\n\t\tz-index: 9;\n\t\tcursor: pointer;\n\t"),document.documentElement.scrollTop>=e.offsetTop&&(t.style.display="block"),document.body.appendChild(t),window.addEventListener("scroll",function(){r(this,i),document.documentElement.scrollTop>=e.offsetTop&&"block"!==t.style.display?t.style.display="block":document.documentElement.scrollTop<e.offsetTop&&"none"!==t.style.display&&(t.style.display="none")}.bind(this)),t.addEventListener("click",function(){var t=this;r(this,i);var e=function(){if(r(this,t),document.documentElement.scrollTop<=0)return document.documentElement.scrollTop=0,void cancelAnimationFrame(n);document.documentElement.scrollTop-=60,n=requestAnimationFrame(e)}.bind(this),n=requestAnimationFrame(e)}.bind(this)))}).bind(this)()},function(t,e,n){"use strict";n.r(e),e.default=n.p+"img/ab9b9103e73e50c481a3c3acb418f3ed.svg"},function(t,e,o){"use strict";o.r(e);function c(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function u(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}var n=function(l){var t,i=this;u(this,void 0),document.querySelector(l)&&(t=function(){var o=this;u(this,i);var t,e,r,a,n=document.querySelector(l),s=document.querySelectorAll("".concat(l,">a"));s[0]&&(t=[+s[0].dataset.nord,+s[0].dataset.west],e=s[0].querySelector("strong").textContent,(r=new ymaps.Map("map",{center:t,zoom:17,controls:{}})).behaviors.disable("scrollZoom"),(a=function(t,e){u(this,o),r.geoObjects.add(new ymaps.Placemark(t,{iconCaption:e},{preset:"islands#redDotIcon"}))}.bind(this))(t,e),s[0].classList.add("active"),n&&n.addEventListener("click",function(t){var e=this;u(this,o),t.preventDefault();var n=t.target.closest("".concat(l,">a")),i=n.querySelector("strong").textContent;n&&(t=[+n.dataset.nord,+n.dataset.west],c(s).find(function(t){if(u(this,e),t.matches(".active"))return t.classList.remove("active"),t}.bind(this)),n.classList.add("active"),a(t,i),r.setCenter(t))}.bind(this)))}.bind(this),ymaps.ready(t))}.bind(void 0);o(1);function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a=function(){function n(t){var e=t.selectorValid,t=t.pattern;!function(t){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this.pattern=t,this.form=document.querySelector(e)}var t,e,i;return t=n,(e=[{key:"valid",value:function(t){var e=t.target;if(e.value){t=e.value.match(this.pattern[e.dataset.type].reg);if(t&&t[0]===e.value)return e.style.border="1px solid green",void(e.nextElementSibling&&e.nextElementSibling.matches(".invalid-message")&&e.nextElementSibling.remove());this.messageInvalid(e)}else this.messageInvalid(e)}},{key:"messageInvalid",value:function(t){var e=document.createElement("div");e.classList.add("invalid-message"),e.textContent="некоректный ввод, введите ".concat(this.pattern[t.dataset.type].example),t.insertAdjacentElement("afterend",e),t.style.border="1px solid tomato"}},{key:"init",value:function(){this.form&&(this.inputs=this.form.querySelectorAll("input"),this.pattern||(this.pattern={name:{reg:/[\wа-я]{2,10}/i,example:"Иван"},phone:{reg:/^(\+7)|8\d{10}/,example:"8-983-108-0161"}}),this.form.addEventListener("change",this.valid.bind(this)))}}])&&r(t.prototype,e),i&&r(t,i),n}();function s(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var d=function(){function n(t,e){!function(t){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this.buttonSelector=t,this.modal=document.querySelector(".popup"),this.style=document.querySelector(".popup-style"),this.content=e}var t,e,i;return t=n,(e=[{key:"animateShow",value:function(){var e,n=this,i=this.modal.style.opacity,o=function(t){if(s(this,n),20<=t-(e=e||t)){if("0"===i&&1<=this.modal.style.opacity||"1"===i&&this.modal.style.opacity<="0")return"0"===i?this.modal.style.opacity=1:(this.modal.style.opacity=0,this.modal.style.display="none"),void cancelAnimationFrame(r);this.modal.style.opacity="0"===i?+this.modal.style.opacity+.1:+this.modal.style.opacity-.1}r=requestAnimationFrame(o)}.bind(this),r=requestAnimationFrame(o)}},{key:"toggleModal",value:function(){if(this.content||(this.content='\n\t\t\t<div class="popup__title">'.concat(this.title,'</div>\n\t\t\t<form class="popup__form form" id="popup-form" method="POST">\n\t\t\t\t<div class="input-wrap">\n\t\t\t\t\t<input class="popup__input" id="user-name" data-type="name" type="text" placeholder="Ваше имя">\n\t\t\t\t</div>\n\t\t\t\t<div class="input-wrap">\n\t\t\t\t\t<input class="popup__input" id="user-phone" data-type="phone" type="tel" placeholder="Ваш номер телефона">\n\t\t\t\t</div>\n\t\t\t\t<button class="button popup__button">Отправить заявку</button>\n\t\t\t</form>\n\t\t')),this.modal&&this.title)return this.modal.style.display="",void(this.modal.querySelector(".popup__title").textContent=this.title);this.modal=document.createElement("div"),this.modal.classList.add("popup"),this.modal.insertAdjacentHTML("beforeend",'\n\t\t\t<div class="popup__dialog">\n\t\t\t\t<div class="popup__close">\n\t\t\t\t\t<span></span>\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t\t'.concat(this.content,"\n\t\t\t</div>\n\t\t")),this.style||(this.style=document.createElement("style"),this.style.textContent="\n\t\t\t\t.popup {\n\t\t\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tz-index: 34;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t}\n\t\t\t\t.popup__dialog {\n\t\t\t\t\twidth: 397px;\n\t\t\t\t\tmin-height: 300px;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tbackground: #000 url(".concat(o(2).default,') no-repeat 0 116% / cover;\n\t\t\t\t\tposition: relative;\n\t\t\t\t}\n\t\t\t\t.popup__message_error {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tpadding-top: 2rem;\n\t\t\t\t\tcolor: tomato;\n\t\t\t\t}\n\t\t\t\t.popup__message_success {\n\t\t\t\t\tcolor: green;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tpadding-top: 2 rem;\n\t\t\t\t\tposition: relative;\n\t\t\t\t}\n\t\t\t\t.popup__dialog::before {\n\t\t\t\t\tcontent: "";\n\t\t\t\t\tbackground-color: rgba(0, 0, 0, 0.8);\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\ttop: 0;\n\t\t\t\t}\n\t\t\t\t.popup__title {\n\t\t\t\t\tfont-size: 1.466rem;\n\t\t\t\t\tbackground-color: #33b7d2;\n\t\t\t\t\tcolor: rgb(255, 255, 255);\n\t\t\t\t\tline-height: 1.045;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tpadding: 1.666rem 0;\n\t\t\t\t\tposition: relative;\n\t\t\t\t}\n\t\t\t\t.popup__form {\n\t\t\t\t\tpadding: 3.2rem 3.266rem 2rem;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items:center;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t}\n\t\t\t\t.popup__input {\n\t\t\t\t\tfont-size: 0.866rem;\n\t\t\t\t\tfont-weight: 300;\n\t\t\t\t\tcolor: #606060;\n\t\t\t\t\twidth: 19.333rem;\n\t\t\t\t\tborder-radius: 50px;\n\t\t\t\t\tpadding: 1.333rem 1.733rem;\n\t\t\t\t\tborder: none;\n\t\t\t\t\tmargin-bottom: 1rem\n\t\t\t\t}\n\t\t\t\t.popup__form::before {\n\t\t\t\t\tcontent: url(').concat(o(3).default,");\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 50%;\n\t\t\t\t\ttop: 50%;\n\t\t\t\t\ttransform: translate(-50%, -50%);\n\t\t\t\t}\n\t\t\t\t.popup__close {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tright: -17px;\n\t\t\t\t\ttop: -17px;\n\t\t\t\t\twidth: 17px;\n\t\t\t\t\theight: 17px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\t\t\t\t.popup__close>span {\n\t\t\t\t\tbackground: #fff;\n\t\t\t\t\theight: 17px;\n\t\t\t\t\twidth: 2px;\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tbackground-color: #fff;\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 50%;\n\t\t\t\t\ttop: 50%;\n\t\t\t\t}\n\t\t\t\t.popup__close>span:first-child {\n\t\t\t\t\ttransform: translate(-50%, -50%) rotate(45deg);\n\t\t\t\t}\n\t\t\t\t.popup__close>span:last-child {\n\t\t\t\t\ttransform: translate(-50%, -50%) rotate(-45deg);\n\t\t\t\t}\n\t\t\t\t.popup__button {\n\t\t\t\t\tmargin-top: 0.666rem;\n\t\t\t\t\ttext-transform: none;\n\t\t\t\t}\n\t\t\t\t@media screen and (max-width: 450px) {\n\t\t\t\t\t.popup__dialog {\n\t\t\t\t\t\twidth: 90%;\n\t\t\t\t\t\tbackground-size: cover;\n\t\t\t\t\t}\n\t\t\t\t\t.popup__form::before {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t"),this.modal.style.opacity=0,this.style.classList.add("popup-style"),document.head.appendChild(this.style)),document.body.appendChild(this.modal),this.animateShow()}},{key:"init",value:function(){var e=this,t=function(t){s(this,e),!this.modal||!t.target.closest(".popup__close")&&t.target.closest(".popup__dialog")||this.animateShow(),t.target.closest(this.buttonSelector)&&(this.button=t.target.closest(this.buttonSelector),this.title||(this.title=this.button.parentNode.firstChild.textContent||"Обратный звонок"),this.toggleModal())}.bind(this);this.buttonSelector||this.toggleModal(),document.addEventListener("click",t.bind(this))}}])&&l(t.prototype,e),i&&l(t,i),n}();function p(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return r=t.done,t},e:function(t){a=!0,o=t},f:function(){try{r||null==n.return||n.return()}finally{if(a)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function h(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var y=function(){function e(t){!function(t){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.form=document.getElementById(t),this.message=document.createElement("div")}var t,n,i;return t=e,(n=[{key:"clearMessage",value:function(){var e=this;this.form.querySelectorAll("input").forEach(function(t){h(this,e),t.value="",t.style.border=""}.bind(this))}},{key:"errorData",value:function(){new d(null,'\n\t\t\t<h2 class="popup__message_error">Ошибка отправки!</h2>\n\t\t').init(),console.error(this.response),this.clearMessage()}},{key:"output",value:function(t){if(cancelAnimationFrame(this.key),200!==t.status)throw this.message.textContent="",this.response=t.status,this.errorData();this.message.textContent="",new d(null,'\n\t\t\t<h2 class="popup__message_success">Готово!</h2>\n\t\t').init(),this.clearMessage()}},{key:"animate",value:function(){var e=this,n=0,i=null;this.message.innerHTML="\n\t\t\t<div></div>\n\t\t\t<div></div>\n\t\t\t<div></div>\n\t\t\t<div></div>\n\t\t",document.head.insertAdjacentHTML("beforeend","\n\t\t\t<style>\n\t\t\t\t.loader {\n\t\t\t\t\twidth: 40px;\n\t\t\t\t\theight: 40px;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-wrap: wrap;\n\t\t\t\t\tmargin: auto;\n\t\t\t\t}\n\t\t\t\t.loader > div {\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t\tbackground: #000;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\topacity: 0.1;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t}\n\t\t\t\t.loader > div:nth-child(3) {\n\t\t\t\t\torder: 1;\n\t\t\t\t}\n\t\t\t</style>\n\t\t"),this.message.classList.add("loader"),this.form.appendChild(this.message);var o=this.message.querySelectorAll("div"),r=function(t){h(this,e),t-(i=i||t)<100||(i=t,o[n].style.opacity="0.5",0===n?o[2].style.opacity="0.1":1===n?o[3].style.opacity="0.1":o[n-2].style.opacity="0.1",3===n?o[n=0].style.opacity="1":o[++n].style.opacity="1"),this.key=requestAnimationFrame(r)}.bind(this);this.key=requestAnimationFrame(r)}},{key:"postData",value:function(t){return fetch("./send.php",{method:this.form.method,headers:{"Content-Type":"multypart/form-data"},body:JSON.stringify(t)})}},{key:"submit",value:function(t){t.preventDefault(),this.form.insertAdjacentElement("afterend",this.message);var e={},n=p(new FormData(this.form).entries());try{for(n.s();!(i=n.n()).done;){var i=i.value;e[i[0]]=i[1]}}catch(t){n.e(t)}finally{n.f()}console.log(e),this.animate(),this.postData(e).then(this.output.bind(this))}},{key:"init",value:function(){this.form&&(this.form.querySelector(".invalid-message")||this.form.addEventListener("submit",this.submit.bind(this)))}}])&&m(t.prototype,n),i&&m(t,i),e}();function v(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}function b(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var g=function(){function i(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];!function(t){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this),this.button=document.querySelector(t),this.menu=document.querySelector(e),this.buttonAnimate=n}var t,e,n;return t=i,(e=[{key:"animate",value:function(t){var e,n=this,i=null,o=t?(e=-130,0):(e=0,-130),r=function(){v(this,n),t?e+=5:e-=5,this.menu.style.transform="translateX(".concat(e,"%)"),e!==o?i=requestAnimationFrame(r):cancelAnimationFrame(i)}.bind(this),i=requestAnimationFrame(r)}},{key:"handler",value:function(){this.button.classList.toggle("active"),this.button.matches(".active")?this.animate(!0):this.animate(!1)}},{key:"pulse",value:function(){var e=this,t=0,n=0,i=null,o=function(){if(v(this,e),15===t)return t=0,void n++;t+=1,this.button.style.transform="translateY(".concat(t,"px)"),requestAnimationFrame(o)}.bind(this),r=function(t){v(this,e),1e3<=t-(i=i||t)&&(i=t,requestAnimationFrame(o)),n!==this.buttonAnimate.iteration&&requestAnimationFrame(r)}.bind(this);requestAnimationFrame(r)}},{key:"init",value:function(){var e=this;this.button&&(this.buttonAnimate&&this.pulse(),this.button.addEventListener("click",this.handler.bind(this)),document.documentElement.clientWidth<1200&&this.menu.addEventListener("click",function(t){v(this,e),t.target.closest("a")&&(this.button.classList.remove("active"),this.animate(!1))}.bind(this)))}}])&&b(t.prototype,e),n&&b(t,n),i}();function w(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}var _=function(o,t){var r=this;w(this,void 0);var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var a,n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n);var s=function(){w(this,r),a.playVideo()}.bind(this),l=function(){w(this,r),a.stopVideo()}.bind(this),c=function(){w(this,r),a=new YT.Player("player",{height:"315",width:"560",videoId:"4ttLL4tLwV8",playerVars:{origin:"https://hisagy69.github.io"},events:{onReady:s}})}.bind(this);(function(){var e=this;w(this,r);var n,i=document.querySelector(t);i&&(n=function(t){w(this,e);t=t.target;if(i.matches(".d-none")&&t.closest(o))return i.classList.remove("d-none"),a?void s():void c();i.matches(".d-none")||t.closest("iframe")||(l(),i.classList.add("d-none"))}.bind(this),document.addEventListener("click",function(t){w(this,e),n(t)}.bind(this)))}).bind(this)()}.bind(void 0);function x(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}var S=function(){var n=this;x(this,void 0),document.addEventListener("click",function(t){var e;x(this,n),t.target.closest(".news__button")&&!t.target.closest(".active")&&(t.preventDefault(),document.querySelector(".news__button.active").classList.remove("active"),t.target.closest(".news__button").classList.add("active"),e=document.querySelector(".news__cards"),t.target.closest("#list-button")?e.classList.add("active"):e.classList.remove("active"))}.bind(this))}.bind(void 0);o(4);e=function(){!function(t){if(t!==void 0)throw new TypeError("Cannot instantiate an arrow function")}(this),n(".contacts__location"),n(".filials__adres"),new a({selectorValid:".hero__form"}).init(),new y("hero-form").init(),new g(".burger",".burger-menu").init(),new g(".filials__share",".filials__adres",{iteration:3}).init(),_(".descriptions__video",".descriptions__modal"),new d('button[data-toggle="modal"]').init(),S()}.bind(void 0);window.addEventListener("DOMContentLoaded",e)}]);
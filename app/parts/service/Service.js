(function () {
	"use strict";

	/**
	 * Класс для отрисовки карточек услуг
	 */
	class Service {
		constructor() {
			this.pathToServicesImages = 'img/dist/services';
			this.containerEl = document.querySelector('.service__container');
			this.sliderEl = document.querySelector('#service-slider');
			this.wrapperEl = document.querySelector('#service-slider .swiper-wrapper');

			this.settings = {
				slidesPerView: 'auto',
				speed: 1200,
				freeMode: true,
				watchSlidesProgress: true,
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				breakpoints: {
					320: {
						spaceBetween: 8,
					},
					769: {
						spaceBetween: 20,
					}
				}
			}
		}

		/**
		 * Метод устанавливает отступы элементам
		 */
		setIndentsElems() {
			let mlContainerEl = window.getComputedStyle(this.containerEl).marginLeft;
			this.sliderEl.style.marginLeft = mlContainerEl;
			this.sliderEl.style.marginRight = mlContainerEl;
		}

		/**
		 * Метод вставляет карточки услуг на страницу
		 * @param {ServiceDTO[]} services массив услуг из файла services.js
		 */
		insertServicesIntoPage(services) {
			let servicesMarkup = '';

			for (let service of services) {
				servicesMarkup += this.getServiceMarkup(service);
			}

			this.wrapperEl.insertAdjacentHTML('beforeend', servicesMarkup);

			this.setEqualHeightListElems();

			this.addWindowResizeListener();

			this.addSliderServices();

			this.setIndentsElems();
		}

		/**
		 * Метод получает разметку одной карточки услуги
		 * @param {ServiceDTO} service объект с информацией об услуге
		 * @returns {string} html-разметка карточки услуги
		 */
		getServiceMarkup(service) {
			let priceMarkup = this.getPriceServiceMarkup(service);
			let benefitsMarkup = this.getBenefitsServiceMarkup(service);

			return `
			<div class="swiper-slide">
				<div class="service__card" style="background: center / cover no-repeat url(${this.pathToServicesImages}/${service.image});">
					<h3 class="h3 service__card-title">${service.name}</h3>
					<ul class="service__card-list">
						${benefitsMarkup}
					</ul>
					${priceMarkup}
					<button type="button" class="button service__card-button button__feedback" data-value="Проконсультироваться: ${service.name}">Проконсультироваться</button>
				</div>
			</div>
			`;
		}

		/**
		 * Метод получает разметку минимальной стоимости услуги
		 * @param {ServiceDTO} service объект с информацией об услуге
		 * @returns {string} html-разметка минимальной стоимости услуги
		 */
		getPriceServiceMarkup(service) {
			if (service.price != null) {
				return `<span class="service__price service__card-price">от<b class="service__price_bold">${service.price}</b>руб.</span>`
			} else {
				return '<span class="service__price service__card-price"><b class="service__price_bold">&nbsp;</b></span>';
			}
		}

		/**
		 * Метод получает разметку преимуществ услуги
		 * @param {ServiceDTO} service объект с информацией об услуге
		 * @returns {string} html-разметка преимуществ услуги
		 */
		getBenefitsServiceMarkup(service) {
			let benefitsMarkup = '';

			for (let benefit of service.benefits) {
				benefitsMarkup += `<li class="service__list-item">${benefit}</li>`
			}

			return benefitsMarkup;
		}

		/**
		 * Метод устанавливает одинаковую высоту элементам списка
		 */
		setEqualHeightListElems() {
			let cardListElems = document.querySelectorAll('.service__card-list');
			let cardTitleElems = document.querySelectorAll('.service__card-title');
			let maxHeight = 0;

			for (let i = 0; i < cardListElems.length; i++) {
				cardListElems[i].style.height = "auto";
			}

			for (let i = 0; i < cardListElems.length; i++) {
				let elementsListAndTitleHeight = cardListElems[i].offsetHeight + cardTitleElems[i].offsetHeight;
				maxHeight = Math.max(maxHeight, elementsListAndTitleHeight);
			}

			for (let i = 0; i < cardListElems.length; i++) {
				cardListElems[i].style.height = maxHeight - cardTitleElems[i].offsetHeight + "px";
			}
		}

		/**
		 * Метод добавляет слушатель события изменения размеров окна
		 */
		addWindowResizeListener() {
			window.addEventListener('resize', () => {
				this.setEqualHeightListElems();
				this.setIndentsElems();
			});
		}

		/**
		 * Метод добавляет слайдер услугам
		 */
		addSliderServices() {
			new Swiper('#service-slider', this.settings);
		}
	}

	window.addEventListener('load', () => {
		let service = new Service();
		service.insertServicesIntoPage(services);
	});
})();
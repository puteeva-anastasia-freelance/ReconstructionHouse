(function () {
	"use strict";

	/**
	 * Класс для отрисовки карточек со скидками
	 */
	class Sale {
		constructor() {
			this.wrapperEl = document.querySelector('#sale-slider .swiper-wrapper');

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
						spaceBetween: 20,
					},
					768: {
						spaceBetween: 30,
					}
				}
			}
		}

		/**
		 * Метод вставляет карточки со скидками на страницу
		 * @param {SaleDTO[]} sales массив скидок из файла sales.js
		 */
		insertCardsSalesIntoPage(sales) {
			let cardsSalesMarkup = '';

			for (let sale of sales) {
				cardsSalesMarkup += this.getCardSaleMarkup(sale);
			}

			this.wrapperEl.insertAdjacentHTML('beforeend', cardsSalesMarkup);

			this.addSliderCardsSales();
		}

		/**
		 * Метод получает разметку одной карточки со скидкой
		 * @param {SaleDTO} sale объект с информацией о скидке
		 * @returns {string} html-разметка карточки со скидкой
		 */
		getCardSaleMarkup(sale) {
			return `<div class="swiper-slide">
					<div class="sale__item">
						<span class="sale__procent">-${sale.percent}%</span>
						<span class="sale__subtitle">${sale.name}</span>
						<p class="sale__term">${sale.term}</p>
						<button type="button" class="button button__accent sale__button button__feedback" data-value="Получить скидку: ${sale.name}">Получить скидку</button>
					</div>
				</div>`;
		}

		/**
		 * Метод добавляет слайдер карточкам со скидками
		 */
		addSliderCardsSales() {
			new Swiper('#sale-slider', this.settings);
		}
	}

	window.addEventListener('load', () => {
		let sale = new Sale();
		sale.insertCardsSalesIntoPage(sales);
	});
})();
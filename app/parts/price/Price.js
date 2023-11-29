(function () {
	"use strict";

	/**
	 * Класс для отрисовки цен
	 */
	class Price {
		constructor() {
			this.strAreaChangeEl = document.querySelector('#str-area-change');
			this.strPriceProjectEl = document.querySelector('#str-price-project');
		}

		/**
		 * Метод вставляет площади изменений и стоимость проектов на страницу
		 * @param {PriceDTO[]} prices массив цен из файла prices.js
		 */
		insertPricesIntoPage(prices) {
			let areaChangeMarkup = '';
			let pricesMarkup = '';

			for (let price of prices) {
				areaChangeMarkup += this.getAreaChangeMarkup(price);
				pricesMarkup += this.getPriceMarkup(price);
			}

			this.strAreaChangeEl.insertAdjacentHTML('beforeend', areaChangeMarkup);
			this.strPriceProjectEl.insertAdjacentHTML('beforeend', pricesMarkup);
		}

		/**
		 * Метод получает разметку площади изменений в таблице
		 * @param {PriceDTO} price объект с информацией о цене
		 * @returns {string} html-разметка площади изменений в таблице
		 */
		getAreaChangeMarkup(price) {
			return `<span class="price__table-col">${price.areaChange}</span>`;
		}

		/**
		 * Метод получает разметку цены проекта в таблице
		 * @param {PriceDTO} price объект с информацией о цене
		 * @returns {string} html-разметка цены проекта в таблице
		 */
		getPriceMarkup(price) {
			return `<span class="price__table-col">от ${price.priceMin} руб</span>`;
		}

	}

	window.addEventListener('load', () => {
		let price = new Price();
		price.insertPricesIntoPage(prices);
	});

})();
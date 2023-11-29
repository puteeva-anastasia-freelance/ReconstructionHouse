(function () {
	"use strict";

	/**
	 * Класс для отрисовки этапов работы
	 */
	class Step {
		constructor() {
			this.wrapEl = document.querySelector('.step__wrap');
			this.pathToStepsImages = 'img/dist/steps';
		}

		/**
		 * Метод вставляет этапы работы на страницу
		 * @param {StepDTO[]} steps массив этапов работы из файла steps.js
		 */
		insertStepsIntoPage(steps) {
			let stepsMarkup = '';

			this.sortStepsInAscendingOrder(steps);

			for (let i = 0; i < steps.length; i++) {
				if (i % 2 == 0) {
					stepsMarkup += this.getStepOddMarkup(steps[i]);
				} else {
					stepsMarkup += this.getStepEvenMarkup(steps[i]);
				}
			}

			this.wrapEl.insertAdjacentHTML('beforeend', stepsMarkup);
		}

		/**
		 * Массив сортирует этапы работы по возрастанию номеров этапов
		 * @param {StepDTO[]} steps массив этапов работы из файла steps.js
		 */
		sortStepsInAscendingOrder(steps) {
			steps.sort(function (a, b) {
				return a.number - b.number;
			});
		}

		/**
		 * Метод получает разметку одного нечетного этапа работы
		 * @param {StepDTO} step объект с информацией об этапе работы
		 * @returns {string} html-разметка нечетного этапа работы
		 */
		getStepOddMarkup(step) {
			return `
			<div class="step__item step__item-top">
				<div class="step__inner step__inner_top">
					<h3 class="h4 step__subtitle">${step.name}</h3>
					<p class="step__txt">${step.description}</p>
				</div>
				<div class="step__inner">
					<span class="step__number">${step.number} этап</span>
					<div class="step__img" style="background: center / cover no-repeat url(${this.pathToStepsImages}/${step.image});"></div>
				</div>
			</div>
			`;
		}

		/**
		 * Метод получает разметку одного четного этапа работы
		 * @param {StepDTO} step объект с информацией об этапе работы
		 * @returns {string} html-разметка четного этапа работы
		 */
		getStepEvenMarkup(step) {
			return `
			<div class="step__item">
				<div class="step__inner step__inner_top">
					<div class="step__img" style="background: center / cover no-repeat url(${this.pathToStepsImages}/${step.image});"></div>
					<span class="step__number step__number_top">${step.number} этап</span>
				</div>
				<div class="step__inner">
					<h4 class="h4 step__subtitle">${step.name}</h4>
					<p class="step__txt">${step.description}</p>
				</div>
			</div>
			`;
		}

	}

	window.addEventListener('load', () => {
		let step = new Step();
		step.insertStepsIntoPage(steps);
	});


})();
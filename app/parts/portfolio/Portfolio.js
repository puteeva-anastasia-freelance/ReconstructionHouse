(function () {
	"use strict";

	/**
	 * Класс для управлениями выполненных работ в портфолио
	 */
	class Portfolio {
		constructor() {
			this.wrapperEl = document.querySelector('#portfolio-slider .swiper-wrapper');
			this.pathToWorksImages = 'img/dist/works';
			this.acceptedEl = document.querySelector('.accepted');
			this.popUpOverlayEl = document.querySelector('.pop-up__overlay');

			this.settings = {
				lazy: {
					loadPrevNext: true,
				},
				spaceBetween: 40,
				speed: 800,
				centeredSlides: true,
				roundLengths: true,
				loop: true,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				breakpoints: {
					320: {
						slidesPerView: 1.5,
						spaceBetween: 80,
					},
					993: {
						slidesPerView: 1.6,
						spaceBetween: 40,
					},
					1201: {
						slidesPerView: 2.2
					},
					1367: {
						slidesPerView: 3
					},
				}
			}
		}

		/**
		 * Метод вставляет портфолио на страницу
		 * @param {WorkDTO[]} works массив выполненных работ из файла works.js
		 */
		insertPortfolioIntoPage(works) {
			let portfolioMarkup = '';

			for (let work of works) {
				portfolioMarkup += this.getCardMarkup(work);
			}

			this.wrapperEl.insertAdjacentHTML('beforeend', portfolioMarkup);

			let portfolioSwiper = this.addPortfolioSwiper();
			this.setHeightSlides();
			this.setTopDistance();
			this.addWindowResizeListener(portfolioSwiper);
			this.addSwiperTransitionStartListener(portfolioSwiper);
			this.addCardsWorksClickListener(works);
		}

		/**
		 * Метод добавляет слушатель события изменения размеров окна
		 * @param {Swiper} portfolioSwiper слайдер с примерами работ
		 */
		addWindowResizeListener(portfolioSwiper) {
			window.addEventListener('resize', () => {
				this.setHeightSlides();
				this.setTopDistance();
				portfolioSwiper.update();
			});
		}

		/**
		 * Метод добавляет слайдеру слушатель события начала анимации
		 * @param {Swiper} portfolioSwiper слайдер с примерами работ
		 */
		addSwiperTransitionStartListener(portfolioSwiper) {
			portfolioSwiper.on('transitionStart', () => {
				this.setHeightSlides();
				this.setTopDistance();
				portfolioSwiper.update();
			});
		}

		/**
		 * Метод получает разметку карточки выполненной работы
		 * @param {WorkDTO} work объект с информацией о выполненной работе
		 * @returns {string} html-разметка карточки выполненной работы
		 */
		getCardMarkup(work) {
			return `
				<div class="swiper-slide" data-id="${work.id}">
					<picture class="portfolio__img">
						<source data-srcset="${this.pathToWorksImages}/${work.id}/${work.image}" media="(min-width: 768px)" width="803" height="570">
						<source data-srcset="${this.pathToWorksImages}/${work.id}/${work.imageMiddle}" media="(min-width: 0)" width="374" height="266">
						<img class="swiper-lazy" data-src="${this.pathToWorksImages}/${work.id}/${work.imageMiddle}" alt="${work.name}" width="374" height="266">
					</picture>
				</div>`;
		}

		/**
		 * Метод добавляет слайдер с примерами работ
		 * @returns {Swiper} слайдер с примерами работ
		 */
		addPortfolioSwiper() {
			return new Swiper('#portfolio-slider', this.settings);
		}

		/**
		 * Метод устанавливает высоту слайдам
		 */
		setHeightSlides() {
			let slidesElems = document.querySelectorAll('#portfolio-slider .swiper-slide');

			slidesElems.forEach((slideEl) => {
				let widthSlideEl = slideEl.getBoundingClientRect().width;
				slideEl.style.height = `${widthSlideEl * 0.71}px`;
			});
		}

		/**
		 * Метод устанавливает расстояние от верхней границы родительского блока
		 */
		setTopDistance() {
			let slideActiveEl = document.querySelector('#portfolio-slider .swiper-slide-active');
			let slidesElems = document.querySelectorAll('#portfolio-slider .swiper-slide:not(.swiper-slide-active)');

			let heightSlideActiveEl = slideActiveEl.getBoundingClientRect().height;

			slidesElems.forEach((slideEl) => {
				let heightSlideEl = slideEl.getBoundingClientRect().height;
				let topDistance = (heightSlideActiveEl - heightSlideEl) / 2;
				slideEl.style.top = `${topDistance}px`;
			});

			slideActiveEl.style.top = '0';
		}

		/**
		 * Метод добавляет карточкам работ слушатель события клика
		 * @param {WorkDTO[]} works массив выполненных работ из файла works.js
		 */
		addCardsWorksClickListener(works) {
			let slidesElems = document.querySelectorAll('#portfolio-slider .swiper-slide');

			slidesElems.forEach((slide) => {
				slide.addEventListener('click', () => {
					let idCard = +slide.dataset.id;
					for (let work of works) {
						if (work.id == idCard) {
							let popUpWithWork = this.getPopUpWithWork(work);
							this.popUpOverlayEl.classList.add('active-pop-up');
							this.acceptedEl.insertAdjacentHTML('beforebegin', popUpWithWork);
							this.addImagesElemsClickListener();
							this.addCloseElemsClickListener();
						}
					}
				})
			})
		}

		/**
		 * Метод получает разметку всплывающего окна с работой
		 * @param {WorkDTO} work объект с информацией о выполненной работе
		 * @returns {string} html-разметка всплывающего окна с выполненной работой
		 */
		getPopUpWithWork(work) {
			return `<div class="image">
						<div class="image__body">
							<img src="${this.pathToWorksImages}/${work.id}/${work.image}" alt="${work.name}" class="image__picture">
						</div>
						<button class="image__close" type="button">
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="image__close-icon">
								<path d="M1.2915 1.29163L16.7082 16.7083" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
								<path d="M16.7082 1.29163L1.2915 16.7083" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg>
						</button>
					</div>`;
		}

		/**
		 * При клике на затемненный фон всплывающее окно с выполненной работой закрывается
		 */
		addImagesElemsClickListener() {
			let imagesElems = document.querySelectorAll('.image');
			imagesElems.forEach((imageEl) => {
				imageEl.addEventListener('click', (event) => {
					let imageBodyEl = imageEl.querySelector('.image__body');
					if (event.target == imageBodyEl) {
						this.popUpOverlayEl.classList.remove('active-pop-up');
						imageEl.style.display = 'none';
					}
				})
			});
		}

		/**
		 * Метод добавляет "Крестикам" слушатель события клика
		 */
		addCloseElemsClickListener() {
			let imagesCloseElems = document.querySelectorAll('.image__close');
			imagesCloseElems.forEach((imageCloseEl) => {
				imageCloseEl.addEventListener('click', () => {
					let imageEl = imageCloseEl.closest('.image');
					this.popUpOverlayEl.classList.remove('active-pop-up');
					imageEl.style.display = 'none';
				});
			});
		}
	}

	window.addEventListener('load', () => {
		let portfolio = new Portfolio();
		portfolio.insertPortfolioIntoPage(works);
	});
})();
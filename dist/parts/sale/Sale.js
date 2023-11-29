!function(){"use strict";class e{constructor(){this.wrapperEl=document.querySelector("#sale-slider .swiper-wrapper"),this.settings={slidesPerView:"auto",speed:1200,freeMode:!0,watchSlidesProgress:!0,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{320:{spaceBetween:20},768:{spaceBetween:30}}}}insertCardsSalesIntoPage(e){let s="";for(var a of e)s+=this.getCardSaleMarkup(a);this.wrapperEl.insertAdjacentHTML("beforeend",s),this.addSliderCardsSales()}getCardSaleMarkup(e){return`<div class="swiper-slide">
					<div class="sale__item">
						<span class="sale__procent">-${e.percent}%</span>
						<span class="sale__subtitle">${e.name}</span>
						<p class="sale__term">${e.term}</p>
						<button type="button" class="button button__accent sale__button button__feedback" data-value="Получить скидку: ${e.name}">Получить скидку</button>
					</div>
				</div>`}addSliderCardsSales(){new Swiper("#sale-slider",this.settings)}}window.addEventListener("load",()=>{(new e).insertCardsSalesIntoPage(sales)})}();
!function(){"use strict";class e{constructor(){this.wrapEl=document.querySelector(".step__wrap"),this.pathToStepsImages="img/dist/steps"}insertStepsIntoPage(t){let s="";this.sortStepsInAscendingOrder(t);for(let e=0;e<t.length;e++)e%2==0?s+=this.getStepOddMarkup(t[e]):s+=this.getStepEvenMarkup(t[e]);this.wrapEl.insertAdjacentHTML("beforeend",s)}sortStepsInAscendingOrder(e){e.sort(function(e,t){return e.number-t.number})}getStepOddMarkup(e){return`
			<div class="step__item step__item-top">
				<div class="step__inner step__inner_top">
					<h3 class="h4 step__subtitle">${e.name}</h3>
					<p class="step__txt">${e.description}</p>
				</div>
				<div class="step__inner">
					<span class="step__number">${e.number} этап</span>
					<div class="step__img" style="background: center / cover no-repeat url(${this.pathToStepsImages}/${e.image});"></div>
				</div>
			</div>
			`}getStepEvenMarkup(e){return`
			<div class="step__item">
				<div class="step__inner step__inner_top">
					<div class="step__img" style="background: center / cover no-repeat url(${this.pathToStepsImages}/${e.image});"></div>
					<span class="step__number step__number_top">${e.number} этап</span>
				</div>
				<div class="step__inner">
					<h4 class="h4 step__subtitle">${e.name}</h4>
					<p class="step__txt">${e.description}</p>
				</div>
			</div>
			`}}window.addEventListener("load",()=>{(new e).insertStepsIntoPage(steps)})}();
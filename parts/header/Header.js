!function(){"use strict";class e{constructor(){this.menuFixedEl=document.querySelector(".main-header__menu.fixed"),this.mobileBurgerEl=document.querySelector(".main-header__mobile-burger"),this.mobileMenuEl=document.querySelector(".main-header__mobile-menu"),this.popUpOverlayEl=document.querySelector(".pop-up__overlay"),this.linkElems=document.querySelectorAll(".main-header__link"),this.mainHeaderEl=document.querySelector(".main-header"),this.firstEl=document.querySelector(".first"),this.sectionsElems=document.querySelectorAll("header, section, footer")}init(){this.addMobileBurgerClickListener(),this.setMobileMenuTop(),this.setMobileMenuHeight(),this.addWindowResizeListener(),this.addLinksClickListener(),this.addWindowScrollListener()}addMobileBurgerClickListener(){this.mobileBurgerEl.addEventListener("click",()=>{this.mainHeaderEl.classList.toggle("active"),this.mobileMenuEl.classList.toggle("active"),this.popUpOverlayEl.classList.toggle("active-mobile-menu"),this.mobileBurgerEl.classList.toggle("cross"),this.addPopUpOverlayElClickListener()})}setMobileMenuTop(){var e=this.mainHeaderEl.clientHeight;this.mobileMenuEl.style.top=e+"px"}setMobileMenuHeight(){var e=window.innerHeight,i=this.mainHeaderEl.clientHeight;this.mobileMenuEl.clientHeight<e-i&&(this.mobileMenuEl.style.height=e-i+"px")}addWindowResizeListener(){window.addEventListener("resize",()=>{this.setMobileMenuHeight(),this.setMobileMenuTop()})}addLinksClickListener(){this.linkElems.forEach(e=>{e.addEventListener("click",()=>{this.popUpOverlayEl.classList.remove("active-mobile-menu"),this.mobileMenuEl.classList.remove("active"),this.mobileBurgerEl.classList.remove("cross"),this.mainHeaderEl.classList.remove("active")})})}addWindowScrollListener(){window.addEventListener("scroll",()=>{this.setPinnedMenu(),this.highlightNameOfCurrentSection()})}setPinnedMenu(){150<window.scrollY?this.menuFixedEl.classList.add("active"):window.scrollY<=150&&this.menuFixedEl.classList.remove("active")}highlightNameOfCurrentSection(){this.sectionsElems.forEach(e=>{var i=e.getBoundingClientRect(),t=i.top+window.pageYOffset-this.menuFixedEl.offsetHeight,i=t+i.height,s=window.pageYOffset,e=e.getAttribute("id"),l=document.querySelector("a.active"),e=document.querySelector(`.main-header__menu.fixed a[href="#${e}"]`);t<s&&s<i&&(l&&l.classList.remove("active"),e)&&e.classList.add("active")})}addPopUpOverlayElClickListener(){this.popUpOverlayEl.addEventListener("click",e=>{e.target==this.popUpOverlayEl&&(this.popUpOverlayEl.classList.remove("active-mobile-menu"),this.mobileMenuEl.classList.remove("active"),this.mobileBurgerEl.classList.remove("cross"),this.mainHeaderEl.classList.remove("active"))})}}window.addEventListener("load",()=>{(new e).init()})}();
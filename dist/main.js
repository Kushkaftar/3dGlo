!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){var e=document.querySelector(".menu"),t=document.querySelector("menu"),n=function(){return t.classList.toggle("active-menu")};e.addEventListener("click",n),t.addEventListener("click",(function(e){"A"===e.target.tagName&&n()}))},o=function(){var e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-content");t.forEach((function(t){t.addEventListener("click",(function(){if(e.style.display="block",document.documentElement.clientWidth>=767){n.style.position="relative";var t=Date.now(),r=setInterval((function(){var e=Date.now()-t;n.style.top=e/5+"px",e>1e3&&clearInterval(r)}),20)}}))})),e.addEventListener("click",(function(t){var n=t.target;n.classList.contains("popup-close")?e.style.display="none":(n=n.closest(".popup-content"))||(e.style.display="none")}))},c=function(){var e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(function(e){var r=e.target;(r=r.closest(".service-header-tab"))&&t.forEach((function(e,o){e===r&&function(e){for(var r=0;r<n.length;r++)e===r?(t[r].classList.add("active"),n[r].classList.remove("d-none")):(t[r].classList.remove("active"),n[r].classList.add("d-none"))}(o)}))}))},a=function(){var e,t=document.querySelectorAll(".portfolio-item");e=document.querySelector(".portfolio-dots"),t.forEach((function(n,r){var o=r===t.length-1?'<li class="dot dot-active"></li>':'<li class="dot"></li>';e.insertAdjacentHTML("afterbegin",o)}));var n,r=document.querySelectorAll(".dot"),o=document.querySelector(".portfolio-content"),c=0,a=function(e,t,n){return e[t].classList.toggle(n)},u=function(){a(t,c,"portfolio-item-active"),a(r,c,"dot-active"),++c>=t.length&&(c=0),a(t,c,"portfolio-item-active"),a(r,c,"dot-active")},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return n=setInterval(u,1e3*e)};o.addEventListener("click",(function(e){e.preventDefault();var n=e.target;if(n.matches(".dot, .portfolio-btn")){switch(a(t,c,"portfolio-item-active"),a(r,c,"dot-active"),n.getAttribute("class")){case"portfolio-btn next":c++;break;case"portfolio-btn prev":c--;break;case"dot":r.forEach((function(e,t){e===n&&(c=t)}))}c=(c=c>=t.length?c=0:c)<0?c=t.length-1:c,a(t,c,"portfolio-item-active"),a(r,c,"dot-active")}})),o.addEventListener("mouseover",(function(e){e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)})),o.addEventListener("mouseout",(function(e){e.target.matches(".dot, .portfolio-btn")&&i()})),i(1.5)},u=function(){var e=document.getElementById("command"),t=function(e){if(e.target.matches(".command__photo")){var t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t}};e.addEventListener("mouseover",(function(e){return t(e)})),e.addEventListener("mouseout",(function(e){return t(e)}))},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),o=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),a=document.getElementById("total"),u=function(){var t=0,u=1,i=1,l=n.options[n.selectedIndex].value,s=+r.value;o.value>1&&(u+=(o.value-1)/10),c.value&&c.value<5?i*=2:c.value&&c.value<10&&(i*=1.5),Math.round10=function(e,t){return function(e,t,n){if(void 0===n||0==+n)return Math[e](t);if(t=+t,n=+n,isNaN(t)||!("number"==typeof n&&n%1==0))return NaN;return t=t.toString().split("e"),+((t=(t=Math[e](+(t[0]+"e"+(t[1]?+t[1]-n:-n)))).toString().split("e"))[0]+"e"+(t[1]?+t[1]+n:n))}("round",e,t)},l&&s&&(t=e*l*Math.round10(u*s,-1)*i),a.textContent=String(t)};t.addEventListener("change",(function(e){var t=e.target;(t.matches("input")||t.matches("select"))&&u()}))},l=function(){document.querySelector(".calc-block").addEventListener("input",(function(e){e.target.matches("input")&&(e.target.value=e.target.value.replace(/\D/g,""))}));var e=document.querySelectorAll("form");e.forEach((function(e){return e.addEventListener("input",(function(e){return function(e){var t=e.target;switch(t.getAttribute("name")){case"user_name":t.value=e.target.value.replace(/[^А-ЯЁа-яё\s]/g,"");break;case"user_message":t.value=e.target.value.replace(/[^А-ЯЁа-яё.,;:?!'`"\-\s]/g,"");break;case"user_phone":e.target.value=e.target.value.replace(/[^+0-9]/gi,"")}}(e)}))}))},s=function(){var e=document.createElement("div");e.style.cssText="font-size: 2rem;\n                                        color: #fff";var t=document.querySelectorAll("form"),n=function(t){t.preventDefault();var n=t.target;n.appendChild(e);var o=new FormData(n);e.textContent="load...";var c={};o.forEach((function(e,t){return c[t]=e}));r(c).then((function(t){if(200!==t.status)throw new Error("status not 200");e.textContent="Thanks!",setTimeout((function(){return e.remove()}),5e3)})).catch((function(t){return function(t){e.textContent="что-то пошло не так...",console.error(t),setTimeout((function(){return e.remove()}),5e3)}(t)})),n.querySelectorAll("input").forEach((function(e){return e.value=""}))},r=function(e){return fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};t.forEach((function(e){return e.addEventListener("submit",(function(e){return n(e)}))}))};(function(e){var t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),o=function(){var o,a,u,i,l,s,d=(i=new Date(e).getTime(),l=(new Date).getTime(),s=(i-l)/1e3,l<i?(o=c(Math.floor(s%60)),a=c(Math.floor(s/60%60)),u=c(Math.floor(s/60/60))):(u="00",a="00",o="00"),{hours:u,minutes:a,seconds:o});t.textContent=d.hours,n.textContent=d.minutes,r.textContent=d.seconds},c=function(e){return String(e).length>1?e:"0".concat(e)};o(),setInterval(o,1e3)})("14 june 2020"),r(),o(),c(),a(),u(),i(100),l(),s()}]);
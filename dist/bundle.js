(()=>{"use strict";var e,t,n,o,a,c,r,i,u,l,s,d,m,v,f,p,h,g;(function(e){var t,n=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),a=document.querySelector("#timer-seconds");function c(e){return(e=Math.abs(e))<10?"0".concat(e):"".concat(e)}t=setInterval((function(){var e,r,i,u,l,s,d=(i=0,u=0,l=0,s=0,(e=new Date("13 marth 2021 12:00:00").getTime())>(r=(new Date).getTime())&&(i=(e-r)/1e3,u=Math.floor(i%60),l=Math.floor(i/60%60),s=Math.floor(i/60/60)),{timeRemaining:i,hours:s,minutes:l,seconds:u});n.textContent=c(d.hours),o.textContent=c(d.minutes),a.textContent=c(d.seconds),d.timeRemaining<1&&clearInterval(t)}),1e3)})(),p=document.querySelector(".menu"),h=document.querySelector("menu"),g=function(){h.classList.toggle("active-menu")},h.addEventListener("click",(function(e){"A"===e.target.tagName&&g()})),p.addEventListener("click",g),f=document.querySelector(".popup"),document.querySelectorAll(".popup-btn").forEach((function(e){return e.addEventListener("click",(function(){return f.style.display="block"}))})),f.addEventListener("click",(function(e){var t=e.target;!t.classList.contains("popup-close")&&t.closest(".popup-content")||(f.style.display="none")})),d=document.querySelector(".service-header"),m=d.querySelectorAll(".service-header-tab"),v=document.querySelectorAll(".service-tab"),d.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&m.forEach((function(e,n){e===t&&function(e){for(var t=0;t<v.length;t++)e===t?(m[t].classList.add("active"),v[t].classList.remove("d-none")):(m[t].classList.remove("active"),v[t].classList.add("d-none"))}(n)}))})),function(){for(var e=document.querySelector(".portfolio-dots"),t=document.querySelectorAll(".portfolio-item").length,n=1;n<=t;n++){var o=document.createElement("li");o.classList.add("dot"),1===n&&o.classList.add("dot-active"),e.insertAdjacentElement("beforeend",o)}}(),o=document.querySelectorAll(".portfolio-item"),document.querySelectorAll(".portfolio-btn"),a=document.querySelectorAll(".dot"),c=document.querySelector("#all-progects"),r=0,i=function(e,t,n){e[t].classList.remove(n)},u=function(e,t,n){e[t].classList.add(n)},l=function(){i(o,r,"portfolio-item-active"),i(a,r,"dot-active"),++r>=o.length&&(r=0),u(o,r,"portfolio-item-active"),u(a,r,"dot-active")},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;n=setInterval(l,e)},c.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".portfolio-btn, .dot")&&(i(o,r,"portfolio-item-active"),i(a,r,"dot-active"),t.matches("#arrow-right")?r++:t.matches("#arrow-left")?r--:t.matches(".dot")&&a.forEach((function(e,n){e===t&&(r=n)})),r>=o.length&&(r=0),r<0&&(r=o.length-1),u(o,r,"portfolio-item-active"),u(a,r,"dot-active"))})),c.addEventListener("mouseover",(function(e){e.target.matches(".portfolio-btn, .dot")&&clearInterval(n)})),c.addEventListener("mouseout",(function(e){e.target.matches(".portfolio-btn, .dot")&&s()})),s(3e3),document.querySelector("body").addEventListener("click",(function(e){var t=e.target.closest("a");if(t){var n=t.getAttribute("href");"#close"!==n&&n.length>=2&&"#"===n[0]&&(e.preventDefault(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"smooth",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"start";document.querySelector(e).scrollIntoView({behavior:t,block:n})}(n))}})),document.getElementById("command").addEventListener("mouseover",(function(e){var t=e.target;if(t.matches(".command__photo")&&t.dataset.img){var n=[t.dataset.img,t.getAttribute("src")];t.src=n[0],t.dataset.img=n[1]}})),document.getElementById("command").addEventListener("mouseout",(function(e){var t=e.target;if(t.matches(".command__photo")&&t.dataset.img){var n=[t.getAttribute("src"),t.dataset.img];t.dataset.img=n[0],t.src=n[1]}})),(t=document.querySelector("body")).addEventListener("input",(function(e){var t=e.target;if(t.matches("input.calc-item")&&(t.value=t.value.replace(/\D/g,"")),t.matches('input[name="user_name"]')&&(t.value=t.value.replace(/[^а-яё\s]+/gi,"")),t.matches('input[name="user_message"]')&&(t.value=t.value.replace(/[^а-яё\d\s\.,\?!;:\-\(\)"]+/gi,"")),t.matches('input[name="user_email"]')&&(t.value=t.value.replace(/[^a-z@\-_\.!~\*']+/gi,"")),t.matches('input[name="user_phone"]')){t.value=t.value.replace(/[^\+\d]/g,"");var n=t.value,o=/\d{1,11}/;"+"===n[0]&&(o=/\+?\d{0,11}/);var a=n.match(o);a&&(t.value=a[0])}})),t.addEventListener("focusout",(function(e){var t=e.target;if(t.matches("input")&&(t.value=t.value.replace(/^[\s\-]*|[\s\-]*$/gi,"").replace(/(\-){2,}/gi,"$1").replace(/(\s){2,}/gi,"$1")),t.matches('input[name="user_name"]')&&t.value){var n=t.value.split(/[\s]+/);n.forEach((function(e,t){n[t]=e[0].toUpperCase()+e.slice(1).toLowerCase()})),t.value=n.join(" ")}})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),a=document.querySelector(".calc-day"),c=document.querySelector(".calc-count"),r=document.getElementById("total"),i=function(){var t,i=1,u=1,l=+n.options[n.selectedIndex].value,s=+o.value;c.value>1&&(i+=(+c.value-1)/10),a.value&&a.value<5?u=2:a.value&&a.value<10&&(u=1.5),t=e*l*s*i*u,r.textContent=t};t.addEventListener("input",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&i()}))}(100),e=document.createElement("div"),document.body.addEventListener("submit",(function(t){t.preventDefault();var n=t.target.id,o=document.getElementById(n);e.style.cssText="form3"===n?"font-size: 1.5rem; color: white;":"font-size: 2rem;",o.appendChild(e),e.textContent="Загрузка...";var a=new FormData(o),c={};a.forEach((function(e,t){c[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(c).then((function(t){if(200!==t.status)throw new Error("Status network not 200!");e.textContent="Спасибо! Мы скоро с вами свяжемся!",o.querySelectorAll("input").forEach((function(e){e.value=""})),setTimeout((function(){e.remove()}),3e3)})).catch((function(t){e.textContent="Что-то пошло не так...",console.error(t)}))}))})();
import u from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();new u(".swiper-container",{loop:!0,loopAdditionalSlides:3,autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},speed:1200,slidesPerView:1,spaceBetween:20,centeredSlides:!1,observer:!0,observeParents:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:10,centeredSlides:!0},480:{slidesPerView:1,spaceBetween:15,centeredSlides:!0},768:{slidesPerView:2,spaceBetween:20,centeredSlides:!1},1024:{slidesPerView:3,spaceBetween:30,centeredSlides:!1}}});const i={en:{home:"Home",about:"About"},ua:{home:"Головна",about:"Про нас"}};function a(e){document.documentElement.lang=e,document.querySelectorAll("[data-lang]").forEach(o=>{const r=o.getAttribute("data-lang");i[e]&&i[e][r]&&(o.tagName==="A"&&o.getAttribute("href").startsWith("#")?o.innerHTML=i[e][r]:o.textContent=i[e][r])}),setTimeout(d,50),localStorage.setItem("selectedLanguage",e)}function d(){document.querySelectorAll('.nav-menu a[href^="#"]').forEach(e=>{e.removeEventListener("click",l),e.addEventListener("click",l)})}function l(e){e.preventDefault();const o=this.getAttribute("href").substring(1),r=document.getElementById(o);if(r){const s=document.querySelector("header").offsetHeight,n=r.getBoundingClientRect().top+window.scrollY-s-10;window.scrollTo({top:n,behavior:"smooth"})}}document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("selectedLanguage")||"en";document.getElementById("languages").value=e,a(e),setTimeout(d,100)});document.getElementById("languages").addEventListener("change",function(){a(this.value)});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("burger-menu"),o=document.getElementById("nav-menu"),r=document.querySelectorAll(".nav-menu a"),s=document.body;function t(){e.classList.toggle("active"),o.classList.toggle("active"),s.classList.toggle("no-scroll")}e.addEventListener("click",t),r.forEach(n=>{n.addEventListener("click",()=>{o.classList.remove("active"),e.classList.remove("active"),s.classList.remove("no-scroll")})})});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("scrollToTop");window.addEventListener("scroll",()=>{window.scrollY>300?e.style.display="flex":e.style.display="none"}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});
//# sourceMappingURL=index.js.map

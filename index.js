import g from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const s=new g(".swiper-container",{loop:!0,loopAdditionalSlides:3,autoplay:{delay:4e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},speed:1200,slidesPerView:1,spaceBetween:20,observer:!0,observeParents:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:10,centeredSlides:!0},480:{slidesPerView:1,spaceBetween:15,centeredSlides:!0},768:{slidesPerView:2,spaceBetween:20,centeredSlides:!1},1024:{slidesPerView:3,spaceBetween:30,centeredSlides:!1}}});s.el.addEventListener("touchstart",()=>{s.autoplay.stop()});s.el.addEventListener("touchend",()=>{s.autoplay.start()});const a={en:{home:"Home",about:"About"},ua:{home:"Головна",about:"Про нас"}};function d(e){document.documentElement.lang=e,document.querySelectorAll("[data-lang]").forEach(o=>{const r=o.getAttribute("data-lang");a[e]&&a[e][r]&&(o.tagName==="A"&&o.getAttribute("href").startsWith("#")?o.innerHTML=a[e][r]:o.textContent=a[e][r])}),setTimeout(u,50),localStorage.setItem("selectedLanguage",e)}function u(){document.querySelectorAll('.nav-menu a[href^="#"]').forEach(e=>{e.removeEventListener("click",c),e.addEventListener("click",c)})}function c(e){e.preventDefault();const o=this.getAttribute("href").substring(1),r=document.getElementById(o);if(r){const i=document.querySelector("header").offsetHeight,n=r.getBoundingClientRect().top+window.scrollY-i-10;window.scrollTo({top:n,behavior:"smooth"})}}document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("selectedLanguage")||"en";document.getElementById("languages").value=e,d(e),setTimeout(u,100)});document.getElementById("languages").addEventListener("change",function(){d(this.value)});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("burger-menu"),o=document.getElementById("nav-menu"),r=document.querySelectorAll(".nav-menu a"),i=document.body;function t(){e.classList.toggle("active"),o.classList.toggle("active"),i.classList.toggle("no-scroll")}e.addEventListener("click",t),r.forEach(n=>{n.addEventListener("click",()=>{o.classList.remove("active"),e.classList.remove("active"),i.classList.remove("no-scroll")})})});ScrollReveal().reveal(".about-me-text",{delay:200,distance:"30px",duration:800,origin:"bottom"});ScrollReveal().reveal(".about-tech-content",{delay:300,distance:"40px",duration:900,origin:"left",interval:200});ScrollReveal().reveal(".list2",{delay:400,distance:"40px",duration:1e3,origin:"right"});ScrollReveal().reveal(".education-title",{delay:200,distance:"30px",duration:800,origin:"top"});ScrollReveal().reveal(".education-item",{delay:300,distance:"40px",duration:900,origin:"bottom",interval:200});ScrollReveal().reveal(".cert-btn-content",{delay:300,distance:"40px",duration:900,origin:"bottom"});
//# sourceMappingURL=index.js.map

!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");t.style.height="45px",t.style.width="100px",e.style.height="45px",e.style.width="100px",t.addEventListener("click",(function(){o=setInterval((function(){return t="#".concat(Math.floor(16777215*Math.random()).toString(16)),void(r.style.backgroundColor=t);var t}),1e3),e.removeAttribute("disabled"),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}));var o=void 0}();
//# sourceMappingURL=01-color-switcher.3e75592d.js.map

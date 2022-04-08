/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");

var rateBtns = document.querySelectorAll(".card__rate-btn");
var submitBtn = document.getElementById("submit");
var isRate = false;
function rateBtnsClickHandler(event) {
    var target = event.target;
    if (target instanceof HTMLButtonElement) {
        isRate = true;
        // active
        target.classList.add("active");
        rateBtns.forEach(function (btn) {
            if (btn !== target)
                btn.classList.remove("active");
        });
        // set value to the badge in thanks page
        var value = target.dataset.value;
        var badge = document.querySelector(".card__badge");
        badge.innerHTML = "You selected ".concat(value, " out of 5");
    }
}
function submitHandler() {
    if (isRate) {
        var cards = document.querySelectorAll(".card");
        cards[0].classList.add("hide");
        cards[1].classList.remove("hide");
    }
}
rateBtns.forEach(function (btn) {
    btn.addEventListener("click", rateBtnsClickHandler);
});
submitBtn.addEventListener("click", submitHandler);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQjtBQUVyQixJQUFNLFFBQVEsR0FDWixRQUFRLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMvQyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXBELElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztBQUVuQixTQUFTLG9CQUFvQixDQUFDLEtBQVk7SUFDeEMsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM1QixJQUFJLE1BQU0sWUFBWSxpQkFBaUIsRUFBRTtRQUN2QyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsU0FBUztRQUNULE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO1lBQ25CLElBQUksR0FBRyxLQUFLLE1BQU07Z0JBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFDSCx3Q0FBd0M7UUFDeEMsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDbkMsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCxLQUFLLENBQUMsU0FBUyxHQUFHLHVCQUFnQixLQUFLLGNBQVcsQ0FBQztLQUNwRDtBQUNILENBQUM7QUFFRCxTQUFTLGFBQWE7SUFDcEIsSUFBSSxNQUFNLEVBQUU7UUFDVixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbkM7QUFDSCxDQUFDO0FBRUQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7SUFDbkIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDO0FBQ0gsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVyYWN0aXZlLXJhdGluZy1jb21wb25lbnQtbWFpbi8uL3NyYy9tYWluLnNjc3M/MzM2MiIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1yYXRpbmctY29tcG9uZW50LW1haW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtcmF0aW5nLWNvbXBvbmVudC1tYWluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtcmF0aW5nLWNvbXBvbmVudC1tYWluLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL21haW4uc2Nzc1wiO1xyXG5cclxuY29uc3QgcmF0ZUJ0bnM6IE5vZGVMaXN0T2Y8SFRNTEJ1dHRvbkVsZW1lbnQ+ID1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRfX3JhdGUtYnRuXCIpO1xyXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcclxuXHJcbmxldCBpc1JhdGUgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIHJhdGVCdG5zQ2xpY2tIYW5kbGVyKGV2ZW50OiBFdmVudCkge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQpIHtcclxuICAgIGlzUmF0ZSA9IHRydWU7XHJcbiAgICAvLyBhY3RpdmVcclxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgcmF0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGlmIChidG4gIT09IHRhcmdldCkgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuICAgIC8vIHNldCB2YWx1ZSB0byB0aGUgYmFkZ2UgaW4gdGhhbmtzIHBhZ2VcclxuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LmRhdGFzZXQudmFsdWU7XHJcbiAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fYmFkZ2VcIik7XHJcbiAgICBiYWRnZS5pbm5lckhUTUwgPSBgWW91IHNlbGVjdGVkICR7dmFsdWV9IG91dCBvZiA1YDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoKSB7XHJcbiAgaWYgKGlzUmF0ZSkge1xyXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIik7XHJcbiAgICBjYXJkc1swXS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIGNhcmRzWzFdLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gIH1cclxufVxyXG5cclxucmF0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByYXRlQnRuc0NsaWNrSGFuZGxlcik7XHJcbn0pO1xyXG5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdEhhbmRsZXIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
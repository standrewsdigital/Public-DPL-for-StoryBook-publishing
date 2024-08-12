/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/form-elements.js":
/*!**********************************!*\
  !*** ./scripts/form-elements.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.querySelectorAll(\".conditional-input\").forEach(function (element) {\n  var conditionalInput;\n\n  // Select the hidden input element of the relative input field\n  // also shows the hidden input if the conditional input was selected and persisted after refresh or when remembering form data\n  if (element.tagName === 'SELECT') {\n    conditionalInput = element.parentElement.querySelector('.conditional-content');\n    if (element.value === 'conditional') {\n      conditionalInput.setAttribute('aria-hidden', false);\n      conditionalInput.querySelector('input').disabled = false;\n    }\n  } else if (element.tagName === 'INPUT' && element.type === 'radio') {\n    conditionalInput = element.closest(\"fieldset\").nextElementSibling;\n    if (element.value === 'conditional' && element.checked) {\n      conditionalInput.setAttribute('aria-hidden', false);\n      conditionalInput.querySelector('input').disabled = false;\n    }\n  }\n\n  // Hide/show conditional input when selected\n  element.addEventListener('change', function (e) {\n    if (this.value === 'conditional') {\n      conditionalInput.setAttribute('aria-hidden', false);\n      conditionalInput.querySelector('input').disabled = false;\n    } else {\n      conditionalInput.setAttribute('aria-hidden', true);\n      conditionalInput.querySelector('input').disabled = true;\n    }\n  });\n});\n\n//# sourceURL=webpack://@stadigicomms/dpl/./scripts/form-elements.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/form-elements.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
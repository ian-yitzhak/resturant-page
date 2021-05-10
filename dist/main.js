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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_meals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/meals */ \"./src/pages/meals.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact */ \"./src/pages/contact.js\");\n/* harmony import */ var _pages_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/loader */ \"./src/pages/loader.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst finalCreation = ( () => {\r\n    (0,_pages_loader__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n    \r\n    document.getElementById('menu').addEventListener('click', _pages_meals__WEBPACK_IMPORTED_MODULE_0__.default);\r\n    document.getElementById('home').addEventListener('click', _pages_home__WEBPACK_IMPORTED_MODULE_1__.default);\r\n    document.getElementById('contact').addEventListener('click', _pages_contact__WEBPACK_IMPORTED_MODULE_2__.default);\r\n} )();\n\n//# sourceURL=webpack://resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContact() {\r\n\r\n\tdocument.getElementById('div-stuff').innerHTML = `\r\n        <h1>This is the contact page</h1>\r\n    `\r\n   \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://resturant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\r\n\r\n\r\n\tdocument.getElementById('div-stuff').innerHTML = `\r\n        <section class=\"home-section\">\r\n        <br>\r\n        <br>\r\n        <br>\r\n            <img class=\"hero-img\" src=\"./images/meal.jpg\" alt=\"\">\r\n            \r\n            <h1 class=\"hero-heading\">Eat with the Best</h1>\r\n            <h3 class=\"hero-heading-description\"> Welcome to The aethetic food stop. Eat the <span>Tastiest Delicacies</span> with a view to behold</h3>\r\n        </section>      \r\n    `\r\n   \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://resturant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/loader.js":
/*!*****************************!*\
  !*** ./src/pages/loader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/pages/nav.js\");\n\r\n\r\nconst pageLoad = () =>{\r\n\r\n\tconst contentLoad = document.getElementById('content');\r\n\tconst homeTab  = document.createElement('div');\r\n\thomeTab.setAttribute('id', 'div-stuff');\r\n\r\n\thomeTab.innerHTML =`\r\n\r\n\t<section>\r\n\t <div class=\"container\">\r\n            <h2>Food we have</h2>\r\n            <ul>\r\n                <li>Pizza</li>\r\n                <li>Burger</li>\r\n                <li>Cake</li>\r\n                <li>Fries</li>\r\n                <li>Hotdog</li>\r\n            </ul>\r\n        </div>\r\n\r\n\t</section>\r\n\r\n\t`\r\n\r\n\tcontentLoad.append(\r\n        (0,_nav__WEBPACK_IMPORTED_MODULE_0__.default)(),\r\n        homeTab\r\n    );\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://resturant-page/./src/pages/loader.js?");

/***/ }),

/***/ "./src/pages/meals.js":
/*!****************************!*\
  !*** ./src/pages/meals.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMeal() {\r\n\r\n\tdocument.getElementById('div-stuff').innerHTML = `\r\n         <ul>\r\n            <li>Pizza</li>\r\n            <li>Burger</li>\r\n            <li>Cake</li>\r\n            <li>Fries</li>\r\n            <li>Hotdog</li>\r\n        </ul>\r\n    `\r\n   \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMeal);\n\n//# sourceURL=webpack://resturant-page/./src/pages/meals.js?");

/***/ }),

/***/ "./src/pages/nav.js":
/*!**************************!*\
  !*** ./src/pages/nav.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderNav = () =>{\r\n\r\nconst nav = document.createElement(\"div\")\r\n\r\n\r\nnav.innerHTML = `<div class=\"topnav\">\r\n\r\n\r\n\r\n\r\n<button id=\"home\" >Home</button>\r\n<button id=\"contact\" >Contact</button>\r\n<button id=\"menu\" >Meal</button>\r\n\r\n\r\n  \r\n</div>`\r\n\r\n\r\nreturn nav\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNav);\n\n//# sourceURL=webpack://resturant-page/./src/pages/nav.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContact() {\r\n\r\n\tdocument.getElementById('div-stuff').innerHTML = `\r\n        <div class=\"contact-section\">\r\n\r\n        <h1> 078909747774 </h1>\r\n        \r\n         </div>\r\n\r\n         <div class=\"contact\">\r\n\r\n         <form action=\"\">\r\n\t\t  First name:<br>\r\n\t\t  <input type=\"text\" name=\"firstname\" >\r\n\t\t  <br>\r\n\t\t  Last name:<br>\r\n\t\t  <input type=\"text\" name=\"lastname\">\r\n\t\t  <br><br>\r\n\t\t  <input type=\"submit\" value=\"Submit\">\r\n\t\t</form> \r\n\t\t</div>\r\n    `\r\n   \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://resturant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\r\n\r\n\r\n\tdocument.getElementById('div-stuff').innerHTML = `\r\n        <section class=\"home-section\">\r\n        <br>\r\n        <br>\r\n        <br>\r\n           <div class=\"home-view\">\r\n            \r\n            <h1 class=\"heading\">THE BEST MEAL PROVIDERS</h1>\r\n            <h3 class=\"description\"> \r\n            welcome, we are here to serve you with the best food, the most delicous food of your choice</h3>\r\n\r\n              <br>\r\n             <br>\r\n\r\n\r\n             <button id=\"menu\" class=\"btn btn-secondary\"> Contact Us</button>\r\n\r\n             <br>\r\n             <br>\r\n\r\n             <button id=\"menu\" class=\"btn btn-secondary\">  Book A Meal</button>\r\n\r\n            </div>\r\n\r\n\r\n        </section>      \r\n    `\r\n   \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://resturant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/loader.js":
/*!*****************************!*\
  !*** ./src/pages/loader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/pages/nav.js\");\n\r\n\r\nconst pageLoad = () =>{\r\n\r\n\tconst contentLoad = document.getElementById('content');\r\n\tconst homeTab  = document.createElement('div');\r\n\thomeTab.setAttribute('id', 'div-stuff');\r\n\r\n\thomeTab.innerHTML =`\r\n\r\n\t<section>\r\n\t <div class=\"container\">\r\n            <center>WELCOME TO OUR RESTURANT , WE ARE HERE FOR YOU </center>\r\n\r\n\r\n\r\n            <div class=\"image-section\">\r\n\r\n            <img class=\"hero-img\" src=\"./images/meal.jpg\" alt=\"\">\r\n            <img class=\"hero-img\" src=\"./images/meal.jpg\" alt=\"\">\r\n            <img class=\"hero-img\" src=\"./images/meal.jpg\" alt=\"\">\r\n\r\n\r\n             </div>\r\n        </div>\r\n\r\n\t</section>\r\n\r\n\t`\r\n\r\n\tcontentLoad.append(\r\n        (0,_nav__WEBPACK_IMPORTED_MODULE_0__.default)(),\r\n        homeTab\r\n    );\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://resturant-page/./src/pages/loader.js?");

/***/ }),

/***/ "./src/pages/meals.js":
/*!****************************!*\
  !*** ./src/pages/meals.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMeal() {\r\n\r\n\tdocument.getElementById('div-stuff').innerHTML = `\r\n        <table id=\"myTable\">\r\n  <tr>\r\n    <th>BREAKFAST</th>\r\n    <th>LUNCH</th>\r\n    <th>SUPPER</th>\r\n  </tr>\r\n  <tr>\r\n    <td>tea</td>\r\n    <td>Kales</td>\r\n    <td>meat</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Coffee</td>\r\n    <td>Chicken</td>\r\n    <td>meals</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Eggs</td>\r\n    <td>Kfc</td>\r\n    <td>fish</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Chicken</td>\r\n    <td>Pizza</td>\r\n    <td>mole</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Cake</td>\r\n    <td>Chicken</td>\r\n    <td>Harm</td>\r\n  </tr>\r\n \r\n</table>\r\n    `\r\n   \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMeal);\n\n//# sourceURL=webpack://resturant-page/./src/pages/meals.js?");

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
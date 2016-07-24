/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var scrollerEl = document.querySelector('.js-scroller');
	var scrollerContentEl = document.querySelector('.js-scroller-content');

	var scrollerContentFrag = document.createDocumentFragment();
	var scrollerItemsEl = document.createElement('div');
	var scrollerItemsClonedEl = document.createElement('div');

	scrollerItemsEl.className = 'u-fl';
	scrollerItemsEl.innerHTML = scrollerContentEl.innerHTML;
	scrollerContentFrag.appendChild(scrollerItemsEl);

	scrollerItemsClonedEl.className = 'u-fl';
	scrollerItemsClonedEl.innerHTML = scrollerContentEl.innerHTML;
	scrollerContentFrag.appendChild(scrollerItemsClonedEl);

	scrollerContentEl.innerHTML = '';
	scrollerContentEl.appendChild(scrollerContentFrag);

	function marquee() {
	  if (scrollerItemsClonedEl.offsetWidth - scrollerEl.scrollLeft <= 0) {
	    scrollerEl.scrollLeft = scrollerEl.scrollLeft - scrollerItemsEl.offsetWidth;
	  } else {
	    scrollerEl.scrollLeft = scrollerEl.scrollLeft + 1;
	  }
	  requestAnimationFrame(marquee);
	}

	requestAnimationFrame(marquee);

/***/ }
/******/ ]);
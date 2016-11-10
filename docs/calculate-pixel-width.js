var calculatePixelWidth =
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
/***/ function(module, exports) {

	var measureText = function(textToMeasure) {
	    var widthCalculator = document.getElementById("size-calculator-width-span");
	    if (!widthCalculator) {
	        widthCalculator = document.createElement("span");
	        widthCalculator.id = "size-calculator-width-span";
	        widthCalculator.style.cssText = "position: absolute; white-space: pre; opacity: 0;";
	        document.body.appendChild(widthCalculator);
	    }
	    widthCalculator.innerText = textToMeasure;
	    var boundingRect = widthCalculator.getBoundingClientRect();
	    if (boundingRect.width) {
	        return boundingRect.width;
	    }
	    else {
	        return boundingRect.right - boundingRect.left;
	    }
	}

	module.exports = function(textToMeasure) {
	    if (!document.body) {
	        console.error("Document body not found! Make sure to load calculate-pixel-width.js at the end of the <body> tag.");
	    }
	    else {
	        return measureText(textToMeasure);
	    }
	};



/***/ }
/******/ ]);
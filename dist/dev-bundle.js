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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_modifyDot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modifyDot */ \"./src/modules/modifyDot.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/smoothScrolling */ \"./src/modules/smoothScrolling.js\");\n/* harmony import */ var _modules_changeImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/changeImage */ \"./src/modules/changeImage.js\");\n/* harmony import */ var _modules_validateInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/validateInput */ \"./src/modules/validateInput.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n //Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('13 marth 2021 12:00:00'); // Menu\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); //PopUp\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__.default)(); //Tabs\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)(); //Modify Dots\n\n(0,_modules_modifyDot__WEBPACK_IMPORTED_MODULE_4__.default)(); //Slider\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__.default)(); // Smooth scrolling\n\n(0,_modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_6__.default)(); // Change image\n\n(0,_modules_changeImage__WEBPACK_IMPORTED_MODULE_7__.default)(); //Validate input\n\n(0,_modules_validateInput__WEBPACK_IMPORTED_MODULE_8__.default)(); //Calculator\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_9__.default)(100); //Send ajax form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_10__.default)();\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = +calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (+calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue = 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue = 1.5;\n    }\n\n    total = price * typeValue * squareValue * countValue * dayValue;\n    totalValue.textContent = total;\n  };\n\n  calcBlock.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dglo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/changeImage.js":
/*!************************************!*\
  !*** ./src/modules/changeImage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar changeImage = function changeImage() {\n  document.getElementById('command').addEventListener('mouseover', function (event) {\n    var target = event.target;\n\n    if (target.matches('.command__photo') && target.dataset.img) {\n      var _ref = [target.dataset.img, target.getAttribute('src')];\n      target.src = _ref[0];\n      target.dataset.img = _ref[1];\n    }\n  });\n  document.getElementById('command').addEventListener('mouseout', function (event) {\n    var target = event.target;\n\n    if (target.matches('.command__photo') && target.dataset.img) {\n      var _ref2 = [target.getAttribute('src'), target.dataset.img];\n      target.dataset.img = _ref2[0];\n      target.src = _ref2[1];\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeImage);\n\n//# sourceURL=webpack://3dglo/./src/modules/changeImage.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  function strWithFirstZero(number) {\n    number = Math.abs(number);\n    return number < 10 ? \"0\".concat(number) : \"\".concat(number);\n  }\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime();\n    var timeRemaining = 0,\n        seconds = 0,\n        minutes = 0,\n        hours = 0;\n\n    if (dateStop > dateNow) {\n      timeRemaining = (dateStop - dateNow) / 1000;\n      seconds = Math.floor(timeRemaining % 60);\n      minutes = Math.floor(timeRemaining / 60 % 60);\n      hours = Math.floor(timeRemaining / 60 / 60);\n    }\n\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  var idTimer;\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n    timerHours.textContent = strWithFirstZero(timer.hours);\n    timerMinutes.textContent = strWithFirstZero(timer.minutes);\n    timerSeconds.textContent = strWithFirstZero(timer.seconds);\n\n    if (timer.timeRemaining < 1) {\n      clearInterval(idTimer);\n    }\n  }\n\n  idTimer = setInterval(updateClock, 1000);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3dglo/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/modifyDot.js":
/*!**********************************!*\
  !*** ./src/modules/modifyDot.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar modifyDot = function modifyDot() {\n  var dotsWrapper = document.querySelector('.portfolio-dots'),\n      countSlides = document.querySelectorAll('.portfolio-item').length;\n\n  for (var i = 1; i <= countSlides; i++) {\n    var newEl = document.createElement('li');\n    newEl.classList.add('dot');\n\n    if (i === 1) {\n      newEl.classList.add('dot-active');\n    }\n\n    dotsWrapper.insertAdjacentElement('beforeend', newEl);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modifyDot);\n\n//# sourceURL=webpack://3dglo/./src/modules/modifyDot.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  var cssType1 = 'font-size: 2rem;',\n      cssType2 = 'font-size: 1.5rem; color: white;';\n  var statusMessage = document.createElement('div');\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  document.body.addEventListener('submit', function (event) {\n    event.preventDefault(); // Так как submit срабатывает только для форм, то нет смысла проверять target\n    // он всегда будет <form>\n\n    var targetId = event.target.id;\n    var form = document.getElementById(targetId);\n    var errorMessage = document.createElement('div');\n    errorMessage.classList.add('error');\n    var inputs = form.querySelectorAll('input');\n    var isError = false;\n    inputs.forEach(function (item) {\n      if (item.name === 'user_name') {\n        if (item.value.trim().length < 2) {\n          errorMessage.innerText = 'Имя должно содержать минимум ДВА символа!';\n          item.insertAdjacentElement('afterend', errorMessage);\n          isError = true;\n        } else {\n          console.log(errorMessage);\n          errorMessage.remove();\n        }\n      }\n    });\n\n    if (isError) {\n      return;\n    }\n\n    statusMessage.style.cssText = targetId === 'form3' ? cssType2 : cssType1;\n    form.appendChild(statusMessage);\n    statusMessage.textContent = loadMessage;\n    var formData = new FormData(form);\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('Status network not 200!');\n      }\n\n      statusMessage.textContent = successMessage;\n      form.querySelectorAll('input').forEach(function (item) {\n        item.value = '';\n      });\n      setTimeout(function () {\n        statusMessage.remove();\n      }, 3000);\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      btn = document.querySelectorAll('.portfolio-btn'),\n      dot = document.querySelectorAll('.dot'),\n      slider = document.querySelector('#all-progects');\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn, .dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn, .dot')) {\n      startSlide();\n    }\n  });\n  startSlide(3000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dglo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/smoothScrolling.js":
/*!****************************************!*\
  !*** ./src/modules/smoothScrolling.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar smoothScrolling = function smoothScrolling() {\n  var scrollTo = function scrollTo() {\n    var blockId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n    var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'smooth';\n    var block = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'start';\n    document.querySelector(blockId).scrollIntoView({\n      behavior: behavior,\n      block: block\n    });\n  };\n\n  document.querySelector('body').addEventListener('click', function (event) {\n    var target = event.target.closest('a');\n\n    if (target) {\n      var href = target.getAttribute('href');\n\n      if (href !== '#close' && href.length >= 2 && href[0] === '#') {\n        event.preventDefault();\n        scrollTo(href);\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrolling);\n\n//# sourceURL=webpack://3dglo/./src/modules/smoothScrolling.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, index) {\n        if (item === target) {\n          toggleTabContent(index);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var btnMenu = document.querySelector('.menu'),\n      menu = document.querySelector('menu');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  menu.addEventListener('click', function (event) {\n    var tagName = event.target.tagName;\n\n    if (tagName === 'A') {\n      handlerMenu();\n    }\n  });\n  btnMenu.addEventListener('click', handlerMenu);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3dglo/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.popup'),\n      popupBtns = document.querySelectorAll('.popup-btn');\n  popupBtns.forEach(function (item) {\n    return item.addEventListener('click', function () {\n      return popup.style.display = 'block';\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close') || !target.closest('.popup-content')) {\n      popup.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://3dglo/./src/modules/togglePopup.js?");

/***/ }),

/***/ "./src/modules/validateInput.js":
/*!**************************************!*\
  !*** ./src/modules/validateInput.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validateInput = function validateInput() {\n  var bodyItems = document.querySelector('body');\n  bodyItems.addEventListener('input', function (event) {\n    var target = event.target; //Calc\n\n    if (target.matches('input.calc-item')) {\n      target.value = target.value.replace(/\\D/g, '');\n    } //User name\n\n\n    if (target.matches('input[name=\"user_name\"]')) {\n      target.value = target.value.replace(/[^а-яё\\s]+/gi, '');\n    } //User message\n\n\n    if (target.matches('input[name=\"user_message\"]')) {\n      target.value = target.value.replace(/[^а-яё\\d\\s\\.,\\?!;:\\-\\(\\)\"]+/gi, '');\n    } //User email\n\n\n    if (target.matches('input[name=\"user_email\"]')) {\n      target.value = target.value.replace(/[^a-z@\\-_\\.!~\\*']+/gi, '');\n    } //User phone\n\n\n    if (target.matches('input[name=\"user_phone\"]')) {\n      target.value = target.value.replace(/[^\\+\\d]/g, '');\n      var value = target.value;\n      var pattern = /\\d{1,11}/;\n\n      if (value[0] === '+') {\n        pattern = /\\+?\\d{0,11}/;\n      }\n\n      var res = value.match(pattern);\n\n      if (res) {\n        target.value = res[0];\n      }\n    }\n  });\n  bodyItems.addEventListener('focusout', function (event) {\n    var target = event.target;\n\n    var doubleSymbol = function doubleSymbol(text) {\n      return text.replace(/(\\-){2,}/gi, '$1').replace(/(\\s){2,}/gi, '$1');\n    };\n\n    var trimSymbol = function trimSymbol(text) {\n      return text.replace(/^[\\s\\-]*|[\\s\\-]*$/gi, '');\n    }; //All input\n\n\n    if (target.matches('input')) {\n      target.value = doubleSymbol(trimSymbol(target.value));\n    } //User name \n\n\n    if (target.matches('input[name=\"user_name\"]')) {\n      if (target.value) {\n        var fullName = target.value.split(/[\\s]+/);\n        fullName.forEach(function (item, index) {\n          fullName[index] = item[0].toUpperCase() + item.slice(1).toLowerCase();\n        });\n        target.value = fullName.join(' ');\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateInput);\n\n//# sourceURL=webpack://3dglo/./src/modules/validateInput.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
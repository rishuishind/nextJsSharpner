module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/data/Dummy_Meetups.js":
/*!******************************************!*\
  !*** ./components/data/Dummy_Meetups.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Dummy_Meetups = [{\n  id: 'm1',\n  image: 'https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/__1670245913.webp',\n  title: 'Ayodhya night meetup',\n  address: 'Ayodhya ram mandir'\n}, {\n  id: 'm2',\n  image: 'https://images.hindustantimes.com/img/2021/09/01/550x309/a94aab4e-0b05-11ec-b1ee-0b1c9108b6b1_1630488417648.jpg',\n  title: 'Bandarkot meetup',\n  address: 'Bandarkot Matli'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dummy_Meetups);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2RhdGEvRHVtbXlfTWVldHVwcy5qcz80NmNjIl0sIm5hbWVzIjpbIkR1bW15X01lZXR1cHMiLCJpZCIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLGFBQWEsR0FBRyxDQUNsQjtBQUNJQyxJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsbUZBRlg7QUFHSUMsT0FBSyxFQUFFLHNCQUhYO0FBSUlDLFNBQU8sRUFBRTtBQUpiLENBRGtCLEVBT2xCO0FBQ0lILElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBRSxpSEFGWDtBQUdJQyxPQUFLLEVBQUUsa0JBSFg7QUFJSUMsU0FBTyxFQUFFO0FBSmIsQ0FQa0IsQ0FBdEI7QUFjZUosNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2RhdGEvRHVtbXlfTWVldHVwcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IER1bW15X01lZXR1cHMgPSBbXG4gICAge1xuICAgICAgICBpZDogJ20xJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltZ25ldy5vdXRsb29raW5kaWEuY29tL3VwbG9hZGltYWdlL2xpYnJhcnkvMTZfOS8xNl85XzUvX18xNjcwMjQ1OTEzLndlYnAnLFxuICAgICAgICB0aXRsZTogJ0F5b2RoeWEgbmlnaHQgbWVldHVwJyxcbiAgICAgICAgYWRkcmVzczogJ0F5b2RoeWEgcmFtIG1hbmRpcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdtMicsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMuaGluZHVzdGFudGltZXMuY29tL2ltZy8yMDIxLzA5LzAxLzU1MHgzMDkvYTk0YWFiNGUtMGIwNS0xMWVjLWIxZWUtMGIxYzkxMDhiNmIxXzE2MzA0ODg0MTc2NDguanBnJyxcbiAgICAgICAgdGl0bGU6ICdCYW5kYXJrb3QgbWVldHVwJyxcbiAgICAgICAgYWRkcmVzczogJ0JhbmRhcmtvdCBNYXRsaSdcbiAgICB9XG5dXG5leHBvcnQgZGVmYXVsdCBEdW1teV9NZWV0dXBzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/data/Dummy_Meetups.js\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_data_Dummy_Meetups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/data/Dummy_Meetups */ \"./components/data/Dummy_Meetups.js\");\n\n\nvar _jsxFileName = \"/home/rishabh/Desktop/Rishu/sharpner/nextJs/pages/[meetupId]/index.js\";\n\n\n\nconst showMeetup = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const id = router.query.meetupId;\n  const data = _components_data_Dummy_Meetups__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find(list => list.id === id);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: data.image,\n      alt: data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      children: data.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showMeetup);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsic2hvd01lZXR1cCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJtZWV0dXBJZCIsImRhdGEiLCJEdW1teV9NZWV0dXBzIiwiZmluZCIsImxpc3QiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsTUFBTTtBQUNyQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsRUFBRSxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsUUFBeEI7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLHNFQUFhLENBQUNDLElBQWQsQ0FBb0JDLElBQUQsSUFBVUEsSUFBSSxDQUFDTixFQUFMLEtBQVlBLEVBQXpDLENBQWI7QUFDQSxzQkFBTztBQUFBLDRCQUNIO0FBQUssU0FBRyxFQUFFRyxJQUFJLENBQUNJLEtBQWY7QUFBc0IsU0FBRyxFQUFFSixJQUFJLENBQUNLO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREcsZUFFSDtBQUFBLGdCQUFLTCxJQUFJLENBQUNLO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRyxlQUdIO0FBQUEsZ0JBQUtMLElBQUksQ0FBQ007QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhHO0FBQUEsa0JBQVA7QUFLSCxDQVREOztBQVVlWix5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgRHVtbXlfTWVldHVwcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RhdGEvRHVtbXlfTWVldHVwcyc7XG5cbmNvbnN0IHNob3dNZWV0dXAgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnkubWVldHVwSWQ7XG4gICAgY29uc3QgZGF0YSA9IER1bW15X01lZXR1cHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gaWQpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlfSBhbHQ9e2RhdGEudGl0bGV9IC8+XG4gICAgICAgIDxoMz57ZGF0YS50aXRsZX08L2gzPlxuICAgICAgICA8aDQ+e2RhdGEuYWRkcmVzc308L2g0PlxuICAgIDwvPlxufVxuZXhwb3J0IGRlZmF1bHQgc2hvd01lZXR1cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });
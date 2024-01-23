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
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_data_Dummy_Meetups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/data/Dummy_Meetups */ \"./components/data/Dummy_Meetups.js\");\n\n\nvar _jsxFileName = \"/home/rishabh/Desktop/Rishu/sharpner/nextJs/pages/[meetupId]/index.js\";\n\n\nconst showMeetup = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.data.image,\n      alt: props.data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: props.data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      children: props.data.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true);\n};\n\nfunction getStaticPaths() {\n  return {\n    fallback: false,\n    paths: [{\n      params: {\n        meetupId: 'm1'\n      }\n    }, {\n      params: {\n        meetupId: 'm2'\n      }\n    }, {\n      params: {\n        meetupId: 'm3'\n      }\n    }]\n  };\n}\nfunction getStaticProps(context) {\n  const id = context.params.meetupId;\n  let data = _components_data_Dummy_Meetups__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(list => list.id === id);\n\n  if (!data) {\n    data = _components_data_Dummy_Meetups__WEBPACK_IMPORTED_MODULE_1__[\"default\"][1];\n  }\n\n  return {\n    props: {\n      data: data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (showMeetup);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsic2hvd01lZXR1cCIsInByb3BzIiwiZGF0YSIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZ2V0U3RhdGljUGF0aHMiLCJmYWxsYmFjayIsInBhdGhzIiwicGFyYW1zIiwibWVldHVwSWQiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJpZCIsIkR1bW15X01lZXR1cHMiLCJmaW5kIiwibGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsVUFBVSxHQUFJQyxLQUFELElBQVc7QUFFMUIsc0JBQU87QUFBQSw0QkFDSDtBQUFLLFNBQUcsRUFBRUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBQXJCO0FBQTRCLFNBQUcsRUFBRUYsS0FBSyxDQUFDQyxJQUFOLENBQVdFO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREcsZUFFSDtBQUFBLGdCQUFLSCxLQUFLLENBQUNDLElBQU4sQ0FBV0U7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRyxlQUdIO0FBQUEsZ0JBQUtILEtBQUssQ0FBQ0MsSUFBTixDQUFXRztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhHO0FBQUEsa0JBQVA7QUFLSCxDQVBEOztBQVFPLFNBQVNDLGNBQVQsR0FBMEI7QUFDN0IsU0FBTztBQUNIQyxZQUFRLEVBQUUsS0FEUDtBQUVIQyxTQUFLLEVBQUUsQ0FBQztBQUFFQyxZQUFNLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaO0FBQVYsS0FBRCxFQUFrQztBQUFFRCxZQUFNLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaO0FBQVYsS0FBbEMsRUFBa0U7QUFBRUQsWUFBTSxFQUFFO0FBQUVDLGdCQUFRLEVBQUU7QUFBWjtBQUFWLEtBQWxFO0FBRkosR0FBUDtBQUlIO0FBQ00sU0FBU0MsY0FBVCxDQUF3QkMsT0FBeEIsRUFBaUM7QUFDcEMsUUFBTUMsRUFBRSxHQUFHRCxPQUFPLENBQUNILE1BQVIsQ0FBZUMsUUFBMUI7QUFDQSxNQUFJUixJQUFJLEdBQUdZLHNFQUFhLENBQUNDLElBQWQsQ0FBb0JDLElBQUQsSUFBVUEsSUFBSSxDQUFDSCxFQUFMLEtBQVlBLEVBQXpDLENBQVg7O0FBQ0EsTUFBSSxDQUFDWCxJQUFMLEVBQVc7QUFDUEEsUUFBSSxHQUFHWSxzRUFBYSxDQUFDLENBQUQsQ0FBcEI7QUFDSDs7QUFDRCxTQUFPO0FBQ0hiLFNBQUssRUFBRTtBQUNIQyxVQUFJLEVBQUVBO0FBREg7QUFESixHQUFQO0FBS0g7QUFDY0YseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IER1bW15X01lZXR1cHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kYXRhL0R1bW15X01lZXR1cHMnO1xuXG5jb25zdCBzaG93TWVldHVwID0gKHByb3BzKSA9PiB7XG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLmRhdGEuaW1hZ2V9IGFsdD17cHJvcHMuZGF0YS50aXRsZX0gLz5cbiAgICAgICAgPGgzPntwcm9wcy5kYXRhLnRpdGxlfTwvaDM+XG4gICAgICAgIDxoND57cHJvcHMuZGF0YS5hZGRyZXNzfTwvaDQ+XG4gICAgPC8+XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgICAgICBwYXRoczogW3sgcGFyYW1zOiB7IG1lZXR1cElkOiAnbTEnLCB9IH0sIHsgcGFyYW1zOiB7IG1lZXR1cElkOiAnbTInIH0gfSwgeyBwYXJhbXM6IHsgbWVldHVwSWQ6ICdtMycgfSB9XVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcbiAgICBsZXQgZGF0YSA9IER1bW15X01lZXR1cHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gaWQpXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBEdW1teV9NZWV0dXBzWzFdO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHNob3dNZWV0dXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

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
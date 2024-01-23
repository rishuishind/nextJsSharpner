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

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb_lib_mongo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb/lib/mongo_client */ \"mongodb/lib/mongo_client\");\n/* harmony import */ var mongodb_lib_mongo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb_lib_mongo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/rishabh/Desktop/Rishu/sharpner/nextJs/pages/[meetupId]/index.js\";\n\n\nconst showMeetup = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.data.image,\n      alt: props.data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: props.data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      children: props.data.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true);\n};\n\nfunction getStaticPaths() {\n  return {\n    fallback: true,\n    paths: [{\n      params: {\n        meetupId: 'm1'\n      }\n    }, {\n      params: {\n        meetupId: 'm2'\n      }\n    }, {\n      params: {\n        meetupId: 'm3'\n      }\n    }]\n  };\n}\nasync function getStaticProps(context) {\n  const id = context.params.meetupId;\n  const client = await mongodb_lib_mongo_client__WEBPACK_IMPORTED_MODULE_1___default.a.connect('mongodb://rishuishind:saras123@ac-bqc4kzx-shard-00-00.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-01.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-02.mapsrxn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1i7v8o-shard-0&authSource=admin&retryWrites=true&w=majority');\n  const db = client.db();\n  const meetupCollection = db.collection('meetups');\n  const meetups = await meetupCollection.find().toArray();\n  let data = meetups.find(list => list._id.toString() === id);\n  console.log('this is data ', data);\n  client.close();\n  return {\n    props: {\n      data: {\n        title: data.title,\n        image: data.image,\n        address: data.address,\n        id: data._id.toString()\n      }\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (showMeetup);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsic2hvd01lZXR1cCIsInByb3BzIiwiZGF0YSIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZ2V0U3RhdGljUGF0aHMiLCJmYWxsYmFjayIsInBhdGhzIiwicGFyYW1zIiwibWVldHVwSWQiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJpZCIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJtZWV0dXBzIiwiZmluZCIsInRvQXJyYXkiLCJsaXN0IiwiX2lkIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxNQUFNQSxVQUFVLEdBQUlDLEtBQUQsSUFBVztBQUUxQixzQkFBTztBQUFBLDRCQUNIO0FBQUssU0FBRyxFQUFFQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBckI7QUFBNEIsU0FBRyxFQUFFRixLQUFLLENBQUNDLElBQU4sQ0FBV0U7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERyxlQUVIO0FBQUEsZ0JBQUtILEtBQUssQ0FBQ0MsSUFBTixDQUFXRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZHLGVBR0g7QUFBQSxnQkFBS0gsS0FBSyxDQUFDQyxJQUFOLENBQVdHO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEc7QUFBQSxrQkFBUDtBQUtILENBUEQ7O0FBUU8sU0FBU0MsY0FBVCxHQUEwQjtBQUM3QixTQUFPO0FBQ0hDLFlBQVEsRUFBRSxJQURQO0FBRUhDLFNBQUssRUFBRSxDQUFDO0FBQUVDLFlBQU0sRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVo7QUFBVixLQUFELEVBQWtDO0FBQUVELFlBQU0sRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVo7QUFBVixLQUFsQyxFQUFrRTtBQUFFRCxZQUFNLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaO0FBQVYsS0FBbEU7QUFGSixHQUFQO0FBSUg7QUFDTSxlQUFlQyxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUMxQyxRQUFNQyxFQUFFLEdBQUdELE9BQU8sQ0FBQ0gsTUFBUixDQUFlQyxRQUExQjtBQUNBLFFBQU1JLE1BQU0sR0FBRyxNQUFNQywrREFBVyxDQUFDQyxPQUFaLENBQW9CLDBRQUFwQixDQUFyQjtBQUNBLFFBQU1DLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxFQUFQLEVBQVg7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsU0FBZCxDQUF6QjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxNQUFNRixnQkFBZ0IsQ0FBQ0csSUFBakIsR0FBd0JDLE9BQXhCLEVBQXRCO0FBQ0EsTUFBSXBCLElBQUksR0FBR2tCLE9BQU8sQ0FBQ0MsSUFBUixDQUFjRSxJQUFELElBQVVBLElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxRQUFULE9BQXdCWixFQUEvQyxDQUFYO0FBQ0FhLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJ6QixJQUE3QjtBQUNBWSxRQUFNLENBQUNjLEtBQVA7QUFDQSxTQUFPO0FBQ0gzQixTQUFLLEVBQUU7QUFDSEMsVUFBSSxFQUFFO0FBQ0ZFLGFBQUssRUFBRUYsSUFBSSxDQUFDRSxLQURWO0FBRUZELGFBQUssRUFBRUQsSUFBSSxDQUFDQyxLQUZWO0FBR0ZFLGVBQU8sRUFBRUgsSUFBSSxDQUFDRyxPQUhaO0FBSUZRLFVBQUUsRUFBRVgsSUFBSSxDQUFDc0IsR0FBTCxDQUFTQyxRQUFUO0FBSkY7QUFESDtBQURKLEdBQVA7QUFVSDtBQUNjekIseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vbmdvQ2xpZW50IGZyb20gXCJtb25nb2RiL2xpYi9tb25nb19jbGllbnRcIjtcbmNvbnN0IHNob3dNZWV0dXAgPSAocHJvcHMpID0+IHtcblxuICAgIHJldHVybiA8PlxuICAgICAgICA8aW1nIHNyYz17cHJvcHMuZGF0YS5pbWFnZX0gYWx0PXtwcm9wcy5kYXRhLnRpdGxlfSAvPlxuICAgICAgICA8aDM+e3Byb3BzLmRhdGEudGl0bGV9PC9oMz5cbiAgICAgICAgPGg0Pntwcm9wcy5kYXRhLmFkZHJlc3N9PC9oND5cbiAgICA8Lz5cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmYWxsYmFjazogdHJ1ZSxcbiAgICAgICAgcGF0aHM6IFt7IHBhcmFtczogeyBtZWV0dXBJZDogJ20xJywgfSB9LCB7IHBhcmFtczogeyBtZWV0dXBJZDogJ20yJyB9IH0sIHsgcGFyYW1zOiB7IG1lZXR1cElkOiAnbTMnIH0gfV1cbiAgICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYjovL3Jpc2h1aXNoaW5kOnNhcmFzMTIzQGFjLWJxYzRrengtc2hhcmQtMDAtMDAubWFwc3J4bi5tb25nb2RiLm5ldDoyNzAxNyxhYy1icWM0a3p4LXNoYXJkLTAwLTAxLm1hcHNyeG4ubW9uZ29kYi5uZXQ6MjcwMTcsYWMtYnFjNGt6eC1zaGFyZC0wMC0wMi5tYXBzcnhuLm1vbmdvZGIubmV0OjI3MDE3Lz9zc2w9dHJ1ZSZyZXBsaWNhU2V0PWF0bGFzLTFpN3Y4by1zaGFyZC0wJmF1dGhTb3VyY2U9YWRtaW4mcmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgICBjb25zdCBtZWV0dXBDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XG4gICAgbGV0IGRhdGEgPSBtZWV0dXBzLmZpbmQoKGxpc3QpID0+IGxpc3QuX2lkLnRvU3RyaW5nKCkgPT09IGlkKVxuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIGRhdGEgJywgZGF0YSk7XG4gICAgY2xpZW50LmNsb3NlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICBpbWFnZTogZGF0YS5pbWFnZSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBkYXRhLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgaWQ6IGRhdGEuX2lkLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHNob3dNZWV0dXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb/lib/mongo_client":
/*!*******************************************!*\
  !*** external "mongodb/lib/mongo_client" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb/lib/mongo_client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiL2xpYi9tb25nb19jbGllbnRcIj8yOTk3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1vbmdvZGIvbGliL21vbmdvX2NsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGIvbGliL21vbmdvX2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb/lib/mongo_client\n");

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
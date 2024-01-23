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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/rishabh/Desktop/Rishu/sharpner/nextJs/pages/[meetupId]/index.js\";\n\n\nconst showMeetup = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.data.image,\n      alt: props.data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: props.data.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      children: props.data.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true);\n};\n\nasync function getStaticPaths() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__[\"MongoClient\"].connect('mongodb://rishuishind:saras123@ac-bqc4kzx-shard-00-00.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-01.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-02.mapsrxn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1i7v8o-shard-0&authSource=admin&retryWrites=true&w=majority');\n  const db = client.db();\n  const meetupCollection = db.collection('meetups');\n  const meetups = await meetupCollection.find({}, {\n    _id: 1\n  }).toArray();\n  return {\n    fallback: false,\n    paths: meetups.map(meetup => ({\n      params: {\n        meetupId: meetup._id.toString()\n      }\n    }))\n  };\n}\nasync function getStaticProps(context) {\n  const id = context.params.meetupId;\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__[\"MongoClient\"].connect('mongodb://rishuishind:saras123@ac-bqc4kzx-shard-00-00.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-01.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-02.mapsrxn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1i7v8o-shard-0&authSource=admin&retryWrites=true&w=majority');\n  const db = client.db();\n  const meetupCollection = db.collection('meetups');\n  const data = await meetupCollection.findOne({\n    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"])(id)\n  });\n  client.close();\n  return {\n    props: {\n      data: {\n        id: data._id.toString(),\n        title: data.title,\n        address: data.address,\n        image: data.image\n      }\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (showMeetup);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsic2hvd01lZXR1cCIsInByb3BzIiwiZGF0YSIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZ2V0U3RhdGljUGF0aHMiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cENvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwibWVldHVwcyIsImZpbmQiLCJfaWQiLCJ0b0FycmF5IiwiZmFsbGJhY2siLCJwYXRocyIsIm1hcCIsIm1lZXR1cCIsInBhcmFtcyIsIm1lZXR1cElkIiwidG9TdHJpbmciLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJpZCIsImZpbmRPbmUiLCJPYmplY3RJZCIsImNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQ0EsTUFBTUEsVUFBVSxHQUFJQyxLQUFELElBQVc7QUFFMUIsc0JBQU87QUFBQSw0QkFDSDtBQUFLLFNBQUcsRUFBRUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBQXJCO0FBQTRCLFNBQUcsRUFBRUYsS0FBSyxDQUFDQyxJQUFOLENBQVdFO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREcsZUFFSDtBQUFBLGdCQUFLSCxLQUFLLENBQUNDLElBQU4sQ0FBV0U7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRyxlQUdIO0FBQUEsZ0JBQUtILEtBQUssQ0FBQ0MsSUFBTixDQUFXRztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhHO0FBQUEsa0JBQVA7QUFLSCxDQVBEOztBQVFPLGVBQWVDLGNBQWYsR0FBZ0M7QUFDbkMsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FBb0IsMFFBQXBCLENBQXJCO0FBQ0EsUUFBTUMsRUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQVAsRUFBWDtBQUNBLFFBQU1DLGdCQUFnQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQXpCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLE1BQU1GLGdCQUFnQixDQUFDRyxJQUFqQixDQUFzQixFQUF0QixFQUEwQjtBQUFFQyxPQUFHLEVBQUU7QUFBUCxHQUExQixFQUFzQ0MsT0FBdEMsRUFBdEI7QUFDQSxTQUFPO0FBQ0hDLFlBQVEsRUFBRSxLQURQO0FBRUhDLFNBQUssRUFBRUwsT0FBTyxDQUFDTSxHQUFSLENBQWFDLE1BQUQsS0FBYTtBQUFFQyxZQUFNLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRUYsTUFBTSxDQUFDTCxHQUFQLENBQVdRLFFBQVg7QUFBWjtBQUFWLEtBQWIsQ0FBWjtBQUZKLEdBQVA7QUFJSDtBQUNNLGVBQWVDLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzFDLFFBQU1DLEVBQUUsR0FBR0QsT0FBTyxDQUFDSixNQUFSLENBQWVDLFFBQTFCO0FBQ0EsUUFBTWYsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FBb0IsMFFBQXBCLENBQXJCO0FBQ0EsUUFBTUMsRUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQVAsRUFBWDtBQUNBLFFBQU1DLGdCQUFnQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQXpCO0FBQ0EsUUFBTVYsSUFBSSxHQUFHLE1BQU1TLGdCQUFnQixDQUFDZ0IsT0FBakIsQ0FBeUI7QUFBRVosT0FBRyxFQUFFYSx3REFBUSxDQUFDRixFQUFEO0FBQWYsR0FBekIsQ0FBbkI7QUFDQW5CLFFBQU0sQ0FBQ3NCLEtBQVA7QUFDQSxTQUFPO0FBQ0g1QixTQUFLLEVBQUU7QUFDSEMsVUFBSSxFQUFFO0FBQ0Z3QixVQUFFLEVBQUV4QixJQUFJLENBQUNhLEdBQUwsQ0FBU1EsUUFBVCxFQURGO0FBRUZuQixhQUFLLEVBQUVGLElBQUksQ0FBQ0UsS0FGVjtBQUdGQyxlQUFPLEVBQUVILElBQUksQ0FBQ0csT0FIWjtBQUlGRixhQUFLLEVBQUVELElBQUksQ0FBQ0M7QUFKVjtBQURIO0FBREosR0FBUDtBQVVIO0FBQ2NILHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XG5jb25zdCBzaG93TWVldHVwID0gKHByb3BzKSA9PiB7XG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLmRhdGEuaW1hZ2V9IGFsdD17cHJvcHMuZGF0YS50aXRsZX0gLz5cbiAgICAgICAgPGgzPntwcm9wcy5kYXRhLnRpdGxlfTwvaDM+XG4gICAgICAgIDxoND57cHJvcHMuZGF0YS5hZGRyZXNzfTwvaDQ+XG4gICAgPC8+XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYjovL3Jpc2h1aXNoaW5kOnNhcmFzMTIzQGFjLWJxYzRrengtc2hhcmQtMDAtMDAubWFwc3J4bi5tb25nb2RiLm5ldDoyNzAxNyxhYy1icWM0a3p4LXNoYXJkLTAwLTAxLm1hcHNyeG4ubW9uZ29kYi5uZXQ6MjcwMTcsYWMtYnFjNGt6eC1zaGFyZC0wMC0wMi5tYXBzcnhuLm1vbmdvZGIubmV0OjI3MDE3Lz9zc2w9dHJ1ZSZyZXBsaWNhU2V0PWF0bGFzLTFpN3Y4by1zaGFyZC0wJmF1dGhTb3VyY2U9YWRtaW4mcmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgICBjb25zdCBtZWV0dXBDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBDb2xsZWN0aW9uLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgICAgIHBhdGhzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoeyBwYXJhbXM6IHsgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSB9IH0pKVxuICAgIH1cbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiOi8vcmlzaHVpc2hpbmQ6c2FyYXMxMjNAYWMtYnFjNGt6eC1zaGFyZC0wMC0wMC5tYXBzcnhuLm1vbmdvZGIubmV0OjI3MDE3LGFjLWJxYzRrengtc2hhcmQtMDAtMDEubWFwc3J4bi5tb25nb2RiLm5ldDoyNzAxNyxhYy1icWM0a3p4LXNoYXJkLTAwLTAyLm1hcHNyeG4ubW9uZ29kYi5uZXQ6MjcwMTcvP3NzbD10cnVlJnJlcGxpY2FTZXQ9YXRsYXMtMWk3djhvLXNoYXJkLTAmYXV0aFNvdXJjZT1hZG1pbiZyZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICAgIGNvbnN0IG1lZXR1cENvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IG1lZXR1cENvbGxlY3Rpb24uZmluZE9uZSh7IF9pZDogT2JqZWN0SWQoaWQpIH0pO1xuICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGRhdGEuX2lkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogZGF0YS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGltYWdlOiBkYXRhLmltYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBzaG93TWVldHVwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

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
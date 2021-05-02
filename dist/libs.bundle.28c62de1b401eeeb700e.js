/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "3y8Q":
/*!*********************!*\
  !*** ./src/libs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// =======\n// Scripts\n// =======\n// libs\n\n // Service Worker\n\nif (\"serviceWorker\" in navigator) {\n  // * console.log(\"SW is supported\");\n  window.addEventListener(\"load\", () => {\n    navigator.serviceWorker.register(\"/sw.js\").then(registrations => {\n      console.log(\"SW registered: \", registrations);\n      Promise.all(registrations.map(r => r.unregister()));\n    }).then(() => window.location.reload()).catch(registrationError => console.log(\"SW registration failed: \", registrationError));\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1jb21pYy1zbGljZXIvLi9zcmMvbGlicy5qcz84MjQwIl0sIm5hbWVzIjpbIm5hdmlnYXRvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJ0aGVuIiwicmVnaXN0cmF0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiciIsInVucmVnaXN0ZXIiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNhdGNoIiwicmVnaXN0cmF0aW9uRXJyb3IiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBSSxtQkFBbUJBLFNBQXZCLEVBQWtDO0FBQ2hDO0FBQ0FDLFFBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsTUFBTTtBQUNwQ0YsYUFBUyxDQUFDRyxhQUFWLENBQ0dDLFFBREgsQ0FDWSxRQURaLEVBRUdDLElBRkgsQ0FFU0MsYUFBRCxJQUFvQjtBQUN4QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JGLGFBQS9CO0FBQ0FHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixhQUFhLENBQUNLLEdBQWQsQ0FBbUJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxVQUFGLEVBQXpCLENBQVo7QUFDRCxLQUxILEVBTUdSLElBTkgsQ0FNUSxNQUFNSixNQUFNLENBQUNhLFFBQVAsQ0FBZ0JDLE1BQWhCLEVBTmQsRUFPR0MsS0FQSCxDQU9VQyxpQkFBRCxJQUF1QlYsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVosRUFBd0NTLGlCQUF4QyxDQVBoQztBQVFELEdBVEQ7QUFVRCIsImZpbGUiOiIzeThRLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PVxyXG4vLyBTY3JpcHRzXHJcbi8vID09PT09PT1cclxuLy8gbGlic1xyXG5pbXBvcnQgY3JlYXRlSWQgZnJvbSAnLi9zY3JpcHRzL2xpYnMvY3JlYXRlSWQuanMnO1xyXG5pbXBvcnQgY29udmVydEJ5dGVzIGZyb20gJy4vc2NyaXB0cy9saWJzL2NvbnZlcnRCeXRlcy5qcyc7XHJcblxyXG4vLyBTZXJ2aWNlIFdvcmtlclxyXG5pZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XHJcbiAgLy8gKiBjb25zb2xlLmxvZyhcIlNXIGlzIHN1cHBvcnRlZFwiKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcclxuICAgICAgLnJlZ2lzdGVyKFwiL3N3LmpzXCIpXHJcbiAgICAgIC50aGVuKChyZWdpc3RyYXRpb25zICkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1cgcmVnaXN0ZXJlZDogXCIsIHJlZ2lzdHJhdGlvbnMpXHJcbiAgICAgICAgUHJvbWlzZS5hbGwocmVnaXN0cmF0aW9ucy5tYXAoKHIpID0+IHIudW5yZWdpc3RlcigpKSlcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKVxyXG4gICAgICAuY2F0Y2goKHJlZ2lzdHJhdGlvbkVycm9yKSA9PiBjb25zb2xlLmxvZyhcIlNXIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6IFwiLCByZWdpc3RyYXRpb25FcnJvcikpO1xyXG4gIH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3y8Q\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["3y8Q"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
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

eval("__webpack_require__.r(__webpack_exports__);\n// =======\n// Scripts\n// =======\n// libs\n\n // Service Worker\n\nif (\"serviceWorker\" in navigator) {\n  // * console.log(\"SW is supported\");\n  window.addEventListener(\"load\", () => {\n    navigator.serviceWorker.register(\"/sw.js\").then(registrations => {\n      console.log(\"SW registered: \", registrations);\n\n      for (let registration of registrations) {\n        console.log(\"SW registered - force update: \", registrations);\n        registration.update();\n      }\n    }).catch(registrationError => console.log(\"SW registration failed: \", registrationError));\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1jb21pYy1zbGljZXIvLi9zcmMvbGlicy5qcz84MjQwIl0sIm5hbWVzIjpbIm5hdmlnYXRvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJ0aGVuIiwicmVnaXN0cmF0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RyYXRpb24iLCJ1cGRhdGUiLCJjYXRjaCIsInJlZ2lzdHJhdGlvbkVycm9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQUksbUJBQW1CQSxTQUF2QixFQUFrQztBQUNoQztBQUNBQyxRQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLE1BQU07QUFDcENGLGFBQVMsQ0FBQ0csYUFBVixDQUNHQyxRQURILENBQ1ksUUFEWixFQUVHQyxJQUZILENBRVNDLGFBQUQsSUFBb0I7QUFDeEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCRixhQUEvQjs7QUFDQSxXQUFLLElBQUlHLFlBQVQsSUFBeUJILGFBQXpCLEVBQXdDO0FBQ3RDQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBWixFQUE4Q0YsYUFBOUM7QUFDQUcsb0JBQVksQ0FBQ0MsTUFBYjtBQUNEO0FBQ0YsS0FSSCxFQVNHQyxLQVRILENBU1VDLGlCQUFELElBQXdCTCxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFQUF3Q0ksaUJBQXhDLENBVGpDO0FBVUQsR0FYRDtBQVlEIiwiZmlsZSI6IjN5OFEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09XHJcbi8vIFNjcmlwdHNcclxuLy8gPT09PT09PVxyXG4vLyBsaWJzXHJcbmltcG9ydCBjcmVhdGVJZCBmcm9tICcuL3NjcmlwdHMvbGlicy9jcmVhdGVJZC5qcyc7XHJcbmltcG9ydCBjb252ZXJ0Qnl0ZXMgZnJvbSAnLi9zY3JpcHRzL2xpYnMvY29udmVydEJ5dGVzLmpzJztcclxuXHJcbi8vIFNlcnZpY2UgV29ya2VyXHJcbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAvLyAqIGNvbnNvbGUubG9nKFwiU1cgaXMgc3VwcG9ydGVkXCIpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxyXG4gICAgICAucmVnaXN0ZXIoXCIvc3cuanNcIilcclxuICAgICAgLnRoZW4oKHJlZ2lzdHJhdGlvbnMgKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTVyByZWdpc3RlcmVkOiBcIiwgcmVnaXN0cmF0aW9ucylcclxuICAgICAgICBmb3IgKGxldCByZWdpc3RyYXRpb24gb2YgcmVnaXN0cmF0aW9ucykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTVyByZWdpc3RlcmVkIC0gZm9yY2UgdXBkYXRlOiBcIiwgcmVnaXN0cmF0aW9ucylcclxuICAgICAgICAgIHJlZ2lzdHJhdGlvbi51cGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVnaXN0cmF0aW9uRXJyb3IgKSA9PiBjb25zb2xlLmxvZyhcIlNXIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6IFwiLCByZWdpc3RyYXRpb25FcnJvcikpO1xyXG4gIH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3y8Q\n");

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
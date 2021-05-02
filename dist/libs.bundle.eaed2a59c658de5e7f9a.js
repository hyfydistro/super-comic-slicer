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

eval("__webpack_require__.r(__webpack_exports__);\n// =======\n// Scripts\n// =======\n// libs\n\n // Service Worker\n\nif (\"serviceWorker\" in navigator) {\n  // * console.log(\"SW is supported\");\n  window.addEventListener(\"load\", () => {\n    navigator.serviceWorker // .register(\"/sw.js\")\n    .getRegistrations().then(registrations => {\n      console.log(\"SW registered: \", registrations);\n      Promise.all(registrations.map(r => r.unregister()));\n    }).then(() => window.location.reload()).catch(registrationError => console.log(\"SW registration failed: \", registrationError));\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1jb21pYy1zbGljZXIvLi9zcmMvbGlicy5qcz84MjQwIl0sIm5hbWVzIjpbIm5hdmlnYXRvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlV29ya2VyIiwiZ2V0UmVnaXN0cmF0aW9ucyIsInRoZW4iLCJyZWdpc3RyYXRpb25zIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJyIiwidW5yZWdpc3RlciIsImxvY2F0aW9uIiwicmVsb2FkIiwiY2F0Y2giLCJyZWdpc3RyYXRpb25FcnJvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFJLG1CQUFtQkEsU0FBdkIsRUFBa0M7QUFDaEM7QUFDQUMsUUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxNQUFNO0FBQ3BDRixhQUFTLENBQUNHLGFBQVYsQ0FDRTtBQURGLEtBRUdDLGdCQUZILEdBR0dDLElBSEgsQ0FHU0MsYUFBRCxJQUFtQjtBQUN2QkMsYUFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JGLGFBQS9CO0FBQ0FHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixhQUFhLENBQUNLLEdBQWQsQ0FBbUJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxVQUFGLEVBQXpCLENBQVo7QUFDRCxLQU5ILEVBT0dSLElBUEgsQ0FPUSxNQUFNSixNQUFNLENBQUNhLFFBQVAsQ0FBZ0JDLE1BQWhCLEVBUGQsRUFRR0MsS0FSSCxDQVFVQyxpQkFBRCxJQUF1QlYsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVosRUFBd0NTLGlCQUF4QyxDQVJoQztBQVNELEdBVkQ7QUFXRCIsImZpbGUiOiIzeThRLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PVxyXG4vLyBTY3JpcHRzXHJcbi8vID09PT09PT1cclxuLy8gbGlic1xyXG5pbXBvcnQgY3JlYXRlSWQgZnJvbSAnLi9zY3JpcHRzL2xpYnMvY3JlYXRlSWQuanMnO1xyXG5pbXBvcnQgY29udmVydEJ5dGVzIGZyb20gJy4vc2NyaXB0cy9saWJzL2NvbnZlcnRCeXRlcy5qcyc7XHJcblxyXG4vLyBTZXJ2aWNlIFdvcmtlclxyXG5pZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XHJcbiAgLy8gKiBjb25zb2xlLmxvZyhcIlNXIGlzIHN1cHBvcnRlZFwiKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcclxuICAgICAgLy8gLnJlZ2lzdGVyKFwiL3N3LmpzXCIpXHJcbiAgICAgIC5nZXRSZWdpc3RyYXRpb25zKClcclxuICAgICAgLnRoZW4oKHJlZ2lzdHJhdGlvbnMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNXIHJlZ2lzdGVyZWQ6IFwiLCByZWdpc3RyYXRpb25zKVxyXG4gICAgICAgIFByb21pc2UuYWxsKHJlZ2lzdHJhdGlvbnMubWFwKChyKSA9PiByLnVucmVnaXN0ZXIoKSkpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSlcclxuICAgICAgLmNhdGNoKChyZWdpc3RyYXRpb25FcnJvcikgPT4gY29uc29sZS5sb2coXCJTVyByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgcmVnaXN0cmF0aW9uRXJyb3IpKTtcclxuICB9KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3y8Q\n");

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
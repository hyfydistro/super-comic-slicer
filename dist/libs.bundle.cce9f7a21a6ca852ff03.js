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

eval("__webpack_require__.r(__webpack_exports__);\n// =======\n// Scripts\n// =======\n// libs\n\n // Service Worker\n\nif (\"serviceWorker\" in navigator) {\n  // * console.log(\"SW is supported\");\n  window.addEventListener(\"load\", () => {\n    navigator.serviceWorker.register(\"/sw.js\").then(registration => console.log(\"SW registered: \", registration)).catch(registrationError => console.log(\"SW registration failed: \", registrationError));\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1jb21pYy1zbGljZXIvLi9zcmMvbGlicy5qcz84MjQwIl0sIm5hbWVzIjpbIm5hdmlnYXRvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJ0aGVuIiwicmVnaXN0cmF0aW9uIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwicmVnaXN0cmF0aW9uRXJyb3IiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBSSxtQkFBbUJBLFNBQXZCLEVBQWtDO0FBQ2hDO0FBQ0FDLFFBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsTUFBTTtBQUNwQ0YsYUFBUyxDQUFDRyxhQUFWLENBQ0dDLFFBREgsQ0FDWSxRQURaLEVBRUdDLElBRkgsQ0FFU0MsWUFBRCxJQUFtQkMsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JGLFlBQS9CLENBRjNCLEVBR0dHLEtBSEgsQ0FHVUMsaUJBQUQsSUFBd0JILE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaLEVBQXdDRSxpQkFBeEMsQ0FIakM7QUFJRCxHQUxEO0FBTUQiLCJmaWxlIjoiM3k4US5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT1cclxuLy8gU2NyaXB0c1xyXG4vLyA9PT09PT09XHJcbi8vIGxpYnNcclxuaW1wb3J0IGNyZWF0ZUlkIGZyb20gJy4vc2NyaXB0cy9saWJzL2NyZWF0ZUlkLmpzJztcclxuaW1wb3J0IGNvbnZlcnRCeXRlcyBmcm9tICcuL3NjcmlwdHMvbGlicy9jb252ZXJ0Qnl0ZXMuanMnO1xyXG5cclxuLy8gU2VydmljZSBXb3JrZXJcclxuaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xyXG4gIC8vICogY29uc29sZS5sb2coXCJTVyBpcyBzdXBwb3J0ZWRcIik7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyXHJcbiAgICAgIC5yZWdpc3RlcihcIi9zdy5qc1wiKVxyXG4gICAgICAudGhlbigocmVnaXN0cmF0aW9uICkgPT4gY29uc29sZS5sb2coXCJTVyByZWdpc3RlcmVkOiBcIiwgcmVnaXN0cmF0aW9uKSlcclxuICAgICAgLmNhdGNoKChyZWdpc3RyYXRpb25FcnJvciApID0+IGNvbnNvbGUubG9nKFwiU1cgcmVnaXN0cmF0aW9uIGZhaWxlZDogXCIsIHJlZ2lzdHJhdGlvbkVycm9yKSk7XHJcbiAgfSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3y8Q\n");

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
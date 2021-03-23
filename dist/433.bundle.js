(self.webpackChunksuper_comic_slicer=self.webpackChunksuper_comic_slicer||[]).push([[433],{433:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ FormResults)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);\n\n\n\n// TODO: FEATURE (NEXT UPDATE)\n// adjust to webcomic platform ratio for display\nfunction Product(props) {\n  // INJECT image blob\n  var processedImageFIles = props.getImageData.map(function (imgData, index) {\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {\n      className: "product__image-block",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {\n        src: imgData\n      })\n    }, index);\n  });\n  return processedImageFIles;\n}\n\nfunction FormResults(props) {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {\n    className: "form-results",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {\n      children: "Results"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {\n      children: "For each webcomic platform selected, a zip file will be automatically downloaded after slicing process completed."\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", {\n      id: "canvas"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {\n      className: "product-container",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {\n        className: "product",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Product, {\n          getImageData: props.getImageData\n        })\n      })\n    })]\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1jb21pYy1zbGljZXIvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0Zvcm1SZXN1bHRzLmpzPzg4ZmYiXSwibmFtZXMiOlsiUHJvZHVjdCIsInByb3BzIiwicHJvY2Vzc2VkSW1hZ2VGSWxlcyIsImdldEltYWdlRGF0YSIsIm1hcCIsImltZ0RhdGEiLCJpbmRleCIsIkZvcm1SZXN1bHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUF3QjtBQUVwQjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHRCxLQUFLLENBQUNFLFlBQU4sQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUVuRSx3QkFDSTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBLDZCQUNJO0FBQUssV0FBRyxFQUFFRDtBQUFWO0FBREosT0FBMkNDLEtBQTNDLENBREo7QUFLSCxHQVAyQixDQUE1QjtBQVNBLFNBQU9KLG1CQUFQO0FBQ0g7O0FBRWMsU0FBU0ssV0FBVCxDQUFxQk4sS0FBckIsRUFBNEI7QUFDdkMsc0JBQ0k7QUFBUyxhQUFTLEVBQUMsY0FBbkI7QUFBQSw0QkFDSTtBQUFBO0FBQUEsTUFESixlQUdJO0FBQUE7QUFBQSxNQUhKLGVBS0k7QUFBUSxRQUFFLEVBQUM7QUFBWCxNQUxKLGVBT0k7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLCtCQUNJLHVEQUFDLE9BQUQ7QUFDSSxzQkFBWSxFQUFFQSxLQUFLLENBQUNFO0FBRHhCO0FBREo7QUFESixNQVBKO0FBQUEsSUFESjtBQWlCSCIsImZpbGUiOiI0MzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPOiBGRUFUVVJFIChORVhUIFVQREFURSlcclxuLy8gYWRqdXN0IHRvIHdlYmNvbWljIHBsYXRmb3JtIHJhdGlvIGZvciBkaXNwbGF5XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0KHByb3BzKSB7XHJcblxyXG4gICAgLy8gSU5KRUNUIGltYWdlIGJsb2JcclxuICAgIGNvbnN0IHByb2Nlc3NlZEltYWdlRklsZXMgPSBwcm9wcy5nZXRJbWFnZURhdGEubWFwKChpbWdEYXRhLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX2ltYWdlLWJsb2NrXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nRGF0YX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcHJvY2Vzc2VkSW1hZ2VGSWxlcztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVJlc3VsdHMocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9ybS1yZXN1bHRzXCI+XHJcbiAgICAgICAgICAgIDxoMz5SZXN1bHRzPC9oMz5cclxuXHJcbiAgICAgICAgICAgIDxwPkZvciBlYWNoIHdlYmNvbWljIHBsYXRmb3JtIHNlbGVjdGVkLCBhIHppcCBmaWxlIHdpbGwgYmUgYXV0b21hdGljYWxseSBkb3dubG9hZGVkIGFmdGVyIHNsaWNpbmcgcHJvY2VzcyBjb21wbGV0ZWQuPC9wPlxyXG5cclxuICAgICAgICAgICAgPGNhbnZhcyBpZD1cImNhbnZhc1wiPjwvY2FudmFzPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0SW1hZ2VEYXRhPXtwcm9wcy5nZXRJbWFnZURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///433\n')}}]);
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksuper_comic_slicer"] = self["webpackChunksuper_comic_slicer"] || []).push([["src_scripts_components_FormOptions_js"],{

/***/ "cx83":
/*!***********************************************!*\
  !*** ./src/scripts/components/FormOptions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FormOptions)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"nKUr\");\n\n\n// RADIO OPTIONS\n// Default CHECKED: squashLevelModel[0]\nconst squashLevelModel = [{\n  htmlLabel: \"none\",\n  pixelValue: 0,\n  text: \"none\"\n}, {\n  htmlLabel: \"400\",\n  pixelValue: 400,\n  text: \"400 width pixels\"\n}, {\n  htmlLabel: \"500\",\n  pixelValue: 500,\n  text: \"500 width pixels\"\n}, {\n  htmlLabel: \"600\",\n  pixelValue: 600,\n  text: \"600 width pixels\"\n}, {\n  htmlLabel: \"700\",\n  pixelValue: 700,\n  text: \"700 width pixels\"\n}]; // RADIO OPTIONS\n// Default CHECKED: filExtensionsModel[0]\n\nconst filExtensionsModel = [{\n  htmlLabel: \"jpeg\",\n  text: \"JPEG\"\n}, {\n  htmlLabel: \"png\",\n  text: \"PNG\"\n}];\n\nfunction SquashOptions(props) {\n  const squashLevelList = squashLevelModel.map((currentSquashLevel, index) => {\n    if (squashLevelModel[0] == currentSquashLevel) {\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"radio-option\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"label\", {\n          htmlFor: currentSquashLevel.htmlLabel,\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n            defaultChecked: true,\n            type: \"radio\",\n            name: \"squash\",\n            value: currentSquashLevel.pixelValue,\n            id: currentSquashLevel.htmlLabel,\n            onClick: e => props.onHandleOptionsSquashLevel(e)\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n            className: \"select-text\",\n            children: currentSquashLevel.text\n          })]\n        })\n      }, index);\n    } else {\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"radio-option\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"label\", {\n          htmlFor: currentSquashLevel.htmlLabel,\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n            type: \"radio\",\n            name: \"squash\",\n            value: currentSquashLevel.pixelValue,\n            id: currentSquashLevel.htmlLabel,\n            onClick: e => props.onHandleOptionsSquashLevel(e)\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n            className: \"select-text\",\n            children: currentSquashLevel.text\n          })]\n        })\n      }, index);\n    }\n  });\n  return squashLevelList;\n}\n\nfunction FileExtensionOptions(props) {\n  const fileExtensionsList = filExtensionsModel.map((fileExtObj, index) => {\n    if (filExtensionsModel[0] === fileExtObj) {\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"radio-option\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"label\", {\n          htmlFor: fileExtObj.htmlLabel,\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n            defaultChecked: true,\n            type: \"radio\",\n            name: \"filetype\",\n            value: fileExtObj.htmlLabel,\n            id: fileExtObj.htmlLabel,\n            onClick: e => props.onHandleOptionsFileExtenions(e)\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n            className: \"select-text\",\n            children: fileExtObj.text\n          })]\n        })\n      }, index);\n    } else {\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"radio-option\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"label\", {\n          htmlFor: fileExtObj.htmlLabel,\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n            type: \"radio\",\n            name: \"filetype\",\n            value: fileExtObj.htmlLabel,\n            id: fileExtObj.htmlLabel,\n            onClick: e => props.onHandleOptionsFileExtenions(e)\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n            className: \"select-text\",\n            children: fileExtObj.text\n          })]\n        })\n      }, index);\n    }\n  });\n  return fileExtensionsList;\n}\n\nfunction FormOptions(props) {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"section\", {\n    className: \"form-options\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n      children: \"3. Options\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n      className: \"form-header\",\n      children: \"File Extensions\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n      className: \"radio-container-filetype\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FileExtensionOptions, {\n        onHandleOptionsFileExtenions: props.onHandleOptionsFileExtenions\n      })\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n      className: \"form-header\",\n      children: \"Squash\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n      className: \"margin-fix\",\n      children: \"Squash scale down image file size.\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n      className: \"margin-fix\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n        children: \"If your file size is big enough it may refine illustrations. Slicing ratio will not be affected - it will produce the same page division.\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n        children: \"if your file is smaller than the selected squash option, it will expand your image and attempt to produce to the same aspect ratio of your chosen webcomic platform.\"\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n      className: \"radio-container-squash\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SquashOptions, {\n        onHandleOptionsSquashLevel: props.onHandleOptionsSquashLevel\n      })\n    })]\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1jb21pYy1zbGljZXIvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0Zvcm1PcHRpb25zLmpzPzFmOTgiXSwibmFtZXMiOlsic3F1YXNoTGV2ZWxNb2RlbCIsImh0bWxMYWJlbCIsInBpeGVsVmFsdWUiLCJ0ZXh0IiwiZmlsRXh0ZW5zaW9uc01vZGVsIiwiU3F1YXNoT3B0aW9ucyIsInByb3BzIiwic3F1YXNoTGV2ZWxMaXN0IiwibWFwIiwiY3VycmVudFNxdWFzaExldmVsIiwiaW5kZXgiLCJlIiwib25IYW5kbGVPcHRpb25zU3F1YXNoTGV2ZWwiLCJGaWxlRXh0ZW5zaW9uT3B0aW9ucyIsImZpbGVFeHRlbnNpb25zTGlzdCIsImZpbGVFeHRPYmoiLCJvbkhhbmRsZU9wdGlvbnNGaWxlRXh0ZW5pb25zIiwiRm9ybU9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsTUFBTUEsZ0JBQWdCLEdBQUcsQ0FDckI7QUFDSUMsV0FBUyxFQUFFLE1BRGY7QUFFSUMsWUFBVSxFQUFFLENBRmhCO0FBR0lDLE1BQUksRUFBRTtBQUhWLENBRHFCLEVBTXJCO0FBQ0lGLFdBQVMsRUFBRSxLQURmO0FBRUlDLFlBQVUsRUFBRSxHQUZoQjtBQUdJQyxNQUFJLEVBQUU7QUFIVixDQU5xQixFQVdyQjtBQUNJRixXQUFTLEVBQUUsS0FEZjtBQUVJQyxZQUFVLEVBQUUsR0FGaEI7QUFHSUMsTUFBSSxFQUFFO0FBSFYsQ0FYcUIsRUFnQnJCO0FBQ0lGLFdBQVMsRUFBRSxLQURmO0FBRUlDLFlBQVUsRUFBRSxHQUZoQjtBQUdJQyxNQUFJLEVBQUU7QUFIVixDQWhCcUIsRUFxQnJCO0FBQ0lGLFdBQVMsRUFBRSxLQURmO0FBRUlDLFlBQVUsRUFBRSxHQUZoQjtBQUdJQyxNQUFJLEVBQUU7QUFIVixDQXJCcUIsQ0FBekIsQyxDQTRCQTtBQUNBOztBQUNBLE1BQU1DLGtCQUFrQixHQUFHLENBQ3ZCO0FBQ0lILFdBQVMsRUFBRSxNQURm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RUFBRWMsVUFBVSxDQUFDZCxTQUpuQjtBQUtJLG1CQUFPLEVBQUdVLENBQUQsSUFBT0wsS0FBSyxDQUFDVSw0QkFBTixDQUFtQ0wsQ0FBbkM7QUFMcEIsWUFESixlQVFJO0FBQU0scUJBQVMsRUFBQyxhQUFoQjtBQUFBLHNCQUErQkksVUFBVSxDQUFDWjtBQUExQyxZQVJKO0FBQUE7QUFESixTQUFtQ08sS0FBbkMsQ0FESjtBQWNIO0FBQ0osR0FqQzBCLENBQTNCO0FBbUNBLFNBQU9JLGtCQUFQO0FBQ0g7O0FBRWMsU0FBU0csV0FBVCxDQUFxQlgsS0FBckIsRUFBNEI7QUFDdkMsc0JBQ0k7QUFBUyxhQUFTLEVBQUMsY0FBbkI7QUFBQSw0QkFDSTtBQUFBO0FBQUEsTUFESixlQUdJO0FBQUcsZUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBLE1BSEosZUFLSTtBQUFLLGVBQVMsRUFBQywwQkFBZjtBQUFBLDZCQUNJLHVEQUFDLG9CQUFEO0FBQ0ksb0NBQTRCLEVBQUVBLEtBQUssQ0FBQ1U7QUFEeEM7QUFESixNQUxKLGVBWUk7QUFBRyxlQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUEsTUFaSixlQWNJO0FBQUcsZUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBLE1BZEosZUFnQkk7QUFBSSxlQUFTLEVBQUMsWUFBZDtBQUFBLDhCQUNJO0FBQUE7QUFBQSxRQURKLGVBRUk7QUFBQTtBQUFBLFFBRko7QUFBQSxNQWhCSixlQXFCSTtBQUFLLGVBQVMsRUFBQyx3QkFBZjtBQUFBLDZCQUNJLHVEQUFDLGFBQUQ7QUFDSSxrQ0FBMEIsRUFBRVYsS0FBSyxDQUFDTTtBQUR0QztBQURKLE1BckJKO0FBQUEsSUFESjtBQTZCSCIsImZpbGUiOiJjeDgzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUkFESU8gT1BUSU9OU1xyXG4vLyBEZWZhdWx0IENIRUNLRUQ6IHNxdWFzaExldmVsTW9kZWxbMF1cclxuY29uc3Qgc3F1YXNoTGV2ZWxNb2RlbCA9IFtcclxuICAgIHtcclxuICAgICAgICBodG1sTGFiZWw6IFwibm9uZVwiLFxyXG4gICAgICAgIHBpeGVsVmFsdWU6IDAsXHJcbiAgICAgICAgdGV4dDogXCJub25lXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaHRtbExhYmVsOiBcIjQwMFwiLFxyXG4gICAgICAgIHBpeGVsVmFsdWU6IDQwMCxcclxuICAgICAgICB0ZXh0OiBcIjQwMCB3aWR0aCBwaXhlbHNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBodG1sTGFiZWw6IFwiNTAwXCIsXHJcbiAgICAgICAgcGl4ZWxWYWx1ZTogNTAwLFxyXG4gICAgICAgIHRleHQ6IFwiNTAwIHdpZHRoIHBpeGVsc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGh0bWxMYWJlbDogXCI2MDBcIixcclxuICAgICAgICBwaXhlbFZhbHVlOiA2MDAsXHJcbiAgICAgICAgdGV4dDogXCI2MDAgd2lkdGggcGl4ZWxzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaHRtbExhYmVsOiBcIjcwMFwiLFxyXG4gICAgICAgIHBpeGVsVmFsdWU6IDcwMCxcclxuICAgICAgICB0ZXh0OiBcIjcwMCB3aWR0aCBwaXhlbHNcIlxyXG4gICAgfVxyXG5dXHJcblxyXG4vLyBSQURJTyBPUFRJT05TXHJcbi8vIERlZmF1bHQgQ0hFQ0tFRDogZmlsRXh0ZW5zaW9uc01vZGVsWzBdXHJcbmNvbnN0IGZpbEV4dGVuc2lvbnNNb2RlbCA9IFtcclxuICAgIHtcclxuICAgICAgICBodG1sTGFiZWw6IFwianBlZ1wiLFxyXG4gICAgICAgIHRleHQ6IFwiSlBFR1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGh0bWxMYWJlbDogXCJwbmdcIixcclxuICAgICAgICB0ZXh0OiBcIlBOR1wiXHJcbiAgICB9XHJcbl07XHJcblxyXG5cclxuZnVuY3Rpb24gU3F1YXNoT3B0aW9ucyhwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHNxdWFzaExldmVsTGlzdCA9IHNxdWFzaExldmVsTW9kZWwubWFwKChjdXJyZW50U3F1YXNoTGV2ZWwsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChzcXVhc2hMZXZlbE1vZGVsWzBdID09IGN1cnJlbnRTcXVhc2hMZXZlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpby1vcHRpb25cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17Y3VycmVudFNxdWFzaExldmVsLmh0bWxMYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3F1YXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50U3F1YXNoTGV2ZWwucGl4ZWxWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjdXJyZW50U3F1YXNoTGV2ZWwuaHRtbExhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHByb3BzLm9uSGFuZGxlT3B0aW9uc1NxdWFzaExldmVsKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3QtdGV4dFwiPntjdXJyZW50U3F1YXNoTGV2ZWwudGV4dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW8tb3B0aW9uXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2N1cnJlbnRTcXVhc2hMZXZlbC5odG1sTGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3F1YXNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50U3F1YXNoTGV2ZWwucGl4ZWxWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjdXJyZW50U3F1YXNoTGV2ZWwuaHRtbExhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHByb3BzLm9uSGFuZGxlT3B0aW9uc1NxdWFzaExldmVsKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3QtdGV4dFwiPntjdXJyZW50U3F1YXNoTGV2ZWwudGV4dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNxdWFzaExldmVsTGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gRmlsZUV4dGVuc2lvbk9wdGlvbnMocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBmaWxlRXh0ZW5zaW9uc0xpc3QgPSBmaWxFeHRlbnNpb25zTW9kZWwubWFwKChmaWxlRXh0T2JqLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChmaWxFeHRlbnNpb25zTW9kZWxbMF0gPT09IGZpbGVFeHRPYmopIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW8tb3B0aW9uXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2ZpbGVFeHRPYmouaHRtbExhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxldHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZmlsZUV4dE9iai5odG1sTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZmlsZUV4dE9iai5odG1sTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gcHJvcHMub25IYW5kbGVPcHRpb25zRmlsZUV4dGVuaW9ucyhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZWN0LXRleHRcIj57ZmlsZUV4dE9iai50ZXh0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpby1vcHRpb25cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17ZmlsZUV4dE9iai5odG1sTGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZXR5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpbGVFeHRPYmouaHRtbExhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2ZpbGVFeHRPYmouaHRtbExhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHByb3BzLm9uSGFuZGxlT3B0aW9uc0ZpbGVFeHRlbmlvbnMoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlbGVjdC10ZXh0XCI+e2ZpbGVFeHRPYmoudGV4dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZpbGVFeHRlbnNpb25zTGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybU9wdGlvbnMocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9ybS1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxoMz4zLiBPcHRpb25zPC9oMz5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0taGVhZGVyXCI+RmlsZSBFeHRlbnNpb25zPC9wPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpby1jb250YWluZXItZmlsZXR5cGVcIj5cclxuICAgICAgICAgICAgICAgIDxGaWxlRXh0ZW5zaW9uT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIG9uSGFuZGxlT3B0aW9uc0ZpbGVFeHRlbmlvbnM9e3Byb3BzLm9uSGFuZGxlT3B0aW9uc0ZpbGVFeHRlbmlvbnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLWhlYWRlclwiPlNxdWFzaDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1hcmdpbi1maXhcIj5TcXVhc2ggc2NhbGUgZG93biBpbWFnZSBmaWxlIHNpemUuPC9wPlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1hcmdpbi1maXhcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5JZiB5b3VyIGZpbGUgc2l6ZSBpcyBiaWcgZW5vdWdoIGl0IG1heSByZWZpbmUgaWxsdXN0cmF0aW9ucy4gU2xpY2luZyByYXRpbyB3aWxsIG5vdCBiZSBhZmZlY3RlZCAtIGl0IHdpbGwgcHJvZHVjZSB0aGUgc2FtZSBwYWdlIGRpdmlzaW9uLjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+aWYgeW91ciBmaWxlIGlzIHNtYWxsZXIgdGhhbiB0aGUgc2VsZWN0ZWQgc3F1YXNoIG9wdGlvbiwgaXQgd2lsbCBleHBhbmQgeW91ciBpbWFnZSBhbmQgYXR0ZW1wdCB0byBwcm9kdWNlIHRvIHRoZSBzYW1lIGFzcGVjdCByYXRpbyBvZiB5b3VyIGNob3NlbiB3ZWJjb21pYyBwbGF0Zm9ybS48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpby1jb250YWluZXItc3F1YXNoXCI+XHJcbiAgICAgICAgICAgICAgICA8U3F1YXNoT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIG9uSGFuZGxlT3B0aW9uc1NxdWFzaExldmVsPXtwcm9wcy5vbkhhbmRsZU9wdGlvbnNTcXVhc2hMZXZlbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///cx83\n");

/***/ })

}]);
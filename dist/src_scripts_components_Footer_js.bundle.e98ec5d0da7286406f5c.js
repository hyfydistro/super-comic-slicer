/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksuper_comic_slicer"] = self["webpackChunksuper_comic_slicer"] || []).push([["src_scripts_components_Footer_js"],{

/***/ "UfkZ":
/*!******************************************!*\
  !*** ./src/scripts/components/Footer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"nKUr\");\n\n\n// TODO\n// Social Media Considerations\n// (WIP)\nfunction Footer() {\n  function handleCopyLink(e) {\n    e.preventDefault();\n    const link = document.querySelector(\"#copy-link\");\n    link.select();\n    link.setSelectionRange(0, 99999);\n    document.execCommand(\"copy\");\n    alert(\"Copied the text: \" + link.value);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"footer\", {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n      className: \"column-wrapper\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"column-one\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n          className: \"share-container\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n            children: \"Share\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"share-icon-container\",\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n              className: \"icon__wrapper share-icon\",\n              href: \"https://twitter.com/intent/tweet?text=Do you need to crop and divide your really long webcomic page? Super Comic Slicer will do the job for you! \\uD83D\\uDC96  Also, features scaling down size. \\uD83C\\uDF89 Share and support this handy tool. Created by @Spectredox&hashtags=SuperComicSlicer,cropper,comics,webtoon,scaler&url=https://supercomicslicer.netlify.app/\",\n              target: \"_blank\",\n              title: \"Share on Twitter\",\n              rel: \"noopener\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                className: \"icon__block\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                  className: \"icon icon-twitter\"\n                })\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n              title: \"Share on Facebook\",\n              className: \"icon__wrapper share-icon\",\n              href: \"https://www.facebook.com/sharer/sharer.php?u=https://supercomicslicer.netlify.app/\",\n              target: \"_blank\",\n              rel: \"noopener\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                className: \"icon__block\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                  className: \"icon icon-facebook\"\n                })\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n              title: \"Share on Tumblr\",\n              className: \"icon__wrapper share-icon\",\n              href: \"http://tumblr.com/widgets/share/tool?canonicalUrl=https://supercomicslicer.netlify.app/\",\n              target: \"_blank\",\n              rel: \"noopener\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                className: \"icon__block\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                  className: \"icon icon-tumblr\"\n                })\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n              title: \"Copy Link\",\n              href: \"#\",\n              className: \"icon__wrapper share-icon\",\n              onClick: e => handleCopyLink(e),\n              rel: \"noopener\",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                className: \"icon__block\",\n                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                  className: \"icon icon-link\"\n                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                  type: \"text\",\n                  defaultValue: \"https://supercomicslicer.netlify.app/\",\n                  id: \"copy-link\"\n                })]\n              })\n            })]\n          })]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n          className: \"contribute-container\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n            children: \"Contribute\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n            href: \"https://github.com/hyfydistro/super-comic-slicer\",\n            target: \"_blank\",\n            rel: \"noopener\",\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n              className: \"contribute-icon-container\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                className: \"contribute-icon icon__wrapper\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                  className: \"icon icon-github\"\n                })\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                className: \"contribute-text\",\n                children: \"super-comic-slicer\"\n              })]\n            })\n          })]\n        })]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"column-two\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n          className: \"donate-container\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n            children: \"Donate\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n            href: \"https://www.buymeacoffee.com/spectredox\",\n            className: \"donate-image__wrapper\",\n            rel: \"noopener\",\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n              className: \"donate-image\",\n              src: \"images/btn-bmc.png\",\n              alt: \"Buy me a coffee\"\n            })\n          })]\n        })\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n      className: \"footer-notes\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n        className: \"text-small\",\n        children: [\"Website developed by Caroline Rozali \\u2022 \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n          href: \"https://twitter.com/Spectredox\",\n          children: \"Twitter\"\n        }), \" \\u2022 \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n          href: \"https://www.instagram.com/spectredox/\",\n          children: \"Instagram\"\n        }), \" \\u2022 \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n          href: \"https://github.com/hyfydistro\",\n          children: \"Github\"\n        }), \" \\u2022 2021 \\u2022 \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n          href: \"https://github.com/hyfydistro/super-comic-slicer/blob/main/LICENSE\",\n          children: \"License\"\n        }), \" \\u2022 Version 1.0.9\"]\n      })\n    })]\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1jb21pYy1zbGljZXIvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0Zvb3Rlci5qcz8yZGUzIl0sIm5hbWVzIjpbIkZvb3RlciIsImhhbmRsZUNvcHlMaW5rIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGluayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdCIsInNldFNlbGVjdGlvblJhbmdlIiwiZXhlY0NvbW1hbmQiLCJhbGVydCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUU3QixXQUFTQyxjQUFULENBQXdCQyxDQUF4QixFQUEyQjtBQUN2QkEsS0FBQyxDQUFDQyxjQUFGO0FBRUEsVUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBYjtBQUNBRixRQUFJLENBQUNHLE1BQUw7QUFDQUgsUUFBSSxDQUFDSSxpQkFBTCxDQUF1QixDQUF2QixFQUEwQixLQUExQjtBQUNBSCxZQUFRLENBQUNJLFdBQVQsQ0FBcUIsTUFBckI7QUFFQUMsU0FBSyxDQUFDLHNCQUFzQk4sSUFBSSxDQUFDTyxLQUE1QixDQUFMO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0k7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxvQ0FDSTtBQUFHLHVCQUFTLEVBQUMsMEJBQWI7QUFDSSxrQkFBSSxFQUFDLDJXQURUO0FBRUksb0JBQU0sRUFBQyxRQUZYO0FBR0ksbUJBQUssRUFBQyxrQkFIVjtBQUlJLGlCQUFHLEVBQUMsVUFKUjtBQUFBLHFDQU1JO0FBQU0seUJBQVMsRUFBQyxhQUFoQjtBQUFBLHVDQUNJO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBREo7QUFOSixjQURKLGVBV0k7QUFBRyxtQkFBSyxFQUFDLG1CQUFUO0FBQ0ksdUJBQVMsRUFBQywwQkFEZDtBQUVJLGtCQUFJLEVBQUMsb0ZBRlQ7QUFHSSxvQkFBTSxFQUFDLFFBSFg7QUFJSSxpQkFBRyxFQUFDLFVBSlI7QUFBQSxxQ0FNSTtBQUFNLHlCQUFTLEVBQUMsYUFBaEI7QUFBQSx1Q0FDSTtBQUFHLDJCQUFTLEVBQUM7QUFBYjtBQURKO0FBTkosY0FYSixlQXFCSTtBQUFHLG1CQUFLLEVBQUMsaUJBQVQ7QUFDSSx1QkFBUyxFQUFDLDBCQURkO0FBRUksa0JBQUksRUFBQyx5RkFGVDtBQUdJLG9CQUFNLEVBQUMsUUFIWDtBQUlJLGlCQUFHLEVBQUMsVUFKUjtBQUFBLHFDQU1JO0FBQU0seUJBQVMsRUFBQyxhQUFoQjtBQUFBLHVDQUNJO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBREo7QUFOSixjQXJCSixlQStCSTtBQUFHLG1CQUFLLEVBQUMsV0FBVDtBQUNJLGtCQUFJLEVBQUMsR0FEVDtBQUVJLHVCQUFTLEVBQUMsMEJBRmQ7QUFHSSxxQkFBTyxFQUFHVCxDQUFELElBQU9ELGNBQWMsQ0FBQ0MsQ0FBRCxDQUhsQztBQUlJLGlCQUFHLEVBQUMsVUFKUjtBQUFBLHFDQU1JO0FBQU0seUJBQVMsRUFBQyxhQUFoQjtBQUFBLHdDQUNJO0FBQUcsMkJBQVMsRUFBQztBQUFiLGtCQURKLGVBRUk7QUFBTyxzQkFBSSxFQUFDLE1BQVo7QUFBbUIsOEJBQVksRUFBQyx1Q0FBaEM7QUFBd0Usb0JBQUUsRUFBQztBQUEzRSxrQkFGSjtBQUFBO0FBTkosY0EvQko7QUFBQSxZQUZKO0FBQUEsVUFESixlQWdESTtBQUFLLG1CQUFTLEVBQUMsc0JBQWY7QUFBQSxrQ0FDSTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQ0ksZ0JBQUksRUFBQyxrREFEVDtBQUVJLGtCQUFNLEVBQUMsUUFGWDtBQUdJLGVBQUcsRUFBQyxVQUhSO0FBQUEsbUNBS0k7QUFBSyx1QkFBUyxFQUFDLDJCQUFmO0FBQUEsc0NBQ0k7QUFBTSx5QkFBUyxFQUFDLCtCQUFoQjtBQUFBLHVDQUNJO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBREosZ0JBREosZUFJSTtBQUFNLHlCQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBTEosWUFGSjtBQUFBLFVBaERKO0FBQUEsUUFESixlQWtFSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxrQkFBZjtBQUFBLGtDQUNJO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBRyxnQkFBSSxFQUFDLHlDQUFSO0FBQWtELHFCQUFTLEVBQUMsdUJBQTVEO0FBQW9GLGVBQUcsRUFBQyxVQUF4RjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQyxjQUFmO0FBQThCLGlCQUFHLEVBQUMsb0JBQWxDO0FBQXVELGlCQUFHLEVBQUM7QUFBM0Q7QUFESixZQUZKO0FBQUE7QUFESixRQWxFSjtBQUFBLE1BREosZUE4RUk7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDZCQUE4QjtBQUFHLGlCQUFTLEVBQUMsWUFBYjtBQUFBLGdGQUFpRTtBQUFHLGNBQUksRUFBQyxnQ0FBUjtBQUFBO0FBQUEsVUFBakUsMkJBQXdIO0FBQUcsY0FBSSxFQUFDLHVDQUFSO0FBQUE7QUFBQSxVQUF4SCwyQkFBd0w7QUFBRyxjQUFJLEVBQUMsK0JBQVI7QUFBQTtBQUFBLFVBQXhMLHVDQUFvUDtBQUFHLGNBQUksRUFBQyxvRUFBUjtBQUFBO0FBQUEsVUFBcFA7QUFBQTtBQUE5QixNQTlFSjtBQUFBLElBREo7QUFrRkgiLCJmaWxlIjoiVWZrWi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE9cclxuLy8gU29jaWFsIE1lZGlhIENvbnNpZGVyYXRpb25zXHJcbi8vIChXSVApXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29weUxpbmsoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29weS1saW5rXCIpO1xyXG4gICAgICAgIGxpbmsuc2VsZWN0KCk7XHJcbiAgICAgICAgbGluay5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG5cclxuICAgICAgICBhbGVydChcIkNvcGllZCB0aGUgdGV4dDogXCIgKyBsaW5rLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uLW9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5TaGFyZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmUtaWNvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25fX3dyYXBwZXIgc2hhcmUtaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3RleHQ9RG8geW91IG5lZWQgdG8gY3JvcCBhbmQgZGl2aWRlIHlvdXIgcmVhbGx5IGxvbmcgd2ViY29taWMgcGFnZT8gU3VwZXIgQ29taWMgU2xpY2VyIHdpbGwgZG8gdGhlIGpvYiBmb3IgeW91ISDwn5KWICBBbHNvLCBmZWF0dXJlcyBzY2FsaW5nIGRvd24gc2l6ZS4g8J+OiSBTaGFyZSBhbmQgc3VwcG9ydCB0aGlzIGhhbmR5IHRvb2wuIENyZWF0ZWQgYnkgQFNwZWN0cmVkb3gmaGFzaHRhZ3M9U3VwZXJDb21pY1NsaWNlcixjcm9wcGVyLGNvbWljcyx3ZWJ0b29uLHNjYWxlciZ1cmw9aHR0cHM6Ly9zdXBlcmNvbWljc2xpY2VyLm5ldGxpZnkuYXBwL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNoYXJlIG9uIFR3aXR0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbl9fYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXR3aXR0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJTaGFyZSBvbiBGYWNlYm9va1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbl9fd3JhcHBlciBzaGFyZS1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9aHR0cHM6Ly9zdXBlcmNvbWljc2xpY2VyLm5ldGxpZnkuYXBwL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25fX2Jsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1mYWNlYm9va1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIlNoYXJlIG9uIFR1bWJsclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbl9fd3JhcHBlciBzaGFyZS1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3R1bWJsci5jb20vd2lkZ2V0cy9zaGFyZS90b29sP2Nhbm9uaWNhbFVybD1odHRwczovL3N1cGVyY29taWNzbGljZXIubmV0bGlmeS5hcHAvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uX19ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tdHVtYmxyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiQ29weSBMaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbl9fd3JhcHBlciBzaGFyZS1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ29weUxpbmsoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25fX2Jsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1saW5rXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9XCJodHRwczovL3N1cGVyY29taWNzbGljZXIubmV0bGlmeS5hcHAvXCIgaWQ9XCJjb3B5LWxpbmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJpYnV0ZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNvbnRyaWJ1dGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oeWZ5ZGlzdHJvL3N1cGVyLWNvbWljLXNsaWNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyaWJ1dGUtaWNvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250cmlidXRlLWljb24gaWNvbl9fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tZ2l0aHViXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250cmlidXRlLXRleHRcIj5zdXBlci1jb21pYy1zbGljZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4tdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Eb25hdGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYnV5bWVhY29mZmVlLmNvbS9zcGVjdHJlZG94XCIgY2xhc3NOYW1lPVwiZG9uYXRlLWltYWdlX193cmFwcGVyXCIgcmVsPVwibm9vcGVuZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZG9uYXRlLWltYWdlXCIgc3JjPVwiaW1hZ2VzL2J0bi1ibWMucG5nXCIgYWx0PVwiQnV5IG1lIGEgY29mZmVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLW5vdGVzXCI+PHAgY2xhc3NOYW1lPVwidGV4dC1zbWFsbFwiPldlYnNpdGUgZGV2ZWxvcGVkIGJ5IENhcm9saW5lIFJvemFsaSDigKIgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vU3BlY3RyZWRveFwiPlR3aXR0ZXI8L2E+IOKAoiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zcGVjdHJlZG94L1wiPkluc3RhZ3JhbTwvYT4g4oCiIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaHlmeWRpc3Ryb1wiPkdpdGh1YjwvYT4g4oCiIDIwMjEg4oCiIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaHlmeWRpc3Ryby9zdXBlci1jb21pYy1zbGljZXIvYmxvYi9tYWluL0xJQ0VOU0VcIj5MaWNlbnNlPC9hPiDigKIgVmVyc2lvbiAxLjAuOTwvcD48L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///UfkZ\n");

/***/ })

}]);
(self.webpackChunksuper_comic_slicer=self.webpackChunksuper_comic_slicer||[]).push([[835],{835:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);\n\n\n// TODO\n// Social Media Considerations\n// (WIP)\nfunction Footer() {\n  function handleCopyLink(e) {\n    e.preventDefault();\n    const link = document.querySelector("#copy-link");\n    link.select();\n    link.setSelectionRange(0, 99999);\n    document.execCommand("copy");\n    alert("Copied the text: " + link.value);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {\n      className: "column-wrapper",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {\n        className: "column-one",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {\n          className: "share-container",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {\n            children: "Share"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {\n            className: "share-icon-container",\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {\n              className: "icon__wrapper share-icon",\n              href: "https://twitter.com/intent/tweet?text=Do you need to crop and divide your really long webcomic page? Super Comic Slicer will do the job for you! \\uD83D\\uDC96  Also, features scaling down size. \\uD83C\\uDF89 Share and support this handy tool. Created by @Spectredox&hashtags=SuperComicSlicer,cropper,comics,webtoon,scaler&url=https://supercomicslicer.netlify.app/",\n              target: "_blank",\n              title: "Share on Twitter",\n              rel: "noopener",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {\n                className: "icon__block",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {\n                  className: "icon icon-twitter"\n                })\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {\n              title: "Share on Facebook",\n              className: "icon__wrapper share-icon",\n              href: "https://www.facebook.com/sharer/sharer.php?u=https://supercomicslicer.netlify.app/",\n              target: "_blank",\n              rel: "noopener",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {\n                className: "icon__block",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {\n                  className: "icon icon-facebook"\n                })\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {\n              title: "Share on Tumblr",\n              className: "icon__wrapper share-icon",\n              href: "http://tumblr.com/widgets/share/tool?canonicalUrl=https://supercomicslicer.netlify.app/",\n              target: "_blank",\n              rel: "noopener",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {\n                className: "icon__block",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {\n                  className: "icon icon-tumblr"\n                })\n              })\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {\n              title: "Copy Link",\n              href: "#",\n              className: "icon__wrapper share-icon",\n              onClick: e => handleCopyLink(e),\n              rel: "noopener",\n              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {\n                className: "icon__block",\n                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {\n                  className: "icon icon-link"\n                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {\n                  type: "text",\n                  defaultValue: "https://supercomicslicer.netlify.app/",\n                  id: "copy-link"\n                })]\n              })\n            })]\n          })]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {\n          className: "contribute-container",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {\n            children: "Contribute"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {\n            href: "https://github.com/hyfydistro/super-comic-slicer",\n            target: "_blank",\n            rel: "noopener",\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {\n              className: "contribute-icon-container",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {\n                className: "contribute-icon icon__wrapper",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {\n                  className: "icon icon-github"\n                })\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {\n                className: "contribute-text",\n                children: "super-comic-slicer"\n              })]\n            })\n          })]\n        })]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {\n        className: "column-two",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {\n          className: "donate-container",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {\n            children: "Donate"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {\n            href: "https://www.buymeacoffee.com/spectredox",\n            className: "donate-image__wrapper",\n            rel: "noopener",\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {\n              className: "donate-image",\n              src: "images/bmc-btn.png",\n              alt: "Buy me a coffee"\n            })\n          })]\n        })\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {\n      className: "footer-notes",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {\n        className: "text-small",\n        children: ["Website developed by Caroline Rozali \\u2022 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {\n          href: "https://twitter.com/Spectredox",\n          children: "Twitter"\n        }), " \\u2022 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {\n          href: "https://www.instagram.com/spectredox/",\n          children: "Instagram"\n        }), " \\u2022 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {\n          href: "https://github.com/hyfydistro",\n          children: "Github"\n        }), " \\u2022 2021 \\u2022 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {\n          href: "https://github.com/hyfydistro/super-comic-slicer/blob/main/LICENSE",\n          children: "License"\n        }), " \\u2022 Version 1.0.5"]\n      })\n    })]\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1jb21pYy1zbGljZXIvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0Zvb3Rlci5qcz8yZGUzIl0sIm5hbWVzIjpbIkZvb3RlciIsImhhbmRsZUNvcHlMaW5rIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGluayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdCIsInNldFNlbGVjdGlvblJhbmdlIiwiZXhlY0NvbW1hbmQiLCJhbGVydCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUU3QixXQUFTQyxjQUFULENBQXdCQyxDQUF4QixFQUEyQjtBQUN2QkEsS0FBQyxDQUFDQyxjQUFGO0FBRUEsVUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBYjtBQUNBRixRQUFJLENBQUNHLE1BQUw7QUFDQUgsUUFBSSxDQUFDSSxpQkFBTCxDQUF1QixDQUF2QixFQUEwQixLQUExQjtBQUNBSCxZQUFRLENBQUNJLFdBQVQsQ0FBcUIsTUFBckI7QUFFQUMsU0FBSyxDQUFDLHNCQUFzQk4sSUFBSSxDQUFDTyxLQUE1QixDQUFMO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0k7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxvQ0FDSTtBQUFHLHVCQUFTLEVBQUMsMEJBQWI7QUFDSSxrQkFBSSxFQUFDLDJXQURUO0FBRUksb0JBQU0sRUFBQyxRQUZYO0FBR0ksbUJBQUssRUFBQyxrQkFIVjtBQUlJLGlCQUFHLEVBQUMsVUFKUjtBQUFBLHFDQU1JO0FBQU0seUJBQVMsRUFBQyxhQUFoQjtBQUFBLHVDQUNJO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBREo7QUFOSixjQURKLGVBV0k7QUFBRyxtQkFBSyxFQUFDLG1CQUFUO0FBQ0ksdUJBQVMsRUFBQywwQkFEZDtBQUVJLGtCQUFJLEVBQUMsb0ZBRlQ7QUFHSSxvQkFBTSxFQUFDLFFBSFg7QUFJSSxpQkFBRyxFQUFDLFVBSlI7QUFBQSxxQ0FNSTtBQUFNLHlCQUFTLEVBQUMsYUFBaEI7QUFBQSx1Q0FDSTtBQUFHLDJCQUFTLEVBQUM7QUFBYjtBQURKO0FBTkosY0FYSixlQXFCSTtBQUFHLG1CQUFLLEVBQUMsaUJBQVQ7QUFDSSx1QkFBUyxFQUFDLDBCQURkO0FBRUksa0JBQUksRUFBQyx5RkFGVDtBQUdJLG9CQUFNLEVBQUMsUUFIWDtBQUlJLGlCQUFHLEVBQUMsVUFKUjtBQUFBLHFDQU1JO0FBQU0seUJBQVMsRUFBQyxhQUFoQjtBQUFBLHVDQUNJO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBREo7QUFOSixjQXJCSixlQStCSTtBQUFHLG1CQUFLLEVBQUMsV0FBVDtBQUNJLGtCQUFJLEVBQUMsR0FEVDtBQUVJLHVCQUFTLEVBQUMsMEJBRmQ7QUFHSSxxQkFBTyxFQUFHVCxDQUFELElBQU9ELGNBQWMsQ0FBQ0MsQ0FBRCxDQUhsQztBQUlJLGlCQUFHLEVBQUMsVUFKUjtBQUFBLHFDQU1JO0FBQU0seUJBQVMsRUFBQyxhQUFoQjtBQUFBLHdDQUNJO0FBQUcsMkJBQVMsRUFBQztBQUFiLGtCQURKLGVBRUk7QUFBTyxzQkFBSSxFQUFDLE1BQVo7QUFBbUIsOEJBQVksRUFBQyx1Q0FBaEM7QUFBd0Usb0JBQUUsRUFBQztBQUEzRSxrQkFGSjtBQUFBO0FBTkosY0EvQko7QUFBQSxZQUZKO0FBQUEsVUFESixlQWdESTtBQUFLLG1CQUFTLEVBQUMsc0JBQWY7QUFBQSxrQ0FDSTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQ0ksZ0JBQUksRUFBQyxrREFEVDtBQUVJLGtCQUFNLEVBQUMsUUFGWDtBQUdJLGVBQUcsRUFBQyxVQUhSO0FBQUEsbUNBS0k7QUFBSyx1QkFBUyxFQUFDLDJCQUFmO0FBQUEsc0NBQ0k7QUFBTSx5QkFBUyxFQUFDLCtCQUFoQjtBQUFBLHVDQUNJO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBREosZ0JBREosZUFJSTtBQUFNLHlCQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBTEosWUFGSjtBQUFBLFVBaERKO0FBQUEsUUFESixlQWtFSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxrQkFBZjtBQUFBLGtDQUNJO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBRyxnQkFBSSxFQUFDLHlDQUFSO0FBQWtELHFCQUFTLEVBQUMsdUJBQTVEO0FBQW9GLGVBQUcsRUFBQyxVQUF4RjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQyxjQUFmO0FBQThCLGlCQUFHLEVBQUMsb0JBQWxDO0FBQXVELGlCQUFHLEVBQUM7QUFBM0Q7QUFESixZQUZKO0FBQUE7QUFESixRQWxFSjtBQUFBLE1BREosZUE4RUk7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDZCQUE4QjtBQUFHLGlCQUFTLEVBQUMsWUFBYjtBQUFBLGdGQUFpRTtBQUFHLGNBQUksRUFBQyxnQ0FBUjtBQUFBO0FBQUEsVUFBakUsMkJBQXdIO0FBQUcsY0FBSSxFQUFDLHVDQUFSO0FBQUE7QUFBQSxVQUF4SCwyQkFBd0w7QUFBRyxjQUFJLEVBQUMsK0JBQVI7QUFBQTtBQUFBLFVBQXhMLHVDQUFvUDtBQUFHLGNBQUksRUFBQyxvRUFBUjtBQUFBO0FBQUEsVUFBcFA7QUFBQTtBQUE5QixNQTlFSjtBQUFBLElBREo7QUFrRkgiLCJmaWxlIjoiODM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ET1xyXG4vLyBTb2NpYWwgTWVkaWEgQ29uc2lkZXJhdGlvbnNcclxuLy8gKFdJUClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDb3B5TGluayhlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3B5LWxpbmtcIik7XHJcbiAgICAgICAgbGluay5zZWxlY3QoKTtcclxuICAgICAgICBsaW5rLnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTk5KTtcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcblxyXG4gICAgICAgIGFsZXJ0KFwiQ29waWVkIHRoZSB0ZXh0OiBcIiArIGxpbmsudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4tb25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNoYXJlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZS1pY29uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbl9fd3JhcHBlciBzaGFyZS1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD1EbyB5b3UgbmVlZCB0byBjcm9wIGFuZCBkaXZpZGUgeW91ciByZWFsbHkgbG9uZyB3ZWJjb21pYyBwYWdlPyBTdXBlciBDb21pYyBTbGljZXIgd2lsbCBkbyB0aGUgam9iIGZvciB5b3UhIPCfkpYgIEFsc28sIGZlYXR1cmVzIHNjYWxpbmcgZG93biBzaXplLiDwn46JIFNoYXJlIGFuZCBzdXBwb3J0IHRoaXMgaGFuZHkgdG9vbC4gQ3JlYXRlZCBieSBAU3BlY3RyZWRveCZoYXNodGFncz1TdXBlckNvbWljU2xpY2VyLGNyb3BwZXIsY29taWNzLHdlYnRvb24sc2NhbGVyJnVybD1odHRwczovL3N1cGVyY29taWNzbGljZXIubmV0bGlmeS5hcHAvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2hhcmUgb24gVHdpdHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uX19ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tdHdpdHRlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIlNoYXJlIG9uIEZhY2Vib29rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uX193cmFwcGVyIHNoYXJlLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT1odHRwczovL3N1cGVyY29taWNzbGljZXIubmV0bGlmeS5hcHAvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbl9fYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWZhY2Vib29rXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiU2hhcmUgb24gVHVtYmxyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uX193cmFwcGVyIHNoYXJlLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vdHVtYmxyLmNvbS93aWRnZXRzL3NoYXJlL3Rvb2w/Y2Fub25pY2FsVXJsPWh0dHBzOi8vc3VwZXJjb21pY3NsaWNlci5uZXRsaWZ5LmFwcC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25fX2Jsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi10dW1ibHJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJDb3B5IExpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uX193cmFwcGVyIHNoYXJlLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDb3B5TGluayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbl9fYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWxpbmtcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT1cImh0dHBzOi8vc3VwZXJjb21pY3NsaWNlci5uZXRsaWZ5LmFwcC9cIiBpZD1cImNvcHktbGlua1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cmlidXRlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q29udHJpYnV0ZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2h5ZnlkaXN0cm8vc3VwZXItY29taWMtc2xpY2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJpYnV0ZS1pY29uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRyaWJ1dGUtaWNvbiBpY29uX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1naXRodWJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRyaWJ1dGUtdGV4dFwiPnN1cGVyLWNvbWljLXNsaWNlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbi10d29cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbmF0ZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkRvbmF0ZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5idXltZWFjb2ZmZWUuY29tL3NwZWN0cmVkb3hcIiBjbGFzc05hbWU9XCJkb25hdGUtaW1hZ2VfX3dyYXBwZXJcIiByZWw9XCJub29wZW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkb25hdGUtaW1hZ2VcIiBzcmM9XCJpbWFnZXMvYm1jLWJ0bi5wbmdcIiBhbHQ9XCJCdXkgbWUgYSBjb2ZmZWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbm90ZXNcIj48cCBjbGFzc05hbWU9XCJ0ZXh0LXNtYWxsXCI+V2Vic2l0ZSBkZXZlbG9wZWQgYnkgQ2Fyb2xpbmUgUm96YWxpIOKAoiA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9TcGVjdHJlZG94XCI+VHdpdHRlcjwvYT4g4oCiIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NwZWN0cmVkb3gvXCI+SW5zdGFncmFtPC9hPiDigKIgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oeWZ5ZGlzdHJvXCI+R2l0aHViPC9hPiDigKIgMjAyMSDigKIgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oeWZ5ZGlzdHJvL3N1cGVyLWNvbWljLXNsaWNlci9ibG9iL21haW4vTElDRU5TRVwiPkxpY2Vuc2U8L2E+IOKAoiBWZXJzaW9uIDEuMC41PC9wPjwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///835\n')}}]);
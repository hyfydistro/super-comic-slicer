(self.webpackChunksuper_comic_slicer=self.webpackChunksuper_comic_slicer||[]).push([[348],{85:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";eval('\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(294);\n// EXTERNAL MODULE: ./node_modules/react-dom/index.js\nvar react_dom = __webpack_require__(935);\n// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js\nvar jsx_runtime = __webpack_require__(893);\n;// CONCATENATED MODULE: ./src/scripts/components/Footer.js\n\n\n\n// TODO\n// Social Media Considerations\n// (WIP)\nfunction Footer() {\n  function handleCopyLink(e) {\n    e.preventDefault();\n    var link = document.querySelector("#copy-link");\n    link.select();\n    link.setSelectionRange(0, 99999);\n    document.execCommand("copy");\n    alert("Copied the text: " + link.value);\n  }\n\n  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {\n    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {\n      className: "column-wrapper",\n      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {\n        className: "column-one",\n        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {\n          className: "share-container",\n          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {\n            children: "Share"\n          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {\n            className: "share-icon-container",\n            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {\n              className: "icon__wrapper share-icon",\n              href: "https://twitter.com/intent/tweet?text=Do you need to crop and divide your really long webcomic page? Super Comic Slicer will do the job for you! \\uD83D\\uDC96  Also, features scaling down size. \\uD83C\\uDF89 Share and support this handy tool. Created by @Spectredox&hashtags=SuperComicSlicer,cropper,comics,webtoon,scaler&url=https://supercomicslicer.netlify.app/",\n              target: "_blank",\n              title: "Share on Twitter",\n              children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {\n                className: "icon__block",\n                children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {\n                  className: "icon icon-twitter"\n                })\n              })\n            }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {\n              title: "Share on Facebook",\n              className: "icon__wrapper share-icon",\n              href: "https://www.facebook.com/sharer/sharer.php?u=https://supercomicslicer.netlify.app/",\n              target: "_blank",\n              children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {\n                className: "icon__block",\n                children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {\n                  className: "icon icon-facebook"\n                })\n              })\n            }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {\n              title: "Share on Tumblr",\n              className: "icon__wrapper share-icon",\n              href: "http://tumblr.com/widgets/share/tool?canonicalUrl=https://supercomicslicer.netlify.app/",\n              target: "_blank",\n              children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {\n                className: "icon__block",\n                children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {\n                  className: "icon icon-tumblr"\n                })\n              })\n            }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {\n              title: "Copy Link",\n              href: "#",\n              className: "icon__wrapper share-icon",\n              onClick: function onClick(e) {\n                return handleCopyLink(e);\n              },\n              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {\n                className: "icon__block",\n                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("i", {\n                  className: "icon icon-link"\n                }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {\n                  type: "text",\n                  defaultValue: "https://supercomicslicer.netlify.app/",\n                  id: "copy-link"\n                })]\n              })\n            })]\n          })]\n        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {\n          className: "contribute-container",\n          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {\n            children: "Contribute"\n          }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {\n            href: "https://github.com/hyfydistro/super-comic-slicer",\n            target: "_blank",\n            rel: "noopener noreferrer",\n            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {\n              className: "contribute-icon-container",\n              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {\n                className: "contribute-icon icon__wrapper",\n                children: /*#__PURE__*/(0,jsx_runtime.jsx)("i", {\n                  className: "icon icon-github"\n                })\n              }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {\n                className: "contribute-text",\n                children: "super-comic-slicer"\n              })]\n            })\n          })]\n        })]\n      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {\n        className: "column-two",\n        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {\n          className: "donate-container",\n          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {\n            children: "Donate"\n          }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {\n            href: "https://www.buymeacoffee.com/spectredox",\n            className: "donate-image__wrapper",\n            children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {\n              className: "donate-image",\n              src: "images/bmc-btn.png",\n              alt: "Buy me a coffee"\n            })\n          })]\n        })\n      })]\n    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {\n      className: "footer-notes",\n      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {\n        className: "text-small",\n        children: ["Website developed by Caroline Rozali \\u2022 ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {\n          href: "https://twitter.com/Spectredox",\n          children: "Twitter"\n        }), " \\u2022 ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {\n          href: "https://www.instagram.com/spectredox/",\n          children: "Instagram"\n        }), " \\u2022 ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {\n          href: "https://github.com/hyfydistro",\n          children: "Github"\n        }), " \\u2022 2021 \\u2022 ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {\n          href: "https://github.com/hyfydistro/super-comic-slicer/blob/main/LICENSE",\n          children: "License"\n        }), " \\u2022 Version 1.0.0"]\n      })\n    })]\n  });\n}\n;// CONCATENATED MODULE: ./src/footer.js\n\n\n\n\nreact_dom.render( /*#__PURE__*/(0,jsx_runtime.jsx)(Footer, {}), document.querySelector("footer"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1jb21pYy1zbGljZXIvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0Zvb3Rlci5qcz8yZGUzIiwid2VicGFjazovL3N1cGVyLWNvbWljLXNsaWNlci8uL3NyYy9mb290ZXIuanM/YjU2MSJdLCJuYW1lcyI6WyJGb290ZXIiLCJoYW5kbGVDb3B5TGluayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxpbmsiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3QiLCJzZXRTZWxlY3Rpb25SYW5nZSIsImV4ZWNDb21tYW5kIiwiYWxlcnQiLCJ2YWx1ZSIsIlJlYWN0RE9NIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFFN0IsV0FBU0MsY0FBVCxDQUF3QkMsQ0FBeEIsRUFBMkI7QUFDdkJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBLFFBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWI7QUFDQUYsUUFBSSxDQUFDRyxNQUFMO0FBQ0FILFFBQUksQ0FBQ0ksaUJBQUwsQ0FBdUIsQ0FBdkIsRUFBMEIsS0FBMUI7QUFDQUgsWUFBUSxDQUFDSSxXQUFULENBQXFCLE1BQXJCO0FBRUFDLFNBQUssQ0FBQyxzQkFBc0JOLElBQUksQ0FBQ08sS0FBNUIsQ0FBTDtBQUNIOztBQUVELHNCQUNJO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGtDQUNJO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBSyxxQkFBUyxFQUFDLHNCQUFmO0FBQUEsb0NBQ0k7QUFBRyx1QkFBUyxFQUFDLDBCQUFiO0FBQ0ksa0JBQUksRUFBQywyV0FEVDtBQUVJLG9CQUFNLEVBQUMsUUFGWDtBQUdJLG1CQUFLLEVBQUMsa0JBSFY7QUFBQSxxQ0FJSTtBQUFNLHlCQUFTLEVBQUMsYUFBaEI7QUFBQSx1Q0FDSTtBQUFHLDJCQUFTLEVBQUM7QUFBYjtBQURKO0FBSkosY0FESixlQVNJO0FBQUcsbUJBQUssRUFBQyxtQkFBVDtBQUNJLHVCQUFTLEVBQUMsMEJBRGQ7QUFFSSxrQkFBSSxFQUFDLG9GQUZUO0FBR0ksb0JBQU0sRUFBQyxRQUhYO0FBQUEscUNBSUk7QUFBTSx5QkFBUyxFQUFDLGFBQWhCO0FBQUEsdUNBQ0k7QUFBRywyQkFBUyxFQUFDO0FBQWI7QUFESjtBQUpKLGNBVEosZUFpQkk7QUFBRyxtQkFBSyxFQUFDLGlCQUFUO0FBQ0ksdUJBQVMsRUFBQywwQkFEZDtBQUVJLGtCQUFJLEVBQUMseUZBRlQ7QUFHSSxvQkFBTSxFQUFDLFFBSFg7QUFBQSxxQ0FLSTtBQUFNLHlCQUFTLEVBQUMsYUFBaEI7QUFBQSx1Q0FDSTtBQUFHLDJCQUFTLEVBQUM7QUFBYjtBQURKO0FBTEosY0FqQkosZUEwQkk7QUFBRyxtQkFBSyxFQUFDLFdBQVQ7QUFDSSxrQkFBSSxFQUFDLEdBRFQ7QUFFSSx1QkFBUyxFQUFDLDBCQUZkO0FBR0kscUJBQU8sRUFBRSxpQkFBQ1QsQ0FBRDtBQUFBLHVCQUFPRCxjQUFjLENBQUNDLENBQUQsQ0FBckI7QUFBQSxlQUhiO0FBQUEscUNBS0k7QUFBTSx5QkFBUyxFQUFDLGFBQWhCO0FBQUEsd0NBQ0k7QUFBRywyQkFBUyxFQUFDO0FBQWIsa0JBREosZUFFSTtBQUFPLHNCQUFJLEVBQUMsTUFBWjtBQUFtQiw4QkFBWSxFQUFDLHVDQUFoQztBQUF3RSxvQkFBRSxFQUFDO0FBQTNFLGtCQUZKO0FBQUE7QUFMSixjQTFCSjtBQUFBLFlBRko7QUFBQSxVQURKLGVBMENJO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBLGtDQUNJO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFDSSxnQkFBSSxFQUFDLGtEQURUO0FBRUksa0JBQU0sRUFBQyxRQUZYO0FBR0ksZUFBRyxFQUFDLHFCQUhSO0FBQUEsbUNBS0k7QUFBSyx1QkFBUyxFQUFDLDJCQUFmO0FBQUEsc0NBQ0k7QUFBTSx5QkFBUyxFQUFDLCtCQUFoQjtBQUFBLHVDQUNJO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBREosZ0JBREosZUFJSTtBQUFNLHlCQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBTEosWUFGSjtBQUFBLFVBMUNKO0FBQUEsUUFESixlQTRESTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxrQkFBZjtBQUFBLGtDQUNJO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBRyxnQkFBSSxFQUFDLHlDQUFSO0FBQWtELHFCQUFTLEVBQUMsdUJBQTVEO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLGNBQWY7QUFBOEIsaUJBQUcsRUFBQyxvQkFBbEM7QUFBdUQsaUJBQUcsRUFBQztBQUEzRDtBQURKLFlBRko7QUFBQTtBQURKLFFBNURKO0FBQUEsTUFESixlQXdFSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsNkJBQThCO0FBQUcsaUJBQVMsRUFBQyxZQUFiO0FBQUEsZ0ZBQWlFO0FBQUcsY0FBSSxFQUFDLGdDQUFSO0FBQUE7QUFBQSxVQUFqRSwyQkFBd0g7QUFBRyxjQUFJLEVBQUMsdUNBQVI7QUFBQTtBQUFBLFVBQXhILDJCQUF3TDtBQUFHLGNBQUksRUFBQywrQkFBUjtBQUFBO0FBQUEsVUFBeEwsdUNBQW9QO0FBQUcsY0FBSSxFQUFDLG9FQUFSO0FBQUE7QUFBQSxVQUFwUDtBQUFBO0FBQTlCLE1BeEVKO0FBQUEsSUFESjtBQTRFSCxDOztBQzdGRDtBQUNBO0FBQ0E7O0FBRUFVLGdCQUFBLGVBQ0ksb0JBQUMsTUFBRCxLQURKLEVBRUlQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUZKIiwiZmlsZSI6Ijg1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ET1xyXG4vLyBTb2NpYWwgTWVkaWEgQ29uc2lkZXJhdGlvbnNcclxuLy8gKFdJUClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDb3B5TGluayhlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3B5LWxpbmtcIik7XHJcbiAgICAgICAgbGluay5zZWxlY3QoKTtcclxuICAgICAgICBsaW5rLnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTk5KTtcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcblxyXG4gICAgICAgIGFsZXJ0KFwiQ29waWVkIHRoZSB0ZXh0OiBcIiArIGxpbmsudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4tb25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNoYXJlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFyZS1pY29uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbl9fd3JhcHBlciBzaGFyZS1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD1EbyB5b3UgbmVlZCB0byBjcm9wIGFuZCBkaXZpZGUgeW91ciByZWFsbHkgbG9uZyB3ZWJjb21pYyBwYWdlPyBTdXBlciBDb21pYyBTbGljZXIgd2lsbCBkbyB0aGUgam9iIGZvciB5b3UhIPCfkpYgIEFsc28sIGZlYXR1cmVzIHNjYWxpbmcgZG93biBzaXplLiDwn46JIFNoYXJlIGFuZCBzdXBwb3J0IHRoaXMgaGFuZHkgdG9vbC4gQ3JlYXRlZCBieSBAU3BlY3RyZWRveCZoYXNodGFncz1TdXBlckNvbWljU2xpY2VyLGNyb3BwZXIsY29taWNzLHdlYnRvb24sc2NhbGVyJnVybD1odHRwczovL3N1cGVyY29taWNzbGljZXIubmV0bGlmeS5hcHAvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2hhcmUgb24gVHdpdHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25fX2Jsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi10d2l0dGVyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiU2hhcmUgb24gRmFjZWJvb2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25fX3dyYXBwZXIgc2hhcmUtaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PWh0dHBzOi8vc3VwZXJjb21pY3NsaWNlci5uZXRsaWZ5LmFwcC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25fX2Jsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1mYWNlYm9va1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT1cIlNoYXJlIG9uIFR1bWJsclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbl9fd3JhcHBlciBzaGFyZS1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3R1bWJsci5jb20vd2lkZ2V0cy9zaGFyZS90b29sP2Nhbm9uaWNhbFVybD1odHRwczovL3N1cGVyY29taWNzbGljZXIubmV0bGlmeS5hcHAvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25fX2Jsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi10dW1ibHJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJDb3B5IExpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uX193cmFwcGVyIHNoYXJlLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDb3B5TGluayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uX19ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbGlua1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPVwiaHR0cHM6Ly9zdXBlcmNvbWljc2xpY2VyLm5ldGxpZnkuYXBwL1wiIGlkPVwiY29weS1saW5rXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyaWJ1dGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Db250cmlidXRlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaHlmeWRpc3Ryby9zdXBlci1jb21pYy1zbGljZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyaWJ1dGUtaWNvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250cmlidXRlLWljb24gaWNvbl9fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tZ2l0aHViXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250cmlidXRlLXRleHRcIj5zdXBlci1jb21pYy1zbGljZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4tdHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb25hdGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Eb25hdGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYnV5bWVhY29mZmVlLmNvbS9zcGVjdHJlZG94XCIgY2xhc3NOYW1lPVwiZG9uYXRlLWltYWdlX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRvbmF0ZS1pbWFnZVwiIHNyYz1cImltYWdlcy9ibWMtYnRuLnBuZ1wiIGFsdD1cIkJ1eSBtZSBhIGNvZmZlZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ub3Rlc1wiPjxwIGNsYXNzTmFtZT1cInRleHQtc21hbGxcIj5XZWJzaXRlIGRldmVsb3BlZCBieSBDYXJvbGluZSBSb3phbGkg4oCiIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1NwZWN0cmVkb3hcIj5Ud2l0dGVyPC9hPiDigKIgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc3BlY3RyZWRveC9cIj5JbnN0YWdyYW08L2E+IOKAoiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2h5ZnlkaXN0cm9cIj5HaXRodWI8L2E+IOKAoiAyMDIxIOKAoiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2h5ZnlkaXN0cm8vc3VwZXItY29taWMtc2xpY2VyL2Jsb2IvbWFpbi9MSUNFTlNFXCI+TGljZW5zZTwvYT4g4oCiIFZlcnNpb24gMS4wLjA8L3A+PC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vc2NyaXB0cy9jb21wb25lbnRzL0Zvb3Rlci5qc1wiO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEZvb3RlciAvPixcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIilcclxuKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///85\n')},251:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";eval('/** @license React v17.0.1\n * react-jsx-runtime.production.min.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n__webpack_require__(418);var f=__webpack_require__(294),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};\nfunction q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1jb21pYy1zbGljZXIvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzP2QzMWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNhLG1CQUFPLENBQUMsR0FBZSxFQUFFLE1BQU0sbUJBQU8sQ0FBQyxHQUFPLFVBQVUsZ0JBQWdCLE9BQU8sMkNBQTJDLGlCQUFpQixxQkFBcUIsZ0JBQWdCLHFCQUFxQixrSEFBa0g7QUFDcFUsa0JBQWtCLFVBQVUsZUFBZSxxQkFBcUIsNkJBQTZCLDBCQUEwQiwwREFBMEQsNEVBQTRFLE9BQU8sd0RBQXdELFdBQVcsR0FBRyxZQUFZIiwiZmlsZSI6IjI1MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4xXG4gKiByZWFjdC1qc3gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIik7dmFyIGY9cmVxdWlyZShcInJlYWN0XCIpLGc9NjAxMDM7ZXhwb3J0cy5GcmFnbWVudD02MDEwNztpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yKXt2YXIgaD1TeW1ib2wuZm9yO2c9aChcInJlYWN0LmVsZW1lbnRcIik7ZXhwb3J0cy5GcmFnbWVudD1oKFwicmVhY3QuZnJhZ21lbnRcIil9dmFyIG09Zi5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRC5SZWFjdEN1cnJlbnRPd25lcixuPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkscD17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gcShjLGEsayl7dmFyIGIsZD17fSxlPW51bGwsbD1udWxsO3ZvaWQgMCE9PWsmJihlPVwiXCIrayk7dm9pZCAwIT09YS5rZXkmJihlPVwiXCIrYS5rZXkpO3ZvaWQgMCE9PWEucmVmJiYobD1hLnJlZik7Zm9yKGIgaW4gYSluLmNhbGwoYSxiKSYmIXAuaGFzT3duUHJvcGVydHkoYikmJihkW2JdPWFbYl0pO2lmKGMmJmMuZGVmYXVsdFByb3BzKWZvcihiIGluIGE9Yy5kZWZhdWx0UHJvcHMsYSl2b2lkIDA9PT1kW2JdJiYoZFtiXT1hW2JdKTtyZXR1cm57JCR0eXBlb2Y6Zyx0eXBlOmMsa2V5OmUscmVmOmwscHJvcHM6ZCxfb3duZXI6bS5jdXJyZW50fX1leHBvcnRzLmpzeD1xO2V4cG9ydHMuanN4cz1xO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///251\n')},893:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";eval("\n\nif (true) {\n  module.exports = __webpack_require__(251);\n} else {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlci1jb21pYy1zbGljZXIvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LXJ1bnRpbWUuanM/OWNhNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixJQUFJLElBQXFDO0FBQ3pDLEVBQUUseUNBQXFFO0FBQ3ZFLENBQUMsTUFBTSxFQUVOIiwiZmlsZSI6Ijg5My5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///893\n")}},0,[[85,382,712]]]);
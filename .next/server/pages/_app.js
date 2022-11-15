/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AuthContext.ts":
/*!********************************!*\
  !*** ./context/AuthContext.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction noop() {}\nfunction noop1(id) {}\nfunction noop2(token, id) {}\nconst AuthContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n    token: null,\n    userId: null,\n    login: noop2,\n    logout: noop,\n    isAuth: false\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtQztBQUNuQyxTQUFTQyxJQUFJLEdBQUcsRUFBRTtBQUNsQixTQUFTQyxLQUFLLENBQUNDLEVBQUUsRUFBRSxFQUFFO0FBQ3JCLFNBQVNDLEtBQUssQ0FBQ0MsS0FBSyxFQUFFRixFQUFFLEVBQUUsRUFBRTtBQUNyQixNQUFNRyxXQUFXLEdBQUdOLG9EQUFhLENBQUM7SUFDckNLLEtBQUssRUFBRSxJQUFJO0lBQ1hFLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLEtBQUssRUFBRUosS0FBSztJQUNaSyxNQUFNLEVBQUVSLElBQUk7SUFDWlMsTUFBTSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lZGxhYmJhY2svLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzP2E0MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCdcbmZ1bmN0aW9uIG5vb3AoKSB7fVxuZnVuY3Rpb24gbm9vcDEoaWQpIHt9XG5mdW5jdGlvbiBub29wMih0b2tlbiwgaWQpIHt9XG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICB0b2tlbjogbnVsbCxcbiAgICB1c2VySWQ6IG51bGwsXG4gICAgbG9naW46IG5vb3AyLFxuICAgIGxvZ291dDogbm9vcCxcbiAgICBpc0F1dGg6IGZhbHNlXG59KSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0Iiwibm9vcCIsIm5vb3AxIiwiaWQiLCJub29wMiIsInRva2VuIiwiQXV0aENvbnRleHQiLCJ1c2VySWQiLCJsb2dpbiIsImxvZ291dCIsImlzQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.ts\n");

/***/ }),

/***/ "./hooks/hooks.auth.ts":
/*!*****************************!*\
  !*** ./hooks/hooks.auth.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst storageName = \"userData\";\nconst useAuth = ()=>{\n    const { 0: token , 1: setToken  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const { 0: userId , 1: setUserId  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const login = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (jwtToken, id)=>{\n        console.log(jwtToken, id);\n        await setToken(jwtToken);\n        await setUserId(id);\n        localStorage.setItem(storageName, JSON.stringify({\n            userId: id,\n            token: jwtToken\n        }));\n    }, []);\n    const logout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{\n        setToken(null);\n        setUserId(null);\n        localStorage.removeItem(storageName);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const data = JSON.parse(localStorage.getItem(storageName));\n        if (data && data.token) {\n            setToken(data.token);\n            setUserId(data.userId);\n        }\n    }, [\n        login\n    ]);\n    return {\n        login,\n        logout,\n        token,\n        userId\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9ob29rcy5hdXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRDtBQUV0RCxNQUFNRyxXQUFXLEdBQUcsVUFBVTtBQUM5QixNQUFNQyxPQUFPLEdBQUcsSUFBSTtJQUNoQixNQUFNLEtBQUNDLEtBQUssTUFBRUMsUUFBUSxNQUFJTiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUN4QyxNQUFNLEtBQUNPLE1BQU0sTUFBRUMsU0FBUyxNQUFJUiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUUxQyxNQUFNUyxLQUFLLEdBQUdSLGtEQUFXLENBQUMsT0FBT1MsUUFBUSxFQUFFQyxFQUFFLEdBQUc7UUFDNUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLEVBQUVDLEVBQUUsQ0FBQztRQUN6QixNQUFNTCxRQUFRLENBQUNJLFFBQVEsQ0FBQztRQUN4QixNQUFNRixTQUFTLENBQUNHLEVBQUUsQ0FBQztRQUNuQkcsWUFBWSxDQUFDQyxPQUFPLENBQUNaLFdBQVcsRUFBRWEsSUFBSSxDQUFDQyxTQUFTLENBQUM7WUFBQ1YsTUFBTSxFQUFFSSxFQUFFO1lBQUVOLEtBQUssRUFBRUssUUFBUTtTQUFDLENBQUMsQ0FBQztLQUNuRixFQUFFLEVBQUUsQ0FBQztJQUVOLE1BQU1RLE1BQU0sR0FBR2pCLGtEQUFXLENBQUMsSUFBSTtRQUMzQkssUUFBUSxDQUFDLElBQUksQ0FBQztRQUNkRSxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ2ZNLFlBQVksQ0FBQ0ssVUFBVSxDQUFDaEIsV0FBVyxDQUFDO0tBQ3ZDLEVBQUUsRUFBRSxDQUFDO0lBRU5ELGdEQUFTLENBQUMsSUFBSTtRQUNWLE1BQU1rQixJQUFJLEdBQUdKLElBQUksQ0FBQ0ssS0FBSyxDQUFDUCxZQUFZLENBQUNRLE9BQU8sQ0FBQ25CLFdBQVcsQ0FBQyxDQUFDO1FBQzFELElBQUdpQixJQUFJLElBQUlBLElBQUksQ0FBQ2YsS0FBSyxFQUFDO1lBQ2xCQyxRQUFRLENBQUNjLElBQUksQ0FBQ2YsS0FBSyxDQUFDO1lBQ3BCRyxTQUFTLENBQUNZLElBQUksQ0FBQ2IsTUFBTSxDQUFDO1NBQ3pCO0tBQ0osRUFBRTtRQUFDRSxLQUFLO0tBQUMsQ0FBQztJQUNYLE9BQU87UUFBQ0EsS0FBSztRQUFFUyxNQUFNO1FBQUViLEtBQUs7UUFBRUUsTUFBTTtLQUFDO0NBQ3hDO0FBQ0QsaUVBQWVILE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRsYWJiYWNrLy4vaG9va3MvaG9va3MuYXV0aC50cz8xMDFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBzdG9yYWdlTmFtZSA9ICd1c2VyRGF0YSdcbmNvbnN0IHVzZUF1dGggPSAoKT0+e1xuICAgIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IGxvZ2luID0gdXNlQ2FsbGJhY2soYXN5bmMgKGp3dFRva2VuLCBpZCk9PntcbiAgICAgICAgY29uc29sZS5sb2coand0VG9rZW4sIGlkKVxuICAgICAgICBhd2FpdCBzZXRUb2tlbihqd3RUb2tlbilcbiAgICAgICAgYXdhaXQgc2V0VXNlcklkKGlkKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlTmFtZSwgSlNPTi5zdHJpbmdpZnkoe3VzZXJJZDogaWQsIHRva2VuOiBqd3RUb2tlbn0pKVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgbG9nb3V0ID0gdXNlQ2FsbGJhY2soKCk9PntcbiAgICAgICAgc2V0VG9rZW4obnVsbClcbiAgICAgICAgc2V0VXNlcklkKG51bGwpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0b3JhZ2VOYW1lKVxuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VOYW1lKSlcbiAgICAgICAgaWYoZGF0YSAmJiBkYXRhLnRva2VuKXtcbiAgICAgICAgICAgIHNldFRva2VuKGRhdGEudG9rZW4pXG4gICAgICAgICAgICBzZXRVc2VySWQoZGF0YS51c2VySWQpXG4gICAgICAgIH1cbiAgICB9LCBbbG9naW5dKVxuICAgIHJldHVybiB7bG9naW4sIGxvZ291dCwgdG9rZW4sIHVzZXJJZH1cbn1cbmV4cG9ydCBkZWZhdWx0IHVzZUF1dGhcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0Iiwic3RvcmFnZU5hbWUiLCJ1c2VBdXRoIiwidG9rZW4iLCJzZXRUb2tlbiIsInVzZXJJZCIsInNldFVzZXJJZCIsImxvZ2luIiwiand0VG9rZW4iLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJkYXRhIiwicGFyc2UiLCJnZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/hooks.auth.ts\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/hooks.auth */ \"./hooks/hooks.auth.ts\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.ts\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nextjs-progressbar */ \"nextjs-progressbar\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4__);\n// pages/_app.js\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { token , userId , login , logout  } = (0,_hooks_hooks_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const isAuth = !!token;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthContext.Provider, {\n        value: {\n            token,\n            login,\n            logout,\n            userId,\n            isAuth\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4___default()), {\n                color: \"#000000\",\n                startPosition: 0.3,\n                stopDelayMs: 200,\n                height: 3\n            }, void 0, false, {\n                fileName: \"/Users/nazarcooltaev/Documents/OneDev/Projects/medlabback/pages/_app.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/nazarcooltaev/Documents/OneDev/Projects/medlabback/pages/_app.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nazarcooltaev/Documents/OneDev/Projects/medlabback/pages/_app.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQjtBQUNoQjtBQUErQjtBQUNXO0FBQ1E7QUFDSDtBQUVoQyxTQUFTRyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUNwRCxNQUFNLEVBQUNDLEtBQUssR0FBRUMsTUFBTSxHQUFFQyxLQUFLLEdBQUVDLE1BQU0sR0FBQyxHQUFHVCw2REFBTyxFQUFFO0lBQ2hELE1BQU1VLE1BQU0sR0FBRyxDQUFDLENBQUNKLEtBQUs7SUFDdEIscUJBQ0ksOERBQUNMLHNFQUFvQjtRQUFDVyxLQUFLLEVBQUU7WUFDekJOLEtBQUs7WUFDTEUsS0FBSztZQUNMQyxNQUFNO1lBQ05GLE1BQU07WUFDTkcsTUFBTTtTQUNUOzswQkFDRyw4REFBQ1IsMkRBQWE7Z0JBQ1ZXLEtBQUssRUFBQyxTQUFTO2dCQUNmQyxhQUFhLEVBQUUsR0FBRztnQkFDbEJDLFdBQVcsRUFBRSxHQUFHO2dCQUNoQkMsTUFBTSxFQUFFLENBQUM7Ozs7O29CQUNYOzBCQUNGLDhEQUFDWixTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7Ozs7WUFDVCxDQUMxQjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkbGFiYmFjay8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9fYXBwLmpzXG5pbXBvcnQgJy4uL3NyYy9zY3NzL3N0eWxlLnNjc3MnXG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiLi4vaG9va3MvaG9va3MuYXV0aFwiO1xuaW1wb3J0IHtBdXRoQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCdcbmltcG9ydCBOZXh0TlByb2dyZXNzIGZyb20gXCJuZXh0anMtcHJvZ3Jlc3NiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgY29uc3Qge3Rva2VuLCB1c2VySWQsIGxvZ2luLCBsb2dvdXR9ID0gdXNlQXV0aCgpXG4gICAgY29uc3QgaXNBdXRoID0gISF0b2tlblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgICBsb2dpbixcbiAgICAgICAgICAgIGxvZ291dCxcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIGlzQXV0aFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxOZXh0TlByb2dyZXNzXG4gICAgICAgICAgICAgICAgY29sb3I9XCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICBzdGFydFBvc2l0aW9uPXswLjN9XG4gICAgICAgICAgICAgICAgc3RvcERlbGF5TXM9ezIwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VBdXRoIiwiQXV0aENvbnRleHQiLCJOZXh0TlByb2dyZXNzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0b2tlbiIsInVzZXJJZCIsImxvZ2luIiwibG9nb3V0IiwiaXNBdXRoIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNvbG9yIiwic3RhcnRQb3NpdGlvbiIsInN0b3BEZWxheU1zIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "nextjs-progressbar":
/*!*************************************!*\
  !*** external "nextjs-progressbar" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function noop() {}
function noop1(id) {}
function noop2(token, id) {}
const AuthContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    token: null,
    userId: null,
    login: noop2,
    logout: noop,
    isAuth: false
});


/***/ }),

/***/ 9530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./hooks/hooks.auth.ts

const storageName = "userData";
const useAuth = ()=>{
    const { 0: token , 1: setToken  } = (0,external_react_.useState)(null);
    const { 0: userId , 1: setUserId  } = (0,external_react_.useState)(null);
    const login = (0,external_react_.useCallback)(async (jwtToken, id)=>{
        console.log(jwtToken, id);
        await setToken(jwtToken);
        await setUserId(id);
        localStorage.setItem(storageName, JSON.stringify({
            userId: id,
            token: jwtToken
        }));
    }, []);
    const logout = (0,external_react_.useCallback)(()=>{
        setToken(null);
        setUserId(null);
        localStorage.removeItem(storageName);
    }, []);
    (0,external_react_.useEffect)(()=>{
        const data = JSON.parse(localStorage.getItem(storageName));
        if (data && data.token) {
            setToken(data.token);
            setUserId(data.userId);
        }
    }, [
        login
    ]);
    return {
        login,
        logout,
        token,
        userId
    };
};
/* harmony default export */ const hooks_auth = (useAuth);

// EXTERNAL MODULE: ./context/AuthContext.ts
var AuthContext = __webpack_require__(9948);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js
// pages/_app.js





function MyApp({ Component , pageProps  }) {
    const { token , userId , login , logout  } = hooks_auth();
    const isAuth = !!token;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AuthContext/* AuthContext.Provider */.V.Provider, {
        value: {
            token,
            login,
            logout,
            userId,
            isAuth
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_nextjs_progressbar_default()), {
                color: "#000000",
                startPosition: 0.3,
                stopDelayMs: 200,
                height: 3
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
};


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9530));
module.exports = __webpack_exports__;

})();
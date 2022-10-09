"use strict";
exports.id = 649;
exports.ids = [649];
exports.modules = {

/***/ 9649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useHttp = ()=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: success , 1: setSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: isOk , 1: setIsOk  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const request = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (url, method = "GET", body = null, headers = {}, isFormData = false)=>{
        setLoading(true);
        try {
            if (body && !isFormData) {
                body = JSON.stringify(body);
            }
            const response = await fetch(url, {
                method,
                body,
                headers
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || data || "Что-то пошло не так");
            } else {
                setIsOk(true);
            }
            if (data.success) {
                setSuccess(data.success);
            }
            setLoading(false);
            return data;
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);
    const clearError = ()=>setError(null);
    const clearSuccess = ()=>setSuccess(null);
    return {
        loading,
        request,
        error,
        clearError,
        success,
        clearSuccess,
        isOk
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHttp);


/***/ })

};
;
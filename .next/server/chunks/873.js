"use strict";
exports.id = 873;
exports.ids = [873];
exports.modules = {

/***/ 873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const InputMask = (props)=>{
    const inputCard = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const getInputNumbersValue = function(input) {
        // Return stripped input value — just numbers
        return input?.value.replace(/\D/g, "");
    };
    const handleChange = (e)=>{
        if (e.target) {
            let input = e.target, inputNumbersValue = getInputNumbersValue(input), selectionStart = input.selectionStart, formattedInputValue = "";
            if (!inputNumbersValue) {
                return input.value = "";
            }
            if (input.value.length != selectionStart) {
                // Editing in the middle of input, not last symbol
                if (e.data && /\D/g.test(e.data)) {
                    // Attempt to input non-numeric symbol
                    input.value = inputNumbersValue;
                }
                return;
            }
            if ([
                "7",
                "8",
                "9"
            ].indexOf(inputNumbersValue[0]) > -1) {
                if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
                let firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
                formattedInputValue = input.value = firstSymbols + " ";
                if (inputNumbersValue.length > 1) {
                    formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
                }
                if (inputNumbersValue.length >= 5) {
                    formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
                }
                if (inputNumbersValue.length >= 8) {
                    formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
                }
                if (inputNumbersValue.length >= 10) {
                    formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
                }
            } else {
                formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
            }
            input.value = formattedInputValue;
            props.changeHandler("phone_number", formattedInputValue);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            ...props,
            ref: inputCard,
            onChange: handleChange
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputMask);


/***/ })

};
;
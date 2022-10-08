"use strict";
exports.id = 205;
exports.ids = [205];
exports.modules = {

/***/ 6913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/01.c7d2f7ce.png","height":1160,"width":1072,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA20lEQVR42mMQ7//HxAAFuz5+h7ERQKT1nxFH278lMl3/H+u0fmoFCzb/Z2awnPHPymLKv/+O0//9l+v5/58h+/47BgYGFrACx7n/9TTm/P1hu/TfX4b2/z8rpt/5f+bU4TIGGFh26NORdSe//L906+2v1y/u/z987OwDBqv1vGDJ9+/fzfr+9dP/9x8//161982f2hmX/j949HA2w8f3r6uv3n37aPb+b/9dFv3/y1D5/49s/rX/yXVbpzG8e/ch5/PH1+trln75Ljzz/3/zyf//sBQ9+V/dt+swAL96eWLB1DNIAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 1400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/02.3b38ca07.png","height":940,"width":1132,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA1ElEQVR42mNABlevXmOGscVn/Yewnzx5InXv3r3Ky5cv64P4t27eYmFg+M4IYofN/efG8OHDhyNv3rz5f+vWrV/Hjx83gpmQtPRfbuiKf/8Z3r17d/HLly//X79+DVR0+/OvZ6vFzGf+j0tc9/9/yOr/vxkeP36s+fbt2w9fv379/+TJ0/9XL59rX7Lj7gafxb//C3T9+s8AAkDd5i9fvnx15cqVr2fOnnt3/cqZHwu3P/3FUHh7N8iRYNf29/dzPX36NPzmzZv3gPj/m5f33BkYGBgADjd/tK5sWLkAAAAASUVORK5CYII="});

/***/ }),

/***/ 1294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Index_Banners)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/Index/Banners/Banner.tsx


class Banner extends external_react_.PureComponent {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "baners__baner baner",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "baner__text",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "baner__title",
                            children: this.props.banner.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "baner__subtitle",
                            children: this.props.banner.text
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: this.props.banner.href,
                            className: "baner__button",
                            children: "Записаться на прием"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "baner__image",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: this.props.banner.src,
                        alt: ""
                    })
                })
            ]
        }, this.props.banner.key);
    }
}
/* harmony default export */ const Banners_Banner = (Banner);

;// CONCATENATED MODULE: ./components/Index/Banners.tsx



class Banners extends (external_react_default()).Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "page__baners baners",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "baners__container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "baners__box baners",
                    children: this.props.banners.map((banner)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(Banners_Banner, {
                            ...banner
                        });
                    })
                })
            })
        });
    }
}
/* harmony default export */ const Index_Banners = (Banners);


/***/ })

};
;
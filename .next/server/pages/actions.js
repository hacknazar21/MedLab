"use strict";
(() => {
var exports = {};
exports.id = 807;
exports.ids = [807];
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

/***/ 9270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ActionsPage)
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

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./layouts/mainLayout.tsx + 9 modules
var mainLayout = __webpack_require__(49);
// EXTERNAL MODULE: ./layouts/sugarLayout.tsx
var sugarLayout = __webpack_require__(5794);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/img/baners/01.png
var _01 = __webpack_require__(6913);
// EXTERNAL MODULE: ./src/img/baners/02.png
var _02 = __webpack_require__(1400);
;// CONCATENATED MODULE: ./pages/actions.tsx


// @ts-ignore



// @ts-ignore



const banners = {
    banners: [
        {
            banner: {
                title: "Проверка симптомов Covid - 18",
                text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." + " Velit officia consequat duis enim velit mollit.",
                src: _01/* default.src */.Z.src,
                href: "",
                key: 0
            }
        },
        {
            banner: {
                title: "Назначения правильного лечения",
                text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." + " Velit officia consequat duis enim velit mollit.",
                src: _02/* default.src */.Z.src,
                href: "",
                key: 1
            }
        },
        {
            banner: {
                title: "Назначения правильного лечения",
                text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." + " Velit officia consequat duis enim velit mollit.",
                src: _02/* default.src */.Z.src,
                href: "",
                key: 2
            }
        }, 
    ]
};
function ActionsPage({}) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Акции"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "wrapper actions-page",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mainLayout/* MainLayout */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(sugarLayout/* Sugar */.M, {
                            sugar: [
                                {
                                    title: "Главная",
                                    href: "/"
                                },
                                {
                                    title: "Акции",
                                    href: ""
                                }, 
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("section", {
                            className: "page__main main",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main__container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "main__back",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        width: "100%",
                                                        height: "100%",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M12.2929 15.7071C12.6834 16.0976 13.3166 16.0976 13.7071 15.7071C14.0976 15.3166 14.0976 14.6834 13.7071 14.2929L12.2929 15.7071ZM10 12L9.29289 11.2929C8.90237 11.6834 8.90237 12.3166 9.29289 12.7071L10 12ZM13.7071 9.70711C14.0976 9.31658 14.0976 8.68342 13.7071 8.29289C13.3166 7.90237 12.6834 7.90237 12.2929 8.29289L13.7071 9.70711ZM13.7071 14.2929L10.7071 11.2929L9.29289 12.7071L12.2929 15.7071L13.7071 14.2929ZM10.7071 12.7071L13.7071 9.70711L12.2929 8.29289L9.29289 11.2929L10.7071 12.7071Z",
                                                            fill: "white",
                                                            "fill-opacity": "0.8"
                                                        })
                                                    })
                                                }),
                                                "Назад"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main__button",
                                        children: "Акции"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Index_Banners, {
                            ...banners
                        })
                    ]
                })
            })
        ]
    });
};
ActionsPage.getInitialProps = async ({ req  })=>{
    return {
        props: {}
    };
};


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,49,794], () => (__webpack_exec__(9270)));
module.exports = __webpack_exports__;

})();
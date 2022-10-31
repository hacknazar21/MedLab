"use strict";
(() => {
var exports = {};
exports.id = 746;
exports.ids = [746];
exports.modules = {

/***/ 3834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FAQPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Spoiler.tsx


function Spoiler(props) {
    const { 0: className , 1: setClassName  } = (0,external_react_.useState)([
        "spoiler"
    ]);
    const { 0: maxHeight , 1: setMaxHeight  } = (0,external_react_.useState)(null);
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(true);
    const spoilerBody = (0,external_react_.useRef)();
    const spoilerTitle = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        setMaxHeight(spoilerBody.current.clientHeight);
        if (props.className) {
            setClassName((prev)=>[
                    ...prev,
                    props.className
                ]);
        }
        setIsOpen(false);
        console.log(maxHeight);
    }, []);
    (0,external_react_.useEffect)(()=>{
        isOpen ? spoilerTitle.current.classList.add("spoiler-open") : spoilerTitle.current.classList.remove("spoiler-open");
    }, [
        isOpen
    ]);
    const handleSpolierClick = ()=>{
        setIsOpen((prev)=>!prev);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: className.join(" "),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                ref: spoilerTitle,
                onClick: handleSpolierClick,
                className: "spoiler__title",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: props.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "spoiler__open",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: spoilerBody,
                style: isOpen ? {
                    "max-height": `${maxHeight}px`
                } : {
                    "max-height": "0px"
                },
                className: "spoiler__content",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: props.content
                })
            })
        ]
    });
}
/* harmony default export */ const components_Spoiler = (Spoiler);

;// CONCATENATED MODULE: ./src/img/faq/faq.png
/* harmony default export */ const faq = ({"src":"/_next/static/media/faq.e46fa8f9.png","height":2160,"width":3736,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAgklEQVR42hXJuw6CMBQA0P7/P7gZDT/gZEDshhtRG4niJUCD0ZjApQ/7VIczHeK9M1oHpUZEoPlHCuuctZb8KCl9CN356K6Xsa6m99N5/w9eV4jIylIaM3Tt6zHEGMksxDpJDkWRZ7u+5xPOJ8ZuAERpneb0DpDtaQvAm2axXG226RcN1msJVX7wmQAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/FAQ/FAQ.tsx




function FAQ(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "page__faq faq",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "faq__container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "faq__spoilers",
                    children: props.faq?.map((faq)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(components_Spoiler, {
                            className: "faq__spoiler",
                            title: faq.title,
                            content: faq.answer
                        });
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "faq__image",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: faq.src,
                        alt: ""
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/faq.tsx






function FAQPage({ faq  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Вопросы и ответы"
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
                className: "wrapper contacts-page",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(mainLayout/* MainLayout */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(sugarLayout/* Sugar */.M, {
                            sugar: [
                                {
                                    title: "Главная",
                                    href: "/"
                                },
                                {
                                    title: "Вопросы и ответы",
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
                                        children: "Вопросы и ответы"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(FAQ, {
                            faq: faq
                        })
                    ]
                })
            })
        ]
    });
};
FAQPage.getInitialProps = async ({ req  })=>{
    try {
        const response = await fetch("http://195.49.215.130/api/front/qaa/allQaA");
        const faq = (await response.json())?.results ?? [];
        console.log(faq);
        return {
            faq
        };
    } catch (e) {
        console.log(e.message);
    }
    return {
        faq: []
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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,49,794], () => (__webpack_exec__(3834)));
module.exports = __webpack_exports__;

})();
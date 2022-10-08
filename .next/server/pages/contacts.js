"use strict";
(() => {
var exports = {};
exports.id = 192;
exports.ids = [192];
exports.modules = {

/***/ 4874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ContactsPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
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
;// CONCATENATED MODULE: ./src/img/contacts/map.png
/* harmony default export */ const map = ({"src":"/_next/static/media/map.e2f45279.png","height":80,"width":64,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAhElEQVR42jWOMQqDQBBF10M5EKewnK0TAjlEjpFCLBOwipUIHkAUFPdsvl114DH/z/8L6+LkhbW5WpDCb/A/j74RtZrgKYCvoXE0JnjxahCgEPXsMB2ND7wTmnQXg4Aooafd40sIMbjD6I7B+5HC4zT2FfUVu2L/rq9mKVRbaK7pdrNsB7vCMc7HNSABAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/img/contacts/tel.png
/* harmony default export */ const tel = ({"src":"/_next/static/media/tel.182074d3.png","height":80,"width":81,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAApElEQVR42l2OqwpCQRCGh8V3ELQoCnZhJ+w+wGy12n0C0wGbmKw2u8FkFkFMgkXBIPg0fnhunPPDz+zOfHMRDbbAH/zWkA6CfDAnhfikk8Y0FwR0AZoKIroSWOEMj+j8arSuIKLDHUgbQN+IQ+ILsCdtsWKLNwAT/GTSztNEbl3fEtOVKUvcB9hTHP+P5uGqSSTYewQoDrUs725CMwpnH+2uwR4/s000GqOXA7IAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/Contacts/Contacts.tsx




function Contacts(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "page__contacts contacts",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "contacts__container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "contacts__items",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "contacts__item contact-item",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "contact-item__header",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "contact-item__icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: map.src,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "contact-item__name",
                                            children: "Адрес"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "contact-item__content",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "contact-item__content-item",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "2972 Westheimer Rd. Santa Ana, Illinois 85486 "
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "contacts__item contact-item",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "contact-item__header",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "contact-item__icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: tel.src,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "contact-item__name",
                                            children: "Телефон"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "contact-item__content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "tel:(603) 555-0123",
                                            className: "contact-item__content-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "(603) 555-0123"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "tel:(603) 555-0123",
                                            className: "contact-item__content-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "(603) 555-0123"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "tel:(603) 555-0123",
                                            className: "contact-item__content-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "(603) 555-0123"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "tel:(603) 555-0123",
                                            className: "contact-item__content-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "(603) 555-0123"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "contacts__map",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23252.110274148865!2d76.9294336!3d43.2406528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369348c5349f1%3A0x7c5f1185bfc26c88!2z0JzQtdC00LjRhtC40L3RgdC60LjQuSDRhtC10L3RgtGAINCQ0LvRjNGC0LA!5e0!3m2!1sru!2skz!4v1663306738590!5m2!1sru!2skz",
                        width: "100%",
                        height: "100%",
                        allowFullScreen: true,
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./pages/contacts.tsx
// @ts-ignore

// @ts-ignore



// @ts-ignore


function ContactsPage({ news  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Контакты"
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
                                    title: "Контакты",
                                    href: ""
                                }
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
                                        children: "Наши контакты"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Contacts, {})
                    ]
                })
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const response = await fetch("http://195.49.215.130:8081/api/front/news/allNews");
    const news = await response.json() ?? [];
    return {
        props: {
            news
        }
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
var __webpack_exports__ = __webpack_require__.X(0, [952,664,49,794], () => (__webpack_exec__(4874)));
module.exports = __webpack_exports__;

})();
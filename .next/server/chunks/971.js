"use strict";
exports.id = 971;
exports.ids = [971];
exports.modules = {

/***/ 5197:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__]);
swiper__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @ts-ignore

class News extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    componentDidMount() {
        return new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](".news-swiper", {
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [
                swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
                swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay
            ],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 20,
            autoHeight: false,
            speed: 800,
            // Эффекты
            effect: "fade",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            // Кнопки "влево/вправо"
            navigation: {
                prevEl: ".news-swiper .swiper-button-prev",
                nextEl: ".news-swiper .swiper-button-next"
            },
            // Брейкпоинты
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                770: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            },
            // События
            on: {}
        });
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "page__news news",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "news__container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "news__box",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "news__header",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "news__title section-title",
                                children: "Наши новости"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "news__slider news-swiper",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "news__wrapper swiper-wrapper",
                                    children: this.props.news.map((news)=>{
                                        const date = `${news.date.split("T")[0].split("-").reverse().join(".")}`;
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "news__slide swiper-slide",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "news__card card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "card__img-ibg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: news.image,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "card__text",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "card__desc",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "card__desc-item",
                                                                    children: date
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "card__title",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "/news/" + news.href,
                                                                    className: "card__title-link",
                                                                    children: news.title
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "card__info",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "card__info-item",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "/news/" + news.href,
                                                                className: "card__info-link baner__button",
                                                                children: "Узнать подробнее"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        }, news.id);
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "news__slider-buttons swiper-buttons",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "swiper-button-prev",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "8",
                                                height: "14",
                                                viewBox: "0 0 8 14",
                                                fill: "none",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M0.499997 7.79999L6.2 13.4C6.6 13.8 7.2 13.8 7.6 13.4C8 13 8 12.4 7.6 12L2.7 6.99999L7.6 1.99999C8 1.59999 8 0.999987 7.6 0.599988C7.4 0.399988 7.2 0.299988 6.9 0.299988C6.6 0.299988 6.4 0.399988 6.2 0.599988L0.499997 6.19999C0.099997 6.69999 0.099997 7.29999 0.499997 7.79999C0.499997 7.69999 0.499997 7.69999 0.499997 7.79999Z",
                                                    fill: "none"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "swiper-button-next",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "8",
                                                height: "14",
                                                viewBox: "0 0 8 14",
                                                fill: "none",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M0.499997 7.79999L6.2 13.4C6.6 13.8 7.2 13.8 7.6 13.4C8 13 8 12.4 7.6 12L2.7 6.99999L7.6 1.99999C8 1.59999 8 0.999987 7.6 0.599988C7.4 0.399988 7.2 0.299988 6.9 0.299988C6.6 0.299988 6.4 0.399988 6.2 0.599988L0.499997 6.19999C0.099997 6.69999 0.099997 7.29999 0.499997 7.79999C0.499997 7.69999 0.499997 7.69999 0.499997 7.79999Z",
                                                    fill: "none"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
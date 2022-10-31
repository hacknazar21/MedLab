"use strict";
exports.id = 75;
exports.ids = [75];
exports.modules = {

/***/ 75:
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
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6419);
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_rating__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__]);
swiper__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// @ts-ignore


class Reviews extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    componentDidMount() {
        return new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](".reviews-swiper", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [
                swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
                swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay
            ],
            observer: true,
            observeParents: true,
            slidesPerView: 2.7,
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
                prevEl: ".reviews-swiper .swiper-button-prev",
                nextEl: ".reviews-swiper .swiper-button-next"
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
                    slidesPerView: 2.4,
                    spaceBetween: 20
                },
                1920: {
                    slidesPerView: 2.7,
                    spaceBetween: 20
                }
            },
            // События
            on: {}
        });
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "page__reviews reviews",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "reviews__container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "reviews__box",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "reviews__header",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "reviews__title section-title",
                                children: "Наши отзывы"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "reviews__slider reviews-swiper",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "reviews__wrapper swiper-wrapper",
                                    children: this.props.reviews.map((review)=>{
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "reviews__slide swiper-slide",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "reviews__card reviews-card",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "reviews-card__header",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "reviews-card__info-box",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "reviews-card__info-name",
                                                                    children: review.name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "reviews-card__info-date",
                                                                    children: review.date
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "reviews-card__rating",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "reviews-card__rating-value",
                                                                children: [
                                                                    review.ratings,
                                                                    "/5"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_rating__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                initialRating: review.ratings,
                                                                readonly: true,
                                                                emptySymbol: "rating-item",
                                                                fullSymbol: "rating-item-fill"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "reviews-card__text",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: review.text_review
                                                        })
                                                    })
                                                ]
                                            })
                                        });
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "reviews__slider-buttons swiper-buttons",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reviews);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
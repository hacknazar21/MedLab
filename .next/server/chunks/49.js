"use strict";
exports.id = 49;
exports.ids = [49];
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

/***/ 1680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ HeaderContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function noop() {}
function noop1(id) {}
const HeaderContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    basket: null,
    add: noop1,
    get: noop,
    removeById: noop1,
    storageLength: 0,
    addDynamicRefs: noop1
});


/***/ }),

/***/ 49:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Index/Header/Contacts.tsx


class Contacts extends external_react_.PureComponent {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "header__contacts",
            children: [
                this.props.contacts.map((contact, id)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "tel:" + contact.number.trim(),
                        className: "header__contact _icon-tel",
                        children: contact.number
                    }, id);
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mobile__actions"
                })
            ]
        });
    }
}
/* harmony default export */ const Header_Contacts = (Contacts);

;// CONCATENATED MODULE: ./src/img/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.c1e56533.png","height":180,"width":663,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGM8M7Eqp/doUtrys8re0/yOPd7+1Fj52x+Wn3///mdhZGR4x+iR9KB6x1Puxg0y+7b5u4UXM074zxIu9/3365+s/4EKPgIAdNghQHc5/O0AAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Index/Header/Logo.tsx



// @ts-ignore

class Logo extends external_react_.PureComponent {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "header__logo",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: logo.src,
                    alt: "logo"
                })
            })
        });
    }
}
/* harmony default export */ const Header_Logo = (Logo);

;// CONCATENATED MODULE: ./components/Index/Header/Menu.tsx


// @ts-ignore

class Menu extends external_react_.PureComponent {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "header__menu menu",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "menu__body",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "menu__list",
                        children: this.props.menuItems.map((menuItem)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "menu__item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: menuItem.href,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "menu__link",
                                        children: menuItem.title
                                    })
                                })
                            }, menuItem.key);
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "menu__mobile"
                })
            ]
        });
    }
}
/* harmony default export */ const Header_Menu = (Menu);

// EXTERNAL MODULE: ./context/HeaderContext.ts
var HeaderContext = __webpack_require__(1680);
;// CONCATENATED MODULE: ./components/Basket.tsx


// @ts-ignore



function Basket(props) {
    const { 0: products , 1: setProducts  } = (0,external_react_.useState)([]);
    const { 0: totalPrice , 1: setTotalPrice  } = (0,external_react_.useState)("0");
    const { get , removeById , storageLength  } = (0,external_react_.useContext)(HeaderContext/* HeaderContext */.p);
    (0,external_react_.useEffect)(()=>{
        const prods = get();
        setProducts(prods);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (products !== null) {
            let newPrice = 0;
            for (const product of products){
                newPrice += product.price * product.count;
            }
            setTotalPrice(newPrice.toLocaleString("en").replaceAll(",", " "));
        }
    }, [
        products
    ]);
    (0,external_react_.useEffect)(()=>{
        const prods = get();
        // @ts-ignore
        setProducts(prods);
    }, [
        storageLength
    ]);
    const closeClickHandler = (event)=>{
        setProducts((prev)=>{
            // @ts-ignore
            return prev.filter((prevProduct, index)=>index != event.target.dataset.productId);
        });
        // @ts-ignore
        removeById(event.target.dataset.productId);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "basket basket-window",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "basket__header",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "basket__logo",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z",
                                    stroke: "#E87C24",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10",
                                    stroke: "#E87C24",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M3 6H21",
                                    stroke: "#E87C24",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "basket__title",
                        children: "Корзина"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "basket__items",
                children: [
                    products && products.map((product, index)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "basket__item basket-item",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "basket-item__text",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "basket-item__id",
                                            children: product.vendor_code
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "basket-item__title",
                                            children: [
                                                product.title,
                                                " -",
                                                " ",
                                                product.price.toLocaleString("en").replace(",", " "),
                                                " тг x",
                                                " ",
                                                product.count
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    "data-product-id": index,
                                    onClick: closeClickHandler,
                                    className: "basket-item__remove",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M13.4099 11.9999L17.7099 7.70994C17.8982 7.52164 18.004 7.26624 18.004 6.99994C18.004 6.73364 17.8982 6.47825 17.7099 6.28994C17.5216 6.10164 17.2662 5.99585 16.9999 5.99585C16.7336 5.99585 16.4782 6.10164 16.2899 6.28994L11.9999 10.5899L7.70994 6.28994C7.52164 6.10164 7.26624 5.99585 6.99994 5.99585C6.73364 5.99585 6.47824 6.10164 6.28994 6.28994C6.10164 6.47825 5.99585 6.73364 5.99585 6.99994C5.99585 7.26624 6.10164 7.52164 6.28994 7.70994L10.5899 11.9999L6.28994 16.2899C6.19621 16.3829 6.12182 16.4935 6.07105 16.6154C6.02028 16.7372 5.99414 16.8679 5.99414 16.9999C5.99414 17.132 6.02028 17.2627 6.07105 17.3845C6.12182 17.5064 6.19621 17.617 6.28994 17.7099C6.3829 17.8037 6.4935 17.8781 6.61536 17.9288C6.73722 17.9796 6.86793 18.0057 6.99994 18.0057C7.13195 18.0057 7.26266 17.9796 7.38452 17.9288C7.50638 17.8781 7.61698 17.8037 7.70994 17.7099L11.9999 13.4099L16.2899 17.7099C16.3829 17.8037 16.4935 17.8781 16.6154 17.9288C16.7372 17.9796 16.8679 18.0057 16.9999 18.0057C17.132 18.0057 17.2627 17.9796 17.3845 17.9288C17.5064 17.8781 17.617 17.8037 17.7099 17.7099C17.8037 17.617 17.8781 17.5064 17.9288 17.3845C17.9796 17.2627 18.0057 17.132 18.0057 16.9999C18.0057 16.8679 17.9796 16.7372 17.9288 16.6154C17.8781 16.4935 17.8037 16.3829 17.7099 16.2899L13.4099 11.9999Z",
                                            fill: "#717C97"
                                        })
                                    })
                                })
                            ]
                        }, index);
                    }),
                    !products.length && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "basket__empty",
                        children: "Товаров в корзине пока нет"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "basket__sum",
                children: [
                    "Итого: ",
                    totalPrice,
                    " тг"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "basket__checkout",
                    children: "Оплатить анализ"
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./context/AuthContext.ts
var AuthContext = __webpack_require__(9948);
;// CONCATENATED MODULE: ./components/Index/Header.tsx









const menuItems = [
    {
        "href": "/analysis/packages/",
        "title": "Пакеты анализов",
        "key": 0
    },
    {
        "href": "/faq",
        "title": "F.A.Q.",
        "key": 1
    },
    {
        "href": "/reviews",
        "title": "Отзывы",
        "key": 2
    },
    {
        "href": "/news",
        "title": "Новости",
        "key": 3
    },
    {
        "href": "/actions",
        "title": "Акции",
        "key": 4
    },
    {
        "href": "/about",
        "title": "О нас",
        "key": 5
    },
    {
        "href": "/contacts",
        "title": "Контакты",
        "key": 6
    }
];
const contacts = [
    {
        "number": "+7 (812) 309 12 21",
        "key": 0
    },
    {
        "number": "+7 (800) 700 03 03",
        "key": 1
    }
];
menuItems.push();
function Header(props) {
    const { 0: basketClick , 1: setBasketClick  } = (0,external_react_.useState)(false);
    const { storageLength , addDynamicRefs  } = (0,external_react_.useContext)(HeaderContext/* HeaderContext */.p);
    const { isAuth  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    const dynamicRefs = (0,external_react_.useRef)([]);
    const basketRef = (0,external_react_.useRef)(null);
    const headerRef = (0,external_react_.useRef)(null);
    const { 0: scroll , 1: setScroll  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        dynamicRefs.current = new Array(0);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (headerRef !== null) window.addEventListener("scroll", scrollHandler);
    }, [
        headerRef
    ]);
    (0,external_react_.useEffect)(()=>{
        addDynamicRefs(dynamicRefs.current);
    }, [
        dynamicRefs.current
    ]);
    (0,external_react_.useEffect)(()=>{
        if (basketRef !== null) {
            props.basket(basketRef);
            dynamicRefs.current = [
                ...dynamicRefs.current,
                basketRef.current
            ];
        }
    }, [
        basketRef
    ]);
    const scrollHandler = async (event)=>{
        if (window.scrollY > 0 && !scroll) {
            await setScroll(true);
            headerRef?.current?.classList.add("scroll");
        } else if (window.scrollY <= 0) {
            await setScroll(false);
            headerRef?.current?.classList.remove("scroll");
        }
    };
    const basketClickHandler = (event)=>{
        setBasketClick((prev)=>{
            return !prev;
        });
    };
    const menuClickHandler = (event)=>{
        headerRef.current.classList.toggle("menu-open");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        ref: headerRef,
        className: "header",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "header__container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "header__first",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header_Logo, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header_Menu, {
                            menuItems: menuItems
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header_Contacts, {
                            contacts: contacts
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu__mobile"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header__second",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header__actions",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                ref: (el)=>dynamicRefs.current.push(el),
                                "data-da": ".menu__mobile, 990",
                                className: "header__action bg-orange br10",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "",
                                    className: "button ",
                                    children: "Каталог анализов"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "header__action search br10",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    action: "",
                                    className: "search__form",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "input search__input",
                                            placeholder: "Поиск по сайту"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            className: "_icon-finder",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "21",
                                                height: "21",
                                                viewBox: "0 0 21 21",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M20.71 19.29L17 15.61C18.4401 13.8144 19.1375 11.5353 18.9488 9.24133C18.7601 6.94733 17.6997 4.81281 15.9855 3.27667C14.2714 1.74053 12.0338 0.919537 9.73295 0.982497C7.43207 1.04546 5.24275 1.98759 3.61517 3.61517C1.98759 5.24275 1.04546 7.43207 0.982497 9.73295C0.919537 12.0338 1.74053 14.2714 3.27667 15.9855C4.81281 17.6997 6.94733 18.7601 9.24133 18.9488C11.5353 19.1375 13.8144 18.4401 15.61 17L19.29 20.68C19.383 20.7738 19.4936 20.8482 19.6154 20.8989C19.7373 20.9497 19.868 20.9758 20 20.9758C20.132 20.9758 20.2627 20.9497 20.3846 20.8989C20.5065 20.8482 20.6171 20.7738 20.71 20.68C20.8903 20.4936 20.991 20.2444 20.991 19.985C20.991 19.7257 20.8903 19.4765 20.71 19.29ZM10 17C8.61556 17 7.26218 16.5895 6.11103 15.8203C4.95989 15.0511 4.06268 13.9579 3.53287 12.6788C3.00306 11.3997 2.86443 9.99226 3.13453 8.63439C3.40463 7.27653 4.07131 6.02925 5.05028 5.05028C6.02925 4.07131 7.27653 3.40463 8.63439 3.13453C9.99226 2.86443 11.3997 3.00306 12.6788 3.53287C13.9579 4.06268 15.0511 4.95989 15.8203 6.11103C16.5895 7.26218 17 8.61556 17 10C17 11.8565 16.2625 13.637 14.9498 14.9498C13.637 16.2625 11.8565 17 10 17Z",
                                                    fill: "black"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: menuClickHandler,
                                className: "header__open-menu icon-menu",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                ref: (el)=>dynamicRefs.current.push(el),
                                "data-da": ".menu__mobile, 990",
                                className: "header__action bg-blue br10",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "",
                                    className: "button _icon-result",
                                    children: "результаты"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                "data-da": ".mobile__actions, 990",
                                ref: basketRef,
                                className: "header__action basket ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: storageLength
                                    }),
                                    basketClick && /*#__PURE__*/ jsx_runtime_.jsx(Basket, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: basketClickHandler,
                                        className: "button bg-darkorange br10 _icon-basket",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z",
                                                    stroke: "#224864",
                                                    "stroke-width": "2",
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10",
                                                    stroke: "#224864",
                                                    "stroke-width": "2",
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M3 6H21",
                                                    stroke: "#224864",
                                                    "stroke-width": "2",
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                ref: (el)=>dynamicRefs.current.push(el),
                                "data-da": ".mobile__actions, 990",
                                className: "header__action br10 flx-1 bg-grey",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: isAuth ? "/profile/personal" : "/login",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "button _icon-cabinet color-black",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                width: "22",
                                                height: "22",
                                                viewBox: "0 0 22 22",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M18 18.875V17.125C18 16.1967 17.6313 15.3065 16.9749 14.6501C16.3185 13.9937 15.4283 13.625 14.5 13.625H7.5C6.57174 13.625 5.6815 13.9937 5.02513 14.6501C4.36875 15.3065 4 16.1967 4 17.125V18.875",
                                                        stroke: "#313131",
                                                        "stroke-width": "2",
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M11 10.125C12.933 10.125 14.5 8.558 14.5 6.625C14.5 4.692 12.933 3.125 11 3.125C9.067 3.125 7.5 4.692 7.5 6.625C7.5 8.558 9.067 10.125 11 10.125Z",
                                                        stroke: "#313131",
                                                        "stroke-width": "2",
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "личный кабинет"
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Index/Footer.tsx



const Footer = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer__container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footer__first",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/",
                            className: "footer__logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: logo.src,
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer__menu-box",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "footer__menu spollers",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer__menu-title",
                                            children: "Company"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer__menu-list",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "About Us"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "Key Members"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "Contact Us"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "Become A Partner"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "Become A Vendor"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "footer__menu spollers",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer__menu-title",
                                            children: "Patients"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer__menu-list",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "Upload Prescription"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "Request A Call Back"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "Nearest Lab"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "SRL Care Packages"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "Feedback"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "footer__menu spollers",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer__menu-title",
                                            children: "SRL Universe"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer__menu-list",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "DDRC SRL"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "SRL Phadke Labs"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "SRL Dubai"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "SRL Nepal"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "footer__menu spollers",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer__menu-title",
                                            children: "Other"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer__menu-list",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "Employee Portal"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "Compliance Portal"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "CC Portal"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "Investors"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "COVID-19"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "Blog"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "Events and Camps"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "footer__menu-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "footer__menu-link",
                                                        href: "",
                                                        children: "Offers"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer__menu-items",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                            className: "footer__menu spollers",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer__menu-title",
                                                    children: "Reach Us"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "footer__menu-list",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "footer__menu-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "footer__menu-link",
                                                            href: "",
                                                            children: "306, Tower A, Unitech Cyber Park, Sector 39, Gurugram 122002"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                            className: "footer__menu spollers",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer__menu-title",
                                                    children: "Corporate"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "footer__menu-list",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "footer__menu-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "footer__menu-link",
                                                            href: "",
                                                            children: "0124-6261196"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                            className: "footer__menu spollers",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer__menu-title",
                                                    children: "Helpline"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "footer__menu-list",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "footer__menu-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "footer__menu-link",
                                                            href: "",
                                                            children: "0124-6261196"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "footer__mobile"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            "data-da": ".footer__mobile, 990",
                            className: "footer__social",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer__social-title",
                                    children: "Follows Us"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer__social-items",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "",
                                            className: "footer__social-item _icon-twitter"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "",
                                            className: "footer__social-item _icon-facebook"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "",
                                            className: "footer__social-item _icon-instagram"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footer__second",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer__end-text",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "\xa9 2022 - SRL Diagnostics. All Rights Reserved | Privacy Policy | Disclaimer | Terms & Conditions."
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Index_Footer = (Footer);

;// CONCATENATED MODULE: ./hooks/hooks.storage.ts

const useStorage = (storageName)=>{
    const { 0: storageLength , 1: setStorageLength  } = (0,external_react_.useState)(0);
    const add = (data = [])=>{
        let toStorage = [];
        if (localStorage.getItem(storageName) !== null) {
            toStorage = JSON.parse(localStorage.getItem(storageName));
        }
        if (!toStorage.find((item)=>item.id === data["id"])) toStorage.push({
            ...data,
            count: 1
        });
        else {
            const findId = toStorage.indexOf(toStorage.find((item)=>item.id === data["id"]));
            toStorage[findId] = {
                ...toStorage[findId],
                count: parseInt(toStorage[findId].count) + 1
            };
        }
        localStorage.removeItem(storageName);
        localStorage.setItem(storageName, JSON.stringify(toStorage));
        let storageLength = 0;
        for (const toStorageElement of toStorage){
            storageLength += toStorageElement.count;
        }
        setStorageLength(storageLength);
    };
    const get = ()=>{
        return JSON.parse(localStorage.getItem(storageName)) ?? [];
    };
    const removeById = (id)=>{
        const data = JSON.parse(localStorage.getItem(storageName)) ?? [];
        localStorage.removeItem(storageName);
        const newData = data.filter((dataObj, index)=>index != id);
        localStorage.setItem(storageName, JSON.stringify(newData));
        setStorageLength(JSON.parse(localStorage.getItem(storageName)).length);
    };
    (0,external_react_.useEffect)(()=>{
        if (localStorage.getItem(storageName) !== null) {
            const data = JSON.parse(localStorage.getItem(storageName));
            let storageLength = 0;
            for (const toStorageElement of data){
                storageLength += toStorageElement.count;
            }
            setStorageLength(storageLength);
        }
    }, [
        add,
        removeById
    ]);
    return {
        add,
        get,
        removeById,
        storageLength
    };
};

;// CONCATENATED MODULE: ./hooks/hooks.dynamicadaptive.ts

const useDynamicAdaptive = ()=>{
    const { 0: dynamicRefs , 1: setDynamicRefs  } = (0,external_react_.useState)([]);
    const { 0: checkPoints , 1: setCheckPoints  } = (0,external_react_.useState)([]);
    const { 0: isCreated , 1: setIsCreated  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("resize", createDynamic);
        if (dynamicRefs.length > 0 && !isCreated) {
            createDynamic();
        }
    }, [
        dynamicRefs
    ]);
    const createDynamic = ()=>{
        dynamicRefs.map((dynamicRef, id)=>{
            const classWhere = dynamicRef.dataset.da.split(",")[0];
            const resolution = dynamicRef.dataset.da.split(",")[1];
            const placeWhere = dynamicRef.dataset.da.split(",")[2] || "beforeend";
            if (window.innerWidth <= parseFloat(resolution)) {
                document.querySelector(`${classWhere}`).insertAdjacentElement(placeWhere, dynamicRef);
                setIsCreated(true);
            } else {
                const children = [].slice.call(checkPoints[id].parent.children);
                children.splice(checkPoints[id].childrenId, 0, dynamicRef);
                checkPoints[id].parent.innerHTML = "";
                children.forEach((child)=>{
                    checkPoints[id].parent.appendChild(child);
                });
                setIsCreated(false);
            }
        });
    };
    const addDynamicRefs = (ref)=>{
        ref = ref.filter((refObj)=>refObj !== null);
        for (const refElement of ref){
            const children = [].slice.call(refElement.parentElement.children);
            setCheckPoints((prev)=>{
                prev.push({
                    parent: refElement.parentElement,
                    childrenId: children.indexOf(refElement)
                });
                return prev;
            });
        }
        setDynamicRefs((prev)=>{
            return [
                ...prev,
                ...ref
            ];
        });
    };
    return {
        addDynamicRefs
    };
};

;// CONCATENATED MODULE: ./layouts/mainLayout.tsx







function MainLayout(props) {
    const { 0: basket , 1: setBasket  } = (0,external_react_.useState)(null);
    const { add , get , removeById , storageLength  } = useStorage("basket");
    const { addDynamicRefs  } = useDynamicAdaptive();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderContext/* HeaderContext.Provider */.p.Provider, {
        value: {
            basket: basket,
            add,
            get,
            removeById,
            storageLength,
            addDynamicRefs
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                basket: setBasket
            }),
            props.children,
            /*#__PURE__*/ jsx_runtime_.jsx(Index_Footer, {})
        ]
    });
}


/***/ })

};
;